import styled from 'styled-components'

export const NavStyle = styled.div `


    .backdrop{
        position: absolute;
        background-color: black;
        width: 100%;
        height: 100%;
        opacity: 0.4;
        filter: blur(80px);
        -webkit-filter:(40px);
        z-index: 2;
    }

    .container{
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0px;
        width: 100%;
        height: 8vh;
        transition: 1s;
        z-index: 99;

        .logo{
            position: relative;
            top: 1em;
            left: 1em;

            img{
                left: 2em;
            }
        }

        .nav_items{
            position: relative;
            display: flex;
            justify-content: space-between;
            right: 1em;
            top: 1em;
            margin-right: 2em;

            .single_item{
                margin-left: 1em;
                margin-right: 1em;
            }

            a{
                color: white;
                text-decoration: none;
            }

            @media (max-width: 1000px ){
                body{
                    overflow-x: hidden;
                }
                position: absolute;
                right: 0px;
                top: 0;
                height: 100vh;
                margin-right: 0em;
                background: #0D0D0D;
                display: flex;
                flex-direction: column;
                width: 65%;
                align-items: center;
                justify-content: space-evenly;
                opacity: ${props => props.opacity};
                transform: ${props => props.transform};
                transition: ${props => props.transition};
                transition: opacity 0.1s;
                

                .single_item{
                    opacity: 1;
                }
            }
        }
    }
`

export const ButtonStyle = styled.div `
    
    position: fixed;
    top: 11px;
    right: 30px;
    width: 35px;
    display: none;
    cursor: pointer;
    z-index: 99;

    .line1{
        background: #FF0099;
        width: 25px;
        height: 2px;
        margin: 5px;
        border-radius: 2px;
    }

    .line2{
        background: #FF0099;
        width: 25px;
        height: 2px;
        margin: 5px;
        border-radius: 2px;
    }

    .line3{
        background: #FF0099;
        width: 25px;
        height: 2px;
        margin: 5px;
        border-radius: 2px;
    }

    @media (max-width: 999px){
        display: block;
    }

`