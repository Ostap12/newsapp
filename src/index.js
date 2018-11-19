import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import App from './components/App';
import NotFound from './components/NotFound';


import './css/bootstrap.min.css';
import './css/style.css';


const Root = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={App}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
};
render(<Root/>, document.querySelector('#app'));

