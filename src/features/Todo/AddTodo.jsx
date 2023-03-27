import { reduxForm } from 'redux-form/dist/redux-form'
import React from 'react'
import { addTodo } from '../../reducers/todo';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';

// let NewTodoForm = reduxForm({form: "TODOFORM"})(TodoForm)

const mapStateToProps = (state) => ({
    // ...getItem(REDUCER_NAME, state),// employeeRecords,employee,recordTypes
    // errors: getItemErrors(REDUCER_NAME, state),
    initialValues: {title:"ss",content:"00"},
    x:0
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (data) => {
        // dispatch(addTodo(data))
        console.log(data);
        alert(0)
    }
});

let NewTodoForm = connect(mapStateToProps, mapDispatchToProps)(TodoForm)

export default function AddTodo(props) {
    console.log(props);
    return (
        <div>
        <NewTodoForm />

        </div>
        // <div>asdasd</div>
    )
}
