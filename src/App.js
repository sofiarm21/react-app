import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage'
import Page1 from './pages/PageA'
import Page2 from './pages/PageB'


function App() {
    return (

        <div>
            <Route
                exact
                path='/'
                render={(props) => (
                    <HomePage />
                )}
            />
            <Route
                exact
                path='/pageA'
                render={(props) => (
                    <Page1 />
                )}
            />
            <Route
                exact
                path='/pageB'
                render={(props) => (
                    <Page2 />
                )}
            />
        </div>

    );
}

export default App;
