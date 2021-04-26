
import React from 'react'
import styles from './Blog.module.scss'

export interface IBlogProps{
    src:string,
    text:string
}
export const Blog:React.FC<IBlogProps> = ({src,text}) => {
    return (
        <div className={styles.root}>
            <img src={src} alt=""/>
            <span>{text}</span>
        </div>
    )
}
