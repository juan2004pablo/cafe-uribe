
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Mail, Phone, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ModernContactForm = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
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

            case 'company_name':
                if (!value.trim()) {
                    newErrors[name] = 'El nombre de la empresa es requerido';
                } else if (value.length < 2) {
                    newErrors[name] = 'El nombre de la empresa debe tener al menos 2 caracteres';
                } else if (value.length > 100) {
                    newErrors[name] = 'El nombre de la empresa no puede exceder 100 caracteres';
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

            case 'business_type':
                if (!value.trim()) {
                    newErrors[name] = 'El tipo de negocio es requerido';
                } else if (value.length < 3) {
                    newErrors[name] = 'El tipo de negocio debe tener al menos 3 caracteres';
                } else if (value.length > 100) {
                    newErrors[name] = 'El tipo de negocio no puede exceder 100 caracteres';
                } else if (/^\d+$/.test(value)) {
                    newErrors[name] = 'El tipo de negocio no puede ser solo números';
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
            .sendForm('service_cafe_uribe_test', 'template_zzfiriv', form.current, {
                publicKey: 'GgMkx8GPi6Z3ZXerG',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSubmitted(true);
                    setIsSubmitting(false);
                    setErrors({});
                    // Reset form after 3 seconds
                    setTimeout(() => {
                        setIsSubmitted(false);
                        if (form.current) {
                            form.current.reset();
                        }
                    }, 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsSubmitting(false);
                    alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
                },
            );
    };

    return (
        <section id="comencemos-alianza" className="py-20 bg-gradient-to-br from-coffee-cream/20 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-brown mb-6">
                        Comencemos una Alianza
                    </h2>
                    <p className="text-lg text-coffee-brown/70 max-w-2xl mx-auto">
                        Cuéntanos sobre tu negocio y descubre cómo podemos ser tu mejor aliado en café de especialidad.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="font-playfair text-2xl font-semibold text-coffee-brown mb-6">
                                ¿Por qué elegir Café Uribe?
                            </h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <Building2 className="w-6 h-6" />,
                                        title: "Logística Eficaz",
                                        description: "Garantizamos que nuestro café llegue fresco y a tiempo, con procesos logísticos precisos y confiables."
                                    },
                                    {
                                        icon: <Mail className="w-6 h-6" />,
                                        title: "Calidad Garantizada",
                                        description: "Trazabilidad completa desde la finca hasta tu negocio. Cada grano tiene historia."
                                    },
                                    {
                                        icon: <Phone className="w-6 h-6" />,
                                        title: "Soporte Personalizado",
                                        description: "Asesoría técnica y comercial adaptada a las necesidades de tu negocio."
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                        className="flex items-start space-x-4"
                                    >
                                        <div className="w-12 h-12 bg-coffee-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <div className="text-coffee-orange">{item.icon}</div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-coffee-brown mb-2">{item.title}</h4>
                                            <p className="text-coffee-brown/70 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-8">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
                                    >
                                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-coffee-brown mb-2">
                                            ¡Mensaje Enviado!
                                        </h3>
                                        <p className="text-coffee-brown/70">
                                            Nos pondremos en contacto contigo pronto para comenzar nuestra alianza.
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
                                                    placeholder="Nombre completo"
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
                                                <Building2 className="absolute left-3 top-3.5 w-4 h-4 text-coffee-brown/50" />
                                                <Input
                                                    type="text"
                                                    name="company_name"
                                                    placeholder="Nombre de la empresa"
                                                    className={`pl-10 border-coffee-brown/20 focus:border-coffee-orange ${errors.company_name ? 'border-red-500' : ''}`}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                                {errors.company_name && (
                                                    <div className="flex items-center mt-1 text-red-500 text-sm">
                                                        <AlertCircle className="w-3 h-3 mr-1" />
                                                        {errors.company_name}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-coffee-brown/50" />
                                                <Input
                                                    type="email"
                                                    name="user_email"
                                                    placeholder="Correo electrónico"
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
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-3.5 w-4 h-4 text-coffee-brown/50" />
                                                <Input
                                                    type="tel"
                                                    name="user_phone"
                                                    placeholder="Teléfono (opcional)"
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
                                        </div>

                                        <div className="relative">
                                            <Input
                                                type="text"
                                                name="business_type"
                                                placeholder="Tipo de negocio (ej: Restaurante, Hotel, Distribuidor)"
                                                className={`border-coffee-brown/20 focus:border-coffee-orange ${errors.business_type ? 'border-red-500' : ''}`}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            {errors.business_type && (
                                                <div className="flex items-center mt-1 text-red-500 text-sm">
                                                    <AlertCircle className="w-3 h-3 mr-1" />
                                                    {errors.business_type}
                                                </div>
                                            )}
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
                                                    Enviando...
                                                </span>
                                            ) : (
                                                <span className="flex items-center">
                                                    Iniciar Alianza
                                                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ModernContactForm;
