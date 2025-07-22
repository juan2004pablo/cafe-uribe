
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Coffee, Award, Thermometer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Variedades = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [varietiesRef, varietiesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const varieties = [
        {
            name: "Café Premium Origen",
            type: "Arábica Colombiano",
            process: "Lavado",
            altitude: "1,800m",
            notes: ["Cítricos", "Chocolate", "Caramelo"],
            body: "Medio",
            acidity: "Alta",
            image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=400&fit=crop",
            description: "Nuestra variedad insignia, cultivada en las mejores condiciones del Eje Cafetero."
        },
        {
            name: "Café Especial Tostión Media",
            type: "Arábica Premium",
            process: "Natural",
            altitude: "1,750m",
            notes: ["Frutas Rojas", "Vainilla", "Nueces"],
            body: "Pleno",
            acidity: "Media",
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=400&fit=crop",
            description: "Equilibrio perfecto entre dulzura natural y acidez balanceada."
        },
        {
            name: "Café Artesanal Intenso",
            type: "Arábica Tradicional",
            process: "Semi-lavado",
            altitude: "1,700m",
            notes: ["Cacao", "Almendras", "Tabaco"],
            body: "Robusto",
            acidity: "Baja",
            image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=500&h=400&fit=crop",
            description: "Cuerpo intenso y persistente, ideal para espresso y preparaciones fuertes."
        },
        {
            name: "Café Orgánico Especial",
            type: "Arábica Orgánico",
            process: "Lavado",
            altitude: "1,850m",
            notes: ["Flores", "Miel", "Limón"],
            body: "Ligero",
            acidity: "Brillante",
            image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=400&fit=crop",
            description: "Cultivado sin químicos, con certificación orgánica internacional."
        },
        {
            name: "Café Geisha Premium",
            type: "Geisha Varietal",
            process: "Lavado",
            altitude: "1,900m",
            notes: ["Jazmín", "Bergamota", "Té"],
            body: "Delicado",
            acidity: "Vibrante",
            image: "https://images.unsplash.com/photo-1442975631115-c4f7b5d14785?w=500&h=400&fit=crop",
            description: "Nuestra variedad más exclusiva, con perfiles de sabor únicos y complejos."
        },
        {
            name: "Café Microlote Especial",
            type: "Arábica Selecto",
            process: "Honey",
            altitude: "1,820m",
            notes: ["Panela", "Canela", "Naranja"],
            body: "Cremoso",
            acidity: "Dulce",
            image: "https://images.unsplash.com/photo-1518832988845-bb9b64c9ee9d?w=500&h=400&fit=crop",
            description: "Producción limitada con procesos artesanales únicos."
        }
    ];

    const certifications = [
        { name: "Rainforest Alliance", icon: <Thermometer className="w-6 h-6" /> },
        { name: "Café Orgánico", icon: <Coffee className="w-6 h-6" /> },
        { name: "Comercio Justo", icon: <Award className="w-6 h-6" /> }
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center pt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop')",
                        filter: "brightness(0.5)"
                    }}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
                            Nuestras Variedades
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90">
                            Descubre la diversidad de sabores y aromas únicos
                        </p>
                        <Button size="lg" className="bg-coffee-orange hover:bg-coffee-orange/90">
                            <Download className="w-4 h-4 mr-2" />
                            Descargar Ficha Técnica
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Introducción */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-playfair text-4xl font-bold text-coffee-brown mb-6">
                        Café de Especialidad Premium
                    </h2>
                    <p className="text-lg text-coffee-brown/80 mb-8 leading-relaxed">
                        Cada variedad de Café Uribe refleja las características únicas de nuestro terroir,
                        procesada con métodos artesanales que resaltan los mejores atributos de cada grano.
                        Todas nuestras variedades están disponibles para distribución B2B con trazabilidad completa.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {certifications.map((cert, index) => (
                            <Badge key={cert.name} variant="outline" className="px-4 py-2 text-coffee-brown border-coffee-orange">
                                {cert.icon}
                                <span className="ml-2">{cert.name}</span>
                            </Badge>
                        ))}
                    </div>
                </div>
            </section>

            {/* Catálogo de Variedades */}
            <section ref={varietiesRef} className="py-20 bg-coffee-cream/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {varieties.map((variety, index) => (
                            <motion.div
                                key={variety.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={varietiesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={variety.image}
                                            alt={variety.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/20" />
                                        <Badge className="absolute top-4 left-4 bg-coffee-orange text-white">
                                            {variety.type}
                                        </Badge>
                                    </div>

                                    <CardHeader>
                                        <h3 className="font-playfair text-xl font-bold text-coffee-brown">
                                            {variety.name}
                                        </h3>
                                        <p className="text-coffee-brown/70">{variety.description}</p>
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <span className="font-semibold text-coffee-brown">Proceso:</span>
                                                <p className="text-coffee-brown/70">{variety.process}</p>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-coffee-brown">Altura:</span>
                                                <p className="text-coffee-brown/70">{variety.altitude}</p>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-coffee-brown">Cuerpo:</span>
                                                <p className="text-coffee-brown/70">{variety.body}</p>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-coffee-brown">Acidez:</span>
                                                <p className="text-coffee-brown/70">{variety.acidity}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <span className="font-semibold text-coffee-brown block mb-2">Notas de Cata:</span>
                                            <div className="flex flex-wrap gap-2">
                                                {variety.notes.map((note) => (
                                                    <Badge key={note} variant="secondary" className="text-xs bg-coffee-cream text-coffee-brown">
                                                        {note}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <Button
                                            variant="outline"
                                            className="w-full border-coffee-orange text-coffee-orange hover:bg-coffee-orange hover:text-white"
                                        >
                                            Solicitar Muestra
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-coffee-brown text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-playfair text-4xl font-bold mb-6">
                        ¿Interesado en Nuestras Variedades?
                    </h2>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        Contáctanos para recibir información detallada sobre precios, disponibilidad
                        y condiciones especiales para distribuidores.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-coffee-orange hover:bg-coffee-orange/90">
                            <Download className="w-4 h-4 mr-2" />
                            Descargar Catálogo Completo
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-coffee-brown hover:bg-white/90 hover:text-coffee-brown">
                            Cotizar Ahora
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Variedades;
