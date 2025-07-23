
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Building2, User, Mail, Phone, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ModernContactForm = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-32 bg-coffee-brown relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coffee-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-coffee-cream/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-8">
            Comencemos una Alianza
          </h2>
          <div className="w-24 h-1 bg-coffee-orange mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Únete a nuestra red de aliados comerciales y lleva la excelencia del café colombiano a tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium flex items-center">
                    <Building2 className="w-4 h-4 mr-2" />
                    Nombre del Negocio
                  </label>
                  <Input 
                    placeholder="Tu empresa" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-coffee-orange"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium flex items-center">
                    <Package className="w-4 h-4 mr-2" />
                    Tipo de Negocio
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cafeteria">Cafetería</SelectItem>
                      <SelectItem value="restaurante">Restaurante/Hotel</SelectItem>
                      <SelectItem value="distribuidor">Distribuidor</SelectItem>
                      <SelectItem value="tienda">Tienda Especializada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Nombre de Contacto
                  </label>
                  <Input 
                    placeholder="Tu nombre" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-coffee-orange"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-coffee-orange"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Teléfono
                </label>
                <Input 
                  placeholder="+57 300 123 4567" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-coffee-orange"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium">Mensaje</label>
                <Textarea
                  placeholder="Cuéntanos sobre tu negocio..."
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-coffee-orange min-h-[120px]"
                />
              </div>

              <Button size="lg" className="w-full bg-coffee-orange hover:bg-coffee-orange/90 text-white font-semibold">
                Enviar Solicitud
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-coffee-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-6 h-6 text-coffee-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Respuesta en 24 horas</h3>
                  <p className="text-white/70">Te contactaremos rápidamente para comenzar nuestra alianza</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-coffee-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-coffee-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Muestras gratuitas</h3>
                  <p className="text-white/70">Prueba nuestro café antes de tomar cualquier decisión</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-coffee-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-coffee-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Condiciones preferenciales</h3>
                  <p className="text-white/70">Precios especiales y términos flexibles para tu negocio</p>
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
