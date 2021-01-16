import styled, {keyframes} from 'styled-components';

import SingOnBackground from '../../assets/sign-on-background.png';

export const Container = styled.div`
    display:flex;
    justify-content:stretch;
    height: 100vh;
`;

export const Content = styled.div`    
    width: 100%;
    max-width:750px;
    
    display:flex;
    align-items:center;
    justify-content:center;

`;

const apperFromRight = keyframes`
from{
    transform: translateX(50px);
    opacity: 0;
}
to{
    transform: translateX(0);
    opacity: 1;
}
`
export const AnimationContainer = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;

    animation: ${apperFromRight} 1s;

    form{
        margin: 40px 0;
        display: flex;
        flex-direction: column;
        width: 340px;

        text-align: center;

        h1{
            margin-bottom: 24px;
        }

    }

    a{
        margin-top: 80px;
        text-decoration: none;
        color: #FF9000;
        display: flex;
        align-items: center;
    
        svg{
            margin-right: 10px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${SingOnBackground}) no-repeat center;
    background-size: cover;

`;