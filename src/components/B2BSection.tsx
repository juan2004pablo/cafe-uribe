
import { motion } from 'framer-motion';
import { ArrowRight, Coffee, TrendingUp, Users, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextRotate } from '@/components/ui/text-rotate';
import Floating, { FloatingElement } from '@/components/ui/parallax-floating';
import { Link } from 'react-router-dom';

const B2BSection = () => {
  const businessTypes = [
    "Cafeterías",
    "Restaurantes", 
    "Hoteles",
    "Distribuidores",
    "Supermercados",
    "Oficinas"
  ];

  const floatingImages = [
    "/images/foto_30.jpeg", // Café en taza
    "/images/foto_45.jpeg", // Granos de café
    "/images/foto_52.jpeg", // Plantación
    "/images/foto_38.jpeg", // Proceso
    "/images/foto_25.jpeg", // Empaque
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-secondary/30 via-background to-secondary/20 overflow-hidden">
      {/* Floating Elements */}
      <Floating sensitivity={0.3} className="hidden lg:block">
        <FloatingElement depth={1} className="top-[10%] left-[5%]">
          <motion.img
            src={floatingImages[0]}
            alt="Café premium"
            className="w-20 h-20 object-cover rounded-xl shadow-lg rotate-12 opacity-70"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </FloatingElement>

        <FloatingElement depth={2} className="top-[20%] right-[8%]">
          <motion.img
            src={floatingImages[1]}
            alt="Granos de café"
            className="w-16 h-16 object-cover rounded-full shadow-lg -rotate-6 opacity-60"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </FloatingElement>

        <FloatingElement depth={1.5} className="bottom-[15%] left-[8%]">
          <motion.img
            src={floatingImages[2]}
            alt="Plantación de café"
            className="w-24 h-16 object-cover rounded-lg shadow-lg rotate-3 opacity-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </FloatingElement>

        <FloatingElement depth={3} className="bottom-[25%] right-[12%]">
          <motion.img
            src={floatingImages[3]}
            alt="Proceso del café"
            className="w-18 h-18 object-cover rounded-xl shadow-lg -rotate-12 opacity-65"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.65, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </FloatingElement>

        <FloatingElement depth={2.5} className="top-[40%] left-[3%]">
          <motion.div
            className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Coffee className="w-6 h-6 text-primary" />
          </motion.div>
        </FloatingElement>
      </Floating>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Oportunidades B2B</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                ¿Eres un{' '}
                <span className="text-primary">
                  <TextRotate
                    texts={businessTypes}
                    rotationInterval={3000}
                    staggerDuration={0.05}
                    staggerFrom="first"
                    mainClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  />
                </span>
                ?
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Únete a nuestra red de distribuidores y lleva la calidad premium de Café Uribe 
                a tus clientes. Ofrecemos condiciones especiales, soporte técnico y la garantía 
                de un café 100% colombiano con trazabilidad completa.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Package, title: "Precios Mayorista", desc: "Condiciones especiales" },
                { icon: Users, title: "Soporte Técnico", desc: "Asesoría especializada" },
                { icon: Coffee, title: "Calidad Garantizada", desc: "100% café colombiano" },
                { icon: TrendingUp, title: "Crecimiento", desc: "Expande tu negocio" }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/clientes-b2b">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                >
                  Información B2B
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contacto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Contacta con Nosotros
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <img
                  src="/images/foto_62.jpeg"
                  alt="Café para negocios"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">+200</div>
                  <div className="text-sm text-muted-foreground">Socios Comerciales</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
