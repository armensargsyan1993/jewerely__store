import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Button.module.scss'

interface IButton {
  btnText: string
  clsName:string
  btnLink?:string
}

export const Button: React.FC<IButton> = ({ btnText,clsName = '',btnLink}) => {
  return (
    <div className={styles.root}>
    {btnLink && <NavLink className={`${styles.button} ${clsName}`} to={btnLink}>{btnText}</NavLink>}
    </div>
  )
}
