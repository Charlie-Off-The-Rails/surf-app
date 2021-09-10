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

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        collections: [] 
      }
    
  }

  readCollections = async () =>{ 
    const response = await fetch("/collections")
    const result = await response.json()
    this.setState({collections: result})
  }

  componentDidMount(){
    this.readCollections()
  }
  
  render() {
    console.log(this.state.collections)
    const { logged_in, new_user_route, sign_in_route, sign_out_route, current_user } = this.props
    return (
      <Router>
        <Header logged_in={logged_in} new_user_route={new_user_route} sign_in_route={sign_in_route} sign_out_route={sign_out_route} current_user={current_user}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/surfspotindex" component={SurfSpotIndex} />
          <Route path="/surfspotshow/:id" component={SurfSpotShow} />
          <Route path="/collectionnew" component={CollectionNew} />
          <Route path="/collectionedit" component={CollectionEdit} />
          <Route path="/mycollectionsindex" component={MyCollectionsIndex} />
          <Route path="/mycollectionsshow/:id" component={MyCollectionsShow} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App
