import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductsSection from "@/components/ProductsSection";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartSidebar />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductsSection />
        <BrandsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
