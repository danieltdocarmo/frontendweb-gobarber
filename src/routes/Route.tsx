import React, { Component } from 'react';

import {RouteProps as ReactPropsDom, Route as ReactRouteDom, Redirect} from 'react-router-dom';

import {useAuth} from '../hooks/Auth';

interface RouteProps extends ReactPropsDom{
    isPrivate?: Boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({isPrivate = false, component: Component, ...rest})=>{
    const {user} = useAuth();
    
    
    return(   <ReactRouteDom {...rest}
        render={
            ({location})=>{
                return(
                    isPrivate == !!user ? (<Component/>) : (<Redirect to={{
                        pathname: isPrivate ? '/' : 'dashboard',
                        state: {from: location} 
                    }} /> 
                ))
            }
        }
    />)
}

export default Route;