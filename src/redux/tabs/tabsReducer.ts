

import { TabsActionTypes } from "./tabsActions"
import { TabsTypes } from "./tabsTypes"

const initialState = {
    data: {}
}



export const tabsReducer = (state:InitialState = initialState,action:TabsActionTypes):InitialState => {
    switch(action.type){
        case TabsTypes.ADD:
            return {
                ...state,
                data:{
                    ...state.data,
                    ...action.payload
                }
            }
        default:
            return state
    }
}

type InitialState = {
    data:Data
}
type Data = {
    [key:string]:Array<any>
}