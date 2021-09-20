import React, { Component } from "react";
import surfer from "../assets/surfer.jpeg"

class Home extends Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-center pb-10 pt-3">
          <h1>Welcome to Cowabunga 411</h1>
          <p>
            We take the guesswork out of surfing so you can do more of what you
            love.
          </p>
          <img src={surfer} alt="" />
        </div>
      </>
    )
  }
}

export default Home;
