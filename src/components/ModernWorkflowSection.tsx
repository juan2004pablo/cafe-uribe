import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Lightbulb, MessageSquare, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModernWorkflowSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [currentStep, setCurrentStep] = useState(0);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const steps = [
        {
            icon: <UserPlus className="w-6 h-6" />,
            title: "Regístrate",
            description: "Crea una cuenta en nuestra plataforma B2B para acceder a beneficios exclusivos."
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Descubre",
            description: "Explora nuestro catálogo de productos premium y encuentra las variedades perfectas para tu negocio."
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Conecta",
            description: "Contacta a nuestro equipo de expertos para recibir asesoramiento personalizado y resolver tus dudas."
        },
        {
            icon: <ArrowRight className="w-6 h-6" />,
            title: "Impulsa",
            description: "Comienza a ofrecer café de especialidad a tus clientes y destaca en el mercado."
        }
    ];

    return (
        <section ref={ref} className="py-20 bg-gradient-to-br from-coffee-cream/10 to-coffee-cream/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-brown mb-6">
                        Tu Camino al Éxito
                    </h2>
                    <p className="text-lg text-coffee-brown/70 max-w-2xl mx-auto">
                        Un proceso simple y efectivo para convertirte en nuestro aliado comercial
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Horizontal line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-coffee-brown/20 transform -translate-y-1/2 hidden lg:block" />
                    
                    {/* Steps */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="relative"
                                onMouseEnter={() => setCurrentStep(index)}
                            >
                                {/* Step circle */}
                                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-coffee-orange rounded-full mx-auto mb-6">
                                    <div className="text-coffee-orange">{step.icon}</div>
                                </div>
                                
                                {/* Step content */}
                                <div className="text-center">
                                    <div className="inline-block px-3 py-1 bg-coffee-orange/10 rounded-full text-coffee-orange text-sm font-medium mb-3">
                                        Paso {index + 1}
                                    </div>
                                    <h3 className="font-playfair text-xl font-semibold text-coffee-brown mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-coffee-brown/70 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <Button 
                        size="lg" 
                        className="bg-coffee-orange hover:bg-coffee-orange/90 text-white px-8 py-4 text-lg"
                        onClick={() => scrollToSection('comencemos-alianza')}
                    >
                        Comenzar Alianza
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ModernWorkflowSection;
