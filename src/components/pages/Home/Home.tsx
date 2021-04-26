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
              btnLink={`catalogs`}
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
        <div className="container">
        <Title
          clsName={styles.title}
          title={`real beauty is here`}
          subtitle={`events`}
        />
        <MyTabs/>
        </div>
      </section>
      <section className={styles.thirdSection}>
        <div className="container">
          <Title
          subtitle={`Not sure what to choose?`}
          title={`Visit our showrooms all over the world`}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.`}
          btnText={`our salons`}
          btnLink={`salons`}
          />
        </div>
      </section>
      <section className={styles.fourthSection}>
        <div className="container">
          <Title
          clsName={styles.title}
          subtitle={`Not sure what to choose?`}
          title={`Visit our showrooms all over the world`}
          />
        </div>
      </section>
    </div>
  )
}
