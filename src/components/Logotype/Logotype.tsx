
import React from 'react'
import { logo } from '../assets'
import { SvgCreator } from '../SvgCreator/SvgCreator'
import styles from './Logotype.module.scss'

export const Logotype:React.FC = () => {
    return (
        <div className={styles.root}>
            <SvgCreator clsName={styles.logotype} svgHref={`${logo}#logotype`}/>
        </div>
    )
}
