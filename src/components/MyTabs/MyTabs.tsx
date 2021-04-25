import React from 'react'
import styles from './MyTabs.module.scss'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

export const MyTabs = () => {
  return (
    <div className={styles.root}>
      <Tabs>
        <TabList className={styles.tabList}>
          <Tab className={styles.tab}>title 1</Tab>
          <Tab className={styles.tab}>Title 2</Tab>
          <Tab className={styles.tab}>Title 3</Tab>
          <Tab className={styles.tab}>Title 4</Tab>
          <Tab className={styles.tab}>Title 5</Tab>
          <Tab className={styles.tab}>Title 6</Tab>
        </TabList>
        <TabPanel>
          
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}
