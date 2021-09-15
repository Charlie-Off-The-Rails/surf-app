import React, { Component } from "react";

class StyledButton extends Component {
  render() {
    return (
      <button className="bg-brown hover:bg-gray-light text-white font-bold m-2 py-2 px-4 rounded-full">
        {this.props.children}
      </button>
    );
  }
}

export default StyledButton;
