

import { useState, useRef, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Floating, { FloatingElement } from '@/components/ui/parallax-floating';
import InteractiveBentoGallery from '@/components/ui/interactive-bento-gallery';

// 3D Coffee Bean Component
const CoffeeBeans = () => {
  return (
    <group>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-2, 0, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh position={[1, 1, -1]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial color="#A0522D" roughness={0.8} />
        </mesh>
      </Float>
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh position={[0, -1, 1]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh position={[2, -0.5, 0.5]}>
          <sphereGeometry args={[0.28, 16, 16]} />
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[-1, 0.8, -0.5]}>
          <sphereGeometry args={[0.32, 16, 16]} />
          <meshStandardMaterial color="#A0522D" roughness={0.8} />
        </mesh>
      </Float>
    </group>
  );
};

// Video Player Component
const VideoPlayer = ({ src, title }: { src: string; title: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
      <video
        ref={videoRef}
        className="w-full h-64 object-cover"
        muted={isMuted}
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
      
      {/* Video Controls Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-coffee-brown" />
            ) : (
              <Play className="w-8 h-8 text-coffee-brown ml-1" />
            )}
          </button>
        </div>
        
        <div className="absolute bottom-4 right-4">
          <button
            onClick={toggleMute}
            className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-coffee-brown" />
            ) : (
              <Volume2 className="w-5 h-5 text-coffee-brown" />
            )}
          </button>
        </div>
        
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const FarmShowcaseSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const farmVideos = [
    { src: "/images/video_2.mp4", title: "Recorrido por la plantación" },
    { src: "/images/video_3.mp4", title: "Proceso de cultivo" }
  ];

  // Media items for the InteractiveBentoGallery
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

        {/* Interactive 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-80 mb-20 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-coffee-brown/20 to-coffee-orange/20"
        >
          <Canvas camera={{ position: [5, 2, 5], fov: 60 }}>
            <Suspense fallback={null}>
              <Environment preset="sunset" />
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              
              <CoffeeBeans />
              
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Suspense>
          </Canvas>
          
          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <h3 className="font-playfair text-4xl font-bold text-white drop-shadow-lg">
                Café Uribe
              </h3>
              <p className="text-white/90 text-lg mt-2 drop-shadow-md">
                Granos de Excelencia
              </p>
            </div>
          </div>
        </motion.div>

        {/* Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="font-playfair text-3xl font-bold text-coffee-brown text-center mb-12">
            Experiencia Visual
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {farmVideos.map((video, index) => (
              <motion.div
                key={video.src}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              >
                <VideoPlayer src={video.src} title={video.title} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Bento Gallery replacing the old image gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-20"
        >
          <InteractiveBentoGallery
            mediaItems={farmMediaItems}
            title="Galería Interactiva"
            description="Explora y organiza nuestra colección visual arrastrando las imágenes"
          />
        </motion.div>

        {/* Stats with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="group">
            <motion.div
              className="text-5xl font-bold text-coffee-orange mb-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              1.750m
            </motion.div>
            <p className="text-coffee-brown">Altura sobre el mar</p>
          </div>
          
          <div className="group">
            <motion.div
              className="text-5xl font-bold text-coffee-orange mb-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              50Ha
            </motion.div>
            <p className="text-coffee-brown">Extensión cultivada</p>
          </div>
          
          <div className="group">
            <motion.div
              className="text-5xl font-bold text-coffee-orange mb-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              54°
            </motion.div>
            <p className="text-coffee-brown">Años de tradición</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FarmShowcaseSection;
