import {investReducer} from "./investReducer";
import {combineReducers, createStore} from "redux";
import {tradeReducer} from "./tradeReducer";

let reducers = combineReducers({
    investData : investReducer,
    tradeData: tradeReducer,
})

export let store = createStore(reducers)