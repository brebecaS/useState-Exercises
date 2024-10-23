import { useState } from "react";

const items = [
  "In ce an a inceput primul razboi modial ?",
  "In ce an a avut loc marea unire ?",
  "Cine e fost domnitorul cu cea mai lunga domnie ?",
  "Intre ce ani a domnit stefan cel mare ?",
  "In ce an a intrat romania in primul razboi modial ?",
  "Cine a castigat al doilea razboi mondial ?",
];

function SearchFilter() {
  const [searchString, setSearchString] = useState("");

  return (
    <div>
      <h3>All texts</h3>
      {items.map((item) => (
        <div key={item}>
          <p>{item}</p>
        </div>
      ))}

      <input type="text" onChange={(e) => setSearchString(e.target.value)} />

      <h3>Filtered texts</h3>
      <ul>
        {items
          .filter((item) => searchString !== "" && item.includes(searchString))
          .map((item) => (
            <div key={item}>
              <li>{item}</li>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
