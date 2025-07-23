
import { motion } from 'framer-motion';
import { ArrowRight, Coffee, TrendingUp, Users, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextRotate } from '@/components/ui/text-rotate';
import Floating, { FloatingElement } from '@/components/ui/parallax-floating';
import { Link } from 'react-router-dom';

const B2BSection = () => {
  const businessTypes = [
    "Consultorio",
    "Hotel",
    "Bar",
    "Restaurante", 
    "Distribuidor",
    "Supermercado",
  ];

  const floatingImages = [
    "/images/foto_30.jpeg",
    "/images/foto_45.jpeg",
    "/images/foto_52.jpeg",
    "/images/foto_38.jpeg",
    "/images/foto_25.jpeg",
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-secondary/20 via-background to-secondary/10 overflow-hidden">
      {/* Floating Elements - Reduced sizes and better positioning */}
      <Floating sensitivity={0.2} className="hidden lg:block">
        <FloatingElement depth={1} className="top-[15%] left-[3%]">
          <motion.img
            src={floatingImages[0]}
            alt="Café premium"
            className="w-12 h-12 object-cover rounded-lg shadow-md rotate-12 opacity-40"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </FloatingElement>

        <FloatingElement depth={1.5} className="top-[25%] right-[5%]">
          <motion.img
            src={floatingImages[1]}
            alt="Granos de café"
            className="w-10 h-10 object-cover rounded-full shadow-md -rotate-6 opacity-35"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </FloatingElement>

        <FloatingElement depth={1.2} className="bottom-[20%] left-[6%]">
          <motion.img
            src={floatingImages[2]}
            alt="Plantación de café"
            className="w-14 h-10 object-cover rounded-md shadow-md rotate-3 opacity-30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </FloatingElement>

        <FloatingElement depth={2} className="bottom-[30%] right-[8%]">
          <motion.img
            src={floatingImages[3]}
            alt="Proceso del café"
            className="w-12 h-12 object-cover rounded-lg shadow-md -rotate-12 opacity-35"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </FloatingElement>

        <FloatingElement depth={1.8} className="top-[45%] left-[2%]">
          <motion.div
            className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center shadow-md"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Coffee className="w-4 h-4 text-primary opacity-70" />
          </motion.div>
        </FloatingElement>
      </Floating>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 relative z-30"
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

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                <span className="block">¿Eres un</span>
                <span className="text-primary">
                  <TextRotate
                    texts={businessTypes}
                    rotationInterval={3000}
                    staggerDuration={0.05}
                    staggerFrom="first"
                    mainClassName="overflow-hidden inline-block"
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  />
                </span>
                <span>?</span>
              </h2>

              {/* Description with better contrast */}
              <div className="relative">
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg -z-10" />
                <p className="relative text-base lg:text-lg text-foreground/90 leading-relaxed p-4 lg:p-6">
                  Únete a nuestra red de distribuidores y lleva la calidad premium de Café Uribe 
                  a tus clientes. Ofrecemos condiciones especiales, soporte técnico y la garantía 
                  de un café 100% colombiano con trazabilidad completa.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-30">
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
                  className="flex items-start space-x-3 p-4 rounded-lg bg-card/90 backdrop-blur-sm border border-border/50 shadow-sm"
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
              className="flex flex-col sm:flex-row gap-4 relative z-30"
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

          {/* Right Side - Visual Element - Now behind content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-first lg:order-last"
          >
            <div className="relative z-10">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="/images/foto_62.jpeg"
                  alt="Café para negocios"
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg z-20"
              >
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-primary">+200</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Socios Comerciales</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg z-20"
              >
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
