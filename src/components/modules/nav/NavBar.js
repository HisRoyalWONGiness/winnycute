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

    onClickButton = () => {
        this.setState((prevState) => ({
            display: !prevState.display
          }));
    }
    render(){
        const styleContain = {}
        return(
            <NavStyle>
                {window.onscroll = () => this.checkScroll()}
                {console.log(this.state.display)}
                <div  style = {{...styleContain, backgroundColor: this.state.background, }} className = 'container'>
                    <div className = 'logo'>
                        <img src = 'l.jpg' alt = 'Logo here' />
                    </div>
                    <div className = {this.state.display ? 'nav_items nav_items_clicked' : 'nav_items'}>
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