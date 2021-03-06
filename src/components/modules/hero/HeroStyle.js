import styled from "styled-components"

export const HeroStyle = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props => props.img});
    background-repeat: no-repeat;
    background-position: 50% 20%;
    background-size: cover;

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
                min-width: 100px;
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

            @media(max-width: 970px){
                flex-direction: column;

                button{
                    margin: auto;
                }
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

            @media (max-width: 970px){
                width: 90vw;
                background: transparent;
            }
        }
    }

`

export const ButtonStyle = styled.div`
    
`