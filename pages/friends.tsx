import React from 'react'
import EmptyContent from '../components/EmptyContent/EmptyContent'
import MainLayout from './MainLayout'

export default function friends() {
    return (
        <MainLayout>
            <EmptyContent title={'Друзья'} />
        </MainLayout>
    )
}
