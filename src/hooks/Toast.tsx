
import React, { useContext, createContext, useCallback } from 'react';

import {uuid} from 'uuidv4'; 
import ToastContainer from '../components/toastContainer';

export interface MessageProps{
    id: string;
    title: string;
    type?: 'sucess' |  'error' | 'info';
    description?: string;
}

interface ToastData {
    addToast(message: Omit<MessageProps, 'id'>): void;
    removeToast(id: string): void;
}

const ToastContext = createContext({} as ToastData);

const ToastProvider: React.FC = ({ children }) => {
    const [messages, setMessage] = React.useState<MessageProps[]>([]);

    const addToast = useCallback(({title, type, description}: Omit<MessageProps,'id'>) => {
            const id = uuid();

            const toast = {
                id,
                title,
                type,
                description,
            }

            setMessage((state)=>[...state, toast]);
    }, []);

    const removeToast = useCallback((id: string) => {
            setMessage(state => state.filter(message => message.id != id));
    }, []);

    return (
        <ToastContext.Provider value={{addToast, removeToast}}>
            {children}
            <ToastContainer messages={messages}/>
        </ToastContext.Provider>
    );

}

function useToast() {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('context must be used within ToastContext');
    }

    return context;
}

export { ToastProvider, useToast };