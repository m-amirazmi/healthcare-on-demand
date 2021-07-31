import React from 'react'
import { TopNav } from '../components/generals/TopNav'

export const MainLayout = (props) => {
    return (
        <>
            <TopNav />
            {props.children}
        </>
    )
}
