import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import qbReducer from './reducers';
import './index.css';
import RQMApp from './RQMApp';
import * as serviceWorker from './serviceWorker';

const store = createStore( qbReducer );

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <RQMApp />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
