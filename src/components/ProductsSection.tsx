import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const filters = ["All", "Electronics", "Mobiles", "Home Appliances", "Furniture"];

const products = [
  {
    id: 1,
    name: "Samsung 55\" Smart TV",
    category: "Electronics",
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    category: "Mobiles",
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    badge: "New",
  },
  {
    id: 3,
    name: "LG Washing Machine",
    category: "Home Appliances",
    price: 549,
    originalPrice: 699,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=400&fit=crop",
    badge: "20% Off",
  },
  {
    id: 4,
    name: "Sony Wireless Headphones",
    category: "Electronics",
    price: 299,
    originalPrice: 349,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    badge: null,
  },
  {
    id: 5,
    name: "Modern Office Chair",
    category: "Furniture",
    price: 189,
    originalPrice: 249,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=400&fit=crop",
    badge: "Popular",
  },
  {
    id: 6,
    name: "MacBook Pro 14\"",
    category: "Electronics",
    price: 1999,
    originalPrice: 2199,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    badge: "Hot",
  },
  {
    id: 7,
    name: "Samsung Galaxy S24",
    category: "Mobiles",
    price: 899,
    originalPrice: 999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    badge: null,
  },
  {
    id: 8,
    name: "Philips Air Fryer",
    category: "Home Appliances",
    price: 149,
    originalPrice: 199,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    badge: "25% Off",
  },
];

const ProductsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4">
            Our Products
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium electronics and home essentials
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-accent/10 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-secondary/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                        {product.badge}
                      </span>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-card rounded-full shadow-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Heart className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-card rounded-full shadow-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                    </div>

                    {/* Add to Cart Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy-dark/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Button variant="accent" className="w-full">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-accent text-accent"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">
                        ({product.rating})
                      </span>
                    </div>

                    <h3 className="font-poppins font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-3">
                      {product.category}
                    </p>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xl text-foreground">
                        ${product.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
