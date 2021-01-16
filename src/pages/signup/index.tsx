import React, {FC, useCallback, useContext} from 'react';
import {Link} from 'react-router-dom';

import {useAuth} from '../../hooks/Auth';
import {useToast} from '../../hooks/Toast';

import api from '../../services/api';

import { Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';

import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';

import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/input';
import Button from '../../components/button';


import { Container, Content, Background, AnimationContainer } from './styles';

import Logo from '../../assets/logo.svg';


const SignUp: FC = () => {
    const formRef = React.useRef<FormHandles>(null);

    const {addToast} = useToast();
    const handlerForm = useCallback( async (data: Object)=>{

        try{
            formRef.current?.setErrors({});
        const schema = Yup.object().shape({
            name: Yup.string().required('Nome obrigatorio'),
            email: Yup.string().required('Digite um email').email('Digite um email valido!'),
            password: Yup.string().min(6, 'No minimo 6 digitos') 
        });
        
        await schema.validate(data, {
            abortEarly: false,
        });

        const response = await api.post('/users', data);

        addToast({
            type: 'sucess',
            description: 'Você foi redirecionado para a tela de login.',
            title: 'Cadastro realizado'
        })

        }catch(err){
            if(err instanceof Yup.ValidationError){

                const errors = getValidationErrors(err);
    
                formRef.current?.setErrors(errors);

                return
            }

            addToast({
                type: 'error',
                description: 'Realizar cadastro novamente',
                title: 'Erro no cadastro'})
        }
    },[]);

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={Logo} alt="Logo GoBarber" />
                    <Form ref={formRef} onSubmit={handlerForm}>
                        <h1>Faça seu cadastro</h1>
                        <Input name="name" placeholder="Name" icon={FiUser} />
                        <Input name="email" placeholder="E-mail" icon={FiMail} />
                        <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
                        <Button>Cadastrar</Button>
                    </Form>
                    <Link to='/'><FiArrowLeft />Voltar para Login</Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    )
};

export default SignUp
;