import styled from "styled-components"

export const HeroStyle = styled.div`
    width: 100%;
    height: 100vh;
    background: white;/*url(${props => props.img});*/
    background-repeat: no-repeat;
    background-position: 50% 25%;
    background-size: 75%;

    @media (max-width: 1020px){
        background-size: cover;
    }

    /*@media (max-width: 990px) {
        height: ${props => props.mobileHeight};;
    }*/

    .hero-text {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        padding: 0em 1em;

        .form_style{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;


            input{
                width: 330px;
                min-width: 200px;
                height: 35px;
                border: none;
                border-radius: 2px;
                margin: 10px auto
            }

            button{
                height: 35px;
                width: 180px;
                min-width: 130px;
                color: white;
                font-size: 15px;
                font-weight: bold;
                background-color: #FF0099;
                border: none;
                border-radius: 2px;
                margin: auto 5px;
                outline: none;
                cursor: pointer;
            }
        }

        h1 {
            font-weight: bolder;
            margin: auto;
            font-size: 50px;

            @media (max-width: 970px){
                font-size: 40px;
            }
        }

        p {
            font-size: 18px;
            width: 30vw;
            margin: 1em auto;
            background: #0D0D0D50;

            @media (max-width: 970px){
                width: 70vw;
                background: transparent;
            }
        }
    }

`