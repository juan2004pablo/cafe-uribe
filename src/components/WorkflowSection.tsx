
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight, Phone, Users, Package, Truck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WorkflowSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      number: 1,
      title: "Conversación Inicial",
      subtitle: "Entendemos tu negocio",
      icon: <Phone className="w-6 h-6" />,
      description: "Evaluamos tus necesidades específicas",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: 2,
      title: "Propuesta Personalizada",
      subtitle: "Solución a medida",
      icon: <Users className="w-6 h-6" />,
      description: "Creamos un plan adaptado a tu negocio",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: 3,
      title: "Muestras Premium",
      subtitle: "Prueba sin compromiso",
      icon: <Package className="w-6 h-6" />,
      description: "Envío gratuito para que evalúes la calidad",
      color: "from-green-500 to-green-600"
    },
    {
      number: 4,
      title: "Alianza Comercial",
      subtitle: "Formalizamos el acuerdo",
      icon: <Award className="w-6 h-6" />,
      description: "Condiciones preferenciales garantizadas",
      color: "from-orange-500 to-orange-600"
    },
    {
      number: 5,
      title: "Suministro Continuo",
      subtitle: "Entregas puntuales",
      icon: <Truck className="w-6 h-6" />,
      description: "Logística eficiente y soporte permanente",
      color: "from-coffee-orange to-amber-500"
    }
  ];

  const benefits = [
    { text: "Asesoría comercial especializada", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { text: "Precios competitivos por volumen", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { text: "Flexibilidad en métodos de pago", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { text: "Soporte técnico y capacitación", icon: <CheckCircle className="w-5 h-5 text-green-500" /> }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-brown mb-6">
            Tu Camino al Éxito
          </h2>
          <p className="text-lg text-coffee-brown/70 max-w-2xl mx-auto">
            Un proceso simple y transparente que garantiza el crecimiento de tu negocio
          </p>
        </motion.div>

        {/* Interactive workflow design */}
        <div className="relative mb-20">
          {/* Central hub */}
          <div className="hidden lg:flex absolute inset-0 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-32 h-32 bg-gradient-to-br from-coffee-orange to-amber-500 rounded-full flex items-center justify-center shadow-2xl z-10"
            >
              <div className="text-white text-center">
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm">Pasos</div>
              </div>
            </motion.div>
          </div>

          {/* Steps arranged in a circle */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180); // 72 degrees between each step, starting from top
              const radius = 200;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative ${index >= 3 ? 'lg:col-start-' + (index - 2) : ''}`}
                  style={{
                    transform: window.innerWidth >= 1024 ? `translate(${x}px, ${y}px)` : 'none'
                  }}
                >
                  <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                    <CardContent className="p-6 text-center relative">
                      {/* Animated background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />
                      
                      {/* Step indicator with pulse effect */}
                      <motion.div
                        className="relative mb-4"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10`}>
                          {step.number}
                        </div>
                        <motion.div
                          className={`absolute inset-0 w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.color} opacity-30`}
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>

                      {/* Icon with floating animation */}
                      <motion.div
                        className="w-12 h-12 mx-auto mb-4 bg-coffee-brown/10 rounded-lg flex items-center justify-center text-coffee-brown"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {step.icon}
                      </motion.div>

                      <h3 className="font-playfair text-lg font-bold text-coffee-brown mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm font-medium text-coffee-orange mb-3">
                        {step.subtitle}
                      </p>
                      <p className="text-sm text-coffee-brown/70 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Connection lines (visible on larger screens) */}
                      {index < steps.length - 1 && (
                        <motion.div
                          className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-coffee-orange to-transparent transform -translate-y-1/2 z-0"
                          initial={{ scaleX: 0 }}
                          animate={inView ? { scaleX: 1 } : {}}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                        />
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Enhanced benefits section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-coffee-brown via-coffee-brown/95 to-coffee-brown rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-coffee-orange/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="font-playfair text-3xl md:text-4xl font-bold mb-8"
                >
                  ¿Por qué elegir Café Uribe?
                </motion.h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                        {benefit.icon}
                      </div>
                      <span className="text-lg group-hover:text-coffee-cream transition-colors">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="text-center lg:text-right">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="space-y-6"
                >
                  <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <motion.div
                      className="text-5xl font-bold text-coffee-orange mb-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      +50
                    </motion.div>
                    <div className="text-xl mb-4">Negocios Satisfechos</div>
                    <div className="flex justify-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-coffee-orange rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    size="lg"
                    className="bg-coffee-orange hover:bg-coffee-orange/90 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Comienza Tu Alianza
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;
