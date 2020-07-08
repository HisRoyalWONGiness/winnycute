import React from 'react';
import {NavLink} from 'react-router-dom'
import { NavStyle } from './NavStyle';

function NavBar (){
    return(
        <NavStyle>
            <div className = 'logo'>
                <img src = 'l.jpg' alt = 'Logo here' />
            </div>
            <div className = 'nav_items'>
                <NavLink exact to = '/' className = 'single_item'>Home</NavLink>
                <NavLink exact to = '/whatweoffer' className = 'single_item'>What we Offer</NavLink>
                <NavLink exact to = '/topwears' className = 'single_item'>Top Wears</NavLink>
                <NavLink exact to = '/catalogue' className = 'single_item'>Catalogue</NavLink>
                <NavLink exact to = '/contact' className = 'single_item'>Contact Us</NavLink>
            </div>
        </NavStyle>
    )
}

export default NavBar