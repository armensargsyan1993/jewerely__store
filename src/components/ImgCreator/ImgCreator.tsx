import React from 'react'
import styles from './ImgCreator.module.scss'

interface IImgProps {
  imgArr: Array<string>
}

export const ImgCreator: React.FC<IImgProps> = ({ imgArr }) => {
  return (
    <div className={styles.root}>
        {imgArr.map((e,i,arr) => {
            let elemSrc = arr[Math.floor(Math.random() * arr.length)]
        return (
            <div className={styles.innerContainer} key={e}>
                 <img className={styles.img} src={elemSrc} alt={elemSrc} />
            </div>
        )
      })}
    </div>
  )
}
