import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage'
import Page1 from './pages/PageA'
import Page2 from './pages/PageB'

import content from './content/constants'


function App() {
    return (

        <div>
            <Route
                exact
                path='/'
                render={(props) => (
                    <HomePage
                        content={content}
                    />
                )}
            />
            <Route
                exact
                path='/pageA'
                render={(props) => (
                    <Page1
                        content={content}
                    />
                )}
            />
            <Route
                exact
                path='/pageB'
                render={(props) => (
                    <Page2
                        content={content}
                    />
                )}
            />
        </div>

    );
}

export default App;
