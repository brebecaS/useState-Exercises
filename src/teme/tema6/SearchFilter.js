import React from "react";

const items = [
  "In ce an a inceput primul razbui modial ?",
  "In ce an a avut loc marea unire ?",
  "Cine e fost domnitorul cu cea mai lunga domnie ?",
  "Intre ce ani a domnit stefan cel mare ?",
  "In ce an a intrat romania in primul razboi modial ?",
  "Cine a castigat al doilea razboi mondial ?",
];

function SearchFilter() {
  return (
    <div>
      <input type="text" />
      <ul>{/* Render the filtered list of items here */}</ul>
    </div>
  );
}

export default SearchFilter;
