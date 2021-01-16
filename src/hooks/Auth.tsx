import React, { createContext, useCallback, useContext } from 'react';

import api from '../services/api';

interface CredentialsProps {
    email: string;
    password: string;
}

interface userCredentials {
    token: string;
    user: Object;
}

interface AuthContextData {
    user: Object;
    singIn(credentials: CredentialsProps): Promise<void>;
    singOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('Context must be used within an AuthProvider');
    } else {
        return context;
    }

}

export const AuthProvider: React.FC = ({ children }) => {

    const [credentials, setCredentials] = React.useState<userCredentials>((): userCredentials => {

        const user = localStorage.getItem('@GoBarber-user');
        const token = localStorage.getItem('@GoBarber-token')

        if (token && user) {
            return { token, user: JSON.parse(user) }
        }

        return {} as userCredentials;
    });



    const singIn = useCallback(async ({ email, password }: CredentialsProps) => {
        const response = await api.post<userCredentials>('/sessions', { email, password });

        const { user, token } = response.data;

        localStorage.setItem('@GoBarber-user', JSON.stringify(user));
        localStorage.setItem('@GoBarber-token', token);

        setCredentials({ token, user });

    }, []);

    const singOut = useCallback((): void => {

        localStorage.removeItem('@GoBarber-user');
        localStorage.removeItem('@GoBarber-token');

        setCredentials({} as userCredentials);
    }, []);

    return (
        <AuthContext.Provider value={{ user: credentials.user, singIn, singOut }} >
            {children}
        </AuthContext.Provider>
    );
}

