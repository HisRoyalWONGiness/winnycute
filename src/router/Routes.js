import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../pages/Homepage/Home'
import Contact from '../pages/contact/Contact'
import Catalogue from '../pages/catalogue/Catalogue'
import WhatWeOffer from '../pages/whatweoffer/WhatWeOffer'
import TopWears from '../pages/topwears/TopWears'

class ReactRouter extends React.Component {
    render (){
        return(
            <Router>
                <Switch>
                    <Route exact path = '/' component = {Home} />
                    <Route exact path = '/contact' component = {Contact} />
                    <Route exact path = '/catalogue' component = {Catalogue} />
                    <Route exact path = '/whatweoffer' component = {WhatWeOffer} />
                    <Route exact path = '/topwears' component = {TopWears} />


                </Switch>
            </Router>
        )
    }
}

export default ReactRouter