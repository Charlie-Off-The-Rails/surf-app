import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

 class Header extends Component {
    render() {
        const {
            logged_in, 
            new_user_route, 
            sign_in_route, 
            sign_out_route, 
            current_user
        } = this.props
        return (
            
            <header>
                <br/>
                <p>This is the header</p>
                <nav>
                    <ul>
                        <NavLink to="/">
                            Home
                        </NavLink>
                        <NavLink to="/aboutus">
                            About Us
                        </NavLink> 
                        {logged_in &&
                        <>
                            <NavLink to="/surfspotindex">
                                Surf Spots
                            </NavLink>
                            <NavLink to="/mycollectionsindex">
                                My Collections
                            </NavLink>
                            <NavLink to="/collectionnew">
                                Create a collection
                            </NavLink>
                            <NavLink to={sign_out_route}>
                                Sign Out
                            </NavLink>
                        </>
                        }
                        <br/>
                        {!logged_in && 
                            <NavLink to={sign_in_route}>
                                 Sign In
                        </NavLink>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
