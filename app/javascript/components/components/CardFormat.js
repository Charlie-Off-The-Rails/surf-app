import React, { Component } from "react";

class CardFormat extends Component {
  render() {
    return (
      <div className="grid grid-rows-3 grid-flow-col gap-x-4 gap-y-10 pb-10">
        {this.props.children}
      </div>
    );
  }
}

export default CardFormat;
