import styled from 'styled-components'

export const Style = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0em -2em;

    .text_section{
        max-width: 600px;
        margin: auto 4em;

        h1{
            margin-bottom: 2em;
            margin-top: 0;
            color: #FF0099;
            letter-spacing: 3px;
        }

        h2{
            margin-bottom: 1.5em;
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
        margin: 0 2em;

        @media only screen and (max-width: 2000px){
            width: 600px;
        }

        @media only screen and (max-width: 1340px){
            width: 500px;
        }

        @media only screen and (max-width: 1230px){
            width: 400px;
        }

        @media only screen and (max-width: 1200px){
            width: 100%;
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
                top: 10px;
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
                }

                img{
                    margin: 80px 0;
                    width: 200px;
                }


            }
        }
    }
`