import React, { useState, useEffect } from "react";
import SingleSlider from "./SingleSlider";
import "./slider.css";

const images = ["img/slider.jpg", "img/slider2.jpg", "img/slider3.jpg"];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Auto-slide every 3.5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="slider">
      <div className="slider-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <SingleSlider image={image} />
          </div>
        ))}
      </div>
      <button
        className="biton prev"
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + images.length) % images.length)
        }
      >
        ❮
      </button>
      <button
        className="biton next"
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
      >
        ❯
      </button>
    </section>
  );
};

export default Slider;
