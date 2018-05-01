import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './components/App.js';
const color = Math.random() > 0.5?'green':'red';



//App.defaultProps = {
//    headerMessage: 'Welcome!!'
//};

ReactDOM.render(
    <App headerMessage="Welcome to React world"/>,
//    <h2 style={{color}}>Hello Wecome to React -- {Math.random()}</h2>,
    document.getElementById('root')
);

