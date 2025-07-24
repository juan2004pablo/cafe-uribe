import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Coffee, Truck, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModernWorkflowSection from '@/components/ModernWorkflowSection';
import ModernContactForm from '@/components/ModernContactForm';
import CoffeeShowcaseSection from '@/components/CoffeeShowcaseSection';

const ClientesB2B = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const navigate = useNavigate();

    const benefits = [
        {
            icon: <Coffee className="w-8 h-8" />,
            title: "Calidad Garantizada",
            description: "Café de especialidad con trazabilidad completa desde la finca hasta su negocio."
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: "Logística Eficiente",
            description: "Entregas puntuales y flexibles adaptadas a sus necesidades operativas."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Soporte Especializado",
            description: "Equipo dedicado para asesoría técnica y comercial personalizada."
        },
        {
            icon: <Building2 className="w-8 h-8" />,
            title: "Precios Competitivos",
            description: "Condiciones especiales y descuentos por volumen para mayoristas."
        }
    ];

    const clientTypes = [
        {
            title: "Cafeterías y Coffee Shops",
            description: "Variedades premium para establecimientos que buscan diferenciarse",
            image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=300&fit=crop"
        },
        {
            title: "Hoteles y Restaurantes",
            description: "Soluciones a medida para el sector HORECA con calidad consistente",
            image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop"
        },
        {
            title: "Distribuidores Mayoristas",
            description: "Alianzas estratégicas para ampliar su portafolio con café premium",
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop"
        },
        {
            title: "Tiendas Especializadas",
            description: "Productos únicos para retailers que valoran la calidad y origen",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop"
        }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleContactRedirect = () => {
        navigate('/contacto');
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center pt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1920&h=1080&fit=crop')",
                        filter: "brightness(0.4)"
                    }}
                />
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
                            Soluciones para Negocios
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Únete a nuestra red de distribuidores y lleva la excelencia del café colombiano a tu negocio
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                size="lg" 
                                className="bg-coffee-orange hover:bg-coffee-orange/80"
                                onClick={() => scrollToSection('comencemos-alianza')}
                            >
                                Solicitar Información
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="border-coffee-brown text-coffee-brown hover:bg-white/80 hover:text-coffee-brown"
                                onClick={handleContactRedirect}
                            >
                                Contactar Directamente
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Por qué elegir Café Uribe */}
            <section ref={benefitsRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-brown mb-6">
                            ¿Por qué Café Uribe para tu Negocio?
                        </h2>
                        <p className="text-lg text-coffee-brown/70 max-w-2xl mx-auto">
                            Ofrecemos más que café premium: una alianza estratégica que impulsa el crecimiento de tu negocio.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-coffee-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <div className="text-coffee-orange">{benefit.icon}</div>
                                </div>
                                <h3 className="font-playfair text-xl font-semibold text-coffee-brown mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-coffee-brown/70 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* A quién servimos */}
            <section className="py-20 bg-coffee-cream/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-playfair text-4xl font-bold text-coffee-brown mb-6">
                            Nuestros Clientes Ideales
                        </h2>
                        <p className="text-lg text-coffee-brown/70 max-w-2xl mx-auto">
                            Trabajamos con diferentes tipos de negocios que valoran la calidad y autenticidad.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {clientTypes.map((client, index) => (
                            <motion.div
                                key={client.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={client.image}
                                            alt={client.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/20" />
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="font-playfair text-lg font-semibold text-coffee-brown mb-3">
                                            {client.title}
                                        </h3>
                                        <p className="text-coffee-brown/70">
                                            {client.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modern Workflow Section */}
            <ModernWorkflowSection />

            {/* Contact Form */}
            <ModernContactForm />

            {/* Coffee Showcase Section */}
            <CoffeeShowcaseSection />

            <Footer />
        </div>
    );
};

export default ClientesB2B;
