import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';

import Route from './Route';

import Login from '../pages/signin';
import SignUp from '../pages/signup';
import Dashboard from '../pages/dashboard';

const Routes: React.FC = ()=>(

        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/cadastro' component={SignUp}/>
                <Route path='/dashboard' isPrivate={true} component={Dashboard} />
            </Switch>
        </BrowserRouter>

);

export default Routes;