

import { SearchActionTypes, ErrorType } from "./searchActions"
import { SearchTypes } from "./searchTypes"

const initialState = {
    start:false,
    process:false,
    end:false,
    error:null as null | ErrorType,
}



export const searchReducer = (state:InitialState = initialState,action:SearchActionTypes):InitialState => {
    switch(action.type){
        case SearchTypes.START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case SearchTypes.PROCESS:
            return {
                ...state,
                process:true,
            }
        case SearchTypes.END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                ...action.payload
            }
        case SearchTypes.ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                ...action.payload
            }
        case SearchTypes.RESET:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                error:{},
            }
        default:
            return state
    }
}

type InitialState = typeof initialState
