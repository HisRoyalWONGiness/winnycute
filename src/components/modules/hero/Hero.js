import React from 'react'
import {HeroStyle} from './HeroStyle'

function Hero ({ title, subText, img, mobileHeight}){
   return (
        <HeroStyle img={img} /*mobileHeight={mobileHeight}*/>
            <div class="hero-text">
                <h1>{title}</h1>
                <p>{subText}</p>
                <form className = 'form_style'>
                    <input></input>
                    <button>Explore</button>
                </form>
            </div>

        </HeroStyle>
   )
}

export default Hero