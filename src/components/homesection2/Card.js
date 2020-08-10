import React from 'react';
import {StyleCard} from './Style'

function Card ({propertyProp}){
    const {picture, index} = propertyProp;
    return(
        <StyleCard>
            <div id = {`card-${index}`} className = 'card'>
                <img src = {picture} alt = '' />
            </div>
        </StyleCard>
    )
}

export default Card