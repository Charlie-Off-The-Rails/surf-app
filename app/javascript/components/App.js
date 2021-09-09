import React from "react"
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

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
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
