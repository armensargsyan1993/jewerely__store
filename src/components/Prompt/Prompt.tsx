import React, { useEffect, useState } from 'react'
import styles from './Prompt.module.scss'

interface IPromptProps {
  text?: string,
}
export const Prompt: React.FC<IPromptProps> = ({ text='enter text' }) => {
  return (
    <div className={`${styles.root}`}>
      <span className={`${styles.popupText} ${styles.show}`}>{text}</span>
    </div>
  )
}
