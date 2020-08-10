import React from 'react';
import {StyleCard} from './Style';

function Card({passProps}){
    const {image, title} = passProps;
    return(
        <StyleCard>
            <div className = 'contain_card'>
                <img src = {image} alt = '.' />
                <h3>{title}</h3>
            </div>
        </StyleCard>
    )
}

export default Card