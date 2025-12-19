import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import ProductGallery from '@/components/ProductDetails';
import AlternativeProducts from '@/components/AlternativeProducts';
import Applications from '@/components/Applications';
import Specifications from '@/components/Specifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <ProductGallery />
        <AlternativeProducts />
        <Applications />
        <Specifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
