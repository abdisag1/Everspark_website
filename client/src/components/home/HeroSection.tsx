import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=600&q=80",
    alt: "Solar panel installation",
  },
  {
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=600&q=80",
    alt: "Water treatment facility",
  },
  {
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=600&q=80",
    alt: "Industrial technology",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Hero Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover brightness-75"
            />
          </div>
        ))}
      </div>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div className="max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Sustainable Solutions for a Cleaner Future
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Innovative water disinfection, electrochlorination, and solar technologies that empower communities and industries.
          </p>
          <Link href="#contact">
            <a className="inline-block bg-[#005500] hover:bg-[#003300] text-white font-medium py-3 px-8 rounded-full transition transform hover:scale-105 shadow-lg">
              Get in Touch
            </a>
          </Link>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeSlide ? "bg-white opacity-100" : "bg-white opacity-50"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center z-10"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center z-10"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </section>
  );
};

export default HeroSection;
