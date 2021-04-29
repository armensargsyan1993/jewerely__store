

import { SizeActionTypes } from "./sizeActions"
import { SizeTypes } from "./sizeTypes"

const initialState = {
    isBurger:false
}

export const sizeReducer = (state:InitialState = initialState,action:SizeActionTypes):InitialState => {
    switch(action.type){
        case SizeTypes.ADD__BURGER:
            return {
                ...state,
                isBurger:true
            }
        case SizeTypes.REMOVE__BURGER:
            return {
                ...state,
                isBurger:false
            }
        default:
            return state
    }
}

type InitialState = typeof initialState
