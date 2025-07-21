import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Coffee, Users, Award, Leaf, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [varietiesRef, varietiesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const varieties = [
    {
      name: "Café Premium Origen",
      description: "Notas cítricas y chocolate, altura 1800m",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop"
    },
    {
      name: "Café Especial Tostión Media",
      description: "Equilibrio perfecto, notas frutales",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
    },
    {
      name: "Café Artesanal Intenso",
      description: "Cuerpo robusto, ideal para espresso",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=300&fit=crop"
    }
  ];

  const processSteps = [
    { icon: <Leaf className="w-8 h-8" />, title: "Cultivo", description: "En las montañas del Eje Cafetero" },
    { icon: <Coffee className="w-8 h-8" />, title: "Recolección", description: "Manual y selectiva" },
    { icon: <Award className="w-8 h-8" />, title: "Tostión", description: "Proceso artesanal controlado" },
    { icon: <Users className="w-8 h-8" />, title: "Tu Taza", description: "Calidad garantizada" }
  ];

  const testimonials = [
    {
      name: "Juan Pérez",
      business: "Café Central - Bogotá",
      testimonial: "El café de Cafe Uribe es excepcional, se siente la calidad desde la primera taza. ¡Recomendado!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ana López",
      business: "Tostadora Especializada",
      testimonial: "La trazabilidad del café es impresionante, se nota el cuidado en cada detalle. ¡Increíble experiencia!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
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
              Legado de <span className="text-orange-500">Aroma</span> y <span className="text-orange-500">Sabor</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">100% Colombiano</p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Café de finca con trazabilidad garantizada siempre. De la finca a tu taza con la más alta calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleKnowOurCoffee}
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 font-medium"
              >
                Conoce Nuestro Café
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleRequestSample}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 font-medium"
              >
                Solicita una Muestra
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
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
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Desde las montañas del Eje Cafetero colombiano, llevamos más de tres generaciones
                cultivando el café más fino con métodos tradicionales y tecnología moderna.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Cada grano cuenta la historia de nuestra tierra, nuestro compromiso con la calidad
                y nuestra pasión por llevar el mejor café colombiano al mundo.
              </p>
              <Link to="/nosotros">
                <Button className="bg-orange-500 hover:bg-orange-600">
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
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=700&fit=crop"
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

      {/* Nuestro Café */}
      <section ref={varietiesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={varietiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestras Variedades
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Descubre nuestras variedades premium, cada una con características únicas
              que reflejan la riqueza de nuestros suelos cafeteros.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {varieties.map((variety, index) => (
              <motion.div
                key={variety.name}
                initial={{ opacity: 0, y: 30 }}
                animate={varietiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="h-full"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-64 flex-shrink-0">
                    <img
                      src={variety.image}
                      alt={variety.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {variety.name}
                    </h3>
                    <p className="text-gray-700 mb-4 flex-grow">
                      {variety.description}
                    </p>
                    <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white mt-auto">
                      Ver Detalles
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/variedades">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Ver Todas las Variedades
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* De la Finca a Tu Taza */}
      <section ref={processRef} className="py-20 bg-gray-900 text-white">
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
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-orange-500/50 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section ref={testimonialsRef} className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              La confianza de nuestros socios comerciales es nuestro mayor logro
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-orange-500 font-medium">
                          {testimonial.business}
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                      "{testimonial.testimonial}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA B2B */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ¿Eres un Negocio?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Únete a nuestra red de distribuidores y lleva la calidad premium de Café Uribe
            a tus clientes. Ofrecemos condiciones especiales para mayoristas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clientes-b2b">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Información B2B
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contacto">
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                Contacta con Nosotros
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
