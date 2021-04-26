import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Button.module.scss'

interface IButton {
  btnText: string
  clsName:string
}

export const Button: React.FC<IButton> = ({ btnText,clsName = ''}) => {
  return (
    <div className={styles.root}>
    <NavLink className={`${styles.button} ${clsName}`} to='catalog'>{btnText}</NavLink>
    </div>
  )
}
