import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroSlides = [
  {
    image: hero1,
    title: "أبعادٌ ترتقي بالرؤية",
    subtitle: "وإتقانٌ يُجسد الواقع",
    description: "التميز الهندسي في التصميم والتخطيط والتنفيذ عبر المملكة",
  },
  {
    image: hero2,
    title: "البنية التحتية",
    subtitle: "بأعلى المعايير",
    description: "تصميم وتنفيذ مشاريع الجسور والطرق والمرافق العامة",
  },
  {
    image: hero3,
    title: "المشاريع الصناعية",
    subtitle: "والمنشآت الضخمة",
    description: "إشراف هندسي متكامل على المصانع والمنشآت الصناعية",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`w-full h-full ${
              index === currentSlide ? "animate-ken-burns" : ""
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div
            key={currentSlide}
            className="animate-fade-up"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
              {heroSlides[currentSlide].title}
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-gradient-bronze">
              {heroSlides[currentSlide].subtitle}
            </h3>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex bronze-gradient bronze-gradient-hover px-8 py-4 rounded-lg font-bold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-bronze-500/20"
              >
                اطلب استشارة
              </a>
              <a
                href="#services"
                className="inline-flex bronze-gradient bronze-gradient-hover px-8 py-4 rounded-lg font-bold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-bronze-500/20"
              >
                استكشف خدماتنا
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={nextSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border-2 border-primary/50 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
        aria-label="الشريحة التالية"
      >
        <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
      </button>
      <button
        onClick={prevSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border-2 border-primary/50 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
        aria-label="الشريحة السابقة"
      >
        <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-10"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`انتقل للشريحة ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
