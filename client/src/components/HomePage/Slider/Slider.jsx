import React, { useState, useEffect } from "react";
import SingleSlider from "./SingleSlider";
import "./slider.css";

const images = ["img/slider.jpg", "img/slider2.jpg", "img/slider3.jpg"];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (isManual) {
      setIsManual(false);
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, isManual]);

  const goToPrev = () => {
    setIsManual(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsManual(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="slider">
      <div className="slider-container">
        <SingleSlider key={currentIndex} image={images[currentIndex]} />
      </div>
      <button className="biton prev" onClick={goToPrev}>❮</button>
      <button className="biton next" onClick={goToNext}>❯</button>
    </section>
  );
};

export default Slider;
