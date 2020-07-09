import React from 'react';
import {NavLink} from 'react-router-dom'
import { NavStyle } from './NavStyle';

class NavBar extends React.Component{
    constructor (){
        super()
        this.state = {
            scrollPosition: 0,
            fade: false,
            background: '',
        }
    }

    checkScroll = (event) => {
        this.setState({
            scrollPosition: window.pageYOffset
        }, this.scrollAction)
    }

    scrollAction = () => {
        if (this.state.scrollPosition > 50) {
          this.setState({
            fade: true,
            background: '#0D0D0D'
          })
        }
        else{
          this.setState({
            fade: false,
            background: 'transparent'
          })
        }
      }
    render(){
        const styleContain = {

        }
        return(
            <NavStyle  style = {{...styleContain, backgroundColor: this.state.background, }}>
                {window.onscroll = () => this.checkScroll()}
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
}
export default NavBar