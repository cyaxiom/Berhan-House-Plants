import { useState, useEffect } from "react";
import { slider1, slider2, slider3, slider4 } from "../../assets/Images";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const images = [
  {
    id: 1,
    src: slider1,
    title: "Bring Nature Indoors",
    description:
      "Discover our beautiful indoor plants for a fresh and vibrant home.",
    buttonText: "Explore Indoor Plants",
  },
  {
    id: 2,
    src: slider2,
    title: "Outdoor Greenery",
    description: "Enhance your outdoor spaces with our lush, thriving plants.",
    buttonText: "Shop Outdoor Plants",
  },
  {
    id: 3,
    src: slider3,
    title: "Office Plant Solutions",
    description:
      "Boost productivity and ambiance with our curated office plants.",
    buttonText: "View Office Plants",
  },
  {
    id: 4,
    src: slider4,
    title: "Relaxing Bedroom Greens",
    description: "Create a calming retreat with our bedroom plant collection.",
    buttonText: "Browse Bedroom Plants",
  },
];

function ScrollableBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollInterval = 5000;

  const totalSlides = images.length;

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden">
      {/* Image Slides */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                {image.title}
              </h2>
              <p className="text-sm md:text-lg mb-4">{image.description}</p>
              <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-md">
                {image.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute flex items-center gap-2 px-4 bottom-4 right-4">
        <button
          onClick={handlePrev}
          className="bg-white text-black p-2 sm:p-4 md:p-5 rounded-full hover:bg-opacity-75 z-20"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-black p-2 sm:p-4 md:p-5 rounded-full hover:bg-opacity-75 z-20"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default ScrollableBanner;
