import { motion } from "framer-motion";
import { Armchair, Tv, Home, Smartphone, ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Furniture",
    icon: Armchair,
    description: "Modern & comfortable furniture for your home",
    count: 85,
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
  },
  {
    name: "Electronics",
    icon: Tv,
    description: "Latest TVs, laptops & smart devices",
    count: 150,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    name: "Home Appliances",
    icon: Home,
    description: "Essential appliances for modern living",
    count: 120,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
  },
  {
    name: "Mobiles",
    icon: Smartphone,
    description: "Smartphones & accessories",
    count: 200,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-background">
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
            Browse Categories
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our wide range of products across different categories
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`group relative p-8 rounded-2xl border-2 ${category.borderColor} bg-gradient-to-br ${category.color} backdrop-blur-sm cursor-pointer overflow-hidden h-full`}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} blur-2xl`} />
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    className="w-16 h-16 rounded-xl bg-card shadow-md flex items-center justify-center"
                  >
                    <category.icon className="w-8 h-8 text-accent" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="font-poppins font-bold text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {category.count} Products
                  </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-accent group-hover:text-accent-foreground transition-colors" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
