
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Floating, { FloatingElement } from '@/components/ui/parallax-floating';
import InteractiveBentoGallery from '@/components/ui/interactive-bento-gallery';

const FarmShowcaseSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Media items for the InteractiveBentoGallery - expandido con más imágenes
  const farmMediaItems = [
    {
      id: 1,
      type: "image",
      title: "Vista Panorámica",
      desc: "Vista espectacular de nuestra finca cafetera",
      url: "/images/foto_67.jpeg",
      span: "md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-3",
    },
    {
      id: 2,
      type: "image",
      title: "Cafetales Montañosos",
      desc: "Plantaciones en las montañas del Norte de Santander",
      url: "/images/foto_70.avif",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 3,
      type: "video",
      title: "Proceso de Cultivo",
      desc: "Técnicas tradicionales de cultivo",
      url: "/images/video_3.mp4",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 4,
      type: "image",
      title: "Recolección Manual",
      desc: "Proceso artesanal de recolección",
      url: "/images/foto_73.jpeg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 5,
      type: "image",
      title: "Granos Premium",
      desc: "Café de alta calidad recién cosechado",
      url: "/images/foto_74.jpeg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 6,
      type: "video",
      title: "Recorrido Virtual",
      desc: "Tour completo por nuestra plantación",
      url: "/images/video_2.mp4",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 7,
      type: "image",
      title: "Cultivo Sostenible",
      desc: "Prácticas ambientalmente responsables",
      url: "/images/foto_1.jpeg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 8,
      type: "image",
      title: "Secado Natural",
      desc: "Proceso tradicional de secado al sol",
      url: "/images/foto_2.jpeg",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 9,
      type: "image",
      title: "Selección de Granos",
      desc: "Control de calidad riguroso",
      url: "/images/foto_3.jpeg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 10,
      type: "image",
      title: "Terroir Único",
      desc: "Microclima ideal para café premium",
      url: "/images/foto_4.jpeg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 11,
      type: "image",
      title: "Tradición Familiar",
      desc: "Tres generaciones dedicadas al café",
      url: "/images/foto_5.jpeg",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 12,
      type: "image",
      title: "Cosecha Premium",
      desc: "Recolección selectiva de los mejores frutos",
      url: "/images/foto_6.jpeg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-br from-coffee-cream/20 via-white to-coffee-orange/10 overflow-hidden">
      {/* Floating Background Elements */}
      <Floating className="absolute inset-0 pointer-events-none">
        <FloatingElement depth={1} className="top-20 left-10 w-32 h-32 bg-coffee-orange/10 rounded-full blur-xl">
          <div />
        </FloatingElement>
        <FloatingElement depth={2} className="top-40 right-20 w-24 h-24 bg-coffee-brown/10 rounded-full blur-lg">
          <div />
        </FloatingElement>
        <FloatingElement depth={3} className="bottom-32 left-1/4 w-40 h-40 bg-coffee-cream/20 rounded-full blur-2xl">
          <div />
        </FloatingElement>
      </Floating>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-coffee-brown mb-6">
            Nuestra Finca Cafetera
          </h2>
          <p className="text-xl text-coffee-brown/80 max-w-3xl mx-auto leading-relaxed">
            Descubre el corazón de nuestro café: una finca de 50 hectáreas ubicada a 1.750 metros 
            sobre el nivel del mar, donde la tradición y la innovación se encuentran.
          </p>
          <div className="w-32 h-1 bg-coffee-orange mx-auto mt-8"></div>
        </motion.div>

        {/* Interactive Bento Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <InteractiveBentoGallery
            mediaItems={farmMediaItems}
            title="Galería Interactiva"
            description="Explora y organiza nuestra colección visual arrastrando las imágenes"
          />
        </motion.div>

        {/* Stats with improved design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-coffee-cream/30">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-coffee-brown text-center mb-12">
              Nuestra Finca en Números
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <div className="mt-12 pt-8 border-t border-coffee-cream/50">
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

export default FarmShowcaseSection;
