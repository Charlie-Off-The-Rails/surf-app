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
                        <a href="/">
                            Home
                        </a>
                        <a href="/aboutus">
                            About Us
                        </a> 
                        {logged_in &&
                        <>
                            <a href="/surfspotindex">
                                Surf Spots
                            </a>
                            <a href="/mycollectionsindex">
                                My Collections
                            </a>
                            <a href="/collectionnew">
                                Create a collection
                            </a>
                            <a href={sign_out_route}>
                                Sign Out
                            </a>
                        </>
                        }
                        <br/>
                        {!logged_in && 
                            <a href={sign_in_route}>
                                 Sign In
                        </a>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
