
import React, { Children } from 'react'
import styles from './FooterTitle.module.scss'

interface IFooterTitleProps{
    title:string
}
export const FooterTitle:React.FC<IFooterTitleProps> = ({title,children}) => {
    return (
        <div className={styles.root}>
            <h3 className={styles.title}>{title}</h3>
            {children}
        </div>
    )
}
