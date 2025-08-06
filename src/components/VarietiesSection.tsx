
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MapPin, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const VarietiesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const varieties = [
    {
      name: "Especial Tostado Entero",
      description: "Notas cítricas y chocolate",
      image: "/images/producto/empaque_especial_cafe_500_gramos.png",
      origin: "Norte de Santander"
    },
    {
      name: "Especial Tostado Molido",
      description: "Equilibrio perfecto, notas frutales",
      image: "/images/producto/empaque_puro_cafe.jpeg",
      origin: "Norte de Santander"
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {varieties.map((variety, index) => (
            <motion.div
              key={variety.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={variety.image}
                  alt={variety.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Origin badge */}
                <div className="absolute top-4 left-4 bg-coffee-orange/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{variety.origin}</span>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{variety.name}</h3>
                  <p className="flex items-center gap-2 mb-2 text-white/90 text-sm leading-relaxed">
                    <Coffee className="w-5 h-5 text-coffee-orange" />
                    {variety.description}
                  </p>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-coffee-orange/0 group-hover:bg-coffee-orange/10 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-coffee-orange mb-2">100%</div>
            <div className="text-gray-600">Café Colombiano</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-coffee-orange mb-2">+10</div>
            <div className="text-gray-600">Años de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-coffee-orange mb-2">1750m</div>
            <div className="text-gray-600">Altitud promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-coffee-orange mb-2">AAA</div>
            <div className="text-gray-600">Calidad garantizada</div>
          </div>
        </motion.div>

        <div className="text-center">
          <Link to="/variedades">
            <Button 
              size="lg" 
              className="bg-coffee-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium group"
            >
              Explorar Todas las Variedades
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VarietiesSection;
