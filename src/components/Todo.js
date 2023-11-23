import {
  add_todo,
  delete_todo,
  update_todo,
} from "../redux/action/todoActions";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const [todo, setTodo] = useState("");
const[editID ,setEditID] = useState(0)
  const dispatch = useDispatch();
  const todoArr = useSelector((state) => state.todo);

  //   console.log(todoArr);
  function handleAddTodo(e) {
    e.preventDefault();
    if (editID == 0) {
        let len = todoArr.length;
    dispatch(add_todo({ id: len + 1, title: todo }));
    setTodo("");
    } else {
        dispatch(update_todo(editID,todo))
        setEditID(0);
        setTodo('')
    }
    
  }

  return (
    <div>
        {
            editID ? <h1>Edit Todo</h1>: <h1>Add Todo</h1>
        }
        
      <form>
        
        <input
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter new todo"
          value={todo}
        />
        <button onClick={handleAddTodo}>{
            editID ? 'Edit' : 'Add'
        }</button>
      </form>
      <ul>
        {todoArr.length > 0 &&
          todoArr.map((todo) => (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <button onClick={() => dispatch(delete_todo(todo.id))}>Delete</button>
              <button onClick={() => setEditID(todo.id)}>Edit</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Todo;
