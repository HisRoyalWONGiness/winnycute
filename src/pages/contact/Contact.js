import React from 'react';
import Hero from '../../components/modules/hero/Hero';
import { Style } from './Style';
import ContactCard from './ContactCard';
import Image from './Image';

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
                <div className = 'container'>
                    <Image />
                    <ContactCard />
                </div>
                <h1>You can also reach us Via...</h1>
                <p><h5>Address: No. 1 Umuocheala Street, Abayi, Aba, Abia State</h5></p>
                <p><h5>Phone: +2348068417976, +2348136743132</h5></p>
                <p><h5>Social Media: Instagram Icon, Facebook Icon, WhatsApp Icon</h5></p>
            </Style>
        </div>
    )
}

export default Contact