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
                <div className = 'alternative'>
                    <h1>You can also reach us Via...</h1>
                    <p>
                        Address: No. 1 Umuocheala Street, Abayi, Aba, Abia State<br />
                        Phone: +2348068417976, +2348136743132 <br />
                        Social Media: Instagram Icon, Facebook Icon, WhatsApp Icon
                    </p>
                </div>
            </Style>
        </div>
    )
}

export default Contact