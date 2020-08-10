import React from 'react'
import Hero from '../../components/modules/hero/Hero'
import Card from './Card'
import ImageData from './ImageData';
import {Style} from './Style';

class Catalogue extends React.Component{
    constructor(){
        super()
        this.state = {
            display: ImageData.placeholders,
        }
    }
    render (){
        const {display} = this.state;
        return(
            <div>
                <Hero 
                    title={'Fashion Redefined'}
                    subText={"At Winnycute Custom Apparels you are guaranteed of the best. We've got the best blend for every Occasion"}
                    img={'assets/pictures/HeroImage.jpg'}
                    />
                <Style>
                    <h1>CATALOGUE PAGE</h1>
                    <div className = 'contain_cards'>
                        {display.map(placeholderImages => <Card key = {display.id}  passProps = {placeholderImages} />)}
                    </div>
                </Style>
            </div>
        )
    }
}

export default Catalogue