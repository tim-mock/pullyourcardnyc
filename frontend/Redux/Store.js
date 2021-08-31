import React from "react";

import { applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./Reducers/RootReducer";

import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'
 


import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

const middleware = applyMiddleware(thunk);

const composeEnhacers = composeWithDevTools({ trace: true, traceLimit: 25 });

const persistedReducer = persistReducer(persistConfig, rootReducer)
 

export default () => {
    let store = createStore(persistedReducer, composeEnhacers(middleware));
    let persistor = persistStore(store)
    return {store, persistor}
}
