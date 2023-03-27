import ReactDOM from 'react-dom/client'
import React from 'react'

import App from './App'
import TodoList from './features/Todo/TodoList'
import AddTodo from './features/Todo/AddTodo'

import './index.css'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { createBrowserRouter, RouterProvider, Route, Routes, createRoutesFromElements } from 'react-router-dom'
//  import Router from './router'

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/'
  },
  {
    element: <TodoList />,
    path: '/todo',
  },
  {
    element: <AddTodo />,
    path: '/todo/add',
  }


])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={configureStore}>
      <RouterProvider router={router} />


    </Provider>
  // </React.StrictMode>,
)
