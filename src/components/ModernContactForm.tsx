
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Coffee, Shield, Truck, Mail, Building2, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DisplayCards from '@/components/ui/display-cards';

const ModernContactForm = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const coffeeCards = [
    {
      icon: <Coffee className="size-4 text-coffee-orange" />,
      title: "Calidad Premium",
      description: "100% Café Colombiano",
      date: "Certificado",
      iconClassName: "text-coffee-orange",
      titleClassName: "text-coffee-brown",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Shield className="size-4 text-coffee-orange" />,
      title: "Garantía Total",
      description: "Satisfacción asegurada",
      date: "Respaldado",
      iconClassName: "text-coffee-orange",
      titleClassName: "text-coffee-brown",
      className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Truck className="size-4 text-coffee-orange" />,
      title: "Logística Eficaz",
      description: "Entregas puntuales",
      date: "Garantizado",
      iconClassName: "text-coffee-orange",
      titleClassName: "text-coffee-brown",
      className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-coffee-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-brown mb-6">
            Comencemos una Alianza
          </h2>
          <p className="text-lg text-coffee-brown/70 max-w-2xl mx-auto">
            Déjanos tus datos y te contactaremos para explorar oportunidades de negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Display Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <DisplayCards cards={coffeeCards} />
          </motion.div>

          {/* Right side - Simple Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-coffee-cream"
          >
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="font-playfair text-2xl font-bold text-coffee-brown mb-2">
                  Solicita Información
                </h3>
                <p className="text-coffee-brown/60">
                  Formulario rápido para comenzar
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-coffee-brown text-sm font-medium flex items-center">
                    <Building2 className="w-4 h-4 mr-2 text-coffee-orange" />
                    Nombre del Negocio
                  </label>
                  <Input 
                    placeholder="Tu empresa" 
                    className="border-coffee-cream/60 focus:border-coffee-orange"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-coffee-brown text-sm font-medium flex items-center">
                    <User className="w-4 h-4 mr-2 text-coffee-orange" />
                    Nombre de Contacto
                  </label>
                  <Input 
                    placeholder="Tu nombre" 
                    className="border-coffee-cream/60 focus:border-coffee-orange"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-coffee-brown text-sm font-medium flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-coffee-orange" />
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="border-coffee-cream/60 focus:border-coffee-orange"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-coffee-brown text-sm font-medium flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-coffee-orange" />
                    Teléfono
                  </label>
                  <Input 
                    placeholder="+57 300 123 4567" 
                    className="border-coffee-cream/60 focus:border-coffee-orange"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <Button size="lg" className="w-full bg-coffee-orange hover:bg-coffee-orange/90 text-white">
                  Enviar Solicitud
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-coffee-brown/60 mb-2">¿Prefieres contactarnos directamente?</p>
                  <Button variant="outline" className="text-coffee-brown border-coffee-brown hover:bg-coffee-brown hover:text-white">
                    Ir a Página de Contacto
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernContactForm;
