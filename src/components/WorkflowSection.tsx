
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

        {/* Timeline visual mejorado */}
        <div className="relative mb-16">
          {/* Línea conectora curva */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-coffee-orange via-amber-400 to-coffee-orange rounded-full opacity-20 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    {/* Fondo gradiente animado */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      initial={false}
                    />
                    
                    {/* Número del paso */}
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icono */}
                    <motion.div
                      className="w-12 h-12 mx-auto mb-4 bg-coffee-brown/10 rounded-lg flex items-center justify-center text-coffee-brown"
                      whileHover={{ scale: 1.1 }}
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

                    {/* Efecto de brillo */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-700"
                      animate={{
                        x: inView ? ['-100%', '200%'] : '-100%'
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.3 + 1,
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                    />
                  </CardContent>
                </Card>

                {/* Flecha conectora */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <ArrowRight className="w-6 h-6 text-coffee-orange" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sección de beneficios adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-coffee-brown via-coffee-brown/95 to-coffee-brown rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Patrón de fondo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-6">
                ¿Por qué elegir Café Uribe?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    {benefit.icon}
                    <span className="text-lg">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                  <div className="text-4xl font-bold text-coffee-orange mb-2">+200</div>
                  <div className="text-lg">Negocios Satisfechos</div>
                </div>
                <Button
                  size="lg"
                  className="bg-coffee-orange hover:bg-coffee-orange/90 text-white shadow-xl"
                >
                  Comienza Tu Alianza
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;
