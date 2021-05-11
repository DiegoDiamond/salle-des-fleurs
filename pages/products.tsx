import React from 'react'
import Products from '../components/Products/Products'

import MainLayout from './MainLayout'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import productsData from '../redux/productsData'

export default function products() {
    return (
        <Provider store={store}>
            <MainLayout>
                <Products productsData={productsData} />
            </MainLayout>
        </Provider>
    )
}
