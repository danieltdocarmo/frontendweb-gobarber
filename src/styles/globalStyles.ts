import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #312e38;
        color: #fff;
    }

    body, input, button{
        font-family: 'Roboto Slab', serif;

    }
    strong, h1, h2, h3, h4, h5, h6{
        font-weight: 500;
    }

    button{
        cursor: pointer;
    }
`;