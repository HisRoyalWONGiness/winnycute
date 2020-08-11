import styled from 'styled-components';

export const Style = styled.div`
    margin-bottom: 36em;

    

    .contain_cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;
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

        img{
            width: 100%;
            height: 75%;
            object-position: 50% 15%;
            object-fit: cover;
            margin-top: 0;
            cursor: pointer;
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