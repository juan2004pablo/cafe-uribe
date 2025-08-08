
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Mail, Phone, User, MessageSquare, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ModernContactForm = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (form.current) {
            emailjs
                .sendForm('service_cafe_uribe_test', 'template_zzfiriv', form.current, {
                    publicKey: 'GgMkx8GPi6Z3ZXerG',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setIsSubmitted(true);
                        setIsSubmitting(false);
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
        }
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
                        Cuéntanos sobre tu negocio y descubre cómo podemos ser tu mejor aliado en café premium.
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
                                        title: "Tradición Familiar",
                                        description: "Más de 30 años cultivando y procesando nuestro propio café de especialidad."
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
                                                    className="pl-10 border-coffee-brown/20 focus:border-coffee-orange"
                                                    required
                                                />
                                            </div>
                                            <div className="relative">
                                                <Building2 className="absolute left-3 top-3.5 w-4 h-4 text-coffee-brown/50" />
                                                <Input
                                                    type="text"
                                                    name="company_name"
                                                    placeholder="Nombre de la empresa"
                                                    className="pl-10 border-coffee-brown/20 focus:border-coffee-orange"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-coffee-brown/50" />
                                                <Input
                                                    type="email"
                                                    name="user_email"
                                                    placeholder="Correo electrónico"
                                                    className="pl-10 border-coffee-brown/20 focus:border-coffee-orange"
                                                    required
                                                />
                                            </div>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-3.5 w-4 h-4 text-coffee-brown/50" />
                                                <Input
                                                    type="tel"
                                                    name="user_phone"
                                                    placeholder="Teléfono"
                                                    className="pl-10 border-coffee-brown/20 focus:border-coffee-orange"
                                                />
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <Input
                                                type="text"
                                                name="business_type"
                                                placeholder="Tipo de negocio (ej: Restaurante, Hotel, Distribuidor)"
                                                className="border-coffee-brown/20 focus:border-coffee-orange"
                                                required
                                            />
                                        </div>

                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-coffee-brown/50" />
                                            <Textarea
                                                name="message"
                                                placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte..."
                                                rows={4}
                                                className="pl-10 border-coffee-brown/20 focus:border-coffee-orange resize-none"
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-coffee-orange hover:bg-coffee-orange/80 text-white group"
                                            disabled={isSubmitting}
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
