import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "Amazing experience! The Samsung TV I bought exceeded my expectations. Fast delivery and excellent customer support. Will definitely shop here again!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5,
    text: "ElectroZone has become my go-to store for all electronics. Their prices are unbeatable and the product quality is always top-notch. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    text: "Bought multiple appliances for my new home. The team was incredibly helpful in choosing the right products. Love the 2-year warranty on everything!",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 4,
    text: "Great selection of laptops and accessories. The MacBook Pro I purchased was competitively priced and arrived in perfect condition. Excellent service!",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const navigate = (direction: "prev" | "next") => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      direction === "prev"
        ? (prev - 1 + testimonials.length) % testimonials.length
        : (prev + 1) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent font-semibold text-sm rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Real experiences from our valued customers
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-glow">
                <Quote className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>

            {/* Testimonial Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-3xl p-8 md:p-12 pt-14 shadow-lg"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < testimonials[currentIndex].rating
                          ? "fill-accent text-accent"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-center text-lg md:text-xl text-card-foreground/90 leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-accent/30 mb-4"
                  />
                  <h4 className="font-poppins font-semibold text-lg text-card-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigate("prev")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-card rounded-full shadow-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigate("next")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-card rounded-full shadow-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
