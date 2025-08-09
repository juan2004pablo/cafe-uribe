import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, MessageCircle, Clock, ExternalLink, AlertCircle } from 'lucide-react';
import { Facebook, Instagram, } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleMaps from '@/components/GoogleMaps';
import React, { useState } from 'react';

const Contacto = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    // Form state and validation
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_company: '',
        subject: '',
        message: ''
    });

    const validateField = (name: string, value: string) => {
        const newErrors = { ...errors };

        switch (name) {
            case 'user_name':
                if (!value.trim()) {
                    newErrors[name] = 'El nombre es requerido';
                } else if (value.length < 2) {
                    newErrors[name] = 'El nombre debe tener al menos 2 caracteres';
                } else if (value.length > 50) {
                    newErrors[name] = 'El nombre no puede exceder 50 caracteres';
                } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(value)) {
                    newErrors[name] = 'El nombre solo puede contener letras y espacios';
                } else {
                    delete newErrors[name];
                }
                break;

            case 'user_email':
                if (!value.trim()) {
                    newErrors[name] = 'El correo electrónico es requerido';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    newErrors[name] = 'Por favor ingresa un correo electrónico válido';
                } else {
                    delete newErrors[name];
                }
                break;

            case 'user_phone':
                if (value && !/^[\d\s\-\+\(\)]+$/.test(value)) {
                    newErrors[name] = 'El teléfono solo puede contener números, espacios, guiones, + y paréntesis';
                } else if (value && (value.length < 7 || value.length > 20)) {
                    newErrors[name] = 'El teléfono debe tener entre 7 y 20 caracteres';
                } else {
                    delete newErrors[name];
                }
                break;

            case 'user_company':
                if (value && value.length < 2) {
                    newErrors[name] = 'El nombre de la empresa debe tener al menos 2 caracteres';
                } else if (value && value.length > 100) {
                    newErrors[name] = 'El nombre de la empresa no puede exceder 100 caracteres';
                } else {
                    delete newErrors[name];
                }
                break;

            case 'subject':
                if (!value.trim()) {
                    newErrors[name] = 'El asunto es requerido';
                } else if (value.length < 5) {
                    newErrors[name] = 'El asunto debe tener al menos 5 caracteres';
                } else if (value.length > 100) {
                    newErrors[name] = 'El asunto no puede exceder 100 caracteres';
                } else if (/^\d+$/.test(value)) {
                    newErrors[name] = 'El asunto no puede ser solo números';
                } else {
                    delete newErrors[name];
                }
                break;

            case 'message':
                if (!value.trim()) {
                    newErrors[name] = 'El mensaje es requerido';
                } else if (value.length < 10) {
                    newErrors[name] = 'El mensaje debe tener al menos 10 caracteres';
                } else if (value.length > 1000) {
                    newErrors[name] = 'El mensaje no puede exceder 1000 caracteres';
                } else if (/^\d+$/.test(value)) {
                    newErrors[name] = 'El mensaje no puede ser solo números';
                } else {
                    delete newErrors[name];
                }
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const sendToWhatsApp = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        let isValid = true;

        // Validar todos los campos requeridos
        const requiredFields = ['user_name', 'user_email', 'subject', 'message'];
        const allFields = ['user_name', 'user_email', 'user_phone', 'user_company', 'subject', 'message'];
        
        allFields.forEach(field => {
            if (!validateField(field, formData[field as keyof typeof formData])) {
                isValid = false;
            }
        });

        if (!isValid) {
            setIsSubmitting(false);
            return;
        }

        // Crear mensaje para WhatsApp
        const message = `¡Hola! Te escribo desde el formulario de contacto de Café Uribe.

*Información de contacto:*
• Nombre: ${formData.user_name}
• Email: ${formData.user_email}
• Teléfono: ${formData.user_phone || 'No proporcionado'}
• Empresa: ${formData.user_company || 'No proporcionada'}

*Asunto:* ${formData.subject}

*Mensaje:*
${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/573203737502?text=${encodedMessage}`;
        
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSuccess(true);
            setIsSubmitting(false);
            setErrors({});
            
            // Reset form after showing success message
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({
                    user_name: '',
                    user_email: '',
                    user_phone: '',
                    user_company: '',
                    subject: '',
                    message: ''
                });
            }, 3000);
        }, 500);
    };

    const contactMethods = [
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "WhatsApp",
            info: "+57 320 373 7502",
            description: "Atención inmediata",
            action: () => window.open('https://wa.me/573203737502?text=Hola, me interesa conocer más sobre Café Uribe', '_blank'),
            buttonText: "Chatear"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Teléfono",
            info: "+57 320 373 7502",
            description: "Lun - Sáb, 8:00 AM - 6:00 PM",
            action: () => window.open('tel:+573203737502', '_blank'),
            buttonText: "Llamar Ahora"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            info: "info@cafeuribe.com",
            description: "Respuesta en 24 horas",
            action: () => window.open('mailto:info@cafeuribe.com', '_blank'),
            buttonText: "Enviar Email"
        },
    ];

    return (
        <div className="min-h-screen overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center pt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/producto/punto_de_venta_hero.png')",
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
                                    {isSuccess ? (
                                        <div className="text-center py-8">
                                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Mail className="w-8 h-8 text-green-600" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-coffee-brown mb-2">
                                                ¡Redirigido a WhatsApp!
                                            </h3>
                                            <p className="text-coffee-brown/70">
                                                Se ha abierto WhatsApp con tu mensaje. Completa el envío para continuar la conversación.
                                            </p>
                                            <Button
                                                onClick={() => setIsSuccess(false)}
                                                className="mt-4 bg-coffee-orange hover:bg-coffee-orange/90"
                                            >
                                                Enviar otro mensaje
                                            </Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={sendToWhatsApp} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="user_name" className="block text-sm font-medium text-coffee-brown mb-2">
                                                        Nombre
                                                    </label>
                                                    <Input
                                                        id="user_name"
                                                        name="user_name"
                                                        type="text"
                                                        placeholder="Tu nombre completo"
                                                        value={formData.user_name}
                                                        onChange={handleInputChange}
                                                        className={errors.user_name ? 'border-red-500' : ''}
                                                        required
                                                    />
                                                    {errors.user_name && (
                                                        <div className="flex items-center mt-1 text-red-500 text-sm">
                                                            <AlertCircle className="w-3 h-3 mr-1" />
                                                            {errors.user_name}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <label htmlFor="user_email" className="block text-sm font-medium text-coffee-brown mb-2">
                                                        Email
                                                    </label>
                                                    <Input
                                                        id="user_email"
                                                        name="user_email"
                                                        type="email"
                                                        placeholder="tu@email.com"
                                                        value={formData.user_email}
                                                        onChange={handleInputChange}
                                                        className={errors.user_email ? 'border-red-500' : ''}
                                                        required
                                                    />
                                                    {errors.user_email && (
                                                        <div className="flex items-center mt-1 text-red-500 text-sm">
                                                            <AlertCircle className="w-3 h-3 mr-1" />
                                                            {errors.user_email}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="user_phone" className="block text-sm font-medium text-coffee-brown mb-2">
                                                        Teléfono
                                                    </label>
                                                    <Input
                                                        id="user_phone"
                                                        name="user_phone"
                                                        type="tel"
                                                        placeholder="+57 300 123 4567"
                                                        value={formData.user_phone}
                                                        onChange={handleInputChange}
                                                        className={errors.user_phone ? 'border-red-500' : ''}
                                                    />
                                                    {errors.user_phone && (
                                                        <div className="flex items-center mt-1 text-red-500 text-sm">
                                                            <AlertCircle className="w-3 h-3 mr-1" />
                                                            {errors.user_phone}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <label htmlFor="user_company" className="block text-sm font-medium text-coffee-brown mb-2">
                                                        Empresa (opcional)
                                                    </label>
                                                    <Input
                                                        id="user_company"
                                                        name="user_company"
                                                        type="text"
                                                        placeholder="Nombre de tu empresa"
                                                        value={formData.user_company}
                                                        onChange={handleInputChange}
                                                        className={errors.user_company ? 'border-red-500' : ''}
                                                    />
                                                    {errors.user_company && (
                                                        <div className="flex items-center mt-1 text-red-500 text-sm">
                                                            <AlertCircle className="w-3 h-3 mr-1" />
                                                            {errors.user_company}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-medium text-coffee-brown mb-2">
                                                    Asunto
                                                </label>
                                                <Input
                                                    id="subject"
                                                    name="subject"
                                                    type="text"
                                                    placeholder="Motivo de tu consulta"
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    className={errors.subject ? 'border-red-500' : ''}
                                                    required
                                                />
                                                {errors.subject && (
                                                    <div className="flex items-center mt-1 text-red-500 text-sm">
                                                        <AlertCircle className="w-3 h-3 mr-1" />
                                                        {errors.subject}
                                                    </div>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-coffee-brown mb-2">
                                                    Mensaje
                                                </label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    placeholder="Cuéntanos cómo podemos ayudarte..."
                                                    className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                                {errors.message && (
                                                    <div className="flex items-center mt-1 text-red-500 text-sm">
                                                        <AlertCircle className="w-3 h-3 mr-1" />
                                                        {errors.message}
                                                    </div>
                                                )}
                                            </div>

                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full bg-coffee-orange hover:bg-coffee-orange/90"
                                                disabled={isSubmitting || Object.keys(errors).length > 0}
                                            >
                                                {isSubmitting ? 'Redirigiendo a WhatsApp...' : 'Enviar por WhatsApp'}
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                            <div className="mt-8">
                                <h3 className="font-playfair text-xl font-bold text-coffee-brown mb-2">
                                    Síguenos en redes
                                </h3>
                                <p className="text-sm text-coffee-brown/70 mb-4">
                                    Conéctate con nosotros y descubre más sobre nuestro café.
                                </p>

                                <div className="flex space-x-4">
                                    {/* Instagram */}
                                    <motion.a
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://www.instagram.com/cafeuribe?igsh=MTNpbW9sZ3c0ODRjNQ==&utm_source=qr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-coffee-orange/10 text-coffee-orange rounded-full flex items-center justify-center 
                 hover:bg-coffee-orange hover:text-white transition-all duration-300 shadow-sm"
                                    >
                                        <Instagram className="w-6 h-6" />
                                    </motion.a>

                                    {/* Facebook */}
                                    <motion.a
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://www.facebook.com/share/17fEZXoBLy/?mibextid=wwXIfr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-coffee-orange/10 text-coffee-orange rounded-full flex items-center justify-center 
                 hover:bg-coffee-orange hover:text-white transition-all duration-300 shadow-sm"
                                    >
                                        <Facebook className="w-6 h-6" />
                                    </motion.a>

                                    {/* TikTok */}
                                    <motion.a
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://www.tiktok.com/@cafeuriberag?_t=ZS-8ycBca0Wdf7&_r=1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-coffee-orange/10 text-coffee-orange rounded-full flex items-center justify-center 
                 hover:bg-coffee-orange hover:text-white transition-all duration-300 shadow-sm"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                        </svg>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={contactInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            {/* Horarios Mejorados */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Horario Virtual */}
                                <Card className="p-6 bg-gradient-to-br from-coffee-orange/5 to-coffee-orange/10 border-coffee-orange/20">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-coffee-orange/15 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <MessageCircle className="w-8 h-8 text-coffee-orange" />
                                        </div>
                                        <h3 className="font-playfair text-lg font-bold text-coffee-brown mb-2">
                                            Atención Virtual
                                        </h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center justify-center space-x-2 text-coffee-brown/80">
                                                <Clock className="w-4 h-4" />
                                                <span className="font-medium">Lunes - Sábado</span>
                                            </div>
                                            <div className="text-lg font-bold text-coffee-orange">
                                                8:00 AM - 6:00 PM
                                            </div>
                                            <p className="text-xs text-coffee-brown/60 mt-2">
                                                WhatsApp, Email y Formulario
                                            </p>
                                        </div>
                                    </div>
                                </Card>

                                {/* Horario Punto de Venta */}
                                <Card className="p-6 bg-gradient-to-br from-coffee-brown/5 to-coffee-brown/10 border-coffee-brown/20">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-coffee-brown/15 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <MapPin className="w-8 h-8 text-coffee-brown" />
                                        </div>
                                        <h3 className="font-playfair text-lg font-bold text-coffee-brown mb-2">
                                            Punto de Venta
                                        </h3>
                                        <div className="space-y-1 text-xs text-coffee-brown/80">
                                            <div className="flex justify-between items-center py-1">
                                                <span>Lunes:</span>
                                                <span className="font-medium text-red-600">Cerrado</span>
                                            </div>
                                            <div className="flex justify-between items-center py-1">
                                                <span>Mar - Sáb:</span>
                                                <span className="font-medium text-green-600">7AM - 12M / 3PM - 7PM</span>
                                            </div>
                                            <div className="flex justify-between items-center py-1">
                                                <span>Domingo:</span>
                                                <span className="font-medium text-green-600">7AM - 12M</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-coffee-brown/60 mt-3">
                                            Ragonvalia, Norte de Santander
                                        </p>
                                    </div>
                                </Card>
                            </div>
                            <div>
                                <h2 className="font-playfair text-3xl font-bold text-coffee-brown mb-6">
                                    Información de Contacto
                                </h2>

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
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                                <div className="flex items-start space-x-4 flex-1 min-w-0">
                                                    <div className="w-12 h-12 bg-coffee-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <div className="text-coffee-orange">{method.icon}</div>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <span className="text-sm font-light text-coffee-brown mb-1">
                                                            {method.title}
                                                        </span>
                                                        <p className="text-coffee-brown font-medium mb-1 break-words">
                                                            {method.info}
                                                        </p>

                                                    </div>
                                                </div>
                                                <Button
                                                    onClick={method.action}
                                                    size="sm"
                                                    className="bg-coffee-orange hover:bg-coffee-orange/90 text-white flex items-center gap-2 w-full sm:w-auto flex-shrink-0"
                                                >
                                                    <span className="hidden sm:inline">{method.buttonText}</span>
                                                    <span className="sm:hidden text-xs">{method.buttonText}</span>
                                                    <ExternalLink className="w-3 h-3" />
                                                </Button>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
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
