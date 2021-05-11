import React from 'react'
import EmptyContent from '../components/EmptyContent/EmptyContent'
import MainLayout from './MainLayout'

export default function messages() {
    return (
        <MainLayout>
            <EmptyContent title={'Сообщения'} />
        </MainLayout>
    )
}
