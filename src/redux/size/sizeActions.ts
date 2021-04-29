
import { GetActionsTypes } from "../../globalTypes";
import { SizeTypes } from './sizeTypes';


export const sizeActions = {
    addBurger:() => {
        return {type:SizeTypes.ADD__BURGER} as const
    },
    removeBurger:() => {
        return {type:SizeTypes.REMOVE__BURGER} as const
    }
}

export type SizeActionTypes = GetActionsTypes<typeof sizeActions>

