import React from 'react'
import ItemNavigation from './ItemNavigation'
import styles from './Navigation.module.scss'

export default function Navigation() {
    return (
        <div className={styles.navigation}>
            <ul className={styles.navigation__list}>
                <ItemNavigation route={'/products'} title="Мои товары" icon="fas fa-store" />
                <ItemNavigation route={'/messages'} title="Сообщения" icon="far fa-comments" />
                <ItemNavigation route={'/cart'} title="Корзина" icon="bi bi-basket3" />
                <ItemNavigation route={'/friends'} title="Друзья" icon="bi bi-people" />
                <ItemNavigation route={'/alerts'} title="Оповещения" icon="far fa-bell" />
                <ItemNavigation route={'/options'} title="Настройки" icon="bi bi-gear" />
            </ul>
        </div>
    )
}
