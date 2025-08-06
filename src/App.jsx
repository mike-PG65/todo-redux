import { useSelector, useDispatch } from "react-redux"
import { addTodo, removeToDo, toggleTodo, setFilter } from "./todoslice"
import { useState } from "react"
import { selectFilteredTodos } from "./selectors"


const App = () => {

  const [newTOdo, setNewTodo] = useState("")

  const todos = useSelector(selectFilteredTodos)
  const dispatch = useDispatch()

  const HandleAddToDo = () => {
    if (newTOdo.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        text: newTOdo
      }));
      setNewTodo("")
    }
  }

  const handleRemoveToDo = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete??")
    if (confirmDelete) {
      dispatch(removeToDo(id))
    }
  }

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))
  }

   const handleFilterChange = (filter) => {
        dispatch(setFilter(filter));
    };

  return (
    <>

      <button onClick={() => handleFilterChange("All")}>All</button>
      <button onClick={() => handleFilterChange("Completed")}>Completed</button>
      <button onClick={() => handleFilterChange("Incomplete")}>Not Completed</button>


      <input type="text" onChange={(e) => setNewTodo(e.target.value)} value={newTOdo} />
      <button onClick={HandleAddToDo}> Add todo </button>


      {
        todos.map(todo => (
          <div key={todo.id}>
            <p>{todo.text}</p>
            <button onClick={() => { handleRemoveToDo(todo.id) }}> Delete </button>
            <button onClick={() => { handleToggleTodo(todo.id) }}> {todo.completed ? "undone" : "Done"}</button>
          </div>
        ))
      }
    </>
  )
}
export default App