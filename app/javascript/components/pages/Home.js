import React, { Component } from "react";
import homepage from "../assets/homepage.png";
import StyledPageTitle from "../components/StyledPageTitle";


class Home extends Component {
  render() {
    return (
      <>
        <StyledPageTitle>Welcome to Cowabunga 411!</StyledPageTitle>
        <div className= "px-8">
            <img
            className="object-cover w-full max-w-full h-full max-h-full rounded-lg shadow-lg"
            src={homepage}
            alt="Welcome homepage"
            />
        </div>
      </>
    );
  }
}

export default Home;
