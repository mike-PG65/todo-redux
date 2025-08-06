export const selectFilteredTodos = (state) => {
    switch (state.todos.filter){
        case "Completed":
            return state.todos.todos.filter(todo => todo.completed)
        case "Incomplete":
            return state.todos.todos.filter(todo => !todo.completed)
        default:
            return state.todos.todos
    }

}