import React, { Component } from "react";
import homepage from "../assets/homepage.png";

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <img
            className="object-cover w-full max-w-full h-full max-h-full"
            src={homepage}
            alt="Welcome homepage"
          />
        </div>
      </>
    );
  }
}

export default Home;
