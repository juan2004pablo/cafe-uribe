
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Coffee, Leaf, Flame, Package, Award, Thermometer, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Variedades = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [grainTypesRef, grainTypesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [coffeeTypesRef, coffeeTypesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [roastTypesRef, roastTypesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [productRef, productInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const grainTypes = [
        {
            name: "Arábica",
            scientific: "Coffea Arabica",
            description: "Grano principal en nuestras fincas, cultivado en altitudes superiores a 1,500m. Representa el 85% de nuestra producción.",
            characteristics: ["Sabor suave y dulce", "Menor contenido de cafeína", "Acidez balanceada", "Aroma floral"],
            image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=400&fit=crop",
            icon: <Leaf className="w-8 h-8" />,
            percentage: 85
        },
        {
            name: "Robusta",
            scientific: "Coffea Canephora",
            description: "Variedad resistente cultivada en zonas específicas. Aporta cuerpo y crema a nuestras mezclas especiales.",
            characteristics: ["Mayor contenido de cafeína", "Sabor más fuerte", "Excelente crema", "Resistente a plagas"],
            image: "https://images.unsplash.com/photo-1442975631115-c4f7b5d14785?w=500&h=400&fit=crop",
            icon: <Coffee className="w-8 h-8" />,
            percentage: 12
        },
        {
            name: "Liberica",
            scientific: "Coffea Liberica",
            description: "Variedad especial en cultivos experimentales. Notas únicas y distintivas que agregan complejidad.",
            characteristics: ["Granos más grandes", "Sabor frutal intenso", "Notas ahumadas", "Perfil único"],
            image: "https://images.unsplash.com/photo-1518832988845-bb9b64c9ee9d?w=500&h=400&fit=crop",
            icon: <Award className="w-8 h-8" />,
            percentage: 3
        }
    ];

    const coffeeTypes = [
        {
            name: "Espresso",
            description: "Base perfecta para todas las preparaciones",
            method: "Extracción concentrada",
            time: "25-30 segundos",
            image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop",
            icon: <Coffee className="w-6 h-6" />
        },
        {
            name: "Café Latte",
            description: "Equilibrio perfecto entre espresso y leche",
            method: "Espresso + leche vaporizada",
            time: "2-3 minutos",
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
            icon: <Droplets className="w-6 h-6" />
        },
        {
            name: "Cappuccino",
            description: "Tradición italiana con espuma perfecta",
            method: "Espresso + leche + espuma",
            time: "3-4 minutos",
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop",
            icon: <Thermometer className="w-6 h-6" />
        },
        {
            name: "Americano",
            description: "Intensidad suave para cualquier momento",
            method: "Espresso + agua caliente",
            time: "1-2 minutos",
            image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
            icon: <Coffee className="w-6 h-6" />
        }
    ];

    const roastTypes = [
        {
            name: "Tostión Clara",
            level: "Light Roast",
            description: "Preserva los sabores originales del grano, acidez pronunciada y notas florales más evidentes.",
            temperature: "180-205°C",
            time: "9-11 minutos",
            characteristics: ["Acidez alta", "Sabores frutales", "Cuerpo ligero", "Cafeína alta"],
            color: "bg-amber-200",
            image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop"
        },
        {
            name: "Tostión Media",
            level: "Medium Roast",
            description: "Equilibrio perfecto entre acidez y cuerpo, realza los sabores naturales con notas más balanceadas.",
            temperature: "210-225°C",
            time: "12-14 minutos",
            characteristics: ["Acidez media", "Sabor balanceado", "Cuerpo medio", "Versatilidad"],
            color: "bg-amber-600",
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
        },
        {
            name: "Tostión Oscura",
            level: "Dark Roast",
            description: "Desarrolla sabores profundos y complejos, con notas tostadas y cuerpo robusto ideal para espresso.",
            temperature: "230-245°C",
            time: "15-18 minutos",
            characteristics: ["Acidez baja", "Sabores intensos", "Cuerpo robusto", "Notas tostadas"],
            color: "bg-amber-900",
            image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=300&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center pt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop')",
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
                            Café Uribe Premium - El resultado de décadas de experiencia en una presentación perfecta
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
                                <img
                                    src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop"
                                    alt="Café Uribe Premium"
                                    className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                                />
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
                                        Café Uribe Premium
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
                                        <span className="text-coffee-brown/60 text-sm">Cuerpo:</span>
                                        <p className="text-coffee-brown font-medium">Medio</p>
                                    </div>
                                    <div>
                                        <span className="text-coffee-brown/60 text-sm">Aroma:</span>
                                        <p className="text-coffee-brown font-medium">Floral y Frutal</p>
                                    </div>
                                    <div>
                                        <span className="text-coffee-brown/60 text-sm">Notas:</span>
                                        <p className="text-coffee-brown font-medium">Chocolate y Cítricos</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button size="lg" className="bg-coffee-orange hover:bg-coffee-orange/90">
                                    <Download className="w-4 h-4 mr-2" />
                                    Descargar Ficha Técnica
                                </Button>
                                <Button size="lg" variant="outline" className="border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-white">
                                    Solicitar Cotización
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tipos de Grano */}
            <section ref={grainTypesRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={grainTypesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-playfair text-4xl md:text-6xl font-bold text-coffee-brown mb-6">
                            Tipos de Grano
                        </h2>
                        <p className="text-lg text-coffee-brown/70 max-w-3xl mx-auto">
                            Conoce las variedades de café que cultivamos en nuestras fincas,
                            cada una con características únicas que definen el sabor final
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
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-coffee-brown/60 to-transparent" />
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
                                        <p className="text-coffee-brown/70 leading-relaxed">
                                            {grain.description}
                                        </p>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-coffee-brown mb-3">Características:</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {grain.characteristics.map((char, idx) => (
                                                    <div key={idx} className="flex items-center text-sm">
                                                        <div className="w-2 h-2 bg-coffee-orange rounded-full mr-2" />
                                                        <span className="text-coffee-brown/80">{char}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
                            Preparaciones de Café
                        </h2>
                        <p className="text-lg text-coffee-brown/70 max-w-3xl mx-auto">
                            Descubre las diferentes formas de preparar y disfrutar nuestro café,
                            cada método resalta sabores únicos
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coffeeTypes.map((coffee, index) => (
                            <motion.div
                                key={coffee.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={coffeeTypesInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group cursor-pointer"
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
                                            <div className="flex justify-between">
                                                <span className="text-coffee-brown/60">Método:</span>
                                                <span className="text-coffee-brown font-medium">{coffee.method}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-coffee-brown/60">Tiempo:</span>
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
            <section ref={roastTypesRef} className="py-20 bg-coffee-brown/80 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={roastTypesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
                            Tipos de Tostión
                        </h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            El arte de tostar define el carácter final del café. Conoce nuestros tres niveles
                            de tostión y cómo cada uno desarrolla sabores únicos
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {roastTypes.map((roast, index) => (
                            <motion.div
                                key={roast.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={roastTypesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="group"
                            >
                                <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={roast.image}
                                            alt={roast.name}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className={`absolute top-4 right-4 ${roast.color} rounded-full p-3`}>
                                            <Flame className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <CardHeader className="text-white">
                                        <h3 className="font-playfair text-2xl font-bold">
                                            {roast.name}
                                        </h3>
                                        <p className="text-coffee-orange font-medium">
                                            {roast.level}
                                        </p>
                                        <p className="text-white/80 leading-relaxed">
                                            {roast.description}
                                        </p>
                                    </CardHeader>

                                    <CardContent className="text-white">
                                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                                            <div>
                                                <span className="text-white/60">Temperatura:</span>
                                                <p className="text-coffee-orange font-medium">{roast.temperature}</p>
                                            </div>
                                            <div>
                                                <span className="text-white/60">Tiempo:</span>
                                                <p className="text-coffee-orange font-medium">{roast.time}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-white mb-2">Características:</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {roast.characteristics.map((char, idx) => (
                                                    <div key={idx} className="flex items-center text-sm">
                                                        <div className="w-2 h-2 bg-coffee-orange rounded-full mr-2" />
                                                        <span className="text-white/80">{char}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Variedades;
