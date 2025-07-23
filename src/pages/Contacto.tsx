
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleMaps from '@/components/GoogleMaps';

const Contacto = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            info: "info@cafeuribe.com",
            description: "Respuesta en 24 horas",
            action: () => window.open('mailto:info@cafeuribe.com', '_blank'),
            buttonText: "Enviar Email"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Teléfono",
            info: "+57 320 373 7502",
            description: "Mar - Sáb, 7:00 AM - 7:00 PM",
            action: () => window.open('tel:+573203737502', '_blank'),
            buttonText: "Llamar Ahora"
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "WhatsApp",
            info: "+57 320 373 7502",
            description: "Atención inmediata",
            action: () => window.open('https://wa.me/573203737502?text=Hola, me interesa conocer más sobre Café Uribe', '_blank'),
            buttonText: "Chatear"
        },
    ];

    return (
        <div className="min-h-screen overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center pt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1920&h=1080&fit=crop')",
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
                            Hablemos de buen café
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90">
                            Estamos aquí para acompañarte en tu negocio
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Información de contacto */}
            <section ref={contactRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Formulario */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={contactInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Horarios */}
                            <Card className="p-6 bg-coffee-cream/20">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-coffee-orange/10 rounded-full flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-coffee-orange" />
                                    </div>
                                    <div>
                                        <h3 className="font-playfair text-xl font-semibold text-coffee-brown mb-3">
                                            Horarios de Atención
                                        </h3>
                                        <div className="space-y-2 text-coffee-brown/80">
                                            <div className="flex space-x-2">
                                                <span>Martes - Sábado:</span>
                                                <span className="font-medium">7:00 AM - 7:00 PM</span>
                                            </div>
                                            <div className="flex space-x-2">
                                                <span>Domingo:</span>
                                                <span className="font-medium">7:00 AM - 12:00 PM</span>
                                            </div>
                                            <div className="flex space-x-2">
                                                <span>Lunes:</span>
                                                <span className="font-medium">Cerrado</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <h2 className="font-playfair text-3xl font-bold text-coffee-brown">
                                        Envíanos un Mensaje
                                    </h2>
                                    <p className="text-coffee-brown/70">
                                        Completa el formulario y nos pondremos en contacto contigo pronto.
                                    </p>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-coffee-brown mb-2">
                                                Nombre
                                            </label>
                                            <Input placeholder="Tu nombre completo" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-coffee-brown mb-2">
                                                Email
                                            </label>
                                            <Input type="email" placeholder="tu@email.com" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-coffee-brown mb-2">
                                                Teléfono
                                            </label>
                                            <Input placeholder="+57 300 123 4567" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-coffee-brown mb-2">
                                                Empresa (opcional)
                                            </label>
                                            <Input placeholder="Nombre de tu empresa" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-coffee-brown mb-2">
                                            Asunto
                                        </label>
                                        <Input placeholder="Motivo de tu consulta" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-coffee-brown mb-2">
                                            Mensaje
                                        </label>
                                        <Textarea
                                            placeholder="Cuéntanos cómo podemos ayudarte..."
                                            className="min-h-[120px]"
                                        />
                                    </div>

                                    <Button size="lg" className="w-full bg-coffee-orange hover:bg-coffee-orange/90">
                                        Enviar Mensaje
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Información de contacto mejorada */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={contactInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="font-playfair text-3xl font-bold text-coffee-brown mb-6">
                                    Información de Contacto
                                </h2>
                                <p className="text-coffee-brown/80 mb-8">
                                    Nuestras fincas están ubicadas en el hermoso municipio de Ragonvalia, Norte de Santander,
                                    a una altitud de 1,750 metros sobre el nivel del mar.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {contactMethods.map((method, index) => (
                                    <motion.div
                                        key={method.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={contactInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    >
                                        <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-start space-x-4 flex-1">
                                                    <div className="w-12 h-12 bg-coffee-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <div className="text-coffee-orange">{method.icon}</div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-coffee-brown mb-1">
                                                            {method.title}
                                                        </h3>
                                                        <p className="text-coffee-brown font-medium mb-1">
                                                            {method.info}
                                                        </p>
                                                        <p className="text-coffee-brown/60 text-sm mb-3">
                                                            {method.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button
                                                    onClick={method.action}
                                                    size="sm"
                                                    className="bg-coffee-orange hover:bg-coffee-orange/90 text-white flex items-center gap-2"
                                                >
                                                    {method.buttonText}
                                                    <ExternalLink className="w-3 h-3" />
                                                </Button>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA rápido mejorado */}
                            <Card className="p-6 bg-coffee-brown text-white">
                                <h3 className="font-playfair text-xl font-semibold mb-3">
                                    ¿Necesitas Atención Inmediata?
                                </h3>
                                <p className="text-white/80 mb-4">
                                    Para consultas urgentes o pedidos inmediatos, contáctanos por WhatsApp.
                                </p>
                                <Button
                                    onClick={() => window.open('https://wa.me/573203737502?text=Hola, necesito atención inmediata sobre Café Uribe', '_blank')}
                                    className="bg-coffee-orange hover:bg-coffee-orange/90 text-white w-full"
                                >
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Chatear por WhatsApp
                                </Button>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mapa de Google Maps */}
            <section ref={mapRef} className="py-20 bg-coffee-cream/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={mapInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <GoogleMaps />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contacto;
