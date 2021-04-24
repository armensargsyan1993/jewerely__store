
import React from 'react'
import { Button } from '../Button/Button'
import styles from './Title.module.scss'

interface ITitleProps {
title:string,
text?:string,
subtitle?:string,
btnText?:string,
clsName?:string
}

export const Title:React.FC<ITitleProps> = ({title,subtitle,text,btnText,clsName = ''}) => {
    return (
        <div className={styles.root}>
            {subtitle && <span className={`${styles.subtitle} ${clsName}`} >{subtitle}</span>}
            <h1 className={`${styles.title} ${clsName}`} >{title}</h1>
            {text && <p className={`${styles.text} ${clsName}`}>{text}</p>}
            {btnText && <Button clsName={clsName} btnText={btnText} />}
        </div>
    )
}
