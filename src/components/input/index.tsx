import React, { InputHTMLAttributes, ComponentType, useRef, useEffect, useState } from 'react';

import { useField } from '@unform/core';


import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const [isFocused, setIsFocused] = useState<Boolean>(false);
    const [isFilled, setIsFilled] = useState<Boolean>(false);

    function handlerFocus() {
        setIsFocused(true);
    }

    function handlerBlur() {
        setIsFocused(false);

        !!inputRef.current?.value ? setIsFilled(true) : setIsFilled(false);
    }

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })

    }, [])

    return (

        <Container isErrored={!!error} focused={isFocused}
            filled={isFilled}>
            {Icon && <Icon size={20} />}
            <input
                onFocus={handlerFocus}
                onBlur={handlerBlur}
                defaultValue={defaultValue} ref={inputRef} {...rest} />

            {error && <Error title={error}>
                <FiAlertCircle color='#c53030' size={20}>
                </FiAlertCircle>
            </Error>}
        </Container>
    )
};

export default Input;