import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const prevSlide = () => setCurrent((current - 1 + length) % length);
  const nextSlide = () => setCurrent((current + 1) % length);

  return (
    <div className="relative w-full max-w-md h-full mx-auto overflow-hidden">
      {/* Images */}
      <div className="w-full h-full">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        className="absolute top-1/2 text-4xl left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        onClick={prevSlide}
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 text-4xl transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        onClick={nextSlide}
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 border-1 rounded-full ${
              index === current ? "bg-white" : "bg-gray-600"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
