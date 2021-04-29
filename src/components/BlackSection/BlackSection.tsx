
import React from 'react'
import styles from './BlackSection.module.scss'

interface IBlackSectionProps {

}
export const BlackSection:React.FC<IBlackSectionProps> = ({children}) => {
    return (
        <section className={styles.root}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}
