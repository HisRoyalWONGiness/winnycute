import styled from 'styled-components'

export const Style = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 0em;
    margin-bottom: 3em;

    @media only screen and (max-width: 1200px){
        margin-top: 3em;
        margin-bottom: 0;
    }

    .text_section{
        max-width: 575px;
        margin: auto;
        margin-left: 2em;
        padding-right: 1em;
        box-sizing: border-box;

        h1{
            margin-bottom: 1em;
            margin-top: 0;
            color: #FF0099;
            letter-spacing: 3px;
        }

        h2{
            letter-spacing: 3px;
        }

        p{
            margin-bottom: 1.5em; 
            line-height: 25px;
        }

        a{
            text-decoration: none;
            color: #FF0099;
            font-weight: bold;
        }
    }

    .circle_bar_container{
        width: 700px;
        height: 700px;
        position: relative;
        text-align: right;

        @media only screen and (max-width: 2000px){
            width: 400px;
        }

        @media only screen and (max-width: 1200px){
            width: 100%;
            height: 800px;
        }

        @media only screen and (max-width: 720px){
            width: 100%;
            height: 580px;
        }

        @media only screen and (max-width: 470px){
            width: 100%;
            height: 420px;
        }

        
        .circle{
            position: absolute;
            top: 30px;
            right: 9px;
            width: 700px;
            height: 700px;
            border-radius: 50%;
            background: #FFFFFF08;
            text-align: center;

            .bar{
                position: absolute;
                top: 0px;
                right: 0px;
                width: 105px;
                height: 700px;
                background: #FFFFFF08;
            }

            img{
                position: relative;
                margin: 180px 0;
                width: 350px;
                border-radius: 50px;
            }

            @media only screen and (max-width: 720px){
                width: 500px;
                height: 500px;

                .bar{
                    width: 75px;
                    height: 500px;
                    top: 0px;
                }

                img{
                    margin: 80px 0;
                    width: 200px;
                }


            }

            @media only screen and (max-width: 470px){
                width: 350px;
                height: 350px;

                .bar{
                    width: 75px;
                    height: 350px;
                    top: 0px;
                }

                img{
                    margin: 80px 0;
                    width: 200px;
                }


            }
        }
    }
`