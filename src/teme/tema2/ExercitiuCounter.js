import { useState } from "react";

function Counter() {
  // Inlocuieste variabila count cu o variabila de tip state folosind useState (ca in exemplul pe care l am facut impreuna)
  const count = 0;

  // Foloseste in functa onclick functia de setare a state ului pentru a incrementa valoarea lui count
  const onClick = () => {};

  return (
    <div className="exercise-container">
      <button onClick={onClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;
