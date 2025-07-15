import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TopBar from './components/TopBar';

export default function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <Footer />
    </main>
  );
} 