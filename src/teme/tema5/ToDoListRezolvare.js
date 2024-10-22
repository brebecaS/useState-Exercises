import React, { useState } from "react";
import "../../App.css";

function TodoList() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState(``);
  const [timeOfTodo, setTimeOfTodo] = useState(``);

  function updateList() {
    const objectWithTheSameTime = list.find(
      (element) => element.timeOfTodo === timeOfTodo
    );

    if (objectWithTheSameTime === undefined)
      setList((list) => {
        const newList = [...list, { todo, timeOfTodo }];
        return newList;
      });
    else {
      alert("You can't add two todos at the same time");
    }
  }

  function readInput(e) {
    setTodo(e.target.value);
  }

  return (
    <div className="exercise-container">
      <input type="text" onChange={readInput} />
      <input type="text" onChange={(e) => setTimeOfTodo(e.target.value)} />
      <button onClick={updateList}>Add Todo</button>
      <ul>
        {list.map((element) => {
          return (
            <li key={`${element.timeOfTodo}${element.todo}`}>
              <div>
                La ora {element.timeOfTodo}:{element.todo}{" "}
              </div>
              <button
                onClick={() => {
                  const newList = list.filter(
                    (item) =>
                      item.todo !== element.todo ||
                      item.timeOfTodo !== element.timeOfTodo
                  );
                  setList(newList);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
