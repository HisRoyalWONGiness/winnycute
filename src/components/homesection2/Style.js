import styled from 'styled-components'

export const Style = styled.div`
    margin: auto;
    margin-bottom: 40em;
    background: red;
    position: relative;

    .prev_button{
        position: absolute;
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 50%;
        left: 15px;
        top: 50%;
        outline: none;
        cursor: pointer;
        z-index: 99;
    }

    .next_button{
        position: absolute;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        right: 15px;
        top: 50%;
        outline: none;
        cursor: pointer;
        z-index: 99;
    }

    .cards-slider{
        position: relative;
        max-width: 350px;
        margin: 0 auto;

        ::after {
            content: '';
            display: block;
            width: 100%;
            height: 400px;
            outline: 5px solid  #FF0099;
            position: absolute;
            top: 0;
            left: 0;
        }

        .cards-slider-wrapper{
            position: absolute;
            width: 100%;
            display: flex;
            transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        }
    }

    .cards-slider.active-slide-${props => props.num} #card-${props => props.num}{
            opacity: 1;
        }
    
`

export const StyleCard = styled.div`

    .card{
        color: red;
        margin: auto;
        background: blue;
        width: 350px;
        height: 400px;
        flex: 1;
        opacity: 0.5;
        transition: opacity 0.3s linear;



        img{
            width: 350px;
            height: 400px;
            margin: auto;
            object-position: 50% 15%;
            object-fit: cover;
            margin: auto;
            border-radius: 8px;
        }
    }
`