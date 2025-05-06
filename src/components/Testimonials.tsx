import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "CTO, TechCorp Inc.",
      content: "Tarsonix transformed our customer service experience. Their AI agents handle inquiries with unprecedented accuracy, and our team can now focus on high-value work instead of repetitive tasks.",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "David Chen",
      title: "Operations Director, Global Logistics",
      content: "The workflow automation solution provided by Tarsonix reduced our processing time by 65% and virtually eliminated errors. The ROI was evident within the first month of implementation.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      title: "VP of Customer Experience, Finance Plus",
      content: "Our customers can't tell they're talking to AI, and that's the highest praise I can give. Tarsonix delivered a solution that feels human while operating at machine efficiency.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setActiveIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-50"></div>
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-tarsonix-blue uppercase tracking-wider mb-3 font-semibold"
          >
            What Our Clients Say
          </motion.h3>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold gradient-text mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-tarsonix-white/70 max-w-2xl mx-auto text-lg"
          >
            Hear from organizations that have transformed their operations with our AI solutions.
          </motion.p>
        </motion.div>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="w-full"
            >
              <div className="card-gradient rounded-xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="mb-6 md:mb-0 md:mr-8"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-tarsonix-blue/30 glow-border neon-border">
                      <img 
                        src={testimonials[activeIndex].avatar} 
                        alt={testimonials[activeIndex].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <motion.svg 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 text-tarsonix-blue/20 mb-6" 
                      fill="currentColor" 
                      viewBox="0 0 32 32" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 8c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8zm18 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
                    </motion.svg>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-lg text-tarsonix-white/80 italic mb-6 leading-relaxed"
                    >
                      {testimonials[activeIndex].content}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h4 className="text-xl font-bold gradient-text">{testimonials[activeIndex].name}</h4>
                      <p className="text-tarsonix-white/70">{testimonials[activeIndex].title}</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  const newDirection = index > activeIndex ? 1 : -1;
                  setPage([index, newDirection]);
                  setActiveIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-tarsonix-blue w-12' 
                    : 'bg-tarsonix-white/30 hover:bg-tarsonix-white/50 w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
