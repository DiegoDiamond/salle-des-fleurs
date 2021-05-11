import React from 'react'
import cls from 'classnames'
import styles from './Profile.module.scss'

export default function Profile() {
    return (
        <div className={styles.user}>
            <div className={styles.user__card}>
                <img
                    className={styles['user__card-img']}
                    // src="https://image.flaticon.com/icons/png/512/147/147144.png"
                    src="https://source.unsplash.com/random/?people/400x300"
                    alt="..."
                ></img>
                <p className={styles['user__card-title']}>
                    <i className={cls('bi bi-box-arrow-in-right', styles['user__icon-logout'])}></i>Диего
                </p>
            </div>
        </div>
    )
}
