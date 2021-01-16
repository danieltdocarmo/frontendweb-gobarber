import React from 'react';
import{ useTransition} from 'react-spring';

import Toast from './toast/index';

import { Container} from './style';


import { MessageProps } from '../../hooks/Toast';

interface ToastContainerProps {
    messages: MessageProps[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    
    const messageWithTransition = useTransition(
        messages,
        message => message.id,
        {
            from: { right: '-120%'},
            enter: { right: '0%'},
            leave: { right: '-120%'},
        }
    );

    return (
        <Container >
           {messageWithTransition.map(({item, key, props}) =>(
               <Toast key={key} style={props} message={item}></Toast>
           ))}
        </Container>
    );
}

export default ToastContainer;