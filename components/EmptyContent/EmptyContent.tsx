import React from 'react'
import styles from './EmptyContent.module.scss'

export default function EmptyContent({ title }) {
    return (
        <div className={styles.empty}>
            <div className={styles.empty__inner}>
                <h3 className={styles['empty__page-name']}>{title}</h3>
                <h2 className={styles.empty__title}>Данная страница еще в разработке</h2>
            </div>
        </div>
    )
}
