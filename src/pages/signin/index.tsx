import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

import { FiMail, FiLock, FiArrowRightCircle } from 'react-icons/fi';

import Input from '../../components/input';
import Button from '../../components/button';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, AnimationContainer, Background } from './styles';

import Logo from '../../assets/logo.svg';


interface DataForm {
    email: string;
    password: string;
}

const Login: React.FC = () => {

    const formRef = React.useRef<FormHandles>(null);

    const { user, singIn } = useAuth();
    const { addToast, removeToast } = useToast();

    const handlerForm = useCallback(async (data: DataForm) => {

        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required('Digite um email').email('Digite um email valido!'),
                password: Yup.string().required('Digite sua senha'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            const credentials = { email: data.email, password: data.password }

            singIn(credentials);


        } catch (err) {

            console.error(err)
            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);

            addToast({
                type: 'error',
                title: 'Erro na autentificacao',
                description: 'Ocorreu um erro na tentativa de Sing Up',
            })
        }
    }, []);

    return (
        <Container>

            <Content>
                <AnimationContainer>
                    <img src={Logo} alt="Logo GoBarber" />

                    <Form ref={formRef} onSubmit={handlerForm}>
                        <h1>Faça seu login</h1>
                        <Input name="email" placeholder="E-mail" icon={FiMail} />
                        <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
                        <Button>Entrar</Button>
                        <a href=''>Esqueci minha senha</a>
                    </Form>
                <Link to='/cadastro' ><FiArrowRightCircle />Criar conta</Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    )
};

export default Login;