import React from 'react'

import Filters from './Filters/Filters'
import Item from '../Item/Item'
import ItemDetails from '../ItemDetails/ItemDetails'
import Modal from '../Modal/Modal'

import { RootState } from '../../redux/store'
import { useAppSelector } from '../../redux/hooks'

import styles from './Products.module.scss'

export default function Products({ productsData }) {
    const [modalActive, setModalActive] = React.useState(false)

    const { sortDirection, sortOption, searchTerm, targetIndex } = useAppSelector(
        ({ sort, search, modal }: RootState) => {
            return {
                sortDirection: sort.sortDirection,
                sortOption: sort.sortOption,
                searchTerm: search.searchTerm,
                targetIndex: modal.targetIndex,
            }
        }
    )

    const compare = (a, b, field) => {
        if (sortDirection) {
            return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0
        } else {
            return a[field] > b[field] ? -1 : a[field] < b[field] ? 1 : 0
        }
    }

    return (
        <div className={styles.products}>
            <Filters />
            <div className={styles.items}>
                {productsData
                    .filter((item) => {
                        return item.title.includes(searchTerm)
                    })
                    .sort((a, b) => compare(a, b, sortOption))
                    .map((item) => {
                        return <Item key={item.id + item.title} setModalActive={setModalActive} itemData={item} />
                    })}
            </div>

            {modalActive && (
                <Modal active={modalActive} setActive={setModalActive}>
                    <ItemDetails itemData={productsData[targetIndex]} />
                </Modal>
            )}
        </div>
    )
}
