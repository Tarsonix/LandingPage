import { useEffect, useRef } from "react";

const ParticleBackground = () => {
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
    
    // Particle class with optimized rendering
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
        this.size = Math.random() * 2 + 0.5; // Smaller particle size
        this.speedX = Math.random() * 0.3 - 0.15; // Slower speed
        this.speedY = Math.random() * 0.3 - 0.15; // Slower speed
        this.color = Math.random() > 0.5 ? '#38BDF8' : '#8B5CF6';
        this.opacity = Math.random() * 0.4 + 0.3; // Lower opacity
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
    
    // Create fewer particles based on screen size and device
    const isMobile = window.innerWidth < 768;
    const particlesArray: Particle[] = [];
    const numberOfParticles = isMobile 
      ? Math.min(30, Math.floor(canvas.width * canvas.height / 20000)) 
      : Math.min(75, Math.floor(canvas.width * canvas.height / 15000));
    
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
    
    // Throttle animation frame rate on mobile
    const frameInterval = isMobile ? 3 : 1; // Only render every 3rd frame on mobile
    let frameCount = 0;
    
    // Animation function
    const animate = () => {
      frameCount++;
      
      // Only render on certain frames to improve performance
      if (frameCount % frameInterval === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        for (const particle of particlesArray) {
          particle.update();
          particle.draw();
        }
        
        // Draw connections with optimized distance calculation
        connectParticles();
      }
      
      requestAnimationFrame(animate);
    };
    
    // Draw lines between nearby particles with fewer calculations
    const connectParticles = () => {
      const maxDistance = isMobile ? 100 : 150; // Shorter connection distance on mobile
      const squaredMaxDistance = maxDistance * maxDistance;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distanceSquared = dx * dx + dy * dy;
          
          // Using squared distance to avoid expensive sqrt operation
          if (distanceSquared < squaredMaxDistance) {
            const opacity = 1 - Math.sqrt(distanceSquared) / maxDistance;
            
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.15})`; // Lower opacity
            ctx.lineWidth = 0.6; // Thinner lines
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
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full hero-gradient"
      aria-hidden="true" 
    />
  );
};

export default ParticleBackground; 