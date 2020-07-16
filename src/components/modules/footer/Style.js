import styled from 'styled-components'

export const Style = styled.div`
    width: 100%;
    color: #0D0D0D;
    padding: 1em;
    background-color: whitesmoke;
    box-sizing: border-box;


    .logo_div{
        width: 25%;
    }


    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: stretch;
        text-align: center;
        margin-bottom: 1em;


        .first_column{
            min-width: 200px;
            

            h3{
                text-decoration: underline;
                margin-bottom: 0.5em;
            }

            .items{
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                a{
                    margin-top: 1em;
                    text-decoration: none;
                    color: #0D0D0D;
                    font-weight: bold;
                }
            }
        }

        .second_column{
            min-width: 200px;

            @media(max-width: 760px){
                margin-top: 2em;
            }
            
            h3{
                text-decoration: underline;
                margin-bottom: 0.5em;
            }

            .items{
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                a{
                    margin-top: 1em;
                    text-decoration: none;
                    color: #0D0D0D;
                    font-weight: bold;
                }
            }
        }

        .third_column{
            min-width: 200px;

            @media(max-width: 760px){
                margin-top: 2em;
            }
            
            h3{
                text-decoration: underline;
                margin-bottom: 0.5em;
            }

            .items{
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                a{
                    margin-top: 1em;
                    text-decoration: none;
                    color: #0D0D0D;
                    font-weight: bold;
                }
            }
        }
    }
`