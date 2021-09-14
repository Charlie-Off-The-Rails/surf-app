import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import StyledNavLink from "./StyledNavLink"

class Header extends Component {
  render() {
    const {
      logged_in,
      new_user_route,
      sign_in_route,
      sign_out_route,
      current_user,
    } = this.props
    return (
      <header>
        <br />
        <p>This is the header</p>
        <nav>
          <ul>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/aboutus">About Us</StyledNavLink>
            {logged_in && (
              <>
                <StyledNavLink to="/surfspotindex">Surf Spots</StyledNavLink>
                <StyledNavLink to="/mycollectionsindex">
                  My Collections
                </StyledNavLink>
                <StyledNavLink to="/collectionnew">
                  Create a collection
                </StyledNavLink>
                <a href={sign_out_route}>Sign Out</a>
              </>
            )}
            <br />
            {!logged_in && <a href={sign_in_route}>Sign In</a>}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
