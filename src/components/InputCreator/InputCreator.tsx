import React, { useState } from 'react'
import { icons } from '../assets'
import { SvgCreator } from '../SvgCreator/SvgCreator'
import styles from './InputCreator.module.scss'

interface IInputProps {
  onFocus?: () => void
  onCHange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  right?:boolean
}
export const InputCreator: React.FC<IInputProps> = (props) => {
  const [focus, setFocus] = useState(false)
  const [value,setValue] = useState('')

  const onFocus = () => {
    setFocus(() => true)
    props.onFocus && props.onFocus()
  }
  const onBlur = () => {
    setFocus(() => false)
  }

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    props.onCHange && props.onCHange(e)
    setValue(() => e.target.value)
  }

  const jsxArr = [
    <SvgCreator key={111} clsName={`${styles.icon} ${focus || value ? styles.iconFocus : ''}`} svgHref={`${icons.search}#search`} />,
    <input
        onChange={onChange}
        className={`${styles.input} ${focus || value ? styles.inputFocus : ''}`}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        placeholder="search"
        key={222}
    />
  ]

  if(props.right){
      jsxArr.reverse()
  }

  return (
    <div className={styles.root}>
        <label>
            {jsxArr}
        </label>
    </div>
  )
}
