import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class StyledNavLink extends Component {
  render() {
    return (
      <NavLink
        to={this.props.to}
        className="text-brown hover:text-gray-light text-4x1 font-semibold transition-colors block md:pl-4"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </NavLink>
    )
  }
}

export default StyledNavLink;
