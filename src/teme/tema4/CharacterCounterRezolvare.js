import React, { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState(0);

  function handleTextareaChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <textarea onChange={handleTextareaChange} value={text} />
      <p>Character count: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;
