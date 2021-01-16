import styled,{css} from 'styled-components';
import {animated} from 'react-spring';

interface ContainerProps{
    type?: 'sucess' | 'error' | 'info';
    hasDescription: Boolean;
}

const toastsPropsVariations = {
    'sucess': css`background: greenyellow;
    color: #3172b7;`,

    'error': css`background: red;
    color: #2e656a;`,

    'info': css`background: transparent;
    color: white;`,
}


export const Container = styled(animated.div)<ContainerProps>`
    width: 360px;

    & + div{
        margin-top: 20px;
    }

    position: relative;
    padding: 16px 30px 16px 16px;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(0,0,0, 0.2);

    display: flex;

    ${props => toastsPropsVariations[props.type || 'info']}

    > svg {
        margin: 4px 12px 0 0;
    }

    button{
        position: absolute;
        right: 16px;
        top: 19px;
        opacity: 0.6;
        border: 0;
        background: transparent;
        color: inherit;
    }

    div{
        flex: 1;

        p{
        margin-top: 4px;
        font-size: 14px;
        opacity: 0.8;
        line-height: 20px;
    }

    }




`;