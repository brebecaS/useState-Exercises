import React, { useState } from "react";
import "../../App.css";

function TodoList() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  const liList = toDos.map((item, index) => {
    return (
      <div key={index}>
        <li>{item}</li>
        <button
          onClick={() => {
            setToDos((prevToDos) => {
              const newList = prevToDos.filter((element) => element !== item);
              return newList;
            });
          }}
        >
          Remove
        </button>
      </div>
    );
  });

  return (
    <div className="exercise-container">
      <div>
        <input type="text" onChange={(e) => setNewToDo(e.target.value)} />
        <button
          onClick={() => setToDos((prevToDos) => [...prevToDos, newToDo])}
        >
          Add Todo
        </button>
      </div>
      <ul>{liList}</ul>
    </div>
  );
}

export default TodoList;
