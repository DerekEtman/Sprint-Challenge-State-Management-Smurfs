import React from "react";
import ReactDOM from "react-dom";
// redux parts
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
//reducers
import {reducer} from './store/reducers';
//style
import "./index.css";
// components
import App from "./components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk,logger)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
