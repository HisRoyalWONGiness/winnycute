import React from 'react';
import {Style} from './Style';
import {Link} from 'react-router-dom';

function Footer () {
    return(
        <Style>
            <div className = 'logo_div'>
                <h3>Winnycute Logo Here</h3>
            </div>

            <div className = 'container'>
                <div className = 'first_column'>
                    <h3>COMPANY</h3>
                    <div className = 'items'>
                        <Link exact to = '/topwears'>Top Wears</Link>
                        <Link exact to = '/contact'>Contact Us</Link>
                        <Link exact to = '/whatweoffer'>What We Offer</Link>
                    </div>
                </div>

                <div className = 'second_column'>
                    <h3>CATEGORIES</h3>
                    <div className = 'items'>
                        <Link exact to = '/topwears'>Top Wears</Link>
                        <Link exact to = '/contact'>Contact Us</Link>
                        <Link exact to = '/contact'>Contact Us</Link>
                        <Link exact to = '/contact'>Contact Us</Link>
                        <Link exact to = '/whatweoffer'>What We Offer</Link>
                    </div>
                </div>

                <div className = 'third_column'>
                    <h3>SOCIAL MEDIA</h3>
                    <div className = 'items'>
                        <Link exact to = '/topwears'>Top Wears</Link>
                        <Link exact to = '/contact'>Contact Us</Link>
                        <Link exact to = '/whatweoffer'>What We Offer</Link>
                        <Link exact to = '/whatweoffer'>What We Offer</Link>
                    </div>
                    </div>
            </div>
        </Style>
    )
}

export default Footer