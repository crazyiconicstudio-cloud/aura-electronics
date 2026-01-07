import { motion } from "framer-motion";

const brands = [
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "LG", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg" },
  { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
  { name: "Philips", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Philips_logo_new.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
];

const BrandsSection = () => {
  return (
    <section id="brands" className="py-20 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4">
            Trusted Brands
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            We Partner With The Best
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Shop authentic products from world-renowned brands
          </p>
        </motion.div>

        {/* Brands Slider */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex gap-16 items-center"
            >
              {/* Double the brands for seamless loop */}
              {[...brands, ...brands].map((brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center p-4 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: "grayscale(100%)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { value: "50+", label: "Premium Brands" },
            { value: "500+", label: "Products" },
            { value: "10K+", label: "Happy Customers" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="font-poppins font-bold text-4xl md:text-5xl text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
