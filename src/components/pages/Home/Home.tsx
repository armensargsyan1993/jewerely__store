import React from 'react'
import { icons, pictures } from '../../assets'
import { Title } from '../../Title/Title'
import styles from './Home.module.scss'
import '../../global.scss'
import { MyTabs } from '../../MyTabs/MyTabs'

export const Home = () => {
  const bottomData = (
    <div className={styles.imgContainer}>
      <img src={pictures.homeBottom} alt="Fine Jewelry" />
    </div>
  )
  return (
    <div className={styles.root}>
      <section className={styles.firstSection}>
        <div className={styles.bottom}>
          <div className="container">
            <Title
              h1={true}
              title={`best products`}
              btnText={`product catalog`}
            />
          </div>
          <div className={styles.bottomPicturesContainer}>
            <div className={`container`}>
              <div className={`${styles.bottomPictures}`}>
                {new Array(3).fill(bottomData)}
              </div>
              <div className={`${styles.bottomPictures}`}>
                {new Array(3).fill(bottomData)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.secondSection}>
        <Title
          clsName={styles.title}
          title={`real beauty is here`}
          subtitle={`events`}
        />
        <MyTabs/>
      </section>
    </div>
  )
}
