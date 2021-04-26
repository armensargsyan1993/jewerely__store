import React from 'react'
import { InputCreator } from '../InputCreator/InputCreator'
import styles from './Search.module.scss'

export const Search = () => {
  // const dispatch = useDispatch()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(searchThunk(e.target.value))
    // console.log(e.target.value);
  }
  return (
    <div className={styles.root}>
        <InputCreator onCHange={onChange}/>
    </div>

  )
}

