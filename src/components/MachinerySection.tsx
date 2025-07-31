
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cog, Zap, Settings, ArrowRight } from 'lucide-react';

const MachinerySection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const machinery = [
        {
            name: "Tostadora Industrial",
            description: "Tecnología de precisión para el tostado perfecto",
            process: "Tostado controlado",
            capacity: "50kg/batch",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
            icon: <Cog className="w-8 h-8" />,
            color: "from-orange-500/20 to-red-500/20"
        },
        {
            name: "Molino de Alta Precisión",
            description: "Molienda uniforme que preserva los aceites naturales",
            process: "Molienda especializada",
            capacity: "100kg/hr",
            image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop",
            icon: <Settings className="w-8 h-8" />,
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            name: "Sistema de Empaque",
            description: "Sellado al vacío para máxima frescura",
            process: "Empaque hermético",
            capacity: "200 unidades/hr",
            image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
            icon: <Zap className="w-8 h-8" />,
            color: "from-green-500/20 to-emerald-500/20"
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {machinery.map((machine, index) => (
                        <motion.div
                            key={machine.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative"
                        >
                            {/* Flip card container */}
                            <div className="h-[500px] w-full [perspective:1000px]">
                                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    
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
                                                <span className="text-sm font-medium">Hover para más detalles</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* Animated border effect */}
                                        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-coffee-orange/50 transition-all duration-500" />
                                    </div>

                                    {/* Back side - Description */}
                                    <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden bg-gradient-to-br from-coffee-brown via-coffee-brown/95 to-coffee-brown/90 shadow-xl">
                                        <div className="relative w-full h-full p-8 flex flex-col justify-center text-white">
                                            {/* Background pattern */}
                                            <div className="absolute inset-0 opacity-10">
                                                <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                                            </div>

                                            {/* Icon header */}
                                            <div className="relative z-10 text-center mb-8">
                                                <div className="w-20 h-20 bg-coffee-orange/20 backdrop-blur-sm rounded-3xl flex items-center justify-center text-coffee-orange mx-auto mb-4 border border-coffee-orange/30">
                                                    {machine.icon}
                                                </div>
                                                <h3 className="font-playfair text-3xl font-bold mb-2">
                                                    {machine.name}
                                                </h3>
                                                <div className="w-16 h-0.5 bg-coffee-orange mx-auto"></div>
                                            </div>

                                            {/* Process info */}
                                            <div className="relative z-10 mb-6">
                                                <div className="bg-coffee-orange/20 rounded-xl p-4 border border-coffee-orange/30">
                                                    <h4 className="font-bold text-coffee-cream mb-2 flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-coffee-orange rounded-full"></div>
                                                        Proceso Especializado
                                                    </h4>
                                                    <p className="text-coffee-cream/90 font-medium">
                                                        {machine.process}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className="relative z-10 mb-6">
                                                <p className="text-coffee-cream/90 text-lg leading-relaxed text-center">
                                                    {machine.description}
                                                </p>
                                            </div>

                                            {/* Capacity info */}
                                            <div className="relative z-10 text-center">
                                                <div className="inline-flex items-center gap-3 bg-coffee-cream/10 rounded-full px-6 py-3 border border-coffee-cream/20">
                                                    <span className="text-coffee-cream/70 text-sm">Capacidad:</span>
                                                    <span className="text-coffee-orange font-bold text-lg">{machine.capacity}</span>
                                                </div>
                                            </div>

                                            {/* Decorative elements */}
                                            <div className="absolute top-4 right-4 w-16 h-16 border border-coffee-orange/20 rounded-full"></div>
                                            <div className="absolute bottom-4 left-4 w-12 h-12 border border-coffee-cream/20 rounded-full"></div>
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
                    ))}
                </div>

                {/* Bottom stats section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {[
                        { number: "15+", label: "Años de experiencia", desc: "en tecnología cafetera" },
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
