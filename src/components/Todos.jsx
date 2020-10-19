import React, { useState } from "react";
import Todo from "./Todo.jsx";
import { useForm } from "react-hook-form";

/*
Component that holds the other todos.
*/

export default function Todos() {
  const { register, handleSubmit } = useForm();
  const [todos, setTodos] = useState([]);
  const [ids, setIds] = useState(0);

  const removeTodo = (id) => {
    console.log(`removing todo id ${id}`);
    console.log(todos);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onSubmit = (data) => {
    setTodos([
      ...todos,
      {
        id: ids,
        todoText: data.todo,
      },
    ]);
    incrementId();
  };

  const incrementId = () => {
    setIds((previous) => previous + 1);
  };

  return (
    <div className="container-fluid my-auto">
      <div className="d-flex justify-content-center h-100 flex-direction-column">
        <h1>react-todos</h1>
      </div>
      <div className="d-flex justify-content-center  mt-100">
        <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" className="form-control mb-2 mr-sm-2" name="todo" placeholder="Todo" ref={register}></input>
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      </div>
      <div className="d-flex justify-content-center flex-direction-column">
        {todos.map((todo) => {
          return <Todo key={todo.id} todoText={todo.todoText} removeTodo={(id) => removeTodo(id)} id={todo.id} />;
        })}
      </div>
    </div>
  );
}
