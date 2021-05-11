import React from 'react'
import { Provider } from 'react-redux'
import Cart from '../components/Cart/Cart'
import EmptyContent from '../components/EmptyContent/EmptyContent'
import { store } from '../redux/store'
import MainLayout from './MainLayout'

export default function cart() {
    return (
        <Provider store={store}>
            <MainLayout>
                {/* <EmptyContent title={'Корзина'} /> */}
                <Cart />
            </MainLayout>
        </Provider>
    )
}
