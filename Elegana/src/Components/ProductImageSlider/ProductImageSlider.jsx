import { useState } from "react";
import "./ProductImageSlider.css";

export const ProductImageSlider = ({ imgs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="slider-container">
      <div className="thumbnail-column">
        {imgs.slice(0, 4).map((img, index) => (
          <img
            key={index}
            src={img}
            className={`thumbnail ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            alt={`Thumbnail ${index + 1}`}
          />
        ))}
      </div>
      <div className="main-image-container">
        <img src={imgs[activeIndex]} className="main-image" alt="Main" />
      </div>
    </div>
  );
};
