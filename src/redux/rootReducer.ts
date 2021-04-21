import { searchReducer } from './search/searchReducer';
import { combineReducers } from "redux";

export const config = combineReducers({
    search:searchReducer
})
const initialState = {}

export const rootReducer = (state:any,action:any):InitialState => {
    return config(state,action)
}

type InitialState = typeof initialState