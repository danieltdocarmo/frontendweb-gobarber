import styled, {keyframes} from 'styled-components';

import SingInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
    display:flex;
    justify-content:stretch;
    height: 100vh;
`;

export const Content = styled.div`    
    width: 100%;
    max-width:750px;
    display: flex;
    place-content: center;
`;

const apperFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px)
    }to{
        opacity: 1;
        transform: translateX(0);
    }
`

export const AnimationContainer = styled.div`
    
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;

animation: ${apperFromLeft} 1s;

form{
    margin: 80px 0;
    display: flex;
    flex-direction: column;
    width: 340px;

    text-align: center;

   h1{
       margin-bottom: 24px;
   }


   a{
       margin-top: 24px;
       text-decoration: none;
       color: #F4EDE8;
   }

}



> a{
    display: flex;
    align-items: center;
   margin-top: 24px;
   text-decoration: none;
   color: #FF9000;

}

svg{
    margin-right: 10px;
}
`;

export const Background = styled.div`
    flex: 1;
    background: url(${SingInBackground}) no-repeat center;
    background-size: cover;

`;