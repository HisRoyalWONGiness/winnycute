import styled from 'styled-components'

export const Style = styled.div`
    width: 50%;
    margin: auto;
    text-align: center;
    padding: 2em;

    @media only screen and (max-width: 1124px){
        width: 80%;
    }

    h2{
        color: #FF0099;
    }
    h4{
        
    }

    button{
        height: 35px;
        min-width: 130px;
        color: #FF0099;
        font-size: 15px;
        font-weight: bold;
        background-color: white;
        border: none;
        border-radius: 2px;
        margin: auto 5px;
        outline: none;
        cursor: pointer;
    }
`