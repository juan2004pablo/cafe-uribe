import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Leaf, Heart, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhysicalStoreSection from '@/components/PhysicalStoreSection';
import { Button } from '@/components/ui/button';

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

    const timeline = [
        { year: "1970", event: "Fundación de la finca familiar en el Norte de Santander" },
        { year: "1985", event: "Primera exportación internacional" },
        { year: "2000", event: "Certificación de café orgánico" },
        { year: "2024", event: "Expansión a mercados especializados" }
    ];

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
                            Tres generaciones cultivando el mejor café colombiano
                        </p>
                        <Button 
                            onClick={scrollToPhysicalStore}
                            className="bg-coffee-orange hover:bg-coffee-orange/90 text-white"
                        >
                            <MapPin className="w-4 h-4 mr-2" />
                            Visitar Local
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Historia */}
            <section ref={historyRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={historyInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-playfair text-4xl font-bold text-coffee-brown mb-6">
                                El Legado Familiar
                            </h2>
                            <p className="text-lg text-coffee-brown/80 mb-6 leading-relaxed">
                                Todo comenzó en 1970, cuando Don Carlos Uribe decidió plantar los primeros
                                cafetos en las montañas del Norte de Santander. Con la visión de crear un café
                                excepcional, estableció los cimientos de lo que hoy es Café Uribe.
                            </p>
                            <p className="text-lg text-coffee-brown/80 mb-6 leading-relaxed">
                                A través de los años, hemos mantenido las tradiciones familiares mientras
                                adoptamos innovaciones que mejoran la calidad de nuestro café. Cada
                                generación ha aportado su conocimiento y pasión al negocio familiar.
                            </p>
                            <p className="text-lg text-coffee-brown/80 leading-relaxed">
                                Hoy, seguimos comprometidos con la excelencia, llevando el auténtico
                                sabor colombiano a mercados nacionales e internacionales.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={historyInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <img
                                src="/images/foto_70.avif"
                                alt="Familia cafetera"
                                className="rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={historyInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-16"
                    >
                        <h3 className="font-playfair text-3xl font-bold text-coffee-brown text-center mb-12">
                            Nuestra Cronología
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {timeline.map((item, index) => (
                                <div key={item.year} className="text-center">
                                    <div className="w-16 h-16 bg-coffee-orange rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-lg">{item.year.slice(-2)}</span>
                                    </div>
                                    <h4 className="font-playfair text-xl font-semibold text-coffee-brown mb-2">
                                        {item.year}
                                    </h4>
                                    <p className="text-coffee-brown/70">{item.event}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* La Finca */}
            <section className="py-20 bg-coffee-cream/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={historyInView ? { opacity: 1, x: 0 } : {}}
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
                            animate={historyInView ? { opacity: 1, x: 0 } : {}}
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
                            <p className="text-lg text-coffee-brown/80 mb-6 leading-relaxed">
                                Los suelos volcánicos ricos en nutrientes, combinados con el clima templado
                                y las lluvias regulares, crean el ambiente perfecto para cultivar café
                                de especialidad con características únicas.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="font-playfair text-2xl font-bold text-coffee-orange">1.750m</p>
                                    <p className="text-coffee-brown/70">Altura sobre el mar</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="font-playfair text-2xl font-bold text-coffee-orange">50Ha</p>
                                    <p className="text-coffee-brown/70">Extensión cultivada</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

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

            {/* Physical Store Section */}
            <div id="punto-venta-fisico">
                <PhysicalStoreSection />
            </div>

            <Footer />
        </div>
    );
};

export default Nosotros;
