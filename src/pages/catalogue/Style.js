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
        height: 300px;      

        img{
            width: 100%;
            height: 100%;
            object-position: 50% 15%;
            object-fit: cover;
            margin: auto;
            transition: 0.3s;
            border-radius: 4px;
            cursor: pointer;

            :hover{
                transform: scale(1.1);
                transition: 0.5s;
            }
        }

        h3{

        }
    }
`