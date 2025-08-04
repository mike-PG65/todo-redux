import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
  {
    id: 1,
    text: "Buy groceries",
    completed: false
  },
  {
    id: 2,
    text: "Walk the dog",
    completed: false
  },
  {
    id: 3,
    text: "Read a book",
    completed: false
  }]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            state.todos.push({
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            })
        },

        removeToDo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeToDo} = todoSlice.actions;
export default todoSlice.reducer