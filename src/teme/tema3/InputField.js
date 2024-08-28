import React, { useState } from "react";

function InputField() {
  // Inlocuieste variabila text cu o variabila de tip state folosind useState (ca in exemplul pe care l am facut impreuna)
  const text = "TODO";

  // Cautati pe google cum se foloseste onChange pe un input de tip text pentru a afla valoarea din input
  // Foloseste in functa onChange functia de setare a state ului pentru a seta valoarea lui text cu valoarea din input
  const onChange = (event) => {};

  return (
    <div>
      <input type="text" onChange={onChange} />
      <p>Input text: {text}</p>
    </div>
  );
}

export default InputField;
