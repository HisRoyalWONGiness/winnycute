import React from 'react';
import {Style} from './Style';
import {Link} from 'react-router-dom';

function WhatWeOfferHome () {
    return(
        <Style>
            <div className = 'text_section'>
                <h1>What We Offer</h1>
                <p>
                    <h2>Fashion Redefined</h2>
                    We Offer a lot of Luxury wears at really Affordable prices, On wears, Money is never an issue because we make sure Every wear has varieties and prices that can be afforded by everyone.. Our wears tend to exude an aura of uniqueness
                </p>
                <Link exact to = '/whatweoffer'>Find Out More >>></Link>
            </div>

            <div className = 'circle_bar_container'>
                <div className = 'circle'>
                    <img src = 'assets/pictures/HeroImage.jpg' alt = '' />

                    <div className = 'bar'>
                        
                    </div>
                </div>
            </div>
            <div>

            </div>
        </Style>
    )
}

export default WhatWeOfferHome