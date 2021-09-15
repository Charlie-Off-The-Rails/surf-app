import React, { Component } from "react";

class StyledPageTitle extends Component {
  render() {
    return (
      <h1 className="text-brown bg-gray-light text-center text-lg font-semibold transition-colors px-8">
        {this.props.children}
      </h1>
    );
  }
}

export default StyledPageTitle;
