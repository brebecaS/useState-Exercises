import React, { useState } from "react";
import "../../App.css";

function TodoList() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");

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
      <ul>
        {toDos.map((item) => (
          <div key={item}>
            <li>{item}</li>
            <button
              onClick={() =>
                setToDos((prev) => {
                  const newTexts = prev.filter((text) => text !== item);
                  return newTexts;
                })
              }
            >
              Remove
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
