import { useState } from "react";

function RezolvareCounter() {
  // Inlocuieste variabila count cu o variabila de tip state folosind useState (ca in exemplul pe care l am facut impreuna)
  const [count, setCount] = useState(0); // [variabila, functieDeSetare]

  // Foloseste in functa onclick functia de setare a state ului pentru a incrementa valoarea lui count
  const onClick = () => {
    // Atunci cand vrem sa setam o variabila de tip state cu o valoare care depinde de valoarea precedenta a variabilei, putem folosi o functie in loc de valoarea noua:
    setCount((previousCount) => previousCount + 1); // setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default RezolvareCounter;
