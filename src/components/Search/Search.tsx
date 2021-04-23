import React from 'react'
import styles from './Search.module.scss'
import { useDispatch } from 'react-redux'
import { searchThunk } from '../../redux/search/searchActions'
import { InputCreator } from '../InputCreator/InputCreator'

export const Search = () => {
  const dispatch = useDispatch()
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