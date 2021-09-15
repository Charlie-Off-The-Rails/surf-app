import React, { Component } from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header"
import Home from "./pages/Home"
import SurfSpotIndex from "./pages/SurfSpotIndex"
import SurfSpotShow from "./pages/SurfSpotShow"
import CollectionNew from "./pages/CollectionNew"
import CollectionEdit from "./pages/CollectionEdit"
import MyCollectionsIndex from "./pages/MyCollectionsIndex"
import MyCollectionsShow from "./pages/MyCollectionsShow"
import NotFound from "./pages/NotFound"
import AboutUs from "./pages/AboutUs"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: [],
      surfSpots: []
    }

  }

  // was getting an unexpected token error.
  componentDidMount() {
    if (this.props.logged_in) this.readCollections() 
    this.readSpots()
  }

  // should we have a catch block for potential errors?
  readCollections = async () => {
    const response = await fetch("/collections")
    const result = await response.json()
    this.setState({ collections: result })
  }

  // read Spots
  readSpots = async () => {
    const response = await fetch("/spots")
    const result = await response.json()
    this.setState({ surfSpots: result })
  }

  // creating a new collection
  createCollection = async (newCollection) => {
    newCollection.user_id = this.props.current_user.id
    const response = await fetch("/collections", {
      body: JSON.stringify(newCollection),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST"
    })
    await response.json()
    this.readCollections()
  }

  updateCollection =  async (editCollection, id) => {
    console.log("this is the editCollection!")
    const response = await fetch(`/collections/${id}`, {
      body: JSON.stringify(editCollection),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH"
    })
    await response.json()
    this.readCollections()
  }

  deleteCollection = async (id) => {
    const response = await fetch(`/collections/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE"
    })
    this.readCollections()
  }

  render() {
    const {
      logged_in,
      new_user_route,
      sign_in_route,
      sign_out_route,
      current_user
    } = this.props
    return (
      <Router>
        <Header
          logged_in={logged_in}
          new_user_route={new_user_route}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
          current_user={current_user}
        />
        <Switch>
          <Route exact path="/" component={Home} />

          {logged_in && (
            <Route
              path="/surfspotindex"
              render={() => <SurfSpotIndex surfSpots={this.state.surfSpots} collections={this.state.collections}/>}
            />
          )}

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
          <Route path="/collectionedit/:id" render={(props) => {
            const user_id = current_user.id
            const id = props.match.params.id
            const collection = this.state.collections.find(collection => collection.id === +id)
            return <CollectionEdit collection={collection} editCollection={this.updateCollection} user_id={user_id}/>
          }} />
          
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

          <Route
            path="/mycollectionsshow/:id"
            render={(props) => {
              let id = props.match.params.id
              let collection = this.state.collections.find(
                (collection) => collection.id === +id
              )
              return <MyCollectionsShow collection={collection} deleteCollection={this.deleteCollection}/>
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App
