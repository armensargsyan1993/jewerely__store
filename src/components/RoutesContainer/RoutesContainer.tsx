
import React from 'react'
import { Route, Switch } from 'react-router'
import { Home } from '../pages/Home/Home'
import styles from './RoutesContainer.module.scss'

export const RoutesContainer = () => {
    return (
        <div className={styles.root}>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    )
}
