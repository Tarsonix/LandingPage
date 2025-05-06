import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FinalCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-tarsonix-dark-blue relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-50"></div>
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="card-gradient rounded-2xl p-8 md:p-16 relative overflow-hidden"
        >
          {/* Animated gradient background */}
          <motion.div 
            animate={{ 
              background: [
                'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.2) 0%, rgba(10, 15, 28, 0) 70%)',
                'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, rgba(10, 15, 28, 0) 70%)',
                'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.2) 0%, rgba(10, 15, 28, 0) 70%)',
              ]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />
          
          <div className="text-center relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold mb-6 gradient-text"
            >
              Ready to unlock your AI advantage?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-tarsonix-white/80 mb-10 leading-relaxed"
            >
              Let's discuss how Tarsonix can transform your operations and drive growth with custom AI solutions.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="inline-flex relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://calendar.app.google/NcKXZ1y7H479CbJk8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient hover:opacity-90 transition-all text-white px-10 py-8 text-xl rounded-lg relative z-10 glow-border inline-flex items-center justify-center"
              >
                Book a Free Consultation
              </a>
              {/* Button glow effect */}
              <motion.span 
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-lg bg-tarsonix-blue/20 blur-xl z-0"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
