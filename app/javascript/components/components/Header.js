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
      toggleNavBar,
      menuVisible,
    } = this.props
    return (
      <header className="fixed h-24 bg-white top-0 w-screen flex items-center">
        <div className="flex max-h-full justify-between w-11/12 max-w-screen-xl mx-auto relative items-center">
          <div className="logo max-h-full">
            <img
              className="logo max-h-full h-20 w-20"
              src={logo}
              alt="Cowabunga 411 logo with ocean waves"
            />
          </div>
          <div
            className="nav-toggle md:hidden cursor-pointer text-brown hover:text-gray-light font-semibold transition-colors"
            onClick={toggleNavBar}
          >
            Menu
          </div>
          <nav
            className={`md:flex items-center absolute md:relative top-full left-0 right-0 bg-white p-4 transform md:transform-none ${
              menuVisible ? "  " : "scale-y-0"
            } transition duration-150 ease-in-out origin-top`}
          >
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
                  className="text-brown hover:text-gray-light font-semibold transition-colors md:pl-4"
                  href={sign_out_route}
                >
                  Sign Out
                </a>
              </>
            )}
            <br />
            {!logged_in && (
              <a
                className="text-brown hover:text-gray-light font-semibold transition-colors md:pl-4"
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
