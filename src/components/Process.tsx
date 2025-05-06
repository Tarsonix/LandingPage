import { motion } from "framer-motion";

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Discover",
      description: "We start by understanding your business challenges and identifying opportunities for AI optimization.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Design",
      description: "We design solutions that fit your goals and systems for real results.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4.5V6.5M19.5 12H17.5M12 19.5V17.5M4.5 12H6.5M16.5 7.5L15 9M9 15L7.5 16.5M16.5 16.5L15 15M9 9L7.5 7.5M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Deliver",
      description: "We implement, test, and deploy your AI solution with comprehensive training and ongoing support.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="how-it-works" className="section-padding bg-tarsonix-dark-blue relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-40 pointer-events-none"></div>
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-tarsonix-violet uppercase tracking-wider mb-3 font-semibold text-lg md:text-xl"
          >
            Our Process
          </motion.h3>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            From Discovery to Deployment
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-tarsonix-white/70 max-w-2xl mx-auto text-lg md:text-xl"
          >
            Our streamlined approach ensures your AI implementation delivers maximum value with minimum disruption.
          </motion.p>
        </motion.div>

        {/* Stepper layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-0 relative"
        >
          {/* Connector line (horizontal for desktop, vertical for mobile) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-1 bg-gradient-to-r from-tarsonix-blue via-tarsonix-violet to-tarsonix-blue rounded-full blur-sm opacity-60 -z-10"
            style={{ transform: 'translateY(-50%)' }}
          />
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:hidden absolute left-1/2 top-[12%] bottom-[12%] w-1 bg-gradient-to-b from-tarsonix-blue via-tarsonix-violet to-tarsonix-blue rounded-full blur-sm opacity-60 -z-10"
            style={{ transform: 'translateX(-50%)' }}
          />

          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center flex-1 relative"
            >
              {/* Animated icon with neon glow */}
              <motion.div 
                whileHover={{ scale: 1.12 }}
                className="relative mb-6"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center bg-gradient-to-br from-tarsonix-blue to-tarsonix-violet shadow-2xl neon-border border-2 border-tarsonix-blue/40 animate-glow">
                  <div className="text-tarsonix-blue text-4xl md:text-5xl">
                    {step.icon}
                  </div>
                </div>
                {/* Soft animated glow */}
                <motion.div 
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-tarsonix-blue/20 blur-2xl z-0"
                />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 gradient-text tracking-tight">
                {step.title}
              </h3>
              <p className="text-tarsonix-white/70 max-w-xs leading-relaxed text-base md:text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
