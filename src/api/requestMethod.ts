import axios from "axios"

// const API__NAME = '?'
// const VERSION = '?'
// const AUTH__PATH = '?'

// const baseUrl = `?.com/${API__NAME}/${VERSION}/`

export interface ISearch {
    "albumId": string,
    "id": number,
    "title": string
    "url": string
    "thumbnailUrl": string
  }


const searchData:Array<ISearch> = []

const search = (payload:string) => {
    if(searchData.length){
        let filteredData = searchData.filter(e => {
            return e.title.startsWith(payload)
        })
        return Promise.resolve(filteredData)
    }
    return axios.get<Array<ISearch>>('https://jsonplaceholder.typicode.com/photos')
    .then(response => {
        searchData.push(...response.data)
        return response.data
    })
    .catch(err => {
        return err
    })
}


export const requestAPI = {
    search,
}

