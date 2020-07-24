import React from 'react';
import {Style} from './Style';
import data from './data';
import Card from './Card';

class ImageSlider extends React.Component{
    constructor(){
        super();
        this.state = {
            properties: data.properties,
            property: data.properties[0],
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: data.properties[newIndex]
        }) 
        if (this.state.property.index === data.properties.length-1){
            this.setState({
                property: data.properties[0]
            })
        }
    }


    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    render(){
        const {properties, property} = this.state;
        return(
            <Style num = {property.index}>
                <button
                    onClick = {() => this.prevProperty()}
                    disabled = {this.state.property.index === 0}
                    className = 'prev_button'>
                        <i class="fa fa-arrow-left"></i>
                    </button>

                    <button
                    onClick = {() => this.nextProperty()}
                    className = 'next_button'>
                        <i class="fa fa-arrow-right"></i>
                </button>

                <div className = {`cards-slider active-slide-${property.index}`}>
                    <div className = 'cards-slider-wrapper' style={{
                        'transform': `translateX(-${((property.index)*((properties.length*100)/properties.length))}%)`
                    }}>
                        {properties.map(propertyItem => <Card key = {this.state.property._id}  property = {propertyItem} />)}
                    </div>
                </div>
            </Style>
        )
    }
}


export default ImageSlider