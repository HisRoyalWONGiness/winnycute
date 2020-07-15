import styled from 'styled-components'

export const Style = styled.div`
    display: flex;
    justify-content: space-between;

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
        width: 800px;
        height: 700px;
        margin: auto;
        
        .circle{
            position: absolute;
            top: 784px;
            right: 9px;
            width: 700px;
            height: 700px;
            border-radius: 50%;
            background: #FFFFFF20;
            text-align: center;

            .bar{
                position: absolute;
                top: 10px;
                right: 0px;
                width: 105px;
                height: 700px;
                background: #FFFFFF20;
            }

            img{
                position: relative;
                margin: 180px 0;
                width: 350px;
                border-radius: 50px;
            }
        }
    }
`