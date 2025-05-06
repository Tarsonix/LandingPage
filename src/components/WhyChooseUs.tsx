import { motion } from "framer-motion";
import { Layers, Zap, Users, Settings } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Expert-Led AI Strategy",
      description: "Our team of AI specialists and data scientists create solutions that align with your business goals.",
      icon: Users,
    },
    {
      id: 2,
      title: "Transparent Process",
      description: "Clear communication and visibility throughout your project's development and implementation.",
      icon: Layers,
    },
    {
      id: 3,
      title: "Scalable Solutions",
      description: "Our systems grow with your business, adapting to new challenges and opportunities.",
      icon: Settings,
    },
    {
      id: 4,
      title: "Fast Turnaround",
      description: "From consultation to deployment in weeks, not months, with immediate value realization.",
      icon: Zap,
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
    <section id="why-choose-us" className="section-padding bg-tarsonix-dark-blue relative overflow-hidden">
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
            className="text-tarsonix-violet uppercase tracking-wider mb-3 font-semibold"
          >
            Our Approach
          </motion.h3>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold gradient-text mb-4"
          >
            Why Tarsonix?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-tarsonix-white/70 max-w-2xl mx-auto text-lg"
          >
            We bring together AI expertise, business acumen, and a commitment to client success.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={feature.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="flex items-start card-gradient p-8 rounded-xl hover:shadow-lg hover:shadow-tarsonix-blue/10"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 mr-6"
                >
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-tarsonix-blue to-tarsonix-violet neon-border">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-3 gradient-text">{feature.title}</h3>
                  <p className="text-tarsonix-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
