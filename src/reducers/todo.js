import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'Test1',
  initialState: {
    todoList:[]
  },
  reducers: {
    addTodo:  (state, action) => {
        // state.value += action.payload
        const oldTodoList = state.todoList
        state.todoList = [...oldTodoList, action.payload]
    },
  }
})

// Action creators are generated for each case reducer function
export const { addTodo } = counterSlice.actions

export default counterSlice.reducer