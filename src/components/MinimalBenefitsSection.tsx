
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

const MinimalBenefitsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const benefits = [
    "Asesoría comercial especializada",
    "Precios competitivos por volumen",
    "Flexibilidad en métodos de pago",
    "Soporte técnico y capacitación",
    "Logística eficiente",
    "Calidad garantizada"
  ];

  return (
    <section ref={ref} className="py-32 bg-coffee-cream/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-coffee-brown mb-8">
            ¿Por qué elegirnos?
          </h2>
          <div className="w-24 h-1 bg-coffee-orange mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-4 group"
            >
              <motion.div
                className="flex-shrink-0 w-6 h-6 text-coffee-orange"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <CheckCircle className="w-full h-full" />
              </motion.div>
              <span className="text-lg text-coffee-brown group-hover:text-coffee-orange transition-colors duration-300">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-12 bg-white/80 backdrop-blur-sm rounded-2xl px-12 py-8 shadow-lg">
            <div>
              <motion.div
                className="text-4xl font-bold text-coffee-orange mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                +50
              </motion.div>
              <div className="text-coffee-brown">Negocios Satisfechos</div>
            </div>
            <div className="w-px h-16 bg-coffee-brown/20"></div>
            <div>
              <motion.div
                className="text-4xl font-bold text-coffee-orange mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                10+
              </motion.div>
              <div className="text-coffee-brown">Años de Experiencia</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MinimalBenefitsSection;
