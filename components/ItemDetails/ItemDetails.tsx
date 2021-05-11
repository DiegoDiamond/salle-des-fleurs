import React from 'react'
import cls from 'classnames'

import styles from './ItemDetails.module.scss'
import Slider from '../Slider/Slider'
import BlockButtonsBuy from '../Item/BlockButtonsBuy/BlockButtonsBuy'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { bookmarkAddAction, bookmarkRemoveAction } from '../../redux/reducers/modalReducer'

const ItemDetails = ({ itemData }) => {
    const { id, title, price, tag, description, addImgs } = itemData

    const dispatch = useAppDispatch()

    const bookmarksActive = useAppSelector(({ modal }): Array<number> => modal.bookmarksActive)

    const bookmark = bookmarksActive.includes(id)

    const onBookmark = () => {
        bookmark ? dispatch(bookmarkRemoveAction(id)) : dispatch(bookmarkAddAction(id))
    }

    return (
        <div className={styles.item__details}>
            {console.log('RERENDER')}
            <Slider bgSets={[...addImgs]} />
            <div className={styles.item__about}>
                <div className={styles.item__bookmark} onClick={onBookmark}>
                    <i className={cls({ far: !bookmark, fas: bookmark }, 'fa-bookmark')}></i>
                </div>
                <div className={styles.item__title}>
                    <h3>{title}</h3>
                </div>
                <div className={styles.item__description}>{description}</div>
                <ul className={styles.item__tags}>
                    <li className={styles['item__tag-name']}>#{tag}</li>
                </ul>
                <div className={styles.item__price}>
                    <p>
                        {price} <i className={cls('fas fa-ruble-sign', styles['icon-ruble'])}></i>
                    </p>
                </div>
                <BlockButtonsBuy id={id} />
            </div>
        </div>
    )
}
export default ItemDetails
