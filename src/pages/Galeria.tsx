
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, Grid, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryModal from '@/components/gallery/GalleryModal';
import GalleryFilters from '@/components/gallery/GalleryFilters';

const Galeria = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
    
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    // Media items (todas las imágenes)
    const mediaItems = [
        {
            id: 1,
            type: 'image' as const,
            src: '/images/foto_1.jpeg',
            title: 'Cultivos en las montañas',
            category: 'finca'
        },
        {
            id: 2,
            type: 'image' as const,
            src: '/images/foto_2.jpeg',
            title: 'Granos de café premium',
            category: 'producto'
        },
        {
            id: 3,
            type: 'image' as const,
            src: '/images/foto_3.jpeg',
            title: 'Recolección tradicional',
            category: 'proceso'
        },
        {
            id: 4,
            type: 'image' as const,
            src: '/images/foto_4.jpeg',
            title: 'Arte en cada taza',
            category: 'barismo'
        },
        {
            id: 5,
            type: 'image' as const,
            src: '/images/foto_5.jpeg',
            title: 'Tostión artesanal',
            category: 'proceso'
        },
        {
            id: 6,
            type: 'image' as const,
            src: '/images/foto_6.jpeg',
            title: 'Café recién molido',
            category: 'producto'
        },
        {
            id: 7,
            type: 'image' as const,
            src: '/images/foto_7.jpeg',
            title: 'Plantaciones verdes',
            category: 'finca'
        },
        {
            id: 8,
            type: 'image' as const,
            src: '/images/foto_8.jpeg',
            title: 'Proceso de secado',
            category: 'proceso'
        },
        {
            id: 9,
            type: 'image' as const,
            src: '/images/foto_9.jpeg',
            title: 'Espresso perfecto',
            category: 'barismo'
        },
        {
            id: 10,
            type: 'image' as const,
            src: '/images/foto_10.jpeg',
            title: 'Grano seleccionado',
            category: 'producto'
        },
        {
            id: 11,
            type: 'image' as const,
            src: '/images/foto_11.jpeg',
            title: 'Instante de molienda',
            category: 'finca'
        },
        {
            id: 12,
            type: 'image' as const,
            src: '/images/foto_12.jpeg',
            title: 'Cereza brillante',
            category: 'proceso'
        },
        {
            id: 13,
            type: 'image' as const,
            src: '/images/foto_13.jpeg',
            title: 'Recolección precisa',
            category: 'proceso'
        },
        {
            id: 14,
            type: 'image' as const,
            src: '/images/foto_14.jpeg',
            title: 'Manos que cultivan',
            category: 'finca'
        },
        {
            id: 15,
            type: 'image' as const,
            src: '/images/foto_15.jpeg',
            title: 'Preparación artesanal',
            category: 'barismo'
        },
        {
            id: 16,
            type: 'image' as const,
            src: '/images/foto_16.jpeg',
            title: 'Café con identidad',
            category: 'producto'
        },
        {
            id: 17,
            type: 'image' as const,
            src: '/images/foto_17.jpeg',
            title: 'Taza de excelencia',
            category: 'barismo'
        },
        {
            id: 18,
            type: 'image' as const,
            src: '/images/foto_18.jpeg',
            title: 'Tueste en tambor',
            category: 'proceso'
        },
        {
            id: 19,
            type: 'image' as const,
            src: '/images/foto_19.jpeg',
            title: 'Pasión por el café',
            category: 'producto'
        },
        {
            id: 20,
            type: 'image' as const,
            src: '/images/foto_20.jpeg',
            title: 'Técnica de vertido',
            category: 'barismo'
        },
        {
            id: 21,
            type: 'image' as const,
            src: '/images/foto_21.jpeg',
            title: 'Catación profesional',
            category: 'proceso'
        },
        {
            id: 22,
            type: 'image' as const,
            src: '/images/foto_22.jpeg',
            title: 'Café de altura',
            category: 'finca'
        },
        {
            id: 23,
            type: 'image' as const,
            src: '/images/foto_23.jpeg',
            title: 'Floración de cafeto',
            category: 'finca'
        },
        {
            id: 24,
            type: 'image' as const,
            src: '/images/foto_24.jpeg',
            title: 'Tostado lento',
            category: 'proceso'
        },
        {
            id: 25,
            type: 'image' as const,
            src: '/images/foto_25.jpeg',
            title: 'Filtro artesanal',
            category: 'barismo'
        },
        {
            id: 26,
            type: 'image' as const,
            src: '/images/foto_26.jpeg',
            title: 'Café con historia',
            category: 'producto'
        },
        {
            id: 27,
            type: 'image' as const,
            src: '/images/foto_27.jpeg',
            title: 'Macizo cafetero',
            category: 'finca'
        },
        {
            id: 28,
            type: 'image' as const,
            src: '/images/foto_28.jpeg',
            title: 'Tueste medio perfecto',
            category: 'proceso'
        },
        {
            id: 29,
            type: 'image' as const,
            src: '/images/foto_29.jpeg',
            title: 'Filtro en acción',
            category: 'barismo'
        },
        {
            id: 30,
            type: 'image' as const,
            src: '/images/foto_30.jpeg',
            title: 'Selección rigurosa',
            category: 'proceso'
        },
        {
            id: 31,
            type: 'image' as const,
            src: '/images/foto_31.jpeg',
            title: 'Café especial',
            category: 'producto'
        },
        {
            id: 32,
            type: 'image' as const,
            src: '/images/foto_32.jpeg',
            title: 'Degustación sensorial',
            category: 'barismo'
        },
        {
            id: 33,
            type: 'image' as const,
            src: '/images/foto_33.jpeg',
            title: 'Cultivo sostenible',
            category: 'finca'
        },
        {
            id: 34,
            type: 'image' as const,
            src: '/images/foto_34.jpeg',
            title: 'Proceso natural',
            category: 'proceso'
        },
        {
            id: 35,
            type: 'image' as const,
            src: '/images/foto_35.jpeg',
            title: 'Color del grano',
            category: 'producto'
        },
        {
            id: 36,
            type: 'image' as const,
            src: '/images/foto_36.jpeg',
            title: 'Campesino en faena',
            category: 'finca'
        },
        {
            id: 37,
            type: 'image' as const,
            src: '/images/foto_37.jpeg',
            title: 'Degustación en finca',
            category: 'barismo'
        },
        {
            id: 38,
            type: 'image' as const,
            src: '/images/foto_38.jpeg',
            title: 'Molienda precisa',
            category: 'proceso'
        },
        {
            id: 39,
            type: 'image' as const,
            src: '/images/foto_39.jpeg',
            title: 'Desde el origen',
            category: 'finca'
        },
        {
            id: 40,
            type: 'image' as const,
            src: '/images/foto_40.jpeg',
            title: 'Barismo en acción',
            category: 'barismo'
        },
        {
            id: 41,
            type: 'image' as const,
            src: '/images/foto_41.jpeg',
            title: 'Vista desde la finca',
            category: 'finca'
        },
        {
            id: 42,
            type: 'image' as const,
            src: '/images/foto_42.jpeg',
            title: 'Aroma envolvente',
            category: 'producto'
        },
        {
            id: 43,
            type: 'image' as const,
            src: '/images/foto_43.jpeg',
            title: 'Proceso húmedo',
            category: 'proceso'
        },
        {
            id: 44,
            type: 'image' as const,
            src: '/images/foto_44.jpeg',
            title: 'Finca familiar',
            category: 'finca'
        },
        {
            id: 45,
            type: 'image' as const,
            src: '/images/foto_45.jpeg',
            title: 'Café de origen',
            category: 'producto'
        },
        {
            id: 46,
            type: 'image' as const,
            src: '/images/foto_46.jpeg',
            title: 'Detalle del cafeto',
            category: 'finca'
        },
        {
            id: 47,
            type: 'image' as const,
            src: '/images/foto_47.jpeg',
            title: 'Café orgánico',
            category: 'producto'
        },
        {
            id: 48,
            type: 'image' as const,
            src: '/images/foto_48.jpeg',
            title: 'Arte latte',
            category: 'barismo'
        },
        {
            id: 49,
            type: 'image' as const,
            src: '/images/foto_49.jpeg',
            title: 'Cosecha del día',
            category: 'finca'
        },
        {
            id: 50,
            type: 'image' as const,
            src: '/images/foto_50.jpeg',
            title: 'Historia en cada taza',
            category: 'barismo'
        },
        {
            id: 51,
            type: 'image' as const,
            src: '/images/foto_51.jpeg',
            title: 'Sombra entre cafetales',
            category: 'finca'
        },
        {
            id: 52,
            type: 'image' as const,
            src: '/images/foto_52.jpeg',
            title: 'Proceso de secado',
            category: 'proceso'
        },
        {
            id: 53,
            type: 'image' as const,
            src: '/images/foto_53.jpeg',
            title: 'Taza equilibrada',
            category: 'barismo'
        },
        {
            id: 54,
            type: 'image' as const,
            src: '/images/foto_54.jpeg',
            title: 'Grano dorado',
            category: 'producto'
        },
        {
            id: 55,
            type: 'image' as const,
            src: '/images/foto_55.jpeg',
            title: 'Recorrido por la finca',
            category: 'finca'
        },
        {
            id: 56,
            type: 'image' as const,
            src: '/images/foto_56.jpeg',
            title: 'Revisión de calidad',
            category: 'proceso'
        },
        {
            id: 57,
            type: 'image' as const,
            src: '/images/foto_57.jpeg',
            title: 'Maduración ideal',
            category: 'finca'
        },
        {
            id: 58,
            type: 'image' as const,
            src: '/images/foto_58.jpeg',
            title: 'Grano seleccionado',
            category: 'producto'
        },
        {
            id: 59,
            type: 'image' as const,
            src: '/images/foto_59.jpeg',
            title: 'Preparación V60',
            category: 'barismo'
        },
        {
            id: 60,
            type: 'image' as const,
            src: '/images/foto_60.jpeg',
            title: 'Detalle del proceso',
            category: 'proceso'
        },
        {
            id: 61,
            type: 'image' as const,
            src: '/images/foto_61.jpeg',
            title: 'Terruño colombiano',
            category: 'finca'
        },
        {
            id: 62,
            type: 'image' as const,
            src: '/images/foto_62.jpeg',
            title: 'Café al amanecer',
            category: 'barismo'
        },
        {
            id: 63,
            type: 'image' as const,
            src: '/images/foto_63.jpeg',
            title: 'Manos expertas',
            category: 'proceso'
        },
        {
            id: 64,
            type: 'image' as const,
            src: '/images/foto_64.jpeg',
            title: 'Fragancia única',
            category: 'producto'
        },
        {
            id: 66,
            type: 'image' as const,
            src: '/images/foto_66.jpeg',
            title: 'Amanecer cafetero',
            category: 'finca'
        },
        {
            id: 67,
            type: 'image' as const,
            src: '/images/foto_67.jpeg',
            title: 'Secado al aire libre',
            category: 'proceso'
        },
        {
            id: 68,
            type: 'image' as const,
            src: '/images/foto_68.jpeg',
            title: 'Café recién molido',
            category: 'producto'
        },
        {
            id: 69,
            type: 'image' as const,
            src: '/images/foto_69.jpeg',
            title: 'Cafetales en flor',
            category: 'finca'
        },
        {
            id: 70,
            type: 'image' as const,
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

    const openModal = (item: any, index: number) => {
        const actualIndex = mediaItems.findIndex(mediaItem => mediaItem.id === item.id);
        setSelectedIndex(actualIndex);
    };

    const closeModal = () => {
        setSelectedIndex(null);
    };

    const navigateModal = (index: number) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedIndex]);

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center pt-20 bg-coffee-brown">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop')"
                    }}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            to="/nosotros"
                            className="inline-flex items-center text-coffee-cream hover:text-white transition-colors mb-6"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Volver a Nosotros
                        </Link>
                        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
                            Nuestra Galería
                        </h1>
                        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                            Un viaje visual por nuestro legado cafetero, desde la finca hasta tu taza
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filters and Controls */}
                    <div className="mb-12 space-y-8">
                        <GalleryFilters
                            categories={categories}
                            activeCategory={activeCategory}
                            onCategoryChange={setActiveCategory}
                            totalItems={mediaItems.length}
                            filteredCount={filteredItems.length}
                        />

                        {/* View Toggle */}
                        <div className="flex justify-center">
                            <div className="bg-muted p-1 rounded-lg">
                                <Button
                                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                                    size="sm"
                                    onClick={() => setViewMode('grid')}
                                    className="rounded-md"
                                >
                                    <Grid className="w-4 h-4 mr-2" />
                                    Cuadrícula
                                </Button>
                                <Button
                                    variant={viewMode === 'masonry' ? 'default' : 'ghost'}
                                    size="sm"
                                    onClick={() => setViewMode('masonry')}
                                    className="rounded-md"
                                >
                                    <LayoutGrid className="w-4 h-4 mr-2" />
                                    Mosaico
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <GalleryGrid
                        items={filteredItems}
                        onImageClick={openModal}
                        viewMode={viewMode}
                    />
                </div>
            </section>

            {/* Modal */}
            <GalleryModal
                isOpen={selectedIndex !== null}
                items={mediaItems}
                currentIndex={selectedIndex || 0}
                onClose={closeModal}
                onNavigate={navigateModal}
            />

            <Footer />
        </div>
    );
};

export default Galeria;
