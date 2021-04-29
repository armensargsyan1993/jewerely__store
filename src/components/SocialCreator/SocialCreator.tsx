
import React from 'react'
import styles from './SocialCreator.module.scss'

interface ISocialCreatorProps{
    
}

export const SocialCreator:React.FC<ISocialCreatorProps> = ({children}) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    )
}
