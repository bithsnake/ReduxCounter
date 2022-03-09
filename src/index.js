import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './store/store';

//wrap the app with he Provider and set the store attribute to out store to get access to the store
//child components can now tap into the store and
ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>
    ,
document.getElementById('root'));
