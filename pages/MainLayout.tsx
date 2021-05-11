import Head from 'next/head'
import React from 'react'
import styles from './index.module.scss'
import { LeftSidebar, RightSidebar, Header, Content } from '../components'

export default function MainLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Head>
                <link rel="icon" href="./pollen_flower.ico" />
                <title>Salle des fleurs</title>
            </Head>
            <Header />
            <LeftSidebar />
            <Content>{children}</Content>
            <RightSidebar />
        </div>
    )
}
