
import React from 'react'
import styles from './ImgCreator.module.scss'

interface IImgProps{
    src:string
}
export const ImgCreator:React.FC<IImgProps> = ({src}) => {
    return (
        <div className={styles.root}>
            <img src={src} alt=""/>
        </div>
    )
}
