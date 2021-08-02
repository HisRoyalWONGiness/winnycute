import React from 'react';
import {StyleCard} from './Style';

function Card({props}){
    return(
        <StyleCard>
            <div className = 'contain_card'>
                <img src = {props.image} alt = '.' />
                <h3>{props.title}</h3>
                <button>Open</button>
            </div>
        </StyleCard>
    )
}

export default Card