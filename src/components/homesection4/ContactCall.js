import React from 'react';
import {Style} from './Style';
import {Link} from 'react-router-dom';

function ContactCall (){
    return(
        <Style>
            <p>
                <h2>
                    Seen Any Design You Like? You're Just A Click away!!!
                </h2>
                <p>
                    <h4>
                        Contact Us today and get a Design made just for You. We get your dresses ready in just a few days. We have delivery Men ready To Deliver Nationwide!
                    </h4>
                </p>
                <button>
                    <Link exact to = '/contact'>Contact Us</Link>
                </button>
            </p>
        </Style>
    )
}

export default ContactCall