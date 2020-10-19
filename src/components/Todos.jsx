import React, { useState } from "react";

/*
Component that holds the other todos.
*/

export default function Todos() {
  const [todos, setTodos] = useState(null);

  return (
    <div className="container-fluid h-100">
      <div className="d-flex justify-content-center h-100">
        <h1>hello world</h1>
      </div>
    </div>
  );
}
