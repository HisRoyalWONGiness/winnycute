import React from 'react'
import Hero from '../../components/modules/hero/Hero'
import { Style } from './Style'
import ContactCard from './ContactCard'

function Contact (){
    return(
        <div>
            <Hero 
                title={'Fashion Redefined'}
                subText={"At Winnycute Custom Apparels you are guaranteed of the best. We've got the best blend for every Occasion"}
                img={'assets/pictures/HeroImage.jpg'}
            />
            <Style>
                <h1>Contact Us</h1>
                <ContactCard />
            </Style>
        </div>
    )
}

export default Contact