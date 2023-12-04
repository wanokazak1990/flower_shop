import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {authReducer} from "./auth";
import {thunk} from "redux-thunk";


const rootReducer = combineReducers({
    auth: authReducer
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
