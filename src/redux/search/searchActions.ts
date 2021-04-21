import { ISearch } from './../../api/requestMethod';


import { requestAPI } from "../../api/requestMethod";
import { GetActionsTypes, ThunkType } from "../../globalTypes";
import { SearchTypes } from './searchTypes';


export const searchActions = {
    start:() => {
        return {type:SearchTypes.START} as const
    },
    process:() => {
        return {type:SearchTypes.PROCESS} as const
    },
    end:(payload:Array<ISearch>) => {
        return {type:SearchTypes.END,payload} as const
    },
    error:(payload:ErrorPayload) => {
        return {type:SearchTypes.ERROR,payload} as const
    },
    reset:() => {
        return {type:SearchTypes.RESET} as const
    }
}

export type SearchActionTypes = GetActionsTypes<typeof searchActions>

export const searchThunk = (payload:string):ThunkType<SearchActionTypes> => (dispatch) => {
    dispatch(searchActions.start())
    dispatch(searchActions.process())
    requestAPI.search(payload)
    .then((data:Array<ISearch>) => {
        dispatch(searchActions.end(data))
    })
    .catch((e) => {
        dispatch(searchActions.error(e))
    })
}

type ErrorPayload = {
    success:boolean,
    error:ErrorType
}

export type ErrorType = {
    [key:string]:string
}


