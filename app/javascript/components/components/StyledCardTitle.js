import React, { Component } from "react";

class StyledCardTitle extends Component {
  render() {
    return (
      <div className="mt-1 uppercase text-center tracking-wide text-lg text-blue-dark font-semibold">
        {this.props.children}
      </div>
    );
  }
}

export default StyledCardTitle;
