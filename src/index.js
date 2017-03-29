import React from 'react';
import ReactDOM from 'react-dom';


const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <App />, rootElement
);
