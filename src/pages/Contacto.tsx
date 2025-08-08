import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Mail, Phone, User, MessageSquare, Send, CheckCircle, AlertCircle, MapPin, Clock, Coffee } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleMaps from '@/components/GoogleMaps';
import emailjs from '@emailjs/browser';

const Contacto = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const form = useRef<HTMLFormElement>(null);

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
        validateField(e.target.name, e.target.value);
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!form.current) return;

        const formData = new FormData(form.current);
        let isValid = true;

        // Validar todos los campos
        for (const [name, value] of formData.entries()) {
            if (!validateField(name as string, value as string)) {
                isValid = false;
            }
        }

        if (!isValid) return;

        setIsSubmitting(true);

        emailjs
            .sendForm('service_cafe_uribe_test', 'template_x7a8zdu', form.current, {
                publicKey: 'GgMkx8GPi6Z3ZXerG',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSubmitted(true);
                    setIsSubmitting(false);
                    setErrors({});
                    // Reset form after 5 seconds
                    setTimeout(() => {
                        setIsSubmitted(false);
                        if (form.current) {
                            form.current.reset();
                        }
                    }, 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsSubmitting(false);
                    alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
                },
            );
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center pt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/heroSection/contacto.jpeg')",
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
                            Contáctanos
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Estamos listos para responder a todas tus preguntas y ayudarte en lo que necesites.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Card className="h-full flex flex-col justify-center items-center p-6 border-0 shadow-md">
                                <MapPin className="w-10 h-10 text-coffee-orange mb-4" />
                                <h3 className="font-playfair text-xl font-semibold text-coffee-brown mb-2">
                                    Visítanos
                                </h3>
                                <p className="text-coffee-brown/70 text-center">
                                    Cra 24 # 77-34
                                    <br />
                                    Bogotá, Colombia
                                </p>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Card className="h-full flex flex-col justify-center items-center p-6 border-0 shadow-md">
                                <Clock className="w-10 h-10 text-coffee-orange mb-4" />
                                <h3 className="font-playfair text-xl font-semibold text-coffee-brown mb-2">
                                    Horario
                                </h3>
                                <p className="text-coffee-brown/70 text-center">
                                    Lunes a Viernes: 8 AM - 6 PM
                                    <br />
                                    Sábados: 9 AM - 1 PM
                                </p>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Card className="h-full flex flex-col justify-center items-center p-6 border-0 shadow-md">
                                <Coffee className="w-10 h-10 text-coffee-orange mb-4" />
                                <h3 className="font-playfair text-xl font-semibold text-coffee-brown mb-2">
                                    ¡Escríbenos!
                                </h3>
                                <p className="text-coffee-brown/70 text-center">
                                    info@cafeuribe.com
                                </p>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form and Map */}
            <section ref={formRef} className="py-20 bg-gradient-to-br from-coffee-cream/20 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={formInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <div className="mb-8">
                                        <h3 className="font-playfair text-2xl font-bold text-coffee-brown mb-4">
                                            Envíanos un Mensaje
                                        </h3>
                                        <p className="text-coffee-brown/70">
                                            Estamos aquí para responder todas tus preguntas sobre nuestros productos y servicios.
                                        </p>
                                    </div>

                                    {isSubmitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-8"
                                        >
                                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                            <h4 className="text-xl font-semibold text-coffee-brown mb-2">
                                                ¡Mensaje Enviado!
                                            </h4>
                                            <p className="text-coffee-brown/70">
                                                Gracias por contactarnos. Te responderemos pronto.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="relative">
                                                    <User className="absolute left-3 top-3.5 w-4 h-4 text-coffee-brown/50" />
                                                    <Input
                                                        type="text"
                                                        name="user_name"
                                                        placeholder="Tu nombre completo"
                                                        className={`pl-10 border-coffee-brown/20 focus:border-coffee-orange ${errors.user_name ? 'border-red-500' : ''}`}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    {errors.user_name && (
                                                        <div className="flex items-center mt-1 text-red-500 text-sm">
                                                            <AlertCircle className="w-3 h-3 mr-1" />
                                                            {errors.user_name}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-coffee-brown/50" />
                                                    <Input
                                                        type="email"
                                                        name="user_email"
                                                        placeholder="Tu correo electrónico"
                                                        className={`pl-10 border-coffee-brown/20 focus:border-coffee-orange ${errors.user_email ? 'border-red-500' : ''}`}
                                                        onChange={handleInputChange}
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
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-3.5 w-4 h-4 text-coffee-brown/50" />
                                                    <Input
                                                        type="tel"
                                                        name="user_phone"
                                                        placeholder="Tu teléfono (opcional)"
                                                        className={`pl-10 border-coffee-brown/20 focus:border-coffee-orange ${errors.user_phone ? 'border-red-500' : ''}`}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.user_phone && (
                                                        <div className="flex items-center mt-1 text-red-500 text-sm">
                                                            <AlertCircle className="w-3 h-3 mr-1" />
                                                            {errors.user_phone}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="relative">
                                                    <Building2 className="absolute left-3 top-3.5 w-4 h-4 text-coffee-brown/50" />
                                                    <Input
                                                        type="text"
                                                        name="subject"
                                                        placeholder="Asunto del mensaje"
                                                        className={`pl-10 border-coffee-brown/20 focus:border-coffee-orange ${errors.subject ? 'border-red-500' : ''}`}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    {errors.subject && (
                                                        <div className="flex items-center mt-1 text-red-500 text-sm">
                                                            <AlertCircle className="w-3 h-3 mr-1" />
                                                            {errors.subject}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="relative">
                                                <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-coffee-brown/50" />
                                                <Textarea
                                                    name="message"
                                                    placeholder="Escribe tu mensaje aquí..."
                                                    rows={6}
                                                    className={`pl-10 border-coffee-brown/20 focus:border-coffee-orange resize-none ${errors.message ? 'border-red-500' : ''}`}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                                {errors.message && (
                                                    <div className="flex items-center mt-1 text-red-500 text-sm">
                                                        <AlertCircle className="w-3 h-3 mr-1" />
                                                        {errors.message}
                                                    </div>
                                                )}
                                                <div className="text-right mt-1">
                                                    <span className="text-sm text-coffee-brown/50">
                                                        {form.current?.message?.value?.length || 0}/1000
                                                    </span>
                                                </div>
                                            </div>

                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full bg-coffee-orange hover:bg-coffee-orange/80 text-white group"
                                                disabled={isSubmitting || Object.keys(errors).length > 0}
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center">
                                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                        Enviando mensaje...
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center">
                                                        Enviar Mensaje
                                                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                )}
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={formInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <GoogleMaps />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contacto;
