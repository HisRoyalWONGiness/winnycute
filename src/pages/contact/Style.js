import styled from 'styled-components';

export const Style = styled.div`
     margin-bottom: 4em;
`
export const StyleContact = styled.div`
    margin: auto;
    width: 500px;
    position: relative;
    
    @media(max-width: 670px){
        width: 90%;
    }

    label{
        font-size: 13px;
    }

    .space{
        height: 15px;
        box-sizing: border-box;
    }

    .text_input{
        position: relative;
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        margin-top: 5px;
        margin-bottom: 7px;
        background: transparent;
        box-shadow: 0 0 1pt 1pt #FFFFFF90;
        border-radius: 4px;
        color: white;
        border: none;
        
        :focus{
            box-shadow: 0 0 1pt 1pt #FF0099;
            outline: none;
            background: transparent;
        }

        :hover{
            box-shadow: 0 0 1pt 1pt #FF0099;
        }
    }

    .text_input:-webkit-autofill,
    .text_input:-webkit-autofill:hover,
    .text_input:-webkit-autofill:focus,
    .text_input:-webkit-autofill:active{
        transition: background-color 5000s;
        -webkit-text-fill-color: #fff !important;
    }

    .text_input[type=text]{
        width: 100%;
        padding: 12px 10px;
        margin: 8px 0;
        box-sizing: border-box;
        font-size: 15px;
    }

    .message_input{
        width: 100%;
        height: 200px;
        box-sizing: border-box;
        margin-top: 5px;
        margin-bottom: 5px;
        background: transparent;
        border-radius: 4px;
        color: white;
        border: none;
        box-shadow: 0 0 1pt 1pt #FFFFFF90;

        :focus{
            box-shadow: 0 0 1pt 1pt #FF0099;
            outline: none;
            background: transparent;
        }

        :hover{
            box-shadow: 0 0 1pt 1pt #FF0099;
        }
    }

    button{
        float: right;
        margin-bottom: 30em;
    }

    .error{
        color: #FF0099;
        margin-top: 0;
        padding-top: 0;
        font-size: 11px;
    }
`