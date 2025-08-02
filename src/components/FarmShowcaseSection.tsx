import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Floating, { FloatingElement } from '@/components/ui/parallax-floating';
import InteractiveBentoGallery from '@/components/ui/interactive-bento-gallery';

const FarmShowcaseSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Media items for the InteractiveBentoGallery - expandido con 3 imágenes más (total: 15)
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
    },
    // Nuevas 3 imágenes adicionales
    {
      id: 13,
      type: "image",
      title: "Beneficio Húmedo",
      desc: "Proceso de lavado y fermentación controlada",
      url: "/images/foto_7.jpeg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 14,
      type: "image",
      title: "Tostado Artesanal",
      desc: "Proceso de tostado con control de temperatura preciso",
      url: "/images/foto_8.jpeg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 15,
      type: "image",
      title: "Empaque Final",
      desc: "Sellado y empaque para preservar frescura",
      url: "/images/foto_9.jpeg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-coffee-cream/20 via-white to-coffee-orange/10 overflow-hidden">
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

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
        </motion.div>

        {/* Interactive Bento Gallery - Ancho expandido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20 w-full max-w-[1400px] mx-auto"
        >
          <InteractiveBentoGallery
            mediaItems={farmMediaItems}
            title="Galería Interactiva"
            description="Explora y organiza nuestra colección visual arrastrando las imágenes"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FarmShowcaseSection;
