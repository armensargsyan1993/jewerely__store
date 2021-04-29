import React from 'react'
import styles from './MyTabs.module.scss'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { pictures } from '../assets'
import  { ImgCreator }  from '../ImgCreator/ImgCreator'


export const MyTabs = () => {
    const imgArr = [
      pictures.rect5_1,
      pictures.rect5_2,
      pictures.rect5_3,
      pictures.rect5_4,
      pictures.rect5_5,
      pictures.rect5_6,
    ]
    const titleArr = [
      'wedding', 
      'for husband', 
      'for wife', 
      'for partner', 
      'collection', 
      'rarity'
    ]
  return (
    <div className={styles.root}>
      <div className="container">
      <Tabs>
        <TabList className={styles.tabList}>
          {titleArr.map(e => {
            return <Tab key={e.replace(/\s/,'')} className={styles.tab}>{e}</Tab>
          })}
        </TabList>
         {imgArr.map((e,i) => {

           return <TabPanel key={e.replace(/\s/,'')}>
           <ImgCreator id={`${i}`} imgArr={imgArr}/>
         </TabPanel>
         })}
      </Tabs>
      </div>
    </div>
  )
}
