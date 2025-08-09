
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Leaf, Heart, MapPin, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhysicalStoreSection from '@/components/PhysicalStoreSection';
import FarmShowcaseSection from '@/components/FarmShowcaseSection';
import FarmInfoSection from '@/components/FarmInfoSection';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const Nosotros = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [historyRef, historyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const scrollToPhysicalStore = () => {
        const element = document.getElementById('punto-venta-fisico');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Pasión",
            description: "Amor por el café en cada proceso, desde la semilla hasta la taza"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Calidad",
            description: "Estándares premium que garantizan excelencia en cada grano"
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "Sostenibilidad",
            description: "Prácticas responsables que cuidan nuestro medio ambiente"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Comunidad",
            description: "Compromiso con los caficultores y el desarrollo local"
        }
    ];

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/files/Resumen_cafe_uribe.pdf';
        link.download = 'Resumen_Cafe_Uribe.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden">
                {/* Video de fondo */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/images/video_2.mp4" type="video/mp4" />
                    Tu navegador no soporta el tag de video.
                </video>

                {/* Overlay para oscurecer el video */}
                <div className="absolute inset-0 bg-black opacity-50" />

                {/* Contenido principal */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
                            Nuestra Historia
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 mb-8">
                            Dos generaciones dedicadas al arte de cultivar café de origen
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <Button
                                onClick={scrollToPhysicalStore}
                                className="bg-coffee-orange hover:bg-coffee-orange/90 text-white"
                            >
                                <MapPin className="w-4 h-4 mr-2" />
                                Visitar Local
                            </Button>
                            <Button
                                onClick={handleDownloadResume}
                                variant="outline"
                                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Descargar Resumen
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Historia */}
            <section ref={historyRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={historyInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="font-playfair text-4xl font-bold text-coffee-brown">
                            Momentos que marcaron nuestro camino
                        </h2>
                    </motion.div>


                    {/* Timeline mejorado con imagen y diseño zigzag */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={historyInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative max-w-6xl mx-auto px-4">
                            <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-coffee-orange -translate-x-1/2" />

                            {[
                                {
                                    year: "1990",
                                    title: "Herencia de generación en generación",
                                    text: "La segunda generación toma las riendas con amor por la tradición.",
                                    quote: "El café siguió en manos de la familia, con nuevas ideas pero mismas raíces.",
                                    image: "/images/timeline/1990.webp"
                                },
                                {
                                    year: "2021",
                                    title: "Construcción de planta de beneficio propia",
                                    text: "Inauguración de la planta de beneficio húmedo y secado con cáscara.",
                                    quote: "Desde el grano, todo en casa. Nace la trazabilidad y calidad controlada 100 % por nosotros.",
                                    image: "/images/timeline/2021.webp"
                                },
                                {
                                    year: "2023",
                                    title: "Nacimiento de la marca Café Uribe",
                                    text: "Surge la marca que conecta el origen con el consumidor final.",
                                    quote: "Café Uribe se convierte en símbolo de identidad familiar, sabor local y visión global.",
                                    image: "/images/timeline/2023.webp"
                                },
                                {
                                    year: "2024",
                                    title: "Nace la tienda Café Uribe",
                                    text: "Se abre el primer punto de venta en Villa del Rosario.",
                                    quote: "Del cafetal a la taza, directo al corazón de quienes nos visitan.",
                                    image: "/images/timeline/2024.webp"
                                },
                                {
                                    year: "2025",
                                    title: "Primeros microlotes diferenciados exportados",
                                    text: "Microlotes por altitud: lavado, honey y natural.",
                                    quote: "No solo vendemos café, exportamos identidad, origen y orgullo campesino.",
                                    image: "/images/timeline/2025.webp"
                                }
                            ].map((event, index) => (
                                <div
                                    key={event.year}
                                    className={`mb-16 flex flex-col md:flex-row items-center md:justify-between md:relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Contenido del evento */}
                                    <div className="w-full md:w-5/12">
                                        <div className="bg-white p-6 rounded-xl shadow-md border border-coffee-orange/30">
                                            <h4 className="text-coffee-brown font-playfair text-xl font-semibold mb-2">
                                                {event.year} – {event.title}
                                            </h4>
                                            <p className="text-coffee-brown/80 mb-2">{event.text}</p>
                                            <blockquote className="italic text-coffee-brown/70 border-l-4 border-coffee-orange pl-4">
                                                “{event.quote}”
                                            </blockquote>
                                        </div>
                                    </div>

                                    {/* Punto y mini imagen */}
                                    {/* Año + Imagen al lado */}
                                    <div className="hidden md:flex items-center gap-4 w-56 justify-center">
                                        <div className="w-14 h-14 bg-coffee-orange text-white font-bold rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10">
                                            {event.year.slice(-2)}
                                        </div>
                                        {event.image && (
                                            <img
                                                src={event.image}
                                                alt={`Evento ${event.year}`}
                                                className="w-32 h-24 object-cover rounded-lg border border-coffee-orange/30 shadow-md"
                                            />
                                        )}
                                    </div>

                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Unified Farm Info Section */}
            <FarmInfoSection />

            {/* Valores */}
            <section ref={valuesRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-brown mb-6">
                            Nuestros Valores
                        </h2>
                        <p className="text-lg text-coffee-brown/70 max-w-2xl mx-auto">
                            Los principios que guían cada decisión y cada proceso en nuestra empresa familiar.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-coffee-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <div className="text-coffee-orange">{value.icon}</div>
                                </div>
                                <h3 className="font-playfair text-xl font-semibold text-coffee-brown mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-coffee-brown/70 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Farm Showcase Section */}
            <FarmShowcaseSection />

            {/* Physical Store Section */}
            <div id="punto-venta-fisico">
                <PhysicalStoreSection />
            </div>

            <Footer />
        </div>
    );
};

export default Nosotros;
