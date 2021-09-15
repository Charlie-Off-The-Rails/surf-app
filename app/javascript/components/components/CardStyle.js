import React, { Component } from "react";

class CardStyle extends Component {
  render() {
    return (
      <div className="bg-white border-2 rounded-xl shadow-2xl w-full h-full">
        {this.props.children}
      </div>
    );
  }
}

export default CardStyle;
