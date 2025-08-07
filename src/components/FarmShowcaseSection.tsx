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
      type: "video",
      title: "Historia en Movimiento",
      desc: "Video storytelling del Café Uribe",
      url: "/images/galeria/video_storytelling_cafe_uribe.mp4",
      span: "md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-3",
    },
    {
      id: 2,
      type: "image",
      title: "Mujer Caficultora",
      desc: "Trabajo con pasión en cada cosecha",
      url: "/images/galeria/caficultora.avif",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 3,
      type: "video",
      title: "Lavado del Café",
      desc: "Proceso clave para un sabor limpio",
      url: "/images/galeria/proceso_lavado_cafe.mp4",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 4,
      type: "image",
      title: "Tostión Perfecta",
      desc: "Realce de aromas en el grano",
      url: "/images/galeria/tostado_cafe.jpeg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 6,
      type: "video",
      title: "Explora la Finca",
      desc: "Un recorrido virtual por el cafetal",
      url: "/images/galeria/cafetales.mp4",
      span: "md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-3",
    },
    {
      id: 7,
      type: "image",
      title: "Cosecha Responsable",
      desc: "Recolección directa de la planta",
      url: "/images/galeria/recogiendo_cafe_planta.jpeg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 5,
      type: "image",
      title: "Secado en Pergamino",
      desc: "Etapa crucial para la calidad del grano",
      url: "/images/galeria/secado_del_cafe_pergamino.jpeg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 8,
      type: "image",
      title: "Nuestra Identidad",
      desc: "La esencia del café en una taza",
      url: "/images/galeria/logo_tasa_cafe_uribe.jpeg",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 9,
      type: "image",
      title: "Tecnología y Café",
      desc: "Innovación al servicio del sabor",
      url: "/images/galeria/cafe_en_la_mejor_tecnologia.jpeg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 10,
      type: "image",
      title: "Amor por el Café",
      desc: "El sabor que une generaciones",
      url: "/images/galeria/nino_tomando_cafe.jpeg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 11,
      type: "image",
      title: "Grano de Excelencia",
      desc: "Selección de café de alta calidad",
      url: "/images/galeria/granos_cafe_mejor_calidad.jpeg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 12,
      type: "image",
      title: "Paisaje Cafetero",
      desc: "Vista panorámica de la finca Uribe",
      url: "/images/galeria/finca_panoramica_cafe_uribe.jpeg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 13,
      type: "image",
      title: "Empaque Premium",
      desc: "Presentación elegante y profesional",
      url: "/images/galeria/empaque_premium_cafe_uribe.png",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 14,
      type: "image",
      title: "Tienda Propia",
      desc: "Nuestro punto de venta exclusivo",
      url: "/images/galeria/punto_de_venta_cafe_uribe.png",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 15,
      type: "image",
      title: "Secado de Cereza",
      desc: "Sol y paciencia para un grano perfecto",
      url: "/images/galeria/cafe_cereza_secando.jpeg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 16,
      type: "image",
      title: "Plántulas de Café",
      desc: "Inicio del viaje del grano perfecto",
      url: "/images/galeria/plantas_de_cafe.jpeg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
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
