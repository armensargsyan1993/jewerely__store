import React from 'react'
import styles from './Search.module.scss'
import { Input, InputAdornment } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { searchThunk } from '../../redux/search/searchActions'
import { SvgCreator } from '../SvgCreator/SvgCreator'
import { icons } from '../assets'

export const Search = () => {
  const dispatch = useDispatch()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(searchThunk(e.target.value))
  }
  return (
    <div className={styles.root}>
      <label>
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
      </label>
    </div>
  )
}
