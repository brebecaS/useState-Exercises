import { useState } from "react";
import "../../App.css";

function TodoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState(``);

  function updateList() {
    setList((list) => {
      const newList = [...list, input];
      return newList;
    });
  }

  function readInput(e) {
    setInput(e.target.value);
  }
  return (
    <div className="exercise-container">
      <input type="text" onChange={readInput} />
      <button onClick={updateList}>Add Todo</button>
      <ul>
        {list.map((element) => {
          return (
            <li key={element}>
              <div>{element} </div>
              <button onClick={() => {}}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
