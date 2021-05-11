import React from 'react'
import cls from 'classnames'

import { sortOptionsData, sortDirectionAction, sortOptionAction } from '../../../redux/reducers/sortReducer'
import { RootState } from '../../../redux/store'
import { searchTermAction } from '../../../redux/reducers/searchReducer'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import styles from './Filters.module.scss'

export default function Filters() {
    const [visiblePopUp, setVisiblePopUp] = React.useState(false)   

    const dispatch = useAppDispatch()
    const { sortDirection, sortOption, searchTerm } = useAppSelector(({ sort, search }: RootState) => {
        return {
            sortDirection: sort.sortDirection,
            sortOption: sort.sortOption,
            searchTerm: search.searchTerm,
        }
    })

    const sortRef = React.useRef()

    React.useEffect(() => {
        document.body.addEventListener('click', (event) => outSideClick(event))
        return () => document.body.removeEventListener('click', (event) => outSideClick(event))
    }, [])

    const outSideClick = (event) => {
        if (!event.path.includes(sortRef.current)) setVisiblePopUp(false)
    }

    const changeSortOption = (index) => {
        dispatch(sortOptionAction(index))
        setVisiblePopUp(false)
    }
    const changeSortDirection = () => {
        dispatch(sortDirectionAction(!sortDirection))
    }

    const clearInput = () => {
        dispatch(searchTermAction(''))
    }
    const changeInput = (event) => {
        dispatch(searchTermAction(event.target.value))
    }

    const idx = Object.keys(sortOptionsData).find((key) => sortOptionsData[key].field === sortOption)

    return (
        <div className={styles.filters}>
            <div className={styles['search-box']}>
                <input
                    type="text"
                    className={styles.filter__search}
                    placeholder="Поиск..."
                    value={searchTerm}
                    onChange={(event) => changeInput(event)}
                />
                <i className={cls('bi bi-x', styles['icon-cancel'])} onClick={clearInput}></i>
            </div>
            {/* <i class="bi bi-funnel"></i> */}
            {/* <i class="bi bi-sort-up"></i> */}
            <div className={styles['sort']} ref={sortRef}>
                <i
                    className={cls(`bi bi-sort-${sortDirection ? 'up' : 'down'}`, styles['sort__icon'])}
                    onClick={changeSortDirection}
                ></i>
                <div className={styles['sort__option-selected']} onClick={() => setVisiblePopUp(!visiblePopUp)}>
                    {sortOptionsData[idx].title}
                </div>
                <ul className={cls(styles.sort__options, { [styles.hidden]: !visiblePopUp })}>
                    {sortOptionsData.map((item, index) => {
                        return (
                            <li className={styles.sort__option} key={item.id} onClick={() => changeSortOption(index)}>
                                <p className={styles['sort__option-name']}>{item.title}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
