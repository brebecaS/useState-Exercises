import "./style.css";

function ImagesCarousel() {
  // Folosim useState pentru a memora indexul imaginii curente

  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];
  function nextSlide() {
    // in functia de nexslide trebuie sa setam state-ul current cu urmatorul index din array-ul images
  }

  function prevSlide() {
    // in functia de prevslide trebuie sa setam state-ul current cu indexul anterior din array-ul images
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
        {/* In loc de index-ul 0, ar trebui sa folosim indexul imaginii curente stocat in variabila de la useState */}
        <div className="slide">
          <img src={images[0]} alt="images" />
        </div>
      </div>
    </div>
  );
}

export default ImagesCarousel;
