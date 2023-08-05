import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #FFFFFF;
        font-family: 'Lexend Deca', sans-serif;
    }
    button{
        width: 182px;
        height: 60px;
        border-radius: 12px;
        background-color: rgba(93, 144, 64, 1);
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: white;
        margin: 25px;
    }
    input{
        width: 769px;
        height: 60px;
        border-radius: 12px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        margin: 12px;
        padding: 0 25px;
    }
    ::placeholder{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: rgba(156, 156, 156, 1);
        font-size: 14px;
        padding: 0 15px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default GlobalStyle;