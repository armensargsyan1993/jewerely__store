import React from 'react'
import { pictures } from '../../assets'
import '../../global.scss'
import { MyTabs } from '../../MyTabs/MyTabs'
import { Title } from '../../Title/Title'
import styles from './Home.module.scss'

export const Home = () => {
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
                {new Array(3).fill(' ').map((e,i) => {
                  return <div key={i} className={styles.imgContainer}>
                  <img src={pictures.homeBottom} alt="Fine Jewelry" />
                </div>
                })}
              </div>
              <div className={`${styles.bottomPictures}`}>
              {new Array(3).fill(' ').map((e,i) => {
                  return <div key={i} className={styles.imgContainer}>
                  <img src={pictures.homeBottom} alt="Fine Jewelry" />
                </div>
                })}
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
