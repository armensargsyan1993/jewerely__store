
import React, { useState } from 'react'
import styles from './InputCreator.module.scss'

interface IInputProps {

} 
export const InputCreator:React.FC<IInputProps> = (props) => {
    const [focus, setFocus] = useState(false)

    const handleFocus = () => {
        setFocus(() => true)
    }

    return (
        <div className={styles.root}>
            <input onFocus={handleFocus} type="search"/>
        </div>
    )
}
