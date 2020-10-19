import React from "react";

export default function Todo({ todoText, removeTodo, id }) {
  const handleClick = () => {
    removeTodo(id);
  };

  return (
    <div>
      <div className="card">
        <div className="card-body d-flex">
          <div className="card-title">{todoText}</div>
          <button className="btn btn-primary" onClick={handleClick}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
}
