import { tabsReducer } from './tabs/tabsReducer';
import { searchReducer } from './search/searchReducer';
import { combineReducers } from "redux";

export const config = combineReducers({
    search:searchReducer,
    tabs:tabsReducer
})
const initialState = {}

export const rootReducer = (state:any,action:any):InitialState => {
    return config(state,action)
}

type InitialState = typeof initialState