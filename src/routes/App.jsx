import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '@styles/global.sass';
import Layout from '../containers/Layout';
import Home from '@pages/Home'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App