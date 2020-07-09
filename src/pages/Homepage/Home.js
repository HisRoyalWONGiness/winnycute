import React from 'react';
import Hero from '../../components/modules/hero/Hero'

function Home (){
    return(
        <div>
            <Hero 
                title={'Fashion Redefined'}
                subText={"At Winnycute Custom Apparels you are guaranteed of the best. We've got the best blend for every Occasion"}
                img={'assets/pictures/HeroImage.jpg'}
                />
            <h1>
                HOME PAGE/ LANDING PAGE
            </h1>
        </div>
    )
}

export default Home