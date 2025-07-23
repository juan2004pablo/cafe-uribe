
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Coffee, Users, Award, Leaf, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import B2BSection from '@/components/B2BSection';
import VarietiesSection from '@/components/VarietiesSection';
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';
import HeroCTA from '@/components/HeroCTA';

const Index = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const processSteps = [
    { icon: <Leaf className="w-8 h-8" />, title: "Cultivo", description: "En las montañas del Eje Cafetero" },
    { icon: <Coffee className="w-8 h-8" />, title: "Recolección", description: "Manual y selectiva" },
    { icon: <Award className="w-8 h-8" />, title: "Tostión", description: "Proceso artesanal controlado" },
    { icon: <Users className="w-8 h-8" />, title: "Tu Taza", description: "Calidad garantizada" }
  ];

  const testimonials = [
    {
      author: {
        name: "Juan Pérez",
        handle: "Café Central - Bogotá",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "El café de Cafe Uribe es excepcional, se siente la calidad desde la primera taza. Nuestros clientes siempre quedan satisfechos con el aroma y sabor único que ofrecemos.",
    },
    {
      author: {
        name: "Ana López",
        handle: "Tostadora Especializada",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "La trazabilidad del café es impresionante, se nota el cuidado en cada detalle. Como tostadora, valoramos la consistencia y calidad que nos brinda Café Uribe.",
    },
    {
      author: {
        name: "Carlos Mendoza",
        handle: "Restaurante Gourmet",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Hemos trabajado con Café Uribe por años y siempre nos sorprende la calidad constante. Es el complemento perfecto para nuestros desayunos gourmet.",
    },
    {
      author: {
        name: "María Rodríguez",
        handle: "Café Boutique",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "La variedad de sabores y la frescura del café de Uribe nos permite ofrecer una experiencia única a nuestros clientes. Definitivamente recomendado.",
    }
  ];

  const handleKnowOurCoffee = () => {
    window.location.href = '/variedades';
  };

  const handleRequestSample = () => {
    window.location.href = '/contacto';
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Legado de <span className="text-coffee-orange">Aroma</span> y <span className="text-coffee-orange">Sabor</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">100% Colombiano</p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Café de finca con trazabilidad garantizada siempre. De la finca a tu taza con la más alta calidad.
            </p>
            
            <HeroCTA 
              onKnowOurCoffee={handleKnowOurCoffee}
              onRequestSample={handleRequestSample}
            />
          </motion.div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section ref={aboutRef} className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Quiénes somos
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Café Uribe es una marca registrada y avalada por Invima,
                lo que garantiza la calidad y sanidad de sus productos.
                Operamos como tostadores, exportadores y trilladores,
                asegurando un proceso de producción completo.
                Nuestro café cuenta con denominación de origen y el sello de la Federación Nacional de Cafeteros,
                lo que certifica su autenticidad y que es 100% colombiano.
                Un verdadero legado de aroma y sabor.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                En Café Uribe, nos dedicamos a ofrecer una experiencia auténtica y de alta calidad a todos nuestros clientes,
                celebrando la riqueza del café colombiano en cada taza.
              </p>
              <Link to="/nosotros">
                <Button className="bg-coffee-orange hover:bg-orange-600">
                  Conoce Más Sobre Nosotros
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/foto_24.jpeg"
                alt="Plantación de café"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                <p className="text-2xl font-bold text-gray-900">+50</p>
                <p className="text-gray-600">Años de tradición</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestro Café - Nuevo componente */}
      <VarietiesSection />

      {/* De la Finca a Tu Taza */}
      <section ref={processRef} className="py-20 bg-coffee-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              De la Finca a Tu Taza
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Nuestro proceso artesanal garantiza la máxima calidad en cada paso,
              desde el cultivo hasta el producto final.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-coffee-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-coffee-orange/50 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios - Nuevo componente con marquee */}
      <TestimonialsSection
        title="Lo Que Dicen Nuestros Clientes"
        description="La confianza de nuestros socios comerciales es nuestro mayor logro"
        testimonials={testimonials}
        className="bg-orange-50"
      />

      {/* CTA B2B - Enhanced Section */}
      <B2BSection />

      <Footer />
    </div>
  );
};

export default Index;
