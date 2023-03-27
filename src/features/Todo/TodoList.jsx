import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function TodoList() {
    return (
        <div>TodoList
            <Link to="add" >add</Link>
        </div>
    )
}
