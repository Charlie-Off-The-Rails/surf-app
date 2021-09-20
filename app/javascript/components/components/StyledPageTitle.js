import React, { Component } from "react";

class StyledPageTitle extends Component {
  render() {
    return (
      <h1 className="text-white bg-blue-dark text-center font-semibold transition-colors py-2 mb-12">
        {this.props.children}
      </h1>
    )
  }
}

export default StyledPageTitle;
