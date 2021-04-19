const fs = require('fs')
const path = require('path')
const rimraf = require("rimraf")

const srcPath = path.dirname(__dirname)

const componentsArr = [
   'Test',
    [
        '.tsx',
        '.module.scss'
    ]
]


Promise.resolve()
.then(() => {
    const createComponents = new TemplateForCreateBasicLogic(componentsArr)

    createComponents.createLogic(false)
    // createComponents.removeLogic()
})


//createLogic() to create components files and redux files
//removeLogic() to delete packages in (redux + components) who combines in componentsArr 

//if need another template crete function like this
/* const customTemplateCreator = (e) => {
    return( 
    `
<div>
    <img src="" alt=""/>
</div>
    `
    )
} 
and give it TemplateForCreateBasicLogic to second argument*/



















class TemplateForCreateBasicLogic {

    #baseComponentTemplate = (name) => {
        return(
`
import React from 'react'
import styles from './${name}.module.scss'

export const ${name} = () => {
    return (
        <div className={styles.root}>
            
        </div>
    )
}
`
        )
    }
    #baseReducerTemplate = (name) =>{
        const typeName = name[0].toUpperCase() + name.slice(1)
        return (
`

import { ${typeName}ActionTypes, ErrorType } from "./${name}Actions"
import { ${typeName}Types } from "./${name}Types"

const initialState = {
    start:false,
    process:false,
    end:false,
    error:null as null | ErrorType,
}



export const ${name}Reducer = (state:InitialState = initialState,action:${typeName}ActionTypes):InitialState => {
    switch(action.type){
        case ${typeName}Types.START:
            return {
                ...state,
                start:true,
                end:false,
            }
        case ${typeName}Types.PROCESS:
            return {
                ...state,
                process:true,
            }
        case ${typeName}Types.END:
            return {
                ...state,
                start:false,
                process:false,
                end:true,
                ...action.payload
            }
        case ${typeName}Types.ERROR:
            return {
                ...state,
                start:false,
                process:false,
                end:false,
                ...action.payload
            }
        case ${typeName}Types.RESET:
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
`
        )
    }
    #baseTypesTemplate = (name) =>{
        const typeName = name[0].toUpperCase() + name.slice(1)
        const constName = name.toUpperCase()
        return (
`
export enum ${typeName}Types {
    START = '${constName}/${constName}__START',
    PROCESS = '${constName}/${constName}__PROCESS',
    END = '${constName}/${constName}__END',
    ERROR = '${constName}/${constName}__ERROR',
    RESET = '${constName}/${constName}__RESET',
}

`
        )
    }
    #baseActionsTemplate = (name) =>{
        const typeName = name[0].toUpperCase() + name.slice(1)
        return (
`
import { requestAPI } from "../../api/requestMethod"
import { GetActionsTypes, ThunkType } from "../../globalTypes";
import { ${typeName}Types } from './${name}Types';


export const ${name}Actions = {
    start:() => {
        return {type:${typeName}Types.START} as const
    },
    process:() => {
        return {type:${typeName}Types.PROCESS} as const
    },
    end:(payload:EndPayload) => {
        return {type:${typeName}Types.END,payload} as const
    },
    error:(payload:ErrorPayload) => {
        return {type:${typeName}Types.ERROR,payload} as const
    },
    reset:() => {
        return {type:${typeName}Types.RESET} as const
    }
}

export type ${typeName}ActionTypes = GetActionsTypes<typeof ${name}Actions>

export const ${name}Thunk = ():ThunkType<${typeName}ActionTypes> => (dispatch) => {
    dispatch(${name}Actions.start())
    dispatch(${name}Actions.process())
    requestAPI.${name}()
    .then(data => {
        dispatch(${name}Actions.end(data))
    })
    .catch(e => {
        dispatch(${name}Actions.error(e))
    })
}


type EndPayload = {
    success: boolean;
}

type ErrorPayload = {
    success:boolean,
    error:ErrorType
}

export type ErrorType = {
    [key:string]:string
}


`
        )
    }

    constructor(arr =['TEST',['.jsx','.scss']],func = () => ''){
        this.arr = arr
        this.componentsPath = path.join(srcPath,'components')
        this.reduxPath = path.join(srcPath,'redux')
        this.func = func
    }


    #createReduxLogic = (name) =>{
        fs.mkdir(`${this.reduxPath}/${name}`,(err) => {})
        fs.stat(`${this.reduxPath}/${name}/${name}Reducer.ts`, (err) => {  
            if (err) {
                fs.appendFile(`${this.reduxPath}/${name}/${name}Reducer.ts`,this.#baseReducerTemplate(name),(err) => {})
                fs.appendFile(`${this.reduxPath}/${name}/${name}Types.ts`,this.#baseTypesTemplate(name),(err) => {})
                fs.appendFile(`${this.reduxPath}/${name}/${name}Actions.ts`,this.#baseActionsTemplate(name),(err) => {})
            } else {
                return
            }
        });
    }

    createLogic(bool = true){
        this.arr.forEach(e => {
            if(Array.isArray(e)){
                return
            }
            fs.mkdir(`${this.componentsPath}/${e}`,(err) => {})
               this.arr[this.arr.length-1].forEach(e2 => {
                   if(e2 === '.jsx' || e2 === '.tsx'){
                    fs.stat(`${this.componentsPath}/${e}/${e}${e2}`, (err) => {  
                        if (err) {
                            fs.appendFile(`${this.componentsPath}/${e}/${e}${e2}`,
                            this.func(e) || this.#baseComponentTemplate(e)                

                            ,(err) => {})
                        } else {
                            return
                        }
                    });
                    return
                   }
                fs.appendFile(`${this.componentsPath}/${e}/${e}${e2}`,'',(err) => {})
                bool && this.#createReduxLogic(e.toLowerCase())
            })
        })
    }
    removeLogic(){
        this.arr.forEach(e => {
            if(Array.isArray(e)){
                return
            }
            rimraf(`${this.componentsPath}/${e}`,(err) => {})
            rimraf(`${this.reduxPath}/${e}`,(err) => {})
        })
    }
}
