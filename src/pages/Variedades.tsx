import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Coffee, Leaf, ThermometerSun, Package, Award, Thermometer, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MachinerySection from '@/components/MachinerySection';

const Variedades = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [grainTypesRef, grainTypesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [coffeeTypesRef, coffeeTypesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [productRef, productInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    // Estado para el intercambio de imágenes del producto
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const productImages = ["/images/nueva_presentacion_cafe_base.webp", "/images/empaque_especial_cafe_500_gramos.webp"];

    // Efecto para cambiar la imagen cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const grainTypes = [
        {
            name: "Pergamino",
            scientific: "Grano seco con cáscara",
            image: "/images/etapa/pergamino.webp",
            icon: <ThermometerSun className="w-8 h-8" />,
            percentage: 30
        },
        {
            name: "Verde",
            scientific: "Grano listo para exportar o tostar",
            image: "/images/etapa/verde.webp",
            icon: <Leaf className="w-8 h-8" />,
            percentage: 30
        },
        {
            name: "Tostado",
            scientific: "Grano listo para moler y consumir",
            image: "/images/etapa/grano_arabica.webp",
            icon: <Coffee className="w-8 h-8" />,
            percentage: 40
        }
    ];

    const coffeeTypes = [
        {
            name: "Café Castillo",
            description: "Alta resistencia a la roya, buen rendimiento y calidad en taza.",
            method: "Buen balance, acidez media, cuerpo medio",
            time: "Arábica híbrido",
            image: "/images/variedades/castillo.webp",
            icon: <Coffee className="w-6 h-6" />
        },
        {
            name: "Café Cenicafe 1",
            description: "Excelente uniformidad genética y buena adaptación a altitudes",
            method: "Dulce, acidez alta, cuerpo balanceado",
            time: "Arábica híbrido",
            image: "/images/variedades/cenicafe1.webp",
            icon: <Droplets className="w-6 h-6" />
        },
        {
            name: "Café Tabi",
            description: "Más resistente a enfermedades y mejor calidad en taza que Castillo.",
            method: "Dulce, floral, cuerpo balanceado",
            time: "Arábica híbrido",
            image: "/images/variedades/tabi.webp",
            icon: <Thermometer className="w-6 h-6" />
        },
        {
            name: "Café Geisha",
            description: "Muy apreciada por su calidad excepcional en taza.",
            method: "Florales, cítricas, jazmín, frutas tropicales",
            time: "Arábica pura",
            image: "/images/variedades/geisha.webp",
            icon: <Coffee className="w-6 h-6" />
        }
    ];

    const roastTypes = [
        {
            name: "Tostión Ligera",
            level: "Light Roast",
            description: "Preserva los sabores originales del grano, resaltando notas frutales y una acidez más pronunciada.",
            temperature: "180-205°C",
            time: "9-11 minutos",
            characteristics: ["Acidez alta", "Sabores frutales"],
            color: "bg-amber-200",
            image: "/images/tostados/tostado_ligero.webp"
        },
        {
            name: "Tostión Media",
            level: "Medium Roast",
            description: "Ofrece un balance entre acidez y dulzor, con cuerpo medio y sabores más caramelizados.",
            temperature: "210-225°C",
            time: "12-14 minutos",
            characteristics: ["Sabor balanceado", "Cuerpo medio"],
            color: "bg-amber-600",
            image: "/images/tostados/tostado_medio.webp"
        },
        {
            name: "Tostión Oscura",
            level: "Dark Roast",
            description: "Resalta sabores intensos y tostados, con baja acidez y cuerpo más robusto.",
            temperature: "230-245°C",
            time: "15-18 minutos",
            characteristics: ["Cuerpo robusto", "Notas tostadas"],
            color: "bg-amber-900",
            image: "/images/tostados/tostado_oscuro.webp"
        }
    ];

    const handleWhatsAppQuote = () => {
        const message = "Hola, me interesa solicitar una cotización para el Café Uribe Tostado de 500g. ¿Podrían proporcionarme información sobre precios y disponibilidad?";
        const whatsappUrl = `https://wa.me/573203737502?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center pt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/heroSection/variedades.webp')",
                        filter: "brightness(0.4)"
                    }}
                />
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
                            Del Cultivo a la Taza
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                            Descubre el fascinante mundo del café colombiano: desde los granos que cultivamos
                            hasta las preparaciones que puedes disfrutar
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <Badge className="bg-coffee-orange/20 text-white border-coffee-orange">
                                <Coffee className="w-4 h-4 mr-2" />
                                100% Colombiano
                            </Badge>
                            <Badge className="bg-coffee-orange/20 text-white border-coffee-orange">
                                <Award className="w-4 h-4 mr-2" />
                                Calidad Premium
                            </Badge>
                            <Badge className="bg-coffee-orange/20 text-white border-coffee-orange">
                                <Leaf className="w-4 h-4 mr-2" />
                                Cultivo Sostenible
                            </Badge>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Producto Principal */}
            <section ref={productRef} className="py-20 bg-gradient-to-br from-coffee-cream/30 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={productInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-playfair text-4xl md:text-6xl font-bold text-coffee-brown mb-6">
                            Nuestro Producto Principal
                        </h2>
                        <p className="text-lg text-coffee-brown/70 max-w-3xl mx-auto">
                            El resultado de décadas de experiencia en una presentación perfecta
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={productInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-coffee-orange to-coffee-brown rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                                <div className="relative overflow-hidden rounded-2xl">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={productImages[currentImageIndex]}
                                        alt="Café Uribe Premium"
                                        className="w-[405px] h-[540px] object-cover mx-auto rounded-lg shadow-2xl"
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -100, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    />

                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={productInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-coffee-orange rounded-full p-3">
                                    <Package className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-playfair text-3xl font-bold text-coffee-brown">
                                        Café Uribe Tostado
                                    </h3>
                                    <p className="text-coffee-orange font-medium">
                                        Presentación de 500g
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Award className="w-5 h-5 text-coffee-orange" />
                                    <span className="text-coffee-brown">Certificación de calidad premium</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Leaf className="w-5 h-5 text-coffee-orange" />
                                    <span className="text-coffee-brown">100% café colombiano de origen</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Coffee className="w-5 h-5 text-coffee-orange" />
                                    <span className="text-coffee-brown">Tostión media para máximo sabor</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Package className="w-5 h-5 text-coffee-orange" />
                                    <span className="text-coffee-brown">Empaque hermético para frescura</span>
                                </div>
                            </div>

                            <div className="bg-coffee-cream/50 rounded-lg p-6 space-y-4">
                                <h4 className="font-playfair text-xl font-bold text-coffee-brown">
                                    Perfil de Sabor
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-coffee-brown/60 text-sm">Acidez:</span>
                                        <p className="text-coffee-brown font-medium">Media-Alta</p>
                                    </div>
                                    <div>
                                        <span className="text-coffee-brown/60 text-sm">Grano:</span>
                                        <p className="text-coffee-brown font-medium">100% Arábica</p>
                                    </div>
                                    <div>
                                        <span className="text-coffee-brown/60 text-sm">Aroma:</span>
                                        <p className="text-coffee-brown font-medium">Dulce</p>
                                    </div>
                                    <div>
                                        <span className="text-coffee-brown/60 text-sm">Notas:</span>
                                        <p className="text-coffee-brown font-medium">Frutos Rojos y Chocolate</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 flex-wrap">
                                <a href="/files/Fichas_Tecnica_Producto_Cafe_Uribe.pdf" download>
                                    <Button
                                        size="lg"
                                        className="bg-coffee-orange hover:bg-coffee-orange/90 w-full sm:w-auto"
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Descargar Ficha Técnica
                                    </Button>
                                </a>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-white w-full sm:w-auto"
                                    onClick={handleWhatsAppQuote}
                                >
                                    Solicitar Cotización
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Etapas del Grano */}
            <section ref={grainTypesRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={grainTypesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-playfair text-4xl md:text-6xl font-bold text-coffee-brown mb-6">
                            Etapas del Grano
                        </h2>
                        <p className="text-lg text-coffee-brown/70 max-w-3xl mx-auto">
                            Conoce las etapas del grano de café que trabajamos en nuestras fincas,
                            desde su cultivo hasta el tostado
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {grainTypes.map((grain, index) => (
                            <motion.div
                                key={grain.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={grainTypesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="group"
                            >
                                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-coffee-cream/30 to-white">
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={grain.image}
                                            alt={grain.name}
                                            className="w-full h-64 object-scale-down object-center p-6 group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-coffee-brown/50 to-transparent" />
                                        <div className="absolute top-4 right-4 bg-coffee-orange text-white rounded-full p-3">
                                            {grain.icon}
                                        </div>
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <div className="text-2xl font-bold">{grain.percentage}%</div>
                                            <div className="text-sm opacity-90">de nuestra producción</div>
                                        </div>
                                    </div>

                                    <CardHeader className="pb-4">
                                        <h3 className="font-playfair text-2xl font-bold text-coffee-brown">
                                            {grain.name}
                                        </h3>
                                        <p className="text-coffee-orange font-medium italic">
                                            {grain.scientific}
                                        </p>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Machinery Section */}
            <MachinerySection />

            {/* Tipos de Café */}
            <section ref={coffeeTypesRef} className="py-20 bg-coffee-cream/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={coffeeTypesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-playfair text-4xl md:text-6xl font-bold text-coffee-brown mb-6">
                            Variedades Grano Arábica
                        </h2>
                        <p className="text-lg text-coffee-brown/70 max-w-3xl mx-auto">
                            Descubre las variedades de café Arábica que cultivamos en nuestra finca,
                            cada una con características únicas que definen su sabor final
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coffeeTypes.map((coffee, index) => (
                            <motion.div
                                key={coffee.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={coffeeTypesInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={coffee.image}
                                            alt={coffee.name}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4 bg-coffee-brown/80 text-white rounded-full p-2">
                                            {coffee.icon}
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="font-playfair text-xl font-bold text-coffee-brown mb-2">
                                            {coffee.name}
                                        </h3>
                                        <p className="text-coffee-brown/70 text-sm mb-4">
                                            {coffee.description}
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex space-x-2">
                                                <span className="text-coffee-brown/60">Notas de sabor:</span>
                                                <span className="text-coffee-brown font-medium">{coffee.method}</span>
                                            </div>
                                            <div className="flex space-x-2">
                                                <span className="text-coffee-orange font-medium">{coffee.time}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tipos de Tostión */}
            <section className="bg-[#2C1309] py-20 px-6 text-white">
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="text-center mb-16">
                        <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
                            Tipos de Tueste
                        </h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            El arte de tostar define el carácter final del café. Conoce nuestros tres niveles
                            de tostión y cómo cada uno desarrolla sabores únicos
                        </p>
                    </div>
                    <hr className="w-full border-t border-[#583E37] opacity-100" />

                    <div className="space-y-0">
                        {roastTypes.map((roast, idx) => (
                            <React.Fragment key={idx}>
                                <div className="relative pt-8 overflow-hidden">
                                    <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-6 md:gap-8 mb-8 md:mb-0">
                                        {/* Title & Info */}
                                        <div className="md:col-span-3 pt-4 text-center md:text-left">
                                            <h3 className="text-base md:text-lg font-semibold uppercase">{roast.name}</h3>
                                            <p className="text-sm italic text-coffee-orange">{roast.level}</p>
                                            <p className="text-xs mt-1 text-neutral-400">
                                                {roast.temperature} · {roast.time}
                                            </p>
                                        </div>

                                        {/* Image */}
                                        <div className="md:col-span-3 flex justify-center md:justify-start relative z-10">
                                            <div className="w-56 h-36 lg:h-56 overflow-hidden">
                                                <img
                                                    src={roast.image}
                                                    alt={roast.name}
                                                    className="w-full h-36 object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Characteristics */}
                                        <div className="md:col-span-6 pt-4 md:mt-6 lg:mt-0 text-center md:text-left">
                                            <p className="mb-3 text-sm text-neutral-200">{roast.description}</p>
                                            <ul className="space-y-2 flex flex-col items-center md:items-start pt-4">
                                                {roast.characteristics.map((point, j) => (
                                                    <li key={j} className="flex items-start text-sm text-white/90">
                                                        <span className="mt-1 mr-2 inline-block w-2 h-2 rounded-full bg-coffee-orange flex-shrink-0" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <hr className="absolute bottom-0 left-0 w-full border-t border-[#583E37] opacity-100 z-0" />
                                </div>
                            </React.Fragment>
                        ))}

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Variedades;
