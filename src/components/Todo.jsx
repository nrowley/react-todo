import React from "react";
import { GiTrashCan } from "react-icons/gi";

export default function Todo({ todoText, removeTodo, id }) {
  const handleClick = () => {
    removeTodo(id);
  };

  return (
    <div className="container col-sm-4">
      <div className="card">
        <div className="card-body d-flex">
          <div className="card-title mx-auto m-0">{todoText}</div>
          <button className="btn btn-warning mx-auto justify-content-end" onClick={handleClick}>
            <GiTrashCan />
          </button>
        </div>
      </div>
    </div>
  );
}
