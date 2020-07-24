import React from 'react';
import Hero from '../../components/modules/hero/Hero';
import WhatWeOfferHome from '../../components/homesection1/WhatWeOfferHome';
import HomeCatalogue from '../../components/homesection3/HomeCatalogue';
import ImageSlider from '../../components/homesection2/ImageSlider'

function Home (){
    return(
        <div>
            <Hero 
                title={'Fashion Redefined'}
                subText={"At Winnycute Custom Apparels you are guaranteed of the best. We've got the best blend for every Occasion"}
                img={'assets/pictures/HeroImage.jpg'}
                />
            <WhatWeOfferHome />
            <ImageSlider />
            <HomeCatalogue />
        </div>
    )
}

export default Home