import React from 'react'
import styles from './Search.module.scss'
import { useDispatch } from 'react-redux'
import { searchThunk } from '../../redux/search/searchActions'
import { SvgCreator } from '../SvgCreator/SvgCreator'
import { icons } from '../assets'

export const Search = () => {
  const dispatch = useDispatch()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD
    // dispatch(searchThunk(e.target.value))
=======
    dispatch(searchThunk(e.target.value))
  }
  const handleFocus = (e:React.ChangeEvent<HTMLInputElement>) => {
      console.log(`object`);
>>>>>>> 94f29bba9f1e4b1064405c57d99f48422ddeb4e0
  }
  return (
    <div className={styles.root}>
      <label>
<<<<<<< HEAD
        <Input
          disableUnderline={true}
          className={styles.input}
          classes={{ focused: styles.focused }}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <SvgCreator
                clsName={styles.icon}
                svgHref={`${icons.search}#search`}
              />
            </InputAdornment>
          }
        />
=======
            <SvgCreator clsName={styles.icon} svgHref={`${icons.search}#search`} />
          <input onFocus={handleFocus} type="search"/>
>>>>>>> 94f29bba9f1e4b1064405c57d99f48422ddeb4e0
      </label>
    </div>
  )
}
