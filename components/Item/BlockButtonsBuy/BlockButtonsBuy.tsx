import React from 'react'
import cls from 'classnames'
import styles from './BlockButtonsBuy.module.scss'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { inputValueChangeAction } from '../../../redux/reducers/modalReducer'
import { RootState } from '../../../redux/store'
import { updateCartItemsAction } from '../../../redux/reducers/cartReducer'

export default function BlockButtonsBuy({ id, disabled = false }) {
    const dispatch = useAppDispatch()
    const { inputValues, cartItems } = useAppSelector(
        ({ modal, cart }): RootState => {
            return {
                inputValues: modal.inputValues,
                cartItems: cart.cartItems,
            }
        }
    )

    const FirstRenderInput = inputValues.find((item) => item.id === id)
    const counter = FirstRenderInput === undefined ? { id, inputValue: 1 } : FirstRenderInput

    const onChangeInput = (operation) => {
        switch (operation) {
            case 'increment':
                dispatch(inputValueChangeAction({ id, inputValue: counter.inputValue + 1 }))
                return
            case 'decrement':
                if (counter.inputValue === 1) return
                dispatch(inputValueChangeAction({ id, inputValue: counter.inputValue - 1 }))
                return
        }
    }

    const onItemInCart = () => {
        dispatch(inputValueChangeAction({ id, inputValue: counter.inputValue }))
        dispatch(updateCartItemsAction(id))
    }

    const buttonTitle = cartItems.filter((item) => item === id).length > 0 ? 'В корзине' : 'Купить'

    return (
        <div className={styles.block__buy}>
            {!disabled && (
                <button className={styles['block__buy-button']} onClick={onItemInCart}>
                    {buttonTitle}
                </button>
            )}
            <i
                className={cls('bi bi-dash-circle', styles['block__buy-icon'])}
                onClick={() => onChangeInput('decrement')}
            ></i>
            <input className={styles['block__buy-counter']} type="text" value={counter.inputValue} readOnly />
            <i
                className={cls('bi bi-plus-circle', styles['block__buy-icon'])}
                onClick={() => onChangeInput('increment')}
            ></i>
        </div>
    )
}
