
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Coffee, Handshake, Truck, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModernWorkflowSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Conversación",
      description: "Entendemos tu negocio"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Propuesta",
      description: "Solución personalizada"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Alianza",
      description: "Acuerdo comercial"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Suministro",
      description: "Entregas continuas"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Crecimiento",
      description: "Éxito conjunto"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-coffee-brown mb-8">
            Tu Camino al Éxito
          </h2>
          <div className="w-24 h-1 bg-coffee-orange mx-auto"></div>
        </motion.div>

        {/* Modern Timeline - Responsive */}
        <div className="relative">
          {/* Central flowing line - Desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-coffee-orange via-coffee-brown to-coffee-orange transform -translate-y-1/2 origin-left hidden lg:block"
          />

          {/* Steps - Desktop (horizontal) */}
          <div className="hidden lg:flex justify-between items-center relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center group"
              >
                {/* Icon container with floating effect */}
                <motion.div
                  className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center text-coffee-brown mb-6 group-hover:shadow-2xl transition-all duration-300 border-4 border-coffee-cream"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <div className="text-center max-w-32">
                  <h3 className="font-playfair text-xl font-bold text-coffee-brown mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-coffee-brown/70">
                    {step.description}
                  </p>
                </div>

                {/* Step number */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.8 }}
                  className="absolute -bottom-8 w-8 h-8 bg-coffee-orange text-white rounded-full flex items-center justify-center text-sm font-bold"
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Steps - Mobile/Tablet (vertical) */}
          <div className="lg:hidden relative">
            {/* Vertical line for mobile */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-coffee-orange via-coffee-brown to-coffee-orange origin-top z-0"
              style={{ height: `${(steps.length - 1) * 112 + 80}px` }}
            />
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center group relative z-10"
                >
                  {/* Step number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.8 }}
                    className="w-8 h-8 bg-coffee-orange text-white rounded-full flex items-center justify-center text-sm font-bold mr-6 flex-shrink-0 relative z-10"
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon container with floating effect */}
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-xl flex items-center justify-center text-coffee-brown mr-6 group-hover:shadow-2xl transition-all duration-300 border-4 border-coffee-cream flex-shrink-0"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl font-bold text-coffee-brown mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-coffee-brown/70">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20"
        >
          <Button 
            size="lg" 
            className="bg-coffee-brown hover:bg-coffee-brown/90 text-white px-12 py-4 text-lg"
            onClick={() => scrollToSection('comencemos-alianza')}
          >
            Comenzar Alianza
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernWorkflowSection;
