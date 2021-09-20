import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import SurfSpotIndex from "./pages/SurfSpotIndex";
import SurfSpotShow from "./pages/SurfSpotShow";
import CollectionNew from "./pages/CollectionNew";
import CollectionEdit from "./pages/CollectionEdit";
import MyCollectionsIndex from "./pages/MyCollectionsIndex";
import MyCollectionsShow from "./pages/MyCollectionsShow";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
      surfSpots: [],
      weatherSurfData: {},
      menuVisible: false,
    }
  }

  // was getting an unexpected token error.
  componentDidMount() {
    if (this.props.logged_in) this.readCollections();
    this.readSpots();
  }

  toggleNavBar = () => {
    const currentVisibility = this.state.menuVisible
    this.setState({ menuVisible: !currentVisibility })
  }

  closeNavBar = () => {
    this.setState({ menuVisible: false })
  }

  // should we have a catch block for potential errors?
  readCollections = async () => {
    const response = await fetch("/collections");
    const result = await response.json();
    this.setState({ collections: result });
  };

  // read Spots
  readSpots = async () => {
    const response = await fetch("/spots");
    const result = await response.json();
    this.setState({ surfSpots: result });
    for (let i = 0; i < result.length; i++) {
      //loop through each surfSpot to get ID, lat, and long
      const surfId = result[i].id
      const {weatherSurfData} = this.state;
      const latitude = result[i].latitude
      const longitude = result[i].longitude
      
      //make fetch request
      const api_key = this.props.super_secret_api_key;
      const response = await fetch(
        `https://api.worldweatheronline.com/premium/v1/marine.ashx?key=${api_key}&q=${latitude},${longitude}&format=json&tp=24&tide=yes`
      );
      const fetchResult = await response.json();
      const weatherData = fetchResult.data.weather[0].hourly[0];
      const swellDir = weatherData.swellDir16Point
      const windDir = weatherData.winddir16Point
      const swellHeight = weatherData.swellHeight_ft
      //store variables in an object
      const fetchData = {
        swellDir: swellDir,
        windDir: windDir,
        swellHeight: swellHeight
      }
      weatherSurfData[surfId] = fetchData
      //add a key on surfData with the ID of our spot and give it the value of the variables that we stored in the object
      //surfData[exampleSpotId] = {swellDir: blah, windDir: bleh}
      this.setState({weatherSurfData: weatherSurfData})
    }
  };

  // creating a new collection
  createCollection = async (newCollection) => {
    newCollection.user_id = this.props.current_user.id;
    console.log("new collection before:", newCollection);
    console.log("new colleciton after:", JSON.stringify(newCollection));
    const response = await fetch("/collections", {
      body: JSON.stringify(newCollection),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
    await response.json()
    this.readCollections()
  }


  createCollectionSpot = async (collectionId, spotId) => {
    console.log("collection id and spot id", collectionId, spotId);
    const response = await fetch("/collection_spots", {
      body: JSON.stringify({
        collection_id: collectionId,
        spot_id: spotId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
    await response.json()
    this.readCollections()
  }

  updateCollection = async (editCollection, id) => {
    console.log("this is the editCollection!")
    const response = await fetch(`/collections/${id}`, {
      body: JSON.stringify(editCollection),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
    await response.json()
    this.readCollections()
  }

  deleteCollection = async (id) => {
    console.log("delete collection invoke!");
    const response = await fetch(`/collections/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    this.readCollections();
  };

  render() {
    const {
      logged_in,
      new_user_route,
      sign_in_route,
      sign_out_route,
      current_user,
      super_secret_api_key,
    } = this.props
    return (
      <Router>
        <Header
          logged_in={logged_in}
          new_user_route={new_user_route}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
          current_user={current_user}
          toggleNavBar={this.toggleNavBar}
          closeNavBar={this.closeNavBar}
          menuVisible={this.state.menuVisible}
        />
        <main className="pt-24 min-h-screen">
          <Switch>
            <Route exact path="/" component={Home} />

            
          
          <Route
              path="/surfspotshow/:id"
              render={(props) => {
                const id = props.match.params.id
                const surfSpot = this.state.surfSpots.find(
                  (spot) => spot.id === +id
                )
                return <SurfSpotShow surfSpot={surfSpot} />
              }}
            />
            <Route
              path="/collectionnew"
              render={() => (
                <CollectionNew
                  user_id={current_user.id}
                  createCollection={this.createCollection}
                />
              )}
            />
            <Route
              path="/collectionedit/:id"
              render={(props) => {
                const user_id = current_user.id
                const id = props.match.params.id
                const collection = this.state.collections.find(
                  (collection) => collection.id === +id
                )
                return (
                  <CollectionEdit
                    collection={collection}
                    editCollection={this.updateCollection}
                    user_id={user_id}
                  />
                )
              }}
            />

            <Route path="/aboutus" component={AboutUs} />

            {/* using filter here to get the collections that bellongs to a specific user */}
            {logged_in && (
              <Route
                path="/mycollectionsindex"
                render={() => {
                  let user_id = current_user.id
                  let collections = this.state.collections.filter(
                    (collection) => collection.user_id === +user_id
                  )
                  return (
                    <MyCollectionsIndex
                      user_id={user_id}
                      collections={collections}
                    />
                  )
                }}
              />
            )}

          {logged_in && (
            <Route
              path="/surfspotindex"
              render={() => (
                <SurfSpotIndex
                  weatherSurfData={this.state.weatherSurfData}
                  surfSpots={this.state.surfSpots}
                  collections={this.state.collections}
                  createCollectionSpot={this.createCollectionSpot}
                  super_secret_api_key={super_secret_api_key}
                />
              )}
            />
          )}

            <Route
              path="/mycollectionsshow/:id"
              render={(props) => {
                let id = props.match.params.id
                let collection = this.state.collections.find(
                  (collection) => collection.id === +id
                )
                return (
                  <MyCollectionsShow
                    collection={collection}
                    deleteCollection={this.deleteCollection}
                  />
                );
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
