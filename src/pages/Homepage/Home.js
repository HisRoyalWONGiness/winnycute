import React from 'react';
import NavBar from '../../components/modules/nav/NavBar'

function Home (){
    return(
        <div>
            <NavBar />
            <h1>
                HOME PAGE/ LANDING PAGE
            </h1>
            <img src = 'assets/pictures/HeroImage.jpg' alt = 'bg' />
        </div>
    )
}

export default Home