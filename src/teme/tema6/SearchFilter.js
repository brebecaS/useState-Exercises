import React from "react";

const items = [
  "In ce an a inceput primul razboi modial ?",
  "In ce an a avut loc marea unire ?",
  "Cine e fost domnitorul cu cea mai lunga domnie ?",
  "Intre ce ani a domnit stefan cel mare ?",
  "In ce an a intrat romania in primul razboi modial ?",
  "Cine a castigat al doilea razboi mondial ?",
];

function SearchFilter() {
  const searchString = "razboi";

  const listElements = items
    .filter((element) => element.includes(searchString))
    .map((item) => (
      <div key={item}>
        <li>{item}</li>
      </div>
    ));

  return (
    <div>
      <input type="text" />
      <ul>{listElements}</ul>
    </div>
  );
}

export default SearchFilter;
