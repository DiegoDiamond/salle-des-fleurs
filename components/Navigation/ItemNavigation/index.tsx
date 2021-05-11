import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'
import styles from './ItemNavigation.module.scss'

type ItemNavProps = {
    route: string
    title: string
    icon: string
}
export default function ItemNavigation({ route, title, icon }: ItemNavProps) {
    return (
        <div>
            <Link href={route}>
                <div className={styles['navigation__item']}>
                    <i className={classNames(styles['navigation__item-icon'], icon)}></i>
                    <a className={styles['navigation__item-link']}>{title}</a>
                </div>
            </Link>
        </div>
    )
}
