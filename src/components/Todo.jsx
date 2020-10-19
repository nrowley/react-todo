import React from "react";

export default function Todo({ todoText, removeFunc, id }) {
  return (
    <div>
      <div className="card">
        <div className="card-body d-flex">
          <div className="card-title">{todoText}</div>
          <form onSubmit={removeFunc(id)} inline="true">
            <button className="btn btn-primary" type="submit">
              remove
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
