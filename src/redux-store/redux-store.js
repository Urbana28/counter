import React from 'react';
import {combineReducers, createStore} from "redux";
import {counterReducer} from "../reducers/counterReducer";



let reducers = combineReducers({
    counterBlock: counterReducer
});

let store = createStore (reducers);

export default store;