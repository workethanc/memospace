import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, Home, Login, Register, Wall } from 'containers';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home} />
            <Route path="login" component={Login} />
            <Route path="register" component={Register} />
            <Route path="wall" component={Wall} />
        </Route>
    </Router>, rootElement
);
