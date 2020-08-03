import styled from 'styled-components';



export const Style = styled.div`
     margin-top: 8em;

        h1{
            color: #FF0099;
            margin-left: 1em;
        }

     .alternative{
         p{
             font-size: 14px;
             line-height: 25px;
             letter-spacing: 1px;
             margin-left: 2em;
         }
     }

     .container{
         display: flex;
         justify-content: space-between;
         justify-items: center;
         flex-wrap: wrap;
         box-sizing: border-box;
         margin: 4em;

         @media only screen and (max-width: 1210px){
            justify-content: center;
        }

        @media only screen and (max-width: 720px){
            margin: auto;
        }
     }
`

export const StyleImage = styled.div`
    margin: auto;

    @media only screen and (max-width: 720px){
        margin: 0;
    }

    img{
        width: 600px;
        margin-bottom: 3em;

        @media only screen and (max-width: 1410px){
            width: 500px;
        }

        
        @media only screen and (max-width: 1210px){
            display: none;
            width: 0;
            
        }

    }
`


export const StyleContact = styled.div`
    margin: auto;
    margin-right: 4em;
    width: 600px;
    position: relative;

    @media only screen and (max-width: 1410px){
        width: 500px;
    }

    
    @media only screen and (max-width: 1210px){
        width: 600px;
        margin-right: 0;
    }

    @media only screen and (max-width: 720px){
            width: 450px;
            margin-right: 0;
        }

        @media only screen and (max-width: 600px){
            width: 350px;
        }

        @media only screen and (max-width: 400px){
            width: 270px;
        }

    label{
        font-size: 13px;
    }

    .space{
        height: 15px;
        box-sizing: border-box;
    }

    .text_input{
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        margin-top: 10px;
        padding-top: 10px;
        margin-bottom: 7px;
        background: transparent;
        box-shadow: 0 0 1pt 1pt #FFFFFF90;
        border-radius: 4px;
        color: white;
        border: none;
        transition: 0.4s;
        
        :focus{
            box-shadow: 0 0 1pt 1pt #FF0099;
            outline: none;
            background: transparent;
            transition: 0.4s;
        }

        :hover{
            box-shadow: 0 0 1pt 1pt #FF0099;
            transition: 0.4s;
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

    .text_input[type=tel]{
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
        margin-top: 10px;
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
            transition: 0.4s;
        }

        :hover{
            box-shadow: 0 0 1pt 1pt #FF0099;
            transition: 0.4s;
        }
    }

    .message_input[type=text]{
        width: 100%;
        padding: 12px 10px;
        margin: 8px 0;
        box-sizing: border-box;
        font-size: 15px;
    }

    button{
        float: right;
        height: 35px;
        width: 180px;
        min-width: 130px;
        color: white;
        font-size: 15px;
        font-weight: bold;
        background-color: #FF0099;
        border: none;
        border-radius: 2px;
        margin: auto 5px;
        outline: none;
        cursor: pointer;
    }

    .error_name{
        position: absolute;
        color: #FF0099;
        margin-top: 0;
        padding-top: 0;
        font-size: 10px;
    }

    .error_email{
        position: absolute;
        color: #FF0099;
        margin-top: 0;
        padding-top: 0;
        font-size: 10px;
    }

    .error_phone{
        position: absolute;
        color: #FF0099;
        margin-top: 0;
        padding-top: 0;
        font-size: 10px;
    }

    .error_message{
        position: absolute;
        color: #FF0099;
        margin-top: 0;
        padding-top: 0;
        font-size: 10px;
    }

    
`

