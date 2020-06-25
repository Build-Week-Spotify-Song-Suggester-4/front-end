import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest}){
    return (
        <Router>
            <Route {...rest} render={props => {
                if(localStorage.getItem('token')){
                    return <Component  {...props} />
                } else {
                    return <Redirect to={'/login'} />
                }
            }}/>
        </Router>

    )
}