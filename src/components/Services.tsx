import { motion } from "framer-motion";
import { Layers, Zap, Users, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Voice AI Agents",
      description: "Natural language voice agents that handle complex customer interactions with human-like understanding.",
      icon: Layers,
    },
    {
      id: 2,
      title: "Chatbots & Virtual Assistants",
      description: "24/7 intelligent support that learns from interactions and integrates with your existing systems.",
      icon: Users,
    },
    {
      id: 3,
      title: "Workflow Automation",
      description: "Smart processes that eliminate repetitive tasks and streamline operations across your organization.",
      icon: Zap,
    },
    {
      id: 4,
      title: "Custom AI Integrations",
      description: "Seamlessly connect AI capabilities with your existing tools and platforms for maximum efficiency.",
      icon: Settings,
    },
  ];

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
    <section id="what-we-do" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-background"></div>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h3 className="text-tarsonix-blue uppercase tracking-wider mb-3 font-semibold">Our Solutions</h3>
          <h2 className="text-4xl font-bold gradient-text mb-4">AI Solutions Tailored for Your Business</h2>
          <p className="text-tarsonix-white/70 max-w-2xl mx-auto text-lg">
            We design and implement cutting-edge AI systems that solve real-world business challenges.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id} 
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="card-gradient rounded-xl p-8 hover:shadow-lg hover:shadow-tarsonix-blue/10 group"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-tarsonix-blue to-tarsonix-violet mb-5 group-hover:animate-pulse neon-border"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 gradient-text">{service.title}</h3>
                  <p className="text-tarsonix-white/70 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
