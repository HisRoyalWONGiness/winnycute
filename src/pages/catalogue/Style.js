import styled from 'styled-components';

export const Style = styled.div`
    margin-bottom: 36em;

    .contain_cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;
    }

    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: #000000;
        }

    .modal-content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 80%;
        height: 80%;
        max-width: 1200px;
        background-color: red;
    }
`

export const StyleCard = styled.div`
    position: relative;

    .contain_card{
        margin: 2em;
        margin-bottom: 4em;
        width: 300px;
        height: 400px;
        background: whitesmoke;
        transition: 0.3s;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        img{
            width: 100%;
            height: 75%;
            object-position: 50% 15%;
            object-fit: cover;
            margin-top: 0;
            background: #0D0D0D;

            :hover{
                opacity: 0.95;
            }
        }

        h3{
            text-align: center;
            color: #0D0D0D;
            font-size: 15px;
            margin-top: 1em;
        }

        button{
            background: #FF0099;
            border: none;
            padding: 8px 2em;
            border-radius: 2px;
            margin-bottom: 15px;
        }

        :hover{
            transform: scale(1.1);
            transition: 0.5s;
        }
    }
`