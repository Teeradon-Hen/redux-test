import React from 'react'
import TextField from '../../component/form/TextField'
import { reduxForm, Field } from 'redux-form/dist/redux-form'

const renderField = (props) => {
    const { input, label, type, name } = props
    console.log(props);
    console.log({ input, label, type, name });
    return (
        <div>
            <label>{label}</label>
            <div>
                <input name={input.name} placeholder={label} type={type} />
            </div>
        </div>
    )
}




function TodoForm(props) {
    const { handleSubmit, submit, pristine, submitting } = props
    console.log(props);
    const x = (x) => {
        x.preventDefault()
        console.log(x);
        alert(8)
    }
    return (
        <form onSubmit={handleSubmit}>
            TodoForm
            <Field name="title" label={"title"} type={"text"} component={renderField} />
            <Field name="content" label={"content"} type={"text"} component={renderField} />
{/* disabled={pristine || submitting}  */}

            <button onClick={submit}> submit</button>
        </form>
    )
}
export default reduxForm({ form: "TODOFORM" })(TodoForm)