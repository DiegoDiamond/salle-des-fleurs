import React from 'react'
import Navigation from '../../Navigation'
import Profile from '../../Profile/Profile'
import styles from './leftSidebar.module.scss'

export default function LeftSidebar() {
    return (
        <div className={styles.leftSidebar}>
            <Profile />
            <Navigation />
        </div>
    )
}
