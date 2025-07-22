
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, Play, Pause, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Galeria = () => {
    const [selectedMedia, setSelectedMedia] = useState<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    // Media items (combinando fotos y videos)
    const mediaItems = [
        {
            id: 1,
            type: 'image',
            src: '/images/foto_1.jpeg',
            title: 'Cultivos en las montañas',
            category: 'finca'
        },
        {
            id: 2,
            type: 'image',
            src: '/images/foto_2.jpeg',
            title: 'Granos de café premium',
            category: 'producto'
        },
        {
            id: 3,
            type: 'image',
            src: '/images/foto_3.jpeg',
            title: 'Recolección tradicional',
            category: 'proceso'
        },
        {
            id: 4,
            type: 'image',
            src: '/images/foto_4.jpeg',
            title: 'Arte en cada taza',
            category: 'barismo'
        },
        {
            id: 5,
            type: 'image',
            src: '/images/foto_5.jpeg',
            title: 'Tostión artesanal',
            category: 'proceso'
        },
        {
            id: 6,
            type: 'image',
            src: '/images/foto_6.jpeg',
            title: 'Café recién molido',
            category: 'producto'
        },
        {
            id: 7,
            type: 'image',
            src: '/images/foto_7.jpeg',
            title: 'Plantaciones verdes',
            category: 'finca'
        },
        {
            id: 8,
            type: 'image',
            src: '/images/foto_8.jpeg',
            title: 'Proceso de secado',
            category: 'proceso'
        },
        {
            id: 9,
            type: 'image',
            src: '/images/foto_9.jpeg',
            title: 'Espresso perfecto',
            category: 'barismo'
        },
        {
            id: 10,
            type: 'image',
            src: '/images/foto_10.jpeg',
            title: 'Grano seleccionado',
            category: 'producto'
        },
        {
            id: 11,
            type: 'image',
            src: '/images/foto_11.jpeg',
            title: 'Instante de molienda',
            category: 'finca'
        },
        {
            id: 12,
            type: 'image',
            src: '/images/foto_12.jpeg',
            title: 'Cereza brillante',
            category: 'proceso'
        },
        {
            id: 13,
            type: 'image',
            src: '/images/foto_13.jpeg',
            title: 'Recolección precisa',
            category: 'proceso'
        },
        {
            id: 14,
            type: 'image',
            src: '/images/foto_14.jpeg',
            title: 'Manos que cultivan',
            category: 'finca'
        },
        {
            id: 15,
            type: 'image',
            src: '/images/foto_15.jpeg',
            title: 'Preparación artesanal',
            category: 'barismo'
        },
        {
            id: 16,
            type: 'image',
            src: '/images/foto_16.jpeg',
            title: 'Café con identidad',
            category: 'producto'
        },
        {
            id: 17,
            type: 'image',
            src: '/images/foto_17.jpeg',
            title: 'Taza de excelencia',
            category: 'barismo'
        },
        {
            id: 18,
            type: 'image',
            src: '/images/foto_18.jpeg',
            title: 'Tueste en tambor',
            category: 'proceso'
        },
        {
            id: 19,
            type: 'image',
            src: '/images/foto_19.jpeg',
            title: 'Pasión por el café',
            category: 'producto'
        },
        {
            id: 20,
            type: 'image',
            src: '/images/foto_20.jpeg',
            title: 'Técnica de vertido',
            category: 'barismo'
        },
        {
            id: 21,
            type: 'image',
            src: '/images/foto_21.jpeg',
            title: 'Catación profesional',
            category: 'proceso'
        },
        {
            id: 22,
            type: 'image',
            src: '/images/foto_22.jpeg',
            title: 'Café de altura',
            category: 'finca'
        },
        {
            id: 23,
            type: 'image',
            src: '/images/foto_23.jpeg',
            title: 'Floración de cafeto',
            category: 'finca'
        },
        {
            id: 24,
            type: 'image',
            src: '/images/foto_24.jpeg',
            title: 'Tostado lento',
            category: 'proceso'
        },
        {
            id: 25,
            type: 'image',
            src: '/images/foto_25.jpeg',
            title: 'Filtro artesanal',
            category: 'barismo'
        },
        {
            id: 26,
            type: 'image',
            src: '/images/foto_26.jpeg',
            title: 'Café con historia',
            category: 'producto'
        },
        {
            id: 27,
            type: 'image',
            src: '/images/foto_27.jpeg',
            title: 'Macizo cafetero',
            category: 'finca'
        },
        {
            id: 28,
            type: 'image',
            src: '/images/foto_28.jpeg',
            title: 'Tueste medio perfecto',
            category: 'proceso'
        },
        {
            id: 29,
            type: 'image',
            src: '/images/foto_29.jpeg',
            title: 'Filtro en acción',
            category: 'barismo'
        },
        {
            id: 30,
            type: 'image',
            src: '/images/foto_30.jpeg',
            title: 'Selección rigurosa',
            category: 'proceso'
        },
        {
            id: 31,
            type: 'image',
            src: '/images/foto_31.jpeg',
            title: 'Café especial',
            category: 'producto'
        },
        {
            id: 32,
            type: 'image',
            src: '/images/foto_32.jpeg',
            title: 'Degustación sensorial',
            category: 'barismo'
        },
        {
            id: 33,
            type: 'image',
            src: '/images/foto_33.jpeg',
            title: 'Cultivo sostenible',
            category: 'finca'
        },
        {
            id: 34,
            type: 'image',
            src: '/images/foto_34.jpeg',
            title: 'Proceso natural',
            category: 'proceso'
        },
        {
            id: 35,
            type: 'image',
            src: '/images/foto_35.jpeg',
            title: 'Color del grano',
            category: 'producto'
        },
        {
            id: 36,
            type: 'image',
            src: '/images/foto_36.jpeg',
            title: 'Campesino en faena',
            category: 'finca'
        },
        {
            id: 37,
            type: 'image',
            src: '/images/foto_37.jpeg',
            title: 'Degustación en finca',
            category: 'barismo'
        },
        {
            id: 38,
            type: 'image',
            src: '/images/foto_38.jpeg',
            title: 'Molienda precisa',
            category: 'proceso'
        },
        {
            id: 39,
            type: 'image',
            src: '/images/foto_39.jpeg',
            title: 'Desde el origen',
            category: 'finca'
        },
        {
            id: 40,
            type: 'image',
            src: '/images/foto_40.jpeg',
            title: 'Barismo en acción',
            category: 'barismo'
        },
        {
            id: 41,
            type: 'image',
            src: '/images/foto_41.jpeg',
            title: 'Vista desde la finca',
            category: 'finca'
        },
        {
            id: 42,
            type: 'image',
            src: '/images/foto_42.jpeg',
            title: 'Aroma envolvente',
            category: 'producto'
        },
        {
            id: 43,
            type: 'image',
            src: '/images/foto_43.jpeg',
            title: 'Proceso húmedo',
            category: 'proceso'
        },
        {
            id: 44,
            type: 'image',
            src: '/images/foto_44.jpeg',
            title: 'Finca familiar',
            category: 'finca'
        },
        {
            id: 45,
            type: 'image',
            src: '/images/foto_45.jpeg',
            title: 'Café de origen',
            category: 'producto'
        },
        {
            id: 46,
            type: 'image',
            src: '/images/foto_46.jpeg',
            title: 'Detalle del cafeto',
            category: 'finca'
        },
        {
            id: 47,
            type: 'image',
            src: '/images/foto_47.jpeg',
            title: 'Café orgánico',
            category: 'producto'
        },
        {
            id: 48,
            type: 'image',
            src: '/images/foto_48.jpeg',
            title: 'Arte latte',
            category: 'barismo'
        },
        {
            id: 49,
            type: 'image',
            src: '/images/foto_49.jpeg',
            title: 'Cosecha del día',
            category: 'finca'
        },
        {
            id: 50,
            type: 'image',
            src: '/images/foto_50.jpeg',
            title: 'Historia en cada taza',
            category: 'barismo'
        },
        {
            id: 51,
            type: 'image',
            src: '/images/foto_51.jpeg',
            title: 'Sombra entre cafetales',
            category: 'finca'
        },
        {
            id: 52,
            type: 'image',
            src: '/images/foto_52.jpeg',
            title: 'Proceso de secado',
            category: 'proceso'
        },
        {
            id: 53,
            type: 'image',
            src: '/images/foto_53.jpeg',
            title: 'Taza equilibrada',
            category: 'barismo'
        },
        {
            id: 54,
            type: 'image',
            src: '/images/foto_54.jpeg',
            title: 'Grano dorado',
            category: 'producto'
        },
        {
            id: 55,
            type: 'image',
            src: '/images/foto_55.jpeg',
            title: 'Recorrido por la finca',
            category: 'finca'
        },
        {
            id: 56,
            type: 'image',
            src: '/images/foto_56.jpeg',
            title: 'Revisión de calidad',
            category: 'proceso'
        },
        {
            id: 57,
            type: 'image',
            src: '/images/foto_57.jpeg',
            title: 'Maduración ideal',
            category: 'finca'
        },
        {
            id: 58,
            type: 'image',
            src: '/images/foto_58.jpeg',
            title: 'Grano seleccionado',
            category: 'producto'
        },
        {
            id: 59,
            type: 'image',
            src: '/images/foto_59.jpeg',
            title: 'Preparación V60',
            category: 'barismo'
        },
        {
            id: 60,
            type: 'image',
            src: '/images/foto_60.jpeg',
            title: 'Detalle del proceso',
            category: 'proceso'
        },
        {
            id: 61,
            type: 'image',
            src: '/images/foto_61.jpeg',
            title: 'Terruño colombiano',
            category: 'finca'
        },
        {
            id: 62,
            type: 'image',
            src: '/images/foto_62.jpeg',
            title: 'Café al amanecer',
            category: 'barismo'
        },
        {
            id: 63,
            type: 'image',
            src: '/images/foto_63.jpeg',
            title: 'Manos expertas',
            category: 'proceso'
        },
        {
            id: 64,
            type: 'image',
            src: '/images/foto_64.jpeg',
            title: 'Fragancia única',
            category: 'producto'
        },
        {
            id: 66,
            type: 'image',
            src: '/images/foto_66.jpeg',
            title: 'Amanecer cafetero',
            category: 'finca'
        },
        {
            id: 67,
            type: 'image',
            src: '/images/foto_67.jpeg',
            title: 'Secado al aire libre',
            category: 'proceso'
        },
        {
            id: 68,
            type: 'image',
            src: '/images/foto_68.jpeg',
            title: 'Café recién molido',
            category: 'producto'
        },
        {
            id: 69,
            type: 'image',
            src: '/images/foto_69.jpeg',
            title: 'Cafetales en flor',
            category: 'finca'
        },
        {
            id: 70,
            type: 'image',
            src: '/images/foto_70.avif',
            title: 'Desde el origen',
            category: 'finca'
        }
    ];

    const categories = ['todos', 'finca', 'proceso', 'producto', 'barismo'];
    const [activeCategory, setActiveCategory] = useState('todos');

    const filteredItems = activeCategory === 'todos'
        ? mediaItems
        : mediaItems.filter(item => item.category === activeCategory);

    const openModal = (item: any) => {
        setSelectedMedia(item);
        if (item.type === 'video') {
            setIsPlaying(true);
        }
    };

    const closeModal = () => {
        setSelectedMedia(null);
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

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

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center pt-20 bg-coffee-brown">
                <motion.div
                    ref={containerRef}
                    style={{
                        y,
                        backgroundImage: "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop')",
                        filter: "brightness(0.3)"
                    }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            to="/nosotros"
                            className="inline-flex items-center text-coffee-cream hover:text-white transition-colors mb-4"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Volver a Nosotros
                        </Link>
                        <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
                            Nuestra Galería
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90">
                            Un viaje visual por nuestro legado cafetero
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Categories */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? "default" : "outline"}
                                onClick={() => setActiveCategory(category)}
                                className={`capitalize ${activeCategory === category
                                        ? 'bg-coffee-orange hover:bg-coffee-orange/90'
                                        : 'border-coffee-orange text-coffee-orange hover:bg-coffee-orange hover:text-white'
                                    }`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    {/* Innovative Gallery Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
                        {filteredItems.map((item, index) => {
                            // Crear un patrón de tamaños dinámico
                            const getGridClass = () => {
                                const patterns = [
                                    'md:col-span-2 md:row-span-2', // Grande
                                    'md:col-span-1 md:row-span-1', // Pequeño
                                    'md:col-span-2 md:row-span-1', // Ancho
                                    'md:col-span-1 md:row-span-2', // Alto
                                    'md:col-span-3 md:row-span-1', // Extra ancho
                                    'md:col-span-1 md:row-span-1', // Pequeño
                                ];
                                return patterns[index % patterns.length];
                            };

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative group cursor-pointer overflow-hidden rounded-lg ${getGridClass()}`}
                                    onClick={() => openModal(item)}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h3 className="text-white font-medium text-sm md:text-base">
                                                {item.title}
                                            </h3>
                                            <span className="text-coffee-cream text-xs capitalize">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                    {item.type === 'video' && (
                                        <div className="absolute top-4 right-4">
                                            <div className="w-8 h-8 bg-coffee-orange rounded-full flex items-center justify-center">
                                                <Play className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedMedia && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full">
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-white hover:text-coffee-orange transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {selectedMedia.type === 'image' ? (
                            <img
                                src={selectedMedia.src}
                                alt={selectedMedia.title}
                                className="w-full h-full object-contain rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                            />
                        ) : (
                            <div className="relative" onClick={(e) => e.stopPropagation()}>
                                <video
                                    ref={videoRef}
                                    src={selectedMedia.src}
                                    className="w-full h-full object-contain rounded-lg"
                                    controls={false}
                                    autoPlay
                                />
                                <button
                                    onClick={togglePlay}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-coffee-orange/80 hover:bg-coffee-orange rounded-full p-4 transition-colors"
                                >
                                    {isPlaying ? (
                                        <Pause className="w-8 h-8 text-white" />
                                    ) : (
                                        <Play className="w-8 h-8 text-white" />
                                    )}
                                </button>
                            </div>
                        )}

                        <div className="mt-4 text-center">
                            <h3 className="text-white text-xl font-playfair mb-2">
                                {selectedMedia.title}
                            </h3>
                            <span className="text-coffee-cream capitalize">
                                {selectedMedia.category}
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}

            <Footer />
        </div>
    );
};

export default Galeria;
