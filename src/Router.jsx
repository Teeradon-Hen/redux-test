import React from 'react'
import App from './App'
import Todo from './features/Todo'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default Router = () => {
    const router = createBrowserRouter([
        {
            element: <App />,
            path: '/'
        },
        {
            element: <Todo />,
            path: '/todo',
        }
    ])

    return <RouterProvider router={router} />
}

