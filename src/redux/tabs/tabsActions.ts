
import { GetActionsTypes } from "../../globalTypes";
import { TabsTypes } from './tabsTypes';


export const tabsActions = {
    add:(payload:Payload) => {
        return {type:TabsTypes.ADD,payload} as const
    }
}

export type TabsActionTypes = GetActionsTypes<typeof tabsActions>

type Payload = {
    [key:string]:Array<any>
}

