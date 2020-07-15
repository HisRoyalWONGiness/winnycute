import React, { Component } from 'react';
import {GlobalStyle} from '../GlobalStyle'
import NavBar from '../components/modules/nav/NavBar'
import Footer from '../components/modules/footer/Footer'

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle />
                <NavBar />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;
