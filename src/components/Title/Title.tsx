
import React from 'react'
import { Button } from '../Button/Button'
import styles from './Title.module.scss'

interface ITitleProps {
title:string,
text?:string,
subtitle?:string,
btnText?:string,
clsName?:string,
h1?:boolean
}

export const Title:React.FC<ITitleProps> = ({h1 = false,title,subtitle,text,btnText,clsName = ''}) => {
    return (
        <div className={styles.root}>
            {subtitle && <span className={`${styles.subtitle} ${clsName}`} >{subtitle}</span>}
            {h1 ? 
                <h1 className={`${styles.masterTitle} ${clsName}`} >{title}</h1>
                :
                <h2 className={`${styles.title} ${clsName}`} >{title}</h2> }
            {text && <p className={`${styles.text} ${clsName}`}>{text}</p>}
            {btnText && <Button clsName={clsName} btnText={btnText} />}
        </div>
    )
}
