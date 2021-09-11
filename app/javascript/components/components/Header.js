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
                <p>This is the header</p>
                <nav>
                    <ul>
                        {logged_in && <a href="/mycollectionsindex">
                            My Collections
                        </a>}
                        {logged_in && <a href={sign_out_route}>
                            Sign Out
                        </a>}
                        <br/>
                        {!logged_in && <a href={sign_in_route}>
                            Sign In
                        </a>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
