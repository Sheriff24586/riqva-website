import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './LoadingScreen';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-white"
          >
            <Navbar />
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <CTA />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
