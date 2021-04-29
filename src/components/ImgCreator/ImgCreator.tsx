import React from 'react'
import { useDispatch } from 'react-redux'
import { tabsActions } from '../../redux/tabs/tabsActions'
import { useSelector } from '../overrideHooks'
import styles from './ImgCreator.module.scss'

interface IImgProps {
  imgArr: Array<string>
  id: string
}

const getData = (data: Array<string>) => {
  let arr = data.map((e, i, arr) => {
    let elemSrc = arr[Math.floor(Math.random() * arr.length)]
    return (
      <div className={styles.innerContainer} key={e}>
        <img className={styles.img} src={elemSrc} alt={elemSrc} />
      </div>
    )
  })
  return arr
}

export const ImgCreator: React.FC<IImgProps> = ({ id, imgArr }) => {
  const dispatch = useDispatch()
  let arr = useSelector(state => state.tabs.data[id])
  if(!arr){
    arr = getData(imgArr)
    dispatch(tabsActions.add({[id]:arr}))
  }
  return <div className={styles.root}>{arr}</div>
}
