import React from 'react'
import styles from './Item.module.scss'
import cls from 'classnames'
import { useAppDispatch } from '../../redux/hooks'
import { targetIndexAction } from '../../redux/reducers/modalReducer'
import BlockButtonsBuy from './BlockButtonsBuy/BlockButtonsBuy'

const Item = ({ setModalActive, itemData }) => {
    const { id, imgPath, title, price } = itemData

    const dispatch = useAppDispatch()

    const onModal = (index) => {
        dispatch(targetIndexAction(index))
        setModalActive(true)
    }
    return (
        <div className={styles.item}>
            <div className={styles.item__img} onClick={() => onModal(id)}>
                <i className={cls('bi bi-zoom-in', styles.item__zoom)}></i>
                <img src={imgPath} alt={`${title}`} />
            </div>
            <div className={styles.item__info}>
                <p className={styles.item__title}>{title}</p>
                <p className={styles.item__price}>
                    <i className={cls('fas fa-ruble-sign', styles['item__price-icon'])}></i> {price}
                </p>
            </div>
            <BlockButtonsBuy id={itemData.id} />
        </div>
    )
}
export default Item
