import React, { Component } from "react";

class CardFormat extends Component {
  render() {
    return (
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-10 w-11/12 max-w-screen-xl mx-auto">
        {this.props.children}
      </div>
    )
  }
}

export default CardFormat;
