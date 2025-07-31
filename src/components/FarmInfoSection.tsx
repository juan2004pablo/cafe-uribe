
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FarmInfoSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-coffee-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/foto_67.jpeg"
              alt="Finca de café"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-playfair text-4xl font-bold text-coffee-brown mb-6">
              La Finca Café Uribe
            </h2>
            <p className="text-lg text-coffee-brown/80 mb-6 leading-relaxed">
              Ubicada en el corazón del Norte de Santander, a 1.750 metros sobre el nivel del mar,
              nuestra finca goza de condiciones climáticas excepcionales que favorecen
              el desarrollo de granos de café premium.
            </p>
            <p className="text-lg text-coffee-brown/80 mb-8 leading-relaxed">
              Los suelos volcánicos ricos en nutrientes, combinados con el clima templado
              y las lluvias regulares, crean el ambiente perfecto para cultivar café
              de especialidad con características únicas.
            </p>
          </motion.div>
        </div>

        {/* Stats with improved design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-coffee-cream/30">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-coffee-brown text-center mb-12">
              Nuestra Finca en Números
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="bg-coffee-orange/10 rounded-2xl p-6 mb-4 group-hover:bg-coffee-orange/20 transition-colors duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-coffee-orange mb-2">
                    1.750m
                  </div>
                  <div className="text-lg font-semibold text-coffee-brown mb-1">
                    Altura sobre el mar
                  </div>
                  <p className="text-coffee-brown/70 text-sm">
                    Condiciones climáticas ideales para café de especialidad
                  </p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-coffee-brown/10 rounded-2xl p-6 mb-4 group-hover:bg-coffee-brown/20 transition-colors duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-coffee-brown mb-2">
                    50Ha
                  </div>
                  <div className="text-lg font-semibold text-coffee-brown mb-1">
                    Extensión cultivada
                  </div>
                  <p className="text-coffee-brown/70 text-sm">
                    Terreno dedicado exclusivamente al cultivo de café premium
                  </p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-coffee-cream/50 rounded-2xl p-6 mb-4 group-hover:bg-coffee-cream/70 transition-colors duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-coffee-orange mb-2">
                    54
                  </div>
                  <div className="text-lg font-semibold text-coffee-brown mb-1">
                    Años de tradición
                  </div>
                  <p className="text-coffee-brown/70 text-sm">
                    Experiencia familiar transmitida de generación en generación
                  </p>
                </div>
              </div>
            </div>

            {/* Additional info section */}
            <div className="pt-8 border-t border-coffee-cream/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="font-playfair text-2xl font-semibold text-coffee-brown mb-4">
                    Certificaciones y Calidad
                  </h4>
                  <ul className="space-y-2 text-coffee-brown/80">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-coffee-orange rounded-full mr-3"></div>
                      Café 100% Arábica Premium
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-coffee-orange rounded-full mr-3"></div>
                      Prácticas sostenibles certificadas
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-coffee-orange rounded-full mr-3"></div>
                      Comercio justo garantizado
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-playfair text-2xl font-semibold text-coffee-brown mb-4">
                    Proceso Artesanal
                  </h4>
                  <p className="text-coffee-brown/80 leading-relaxed">
                    Cada grano pasa por un proceso meticuloso de selección, lavado y secado 
                    natural que preserva los sabores únicos de nuestro terroir montañoso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FarmInfoSection;
