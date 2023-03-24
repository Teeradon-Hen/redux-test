import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as testt from '../reducers/test/Test1'

export default function Test() {
    const dispatch = useDispatch()
    const tezt = useSelector(state => state.test.Test1.test)

    return (
        <div>
            <button onClick={() => dispatch(testt.increment())}> Click</button>
            {tezt}
        </div>
    )
}
