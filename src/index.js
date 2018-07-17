import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import hobbitReducer from "./reducers/index";

import thunk from 'redux-thunk'

const store = createStore(hobbitReducer, applyMiddleware(thunk))

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);