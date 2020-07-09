import React, { Component } from 'react';
import {GlobalStyle} from '../GlobalStyle'
import NavBar from '../components/modules/nav/NavBar'

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle />
                <NavBar />
                {this.props.children}
            </div>
        );
    }
}

export default App;
