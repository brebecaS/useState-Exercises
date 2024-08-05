import { useState } from "react";
import "./style.css";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

function ImagesCarousel() {
  // Memoram in variabila current indexul imaginii curente in array-ul images
  const [current, setCurrent] = useState(0);

  // Cream functia nextSlide care va fi apelata atunci cand dam click pe sageata din dreapta
  // Daca current este egal cu ultimul index din array-ul images, atunci setam current la 0 pentru a nu ajunge indexul mai mare decat lungimea array-ului (daca incercam sa accesam un index mai mare decat lungimea array-ului, atunci nu vom avea nicio imagine afisata)
  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  // Cream functia prevSlide care va fi apelata atunci cand dam click pe sageata din stanga
  // Daca current este egal cu 0, atunci setam current la ultimul index din array-ul images pentru a nu ajunge indexul mai mic decat 0 (daca incercam sa accesam un index negativ, atunci nu vom avea nicio imagine afisata)
  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h2>Tema 1: Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {/* folosim indexul imaginii curente stocat in variabila de la useState (current) */}
        <div className="slide">
          <img src={images[current]} alt="images" />
        </div>
      </div>
    </div>
  );
}

export default ImagesCarousel;
