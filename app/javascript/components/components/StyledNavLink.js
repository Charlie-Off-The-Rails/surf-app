import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class StyledNavLink extends Component {
  render() {
    return (
      <NavLink
        to={this.props.to}
        className="text-yellow-900 hover:text-gray-200 font-semibold transition-colors"
      >
        {this.props.children}
      </NavLink>
    )
  }
}

export default StyledNavLink
