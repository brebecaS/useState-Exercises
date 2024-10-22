import "./App.css";
import { Link } from "react-router-dom";

import Counter from "./teme/tema2/RezolvareCounter";
import InputField from "./teme/tema3/RezolvareInputField";
import CharacterCounter from "./teme/tema4/CharacterCounter";
import TodoList from "./teme/tema5/ToDoList";
import SearchFilter from "./teme/tema6/SearchFilter";
import ColorSwitcher from "./teme/tema7/ColorSwitcher";
import ImagesCarousel from "./teme/tema1/RezolvareImagesCarousel";
import Nav from "./NavBar";

function App() {
  return (
    <div>
      <SearchFilter />
    </div>
  );
}
export default App;
