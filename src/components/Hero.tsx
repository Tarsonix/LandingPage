import { Button } from "@/components/ui/button";
import { useEffect, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";

// Lazy load the canvas animation component
const ParticleBackground = lazy(() => import('@/components/ParticleBackground'));

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden">
      {/* Lazy-load the particle effect background */}
      <Suspense fallback={<div className="absolute inset-0 w-full h-full hero-gradient" />}>
        <ParticleBackground />
      </Suspense>
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="glow-text">
              Accelerate Your Business
            </span>
            <br />
            <span className="gradient-text">with AI</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-tarsonix-white/80 mb-10 max-w-2xl"
        >
          Custom-built AI agents. Smart workflows. Real results.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://calendar.app.google/NcKXZ1y7H479CbJk8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient hover:opacity-90 transition-all text-white px-8 py-6 text-lg rounded-lg glow-border shadow-lg hover:scale-105 inline-flex items-center justify-center"
          >
            Book a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
