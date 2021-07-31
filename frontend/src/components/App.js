import React from 'react'
import { BrowserRouter, Redirect } from 'react-router-dom'
import { PublicRoute } from './routes/PublicRoute'
import { PrivateRoute } from './routes/PrivateRoute'
import { routes } from '../utils/routes'

export const App = () => {

    const renderRoutes = routes.map((route) => {
        if (!route.isProtected) return <PublicRoute restricted={route.restricted} component={route.component} path={route.path} exact />
        if (route.isProtected) return <PrivateRoute component={route.component} path={route.path} exact />
    })

    return (
        <BrowserRouter>
            {renderRoutes}
        </BrowserRouter>
    )
}
