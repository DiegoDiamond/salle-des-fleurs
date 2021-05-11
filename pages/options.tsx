import React from 'react'
import EmptyContent from '../components/EmptyContent/EmptyContent'
import MainLayout from './MainLayout'

export default function options() {
    return (
        <MainLayout>
            <EmptyContent title={'Настройки'} />
        </MainLayout>
    )
}
