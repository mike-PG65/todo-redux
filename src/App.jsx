import { useSelector, useDispatch } from "react-redux"
import { addTodo, removeToDo } from "./todoslice"
import { useState } from "react" 
 

const App = () => {

  const [newTODo, setNewToDo] = useState("")

  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()

  const HandleAddToDo = () =>{
    if (newTODo.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        text: newTODo
      }));
      setNewToDo("")
    }
  }

  const handleRemoveToDo = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete??")
    if (confirmDelete){
      dispatch(removeToDo(id))
    }
  }

  return(
    <>

    <input type="text" onChange={(e) => setNewToDo(e.target.value)} value={newTODo}/>
    <button onClick={HandleAddToDo}> Add todo </button>


    {
      todos.map(todo => (
        <div key={todo.id}>
          <p>{todo.text}</p>
          <button onClick={()=>{handleRemoveToDo(todo.id)}}> Delete </button>

        </div>
      ))
    }
    </>
  )
}
export default App