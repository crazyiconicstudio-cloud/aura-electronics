import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-electronics.jpg";

const features = [
  { icon: Shield, text: "2 Year Warranty" },
  { icon: Truck, text: "Free Delivery" },
  { icon: Award, text: "Genuine Products" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-primary-foreground/80 text-sm font-medium">
                New Collection 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6"
            >
              Your One-Stop Shop for{" "}
              <span className="text-gradient-accent">Electronics</span> & Home Appliances
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-foreground/70 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Discover premium quality electronics from top brands at unbeatable prices.
              Enjoy warranty, fast delivery, and exceptional customer service.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button variant="hero" size="xl" className="group">
                Explore Products
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Contact Us
              </Button>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-primary-foreground/80 text-sm font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src={heroImage}
                  alt="Premium Electronics Collection"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -left-4 top-1/4 bg-card p-4 rounded-xl shadow-card hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">Fast Shipping</p>
                    <p className="text-xs text-muted-foreground">Nationwide</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-xl shadow-card hidden md:block"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">500+</p>
                  <p className="text-xs text-muted-foreground">Products</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
