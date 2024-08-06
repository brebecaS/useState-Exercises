import React, { useState } from "react";
import "../../App.css";

function TodoList() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  const liList = toDos.map((item) => (
    <div key={item}>
      <li>{item}</li>
      <button onClick={() => {}}>Remove</button>
    </div>
  ));

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
