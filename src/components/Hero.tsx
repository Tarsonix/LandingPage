import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = Math.random() > 0.5 ? '#38BDF8' : '#8B5CF6';
        this.opacity = Math.random() * 0.5 + 0.5;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX;
        }
        
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
    
    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(150, Math.floor(canvas.width * canvas.height / 8000));
    
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (const particle of particlesArray) {
        particle.update();
        particle.draw();
      }
      
      // Draw connections
      connectParticles();
      
      requestAnimationFrame(animate);
    };
    
    // Draw lines between nearby particles
    const connectParticles = () => {
      const maxDistance = 150;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden">
      {/* Particle effect background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full hero-gradient"
      />
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <motion.span
              className="glow-text"
              animate={{
                textShadow: [
                  "0 0 20px #38BDF8, 0 0 40px #8B5CF6, 0 0 60px #38BDF8",
                  "0 0 40px #8B5CF6, 0 0 80px #38BDF8, 0 0 100px #8B5CF6",
                  "0 0 20px #38BDF8, 0 0 40px #8B5CF6, 0 0 60px #38BDF8",
                ],
                color: [
                  "#38BDF8",
                  "#8B5CF6",
                  "#38BDF8"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Accelerate Your Business
            </motion.span>
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
