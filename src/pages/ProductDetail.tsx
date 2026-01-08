import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Check,
  X,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-3xl text-foreground mb-4">
              Product Not Found
            </h1>
            <Link to="/#products">
              <Button variant="accent">Back to Products</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartSidebar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/#products"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Main Image */}
              <div
                className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/30 mb-4 cursor-zoom-in"
                onClick={() => setIsZoomed(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      selectedImage === index
                        ? "border-accent shadow-lg"
                        : "border-transparent hover:border-muted"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Brand & Rating */}
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary font-medium text-sm rounded-full">
                  {product.brand}
                </span>
                <div className="flex items-center gap-1">
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
              </div>

              {/* Title */}
              <h1 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-bold text-3xl text-foreground">
                  ${product.price}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 font-medium text-sm rounded-full">
                  Save ${product.originalPrice - product.price}
                </span>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2 mb-6">
                {product.inStock ? (
                  <>
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-green-600 font-medium">In Stock</span>
                  </>
                ) : (
                  <>
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-4">
                  Key Features
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Quantity Selector */}
                <div className="flex items-center gap-3 bg-secondary/50 rounded-lg px-4 py-2">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-md bg-card flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-md bg-card flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <Button
                  variant="accent"
                  size="lg"
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>

                {/* Wishlist */}
                <Button variant="outline" size="lg" className="px-4">
                  <Heart className="w-5 h-5" />
                </Button>

                {/* Share */}
                <Button variant="outline" size="lg" className="px-4">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Contact Button */}
              <Link to="/#contact">
                <Button variant="default" size="lg" className="w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact for Inquiry
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <h2 className="font-poppins font-bold text-2xl text-foreground mb-6">
              Technical Specifications
            </h2>
            <div className="bg-card rounded-2xl overflow-hidden shadow-card">
              {product.specifications.map((spec, index) => (
                <div
                  key={index}
                  className={`flex items-center px-6 py-4 ${
                    index % 2 === 0 ? "bg-secondary/30" : ""
                  }`}
                >
                  <span className="w-1/3 text-muted-foreground font-medium">
                    {spec.label}
                  </span>
                  <span className="w-2/3 text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={product.images[selectedImage]}
              alt={product.name}
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default ProductDetail;
