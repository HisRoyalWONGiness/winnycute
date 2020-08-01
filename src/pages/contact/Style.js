import styled from 'styled-components';

export const Style = styled.div`
     
`
export const StyleContact = styled.div`
    margin: auto;
    width: 500px;
    
    @media(max-width: 670px){
        width: 90%;
    }

    label{
        font-size: 13px;
    }

    .text_input{
        width: 100%;
        height: 30px;
        margin-bottom: 2em;
        margin-top: 5px;
        background: transparent;
        box-shadow: 0 0 1pt 1pt #FFFFFF90;
        border-radius: 4px;
        color: white;
        border: none;
        
        :focus{
            box-shadow: 0 0 1pt 1pt #FF0099;
            outline: none;
        }

        :hover{
            box-shadow: 0 0 1pt 1pt #FF0099;
        }
    }

    .message_input{
        width: 100%;
        height: 200px;
        margin-bottom: 2em;
        margin-top: 5px;
        background: transparent;
        border-radius: 4px;
        color: white;
        border: none;
        box-shadow: 0 0 1pt 1pt #FFFFFF90;

        :focus{
            box-shadow: 0 0 1pt 1pt #FF0099;
            outline: none;
        }

        :hover{
            box-shadow: 0 0 1pt 1pt #FF0099;
        }
    }
`