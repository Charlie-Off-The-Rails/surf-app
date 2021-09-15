import React, { Component } from "react";

class StyledCardDetails extends Component {
  render() {
    return (
      <div className="mt-2 mb-2 text-center text-gray-dark">
        {this.props.children}
      </div>
    );
  }
}

export default StyledCardDetails;
