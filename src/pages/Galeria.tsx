
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
            src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop',
            title: 'Cultivos en las montañas',
            category: 'finca'
        },
        {
            id: 2,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=800&fit=crop',
            title: 'Granos de café premium',
            category: 'producto'
        },
        {
            id: 3,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1442975631115-c4f7b5d14785?w=800&h=500&fit=crop',
            title: 'Recolección tradicional',
            category: 'proceso'
        },
        {
            id: 4,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=700&fit=crop',
            title: 'Arte en cada taza',
            category: 'barismo'
        },
        {
            id: 5,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&h=500&fit=crop',
            title: 'Tostión artesanal',
            category: 'proceso'
        },
        {
            id: 6,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop',
            title: 'Café recién molido',
            category: 'producto'
        },
        {
            id: 7,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?w=800&h=600&fit=crop',
            title: 'Plantaciones verdes',
            category: 'finca'
        },
        {
            id: 8,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=900&fit=crop',
            title: 'Proceso de secado',
            category: 'proceso'
        },
        {
            id: 9,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1520637836862-4d197d17c38a?w=700&h=500&fit=crop',
            title: 'Espresso perfecto',
            category: 'barismo'
        },
        {
            id: 10,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=500&h=800&fit=crop',
            title: 'Grano seleccionado',
            category: 'producto'
        },
        // Más imágenes...
        {
            id: 11,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&h=600&fit=crop',
            title: 'Vista panorámica',
            category: 'finca'
        },
        {
            id: 12,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=600&h=700&fit=crop',
            title: 'Latte art maestro',
            category: 'barismo'
        },
        {
            id: 13,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=700&h=500&fit=crop',
            title: 'Selección manual',
            category: 'proceso'
        },
        {
            id: 14,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=500&h=700&fit=crop',
            title: 'Cappuccino cremoso',
            category: 'barismo'
        },
        {
            id: 15,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&h=500&fit=crop',
            title: 'Terraza cafetera',
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
