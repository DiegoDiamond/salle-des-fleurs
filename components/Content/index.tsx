import React from 'react'
import styles from './Content.module.scss'

export default function Content({ children }) {
    return <section className={styles.content}>{children}</section>
}
