import React from 'react'
import { connect } from 'react-redux'
import * as Test2 from '../reducers/test/Test2'

const mapStateToProps = state => {
    console.log(state);
    return ({
        value: state.test.Test2.value
    })
}

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(Test2.increment()),
    decrement: () => dispatch(Test2.decrement())
})
function Test(props) {
    console.log(props);
    const { value, increment, decrement } = props
    return (
        <div className="card">
            <button onClick={() => increment()}>
                +
            </button>
            <button onClick={() => decrement()}>
                -
            </button>
            <p>
                count is {value}
            </p>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)