import React, { useEffect } from 'react';


import { FiAlertCircle, FiXCircle, FiCheckCircle, FiInfo } from 'react-icons/fi';

import { MessageProps, useToast } from '../../../hooks/Toast';

import { Container } from './style';

interface ToastProps {
    message: MessageProps;
    style: object;
}

const svg = {
    'sucess': <FiCheckCircle size={24} />,
    'error': <FiAlertCircle size={24} />,
    'info': <FiInfo size={24} />
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {

    const { removeToast } = useToast();
 


    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id)
            console.log('Toast Removido!');
        },
            3000);


        return ()=>{
            clearTimeout(timer);
        }
    }, [])

    return (
        <Container style={style} type={message.type} hasDescription={!!message.description}>
            {svg[message.type || 'info']}
            <div>
                <strong>{message.title}</strong>
                {message.description && <p>{message.description}</p>}
            </div>

            <button onClick={() => removeToast(message.id)} type='button'>
                <FiXCircle size={18} />
            </button>
        </Container>
    );
}

export default Toast;