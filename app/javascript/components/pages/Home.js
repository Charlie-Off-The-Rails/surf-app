import React, { Component } from "react";
import surfer from "../assets/surfer.jpeg";

class Home extends Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-center pb-10 pt-3">
          <img src={surfer} alt="" />
        </div>
      </>
    );
  }
}

export default Home;
