import React, { useState } from "react";

function InputField() {
  const [text, setText] = useState("TODO"); // [variabila, functieDeSetare]

  const onChange = (event) => {
    // tot ceea ce scriem in input se afla in event.target.value
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <p>Input text: {text}</p>
    </div>
  );
}

export default InputField;
