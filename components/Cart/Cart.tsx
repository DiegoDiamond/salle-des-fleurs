import React from 'react'
import cls from 'classnames'
import styles from './Cart.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import productsData from '../../redux/productsData'
import BlockButtonsBuy from '../Item/BlockButtonsBuy/BlockButtonsBuy'
import { removeCartItemsAction } from '../../redux/reducers/cartReducer'
import { inputValueChangeAction } from '../../redux/reducers/modalReducer'

export default function Cart() {
    const { cartItems, inputValues } = useAppSelector(({ cart, modal }) => ({
        cartItems: cart.cartItems,
        inputValues: modal.inputValues,
    }))
    const dispatch = useAppDispatch()

    const onRemoveItemInCart = (id) => {
        dispatch(removeCartItemsAction(id))
        dispatch(inputValueChangeAction({ id, inputValue: 1 }))
    }
    return (
        <div className={styles.cart}>
            <div className={styles.cart__items}>
                {cartItems.map((item, idx) => {
                    const id = item
                    const counter = inputValues.find((item) => item.id === id).inputValue
                    {
                        console.log(counter)
                    }
                    return (
                        <div className={styles.item}>
                            <div className={styles.item__counter}>{idx + 1}</div>
                            <div className={styles.item__preview}>
                                <img className={styles['item__preview-img']} src={productsData[id].imgPath} />
                            </div>
                            <div className={styles.item__title}>{productsData[id].title}</div>

                            <div className={styles.item__price}>
                                <i className={cls('fas fa-ruble-sign', styles['item__price-icon'])}></i>
                                {productsData[id].price}
                            </div>
                            <div className={styles.item__block}>
                                <BlockButtonsBuy id={id} disabled />
                            </div>
                            <div className={styles['item__total-price']}>
                                <i className={cls('fas fa-ruble-sign', styles['item__price-icon'])}></i>
                                {counter * productsData[id].price}
                            </div>
                            <div className={styles.item__remove} onClick={() => onRemoveItemInCart(id)}>
                                <i className={cls('bi bi-x-circle', styles['item__icon-remove'])}></i>
                            </div>
                        </div>
                    )
                })}
            </div>
            {cartItems.length > 0 ? (
                <p className={styles.total}>
                    Итого к оплате: <i className={cls('fas fa-ruble-sign', styles['item__price-icon'])}></i>
                    {cartItems.reduce(
                        (sum, item) =>
                            sum + inputValues.find((el) => el.id == item).inputValue * productsData[item].price,
                        0
                    )}
                </p>
            ) : (
                <p className={styles.total}>Корзина пуста</p>
            )}
        </div>
    )
}
