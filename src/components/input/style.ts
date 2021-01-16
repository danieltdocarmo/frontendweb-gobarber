import styled,{css} from 'styled-components';

import Tooltip from '../../components/tooltip';


interface InputProps{
    focused?: Boolean;
    filled?: Boolean;   
    isErrored: Boolean;
}

export const Container = styled.div<InputProps>`

            
            background: #232129;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid #312e38;
            width: 100%;
            font-size: 5px;
            color: #666360;
            display: flex;
            align-items: center;

            & + div{
                margin-top: 2px;
            }

        ${props => props.isErrored && css`
            border-color: #c53030;
        `}

         ${props => props.focused && css`
            border-color: orange;
            color: orange;
         `}

         ${props => props.filled && css`
            color: orange;
         `}
            
input{
            flex: 1;
            background: transparent;
            border: none;
            color: #666360;
            font-size: 12px;
            
          

           &::placeholder{
                color: #666360;

           }

           &:focus{
            outline: 0;
           }


       }

       svg{
           margin-right: 10px;
       }

`;


export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 10px;
    
    svg{
        margin: 0;
    }
`;