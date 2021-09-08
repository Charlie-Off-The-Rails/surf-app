import React from "react"
import Footer from "./components/Footer";
import Header from "./components/Header"

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Hello World!</h1>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App
