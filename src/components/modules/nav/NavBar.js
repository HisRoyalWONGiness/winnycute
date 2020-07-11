import React from 'react';
import {NavLink} from 'react-router-dom'
import { NavStyle } from './NavStyle';
import Button from './Button'

class NavBar extends React.Component{
    constructor (){
        super()
        this.state = {
            scrollPosition: 0,
            display: false,
            background: '',
            toggle: 'translateX(100%)',
            opacity: '0',
            displayBackdrop: 'none'
        }
    }

    /* This section controls the NavBar fade on Scroll*/
    checkScroll = (event) => {
        this.setState({
            scrollPosition: window.pageYOffset
        }, this.scrollAction)
    }

    scrollAction = () => {
        if (this.state.scrollPosition > 50) {
          this.setState({
            background: '#0D0D0D'
          })
        }
        else{
          this.setState({
            background: 'transparent'
          })
        }
      }
    /* The above section controls the NavBar fade on Scroll*/


    /*  Code below controls the Hamburger Menu Button */
    onClickButton = () => {
        this.setState((prevState) => ({
            display: !prevState.display
          }), this.change);
    }

    change = () =>{
        if (this.state.display === true){
            this.setState({
                toggle: 'translateX(0%)',
                opacity: '1',
                displayBackdrop: 'block'
            })
        }
        else{
            this.setState({
                toggle: 'translateX(100%)',
                opacity: '0',
                displayBackdrop: 'none'
            })
        }
    }

    onClickBackdrop = () =>{
        this.setState({
            display: false
        })
    }
    /*  Code above controls the Hamburger Menu Button */

    
    render(){
        const styleContain = {}
        return(
            <NavStyle transform = {this.state.toggle} opacity = {this.state.opacity} display = {this.state.displayBackdrop}>
                {window.onscroll = () => this.checkScroll()}
                <div onClick = {this.onClickBackdrop} className = 'backdrop'></div>
                <div  style = {{...styleContain, backgroundColor: this.state.background, }} className = 'container'>
                    <div className = 'logo'>
                        <img src = 'l.jpg' alt = 'Logo here' />{this.state.opacity} {this.state.toggle}
                    </div>
                    <div className = 'nav_items'>
                        <NavLink exact to = '/' className = 'single_item'>Home</NavLink>
                        <NavLink exact to = '/whatweoffer' className = 'single_item'>What we Offer</NavLink>
                        <NavLink exact to = '/topwears' className = 'single_item'>Top Wears</NavLink>
                        <NavLink exact to = '/catalogue' className = 'single_item'>Catalogue</NavLink>
                        <NavLink exact to = '/contact' className = 'single_item'>Contact Us</NavLink>
                    </div>
                </div>
                <Button onClick = {this.onClickButton} />
            </NavStyle>
        )
    }
}
export default NavBar