import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import postReducer from "../reducers/postReducer";

const TodosCard = () => {
  const [state, dispatch] = useReducer(postReducer, []);
  const [todos, setTodos] = useState([]);
  const [singletodo, setSingleTodo] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodos(response.data))
      .then((error) => console.log(error));
  }, []);

  const todosOnChange = (event) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/" + event.target.value)
      .then((response) => setSingleTodo(response.data))

      .then((error) => console.log(error));
    dispatch({
      type: "get-todos",
      payload: singletodo,
    });
  };

  return (
    <div className="todos">
      <h3>Todos</h3>
      <select onChange={todosOnChange}>
        <option value="0">--choose todo--</option>
        {todos.map((element) => (
          <option key={element.id} value={element.id}>
            {element.id}
          </option>
        ))}
      </select>

      <p>{"Post " + singletodo.id + " " + "by User " + singletodo.userId}</p>

      <p>{singletodo.title}</p>
      <p>{singletodo.completed}</p>
    </div>
  );
};

export default TodosCard;
