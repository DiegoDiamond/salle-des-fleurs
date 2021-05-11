import Link from 'next/link'
import React from 'react'
import styles from './header.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <p className={styles['logo__title-top']}>социальная сеть</p>
                <img src="./logo-1.png" alt="" />
                <Link href="/products">
                    <h1 className={styles.logo__text}>Salle des fleurs</h1>
                </Link>
                <p className={styles['logo__title-bottom']}>обмен и торговля цветами</p>
                <img src="./logo-2.png" alt="" />
            </div>
        </div>
    )
}
