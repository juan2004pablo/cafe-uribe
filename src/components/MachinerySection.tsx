
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cog, Zap, Settings, ArrowRight, Droplets, Sun, Filter } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const MachinerySection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const machinery = [
        {
            name: "Despulpadora + Preclasificador Hidráulico",
            description: "Sistema integrado que selecciona el café antes del despulpado según su peso y calidad. La tecnología hidráulica por densidad garantiza que solo los granos de mejor calidad pasen al siguiente proceso, eliminando impurezas y frutos defectuosos desde el inicio.",
            process: "Selección por densidad",
            capacity: "1.500kg/hora",
            image: "/images/maquinaria/despulpadora_de_cafe.jpeg",
            icon: <Filter className="w-8 h-8" />,
            color: "from-blue-500/20 to-cyan-500/20",
        },
        {
            name: "Tanques de Fermentación + Lavador + Clasificador",
            description: "Sistema completo de procesamiento húmedo que incluye tanques de fermentación controlada, lavador hidráulico para remoción del mucílago, y clasificador posterior que garantiza una fermentación y limpieza óptima del grano para desarrollar perfiles de sabor únicos.",
            process: "Fermentación controlada",
            capacity: "1.200kg/batch",
            image: "/images/maquinaria/tanques_fermentacion_lavador_clasificador.jpeg",
            icon: <Droplets className="w-8 h-8" />,
            color: "from-emerald-500/20 to-teal-500/20",
        },
        {
            name: "Secadores Solares y Silo con Cáscara",
            description: "Sistema de secado sostenible que combina energía solar y biomasa de cáscara de café como combustible. Permite un secado controlado y uniforme que preserva las características organolépticas del grano mientras mantiene un proceso respetuoso con el medio ambiente.",
            process: "Secado sostenible",
            capacity: "800kg/día",
            image: "/images/maquinaria/secadores_solares_silo.png",
            icon: <Sun className="w-8 h-8" />,
            color: "from-yellow-500/20 to-orange-500/20",
        },
        {
            name: "Monitor de Pergamino",
            description: "Equipo especializado que realiza una selección más fina del café pergamino antes del proceso de trillado. Utiliza tecnología avanzada para detectar defectos invisibles al ojo humano y garantizar que solo los granos de calidad superior continúen al siguiente proceso.",
            process: "Selección fina",
            capacity: "500kg/hora",
            image: "/images/maquinaria/monitor_cafe_pergamino.jpeg",
            icon: <Settings className="w-8 h-8" />,
            color: "from-purple-500/20 to-indigo-500/20",
        },
        {
            name: "Trilladora con Tamices de Selección",
            description: "Trilladora industrial equipada con sistema de tamices de selección por mallas que garantiza la uniformidad del café verde. Las mallas de diferentes calibres clasifican los granos por tamaño, asegurando homogeneidad y calidad constante en cada lote procesado.",
            process: "Trillado y clasificación",
            capacity: "600kg/hora",
            image: "/images/maquinaria/trilladora_tamices_de_seleccion_cafe.jpeg",
            icon: <Cog className="w-8 h-8" />,
            color: "from-orange-500/20 to-red-500/20",
        },
        {
            name: "Tostadora Industrial Prisma",
            description: "Tostadora profesional Prisma de última generación que permite tueste con curvas de calidad precisas. Control total sobre temperatura, tiempo y flujo de aire para desarrollar perfiles de tostado únicos que resaltan las características específicas de cada variedad de café.",
            process: "Tueste profesional",
            capacity: "50kg/batch",
            image: "/images/maquinaria/tostadora_industrial_prisma.jpeg",
            icon: <Zap className="w-8 h-8" />,
            color: "from-red-500/20 to-pink-500/20",
        }
    ];

    return (
        <section ref={ref} className="py-20 bg-gradient-to-b from-coffee-brown/5 via-white to-coffee-cream/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-playfair text-4xl md:text-6xl font-bold text-coffee-brown mb-6">
                        Tecnología de Vanguardia
                    </h2>
                    <p className="text-lg text-coffee-brown/70 max-w-3xl mx-auto">
                        Conoce la maquinaria especializada que hace posible la calidad excepcional
                        de nuestro café en cada etapa del proceso
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                >
                    <Carousel 
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {machinery.map((machine, index) => (
                                <CarouselItem key={machine.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.8, delay: index * 0.1 }}
                                        className="group relative"
                                    >
                                        {/* Flip card container */}
                                        <div className="h-[500px] w-full [perspective:1000px]">
                                            <div className="relative w-full h-full transition-transform duration-1000 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                                
                                                {/* Front side - Image */}
                                                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-3xl overflow-hidden bg-white shadow-xl">
                                                    <div className="absolute inset-0 overflow-hidden">
                                                        <motion.img
                                                            src={machine.image}
                                                            alt={machine.name}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                        <div className={`absolute inset-0 bg-gradient-to-t from-coffee-brown/80 via-coffee-brown/40 to-transparent`} />
                                                        <div className={`absolute inset-0 bg-gradient-to-br ${machine.color} opacity-40`} />
                                                    </div>

                                                    {/* Floating icon */}
                                                    <motion.div
                                                        className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white border border-white/30"
                                                        animate={{ 
                                                            y: [0, -10, 0],
                                                            rotate: [0, 5, 0] 
                                                        }}
                                                        transition={{ 
                                                            duration: 3, 
                                                            repeat: Infinity,
                                                            delay: index * 0.5 
                                                        }}
                                                    >
                                                        {machine.icon}
                                                    </motion.div>

                                                    {/* Capacity badge */}
                                                    <div className="absolute top-6 left-6 bg-coffee-orange/90 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                                                        {machine.capacity}
                                                    </div>

                                                    {/* Title at bottom */}
                                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div className="w-2 h-2 bg-coffee-orange rounded-full animate-pulse" />
                                                            <span className="text-coffee-orange/90 text-sm font-medium uppercase tracking-wider">
                                                                {machine.process}
                                                            </span>
                                                        </div>
                                                        
                                                        <h3 className="font-playfair text-2xl font-bold mb-3">
                                                            {machine.name}
                                                        </h3>

                                                        <div className="flex items-center gap-2 text-coffee-orange cursor-pointer">
                                                            <span className="text-sm font-medium underline">Ver más detalles</span>
                                                            <ArrowRight className="w-4 h-4" />
                                                        </div>
                                                    </div>

                                                    {/* Animated border effect */}
                                                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-coffee-orange/50 transition-all duration-500" />
                                                </div>

                                                {/* Back side - Description */}
                                                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden bg-gradient-to-br from-white via-coffee-cream/10 to-coffee-cream/20 shadow-xl border border-coffee-cream/30">
                                                    <div className="relative w-full h-full p-8 flex flex-col">
                                                        {/* Header */}
                                                        <div className="text-center mb-6">
                                                            <div className="w-16 h-16 bg-coffee-orange/10 rounded-2xl flex items-center justify-center text-coffee-orange mx-auto mb-4">
                                                                {machine.icon}
                                                            </div>
                                                            <h3 className="font-playfair text-2xl font-bold text-coffee-brown mb-2">
                                                                {machine.name}
                                                            </h3>
                                                            <div className="flex items-center justify-center gap-2 text-coffee-orange text-sm font-medium">
                                                                <div className="w-1.5 h-1.5 bg-coffee-orange rounded-full"></div>
                                                                {machine.process}
                                                                <div className="w-1.5 h-1.5 bg-coffee-orange rounded-full"></div>
                                                            </div>
                                                        </div>

                                                        {/* Description */}
                                                        <div className="flex-1 mb-6">
                                                            <p className="text-coffee-brown/80 leading-relaxed text-center text-sm">
                                                                {machine.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating elements for extra dynamism */}
                                        <motion.div
                                            className="absolute -top-2 -right-2 w-6 h-6 bg-coffee-orange/30 rounded-full blur-sm"
                                            animate={{ 
                                                scale: [1, 1.5, 1],
                                                opacity: [0.3, 0.7, 0.3] 
                                            }}
                                            transition={{ 
                                                duration: 2, 
                                                repeat: Infinity,
                                                delay: index * 0.3 
                                            }}
                                        />
                                        <motion.div
                                            className="absolute -bottom-4 -left-4 w-4 h-4 bg-coffee-brown/20 rounded-full blur-sm"
                                            animate={{ 
                                                scale: [1, 1.3, 1],
                                                opacity: [0.2, 0.5, 0.2] 
                                            }}
                                            transition={{ 
                                                duration: 2.5, 
                                                repeat: Infinity,
                                                delay: index * 0.4 
                                            }}
                                        />
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-coffee-brown/20 text-coffee-brown hover:text-coffee-orange transition-colors" />
                        <CarouselNext className="right-4 bg-white/80 hover:bg-white border-coffee-brown/20 text-coffee-brown hover:text-coffee-orange transition-colors" />
                    </Carousel>
                </motion.div>

                {/* Bottom stats section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {[
                        { number: "1.500kg", label: "Capacidad por hora", desc: "de café cereza procesado" },
                        { number: "99.9%", label: "Precisión", desc: "en cada proceso" },
                        { number: "24/7", label: "Monitoreo", desc: "de calidad continuo" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                            className="text-center group cursor-pointer"
                        >
                            <div className="relative inline-block">
                                <motion.div
                                    className="text-4xl md:text-5xl font-bold text-coffee-orange mb-2 group-hover:text-coffee-brown transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="absolute -inset-4 bg-coffee-orange/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                            </div>
                            <h4 className="font-bold text-coffee-brown mb-1">{stat.label}</h4>
                            <p className="text-coffee-brown/60 text-sm">{stat.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MachinerySection;
