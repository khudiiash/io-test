import React from 'react';
import {LoginPage} from './pages'
import { Route, Switch } from "react-router-dom";
import './index.scss'

function App() {
    return (
        <Switch>
            <Route
                exact
                path='/'
                render={(props) => (<LoginPage {...props}/>)}
            />
            <Route
                path='/reset'
                render={(props) => (<LoginPage {...props} reset={true}/>)}
            />
            <Route
                path='/dashboard'
                render={(props) => <LoginPage {...props} dashboard={true}/>}
            />
        </Switch>
    );
}

export default App;