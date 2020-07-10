import React from 'react';
import {ButtonStyle} from './NavStyle'

function Button (props){
    return(
        <ButtonStyle onClick = {props.onClick}>
            <div className = 'line1'></div>
            <div className = 'line2'></div>
            <div className = 'line3'></div>
        </ButtonStyle>
    )
}

export default Button