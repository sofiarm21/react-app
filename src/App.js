import React from 'react';
import { Route } from 'react-router-dom';


function App() {
    return (

        <div>
            <Route
                exact
                path='/'
                render={(props) => (
                    <p>
                        HomePage
                    </p>
                )}
            />
            <Route
                exact
                path='/page1'
                render={(props) => (
                    <p>
                        Page 1
                    </p>
                )}
            />
            <Route
                exact
                path='/page2'
                render={(props) => (
                    <p>
                        Page 2
                    </p>
                )}
            />
        </div>

    );
}

export default App;
