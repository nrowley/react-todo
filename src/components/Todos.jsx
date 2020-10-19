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
    <div className="container-fluid mx-auto ">
      <div className="container d-flex justify-content-center ">
        <h1 className="mb-5 mt-5">react-todos</h1>
      </div>
      <div className="d-flex justify-content-center">
        <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" className="form-control mb-2 mr-sm-2" name="todo" placeholder="Todo" ref={register}></input>
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      </div>
      <div className="d-flex justify-content-center flex-direction-column flex-wrap ">
        {todos.map((todo) => {
          return <Todo key={todo.id} todoText={todo.todoText} removeTodo={(id) => removeTodo(id)} id={todo.id} />;
        })}
      </div>
    </div>
  );
}
