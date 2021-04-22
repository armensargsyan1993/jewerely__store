import React from 'react'
import styles from './Search.module.scss'
import { useDispatch } from 'react-redux'
import { searchThunk } from '../../redux/search/searchActions'
import { SvgCreator } from '../SvgCreator/SvgCreator'
import { icons } from '../assets'

export const Search = () => {
  const dispatch = useDispatch()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchThunk(e.target.value))
  }
  const handleFocus = (e:React.ChangeEvent<HTMLInputElement>) => {
      console.log(`object`);
  }
  return (
    <div className={styles.root}>
      <label>
            <SvgCreator clsName={styles.icon} svgHref={`${icons.search}#search`} />
          <input onFocus={handleFocus} type="search"/>
      </label>
    </div>
  )
}
