import React, { Component } from "react"
import StyledNavLink from "./StyledNavLink"
import logo from "../assets/logo.png"

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
      <header className="fixed h-24 bg-white top-0 w-screen">
        <div className="flex max-h-full justify-items-center w-11/12 max-w-screen-xl mx-auto">
          <div className="logo max-h-full">
            <img
              className="logo max-h-full"
              src={logo}
              alt="Cowabunga 411 logo with ocean waves"
            />
          </div>
          <nav className="flex items-center">
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
                <a
                  className="text-brown hover:text-gray-light font-semibold transition-colors"
                  href={sign_out_route}
                >
                  Sign Out
                </a>
              </>
            )}
            <br />
            {!logged_in && (
              <a
                className="text-brown hover:text-gray-light font-semibold transition-colors"
                href={sign_in_route}
              >
                Sign In
              </a>
            )}
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
