import React from "react";

import { applyMiddleware } from "redux";

import thunk from "redux-thunk";
import RootReducer from "./Reducers/RootReducer";

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = applyMiddleware(thunk);

const composeEnhacers = composeWithDevTools({ trace: true, traceLimit: 25 });

export default store = createStore(RootReducer, composeEnhacers(middleware));
