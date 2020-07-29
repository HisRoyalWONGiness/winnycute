import styled from 'styled-components';

export const Style = styled.div`
    
    h1{
        margin-bottom: 1em;
        margin-top: 0;
        margin-left: 1em;
        color: #FF0099;
        letter-spacing: 3px;

        ::before{
            content: '';
            padding-right: 25px;
            border-bottom: solid 3px #FF0099;
            border-left: solid 3px #FF0099;
            border-radius: 2px;
        }
    }  

    .grand_container{
        width: 80%;
        margin: auto;

        .container1{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .full1{
                width: 25%;
                min-width: 300px;
                height: 80vh;
                background: url('assets/pictures/Optimized-catalogue1.jpg');
                background-repeat: no-repeat;
                background-position: 50% 25%;
                background-size: cover;
                margin: auto;
                border-radius: 8px;
                margin-top: 2em;
            }

            .with_text{
                width: 25%;
                min-width: 300px;
                height: 80vh;
                margin: auto;
                border-radius: 8px;

                .image{
                    width: 100%;
                    height: 70%;
                    background: url('assets/pictures/Optimized-catalogue4.jpg');
                    background-repeat: no-repeat;
                    background-position: 50% 5%;
                    background-size: cover;
                    border-radius: 8px;
                }

                .text{
                    height: 25%;
                    width: 100%;
                    font-size: 0.9em;
                    box-sizing: border-box;
                    margin-top: 20px;
                    text-align: center;

                        button{
                            color: #FF0099;
                            background: white;
                            outline: none;
                            border: none;
                            padding: 5px 10px 5px 10px;
                            border-radius: 3px;
                            margin-top: 13px;
                        }
                    }
                }

                .full2{
                width: 25%;
                min-width: 300px;
                height: 80vh;
                background: url('assets/pictures/Optimized-catalogue9.jpg');
                background-repeat: no-repeat;
                background-position: 50% 25%;
                background-size: cover;
                margin: auto;
                border-radius: 8px;
            }
        }

        .container2{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 2em;
            margin-bottom: 2em;


            .halves1{
                width: 25%;
                min-width: 300px;
                height: 80vh;
                margin: auto;
                display: flex;
                justify-content: space-around;
                flex-direction: column;


                .halves1_1st{
                    width: 100%;
                    min-width: 300px;
                    height: 45%;
                    background: url('assets/pictures/Optimized-catalogue2.jpg');
                    background-repeat: no-repeat;
                    background-position: 50% 25%;
                    background-size: cover;
                    margin: auto;
                    border-radius: 8px;
                }

                .halves1_2nd{
                    width: 100%;
                    min-width: 300px;
                    height: 45%;
                    background: url('assets/pictures/Optimized-catalogue5.jpg');
                    background-repeat: no-repeat;
                    background-position: 50% 35%;
                    background-size: cover;
                    margin: auto;
                    border-radius: 8px;
                }
            }

            .full_last_section{
                width: 25%;
                min-width: 300px;
                height: 80vh;
                background: url('assets/pictures/Optimized-catalogue6.jpg');
                background-repeat: no-repeat;
                background-position: 50% 25%;
                background-size: cover;
                margin: auto;
                border-radius: 8px;
            }

            .halves2{
                width: 25%;
                min-width: 300px;
                height: 80vh;
                margin: auto;
                display: flex;
                justify-content: space-around;
                flex-direction: column;


                .halves2_1st{
                    width: 100%;
                    min-width: 300px;
                    height: 45%;
                    background: url('assets/pictures/Optimized-catalogue7.jpg');
                    background-repeat: no-repeat;
                    background-position: 50% 25%;
                    background-size: cover;
                    margin: auto;
                    border-radius: 8px;
                }

                .halves2_2nd{
                    width: 100%;
                    min-width: 300px;
                    height: 45%;
                    background: url('assets/pictures/Optimized-catalogue8.jpg');
                    background-repeat: no-repeat;
                    background-position: 50% 5%;
                    background-size: cover;
                    margin: auto;
                    border-radius: 8px;
                }
            }
        }     
    }
    
`