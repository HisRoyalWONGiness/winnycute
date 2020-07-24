import React from 'react';
import {StyleCard} from './Style'

function Card ({property}){
    const {picture, index} = property;
    return(
        <StyleCard>
            <div id = {`card-${index}`} className = 'card'>
                <img src = {picture} alt = 'lagos' />
            </div>
        </StyleCard>
    )
}

export default Card