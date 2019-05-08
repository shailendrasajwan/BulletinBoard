import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Note from './Note';
import Board from './Board'
import * as registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Board count={50}/>, document.getElementById('root'))
registerServiceWorker.unregister();

//ReactDOM.render(<Note />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//registerServiceWorker.unregister();
//serviceWorker();