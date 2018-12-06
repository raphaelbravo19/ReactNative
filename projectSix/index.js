/** @format */
import React, {Component} from 'react';

import {AppRegistry} from 'react-native';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {name as appName} from './app.json';

import reducers from './src/Store/reducers'
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

const appRedux = () => (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => appRedux);
