import React from 'react'
import styles from './members.module.scss'

export default function Members() {
    return (
        <section className={styles.members}>
            <div className={styles.members__title}>Популярные цветоводы</div>
            <div className={styles.members__list}>
                {/* {users.map((user) => {
                    return <Person name={user.name.split(' ')[0]} rate={user.address.zipcode.slice(0, 3)} />
                })} */}
            </div>
        </section>
    )
}
