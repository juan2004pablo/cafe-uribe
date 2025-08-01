
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
              Ubicada en el Norte de Santander, entre 1.600 y 1.850 metros sobre el nivel del mar,
              nuestra finca goza de condiciones climáticas excepcionales que favorecen
              el desarrollo de granos de café premium con más de 70.000 plantas activas.
            </p>
            <p className="text-lg text-coffee-brown/80 mb-6 leading-relaxed">
              Los suelos volcánicos ricos en nutrientes, combinados con el clima templado
              y las lluvias regulares, crean el ambiente perfecto para cultivar café
              de especialidad con características únicas y trazabilidad completa.
            </p>
            <div className="bg-coffee-orange/10 rounded-lg p-4 mb-6">
              <p className="text-coffee-brown font-semibold">
                <span className="text-coffee-orange">✓</span> No tercerizamos: Cada grano tiene historia, nombre y origen real
              </p>
            </div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center group">
                <div className="bg-coffee-orange/10 rounded-2xl p-6 mb-4 group-hover:bg-coffee-orange/20 transition-colors duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-coffee-orange mb-2">
                    1.600-1.850m
                  </div>
                  <div className="text-lg font-semibold text-coffee-brown mb-1">
                    Altitud
                  </div>
                  <p className="text-coffee-brown/70 text-sm">
                    Condiciones climáticas ideales para café de especialidad
                  </p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-coffee-brown/10 rounded-2xl p-6 mb-4 group-hover:bg-coffee-brown/20 transition-colors duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-coffee-brown mb-2">
                    +70.000
                  </div>
                  <div className="text-lg font-semibold text-coffee-brown mb-1">
                    Plantas activas
                  </div>
                  <p className="text-coffee-brown/70 text-sm">
                    Producción continua durante todo el año
                  </p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-coffee-cream/50 rounded-2xl p-6 mb-4 group-hover:bg-coffee-cream/70 transition-colors duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-coffee-orange mb-2">
                    50Ha
                  </div>
                  <div className="text-lg font-semibold text-coffee-brown mb-1">
                    Extensión cultivada
                  </div>
                  <p className="text-coffee-brown/70 text-sm">
                    Terreno dedicado exclusivamente al cultivo premium
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-coffee-orange/10 rounded-2xl p-6 mb-4 group-hover:bg-coffee-orange/20 transition-colors duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-coffee-brown mb-2">
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

            {/* Enhanced certifications and process section */}
            <div className="pt-8 border-t border-coffee-cream/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
                <div>
                  <h4 className="font-playfair text-2xl font-semibold text-coffee-brown mb-6">
                    Certificaciones y Registros
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'DO Café de Colombia',
                      'ICA',
                      'Invima', 
                      'CaféCert',
                      'Registro de exportador',
                      'Sello FNC'
                    ].map((cert) => (
                      <div key={cert} className="flex items-center bg-coffee-orange/5 rounded-lg p-2">
                        <div className="w-2 h-2 bg-coffee-orange rounded-full mr-2 flex-shrink-0"></div>
                        <span className="text-sm text-coffee-brown font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-playfair text-2xl font-semibold text-coffee-brown mb-6">
                    Proceso Integral
                  </h4>
                  <p className="text-coffee-brown/80 leading-relaxed mb-4">
                    Cultivamos, procesamos, trillamos, tostamos y empacamos nuestro propio café.
                    Un proceso 100% propio que garantiza trazabilidad total.
                  </p>
                  <div className="bg-coffee-cream/30 rounded-lg p-4">
                    <p className="text-coffee-brown font-semibold text-sm">
                      <span className="text-coffee-orange">📦</span> Inventario garantizado: 
                      Entregas continuas durante todo el año
                    </p>
                  </div>
                </div>
              </div>

              {/* New generation leadership highlight */}
              <div className="bg-gradient-to-r from-coffee-orange/10 to-coffee-brown/10 rounded-xl p-6">
                <div className="text-center">
                  <h4 className="font-playfair text-xl font-semibold text-coffee-brown mb-2">
                    Generación Joven al Frente
                  </h4>
                  <p className="text-coffee-brown/80">
                    Comprometida con la trazabilidad total y la innovación en cada proceso
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
