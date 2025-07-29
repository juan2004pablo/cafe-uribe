
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
                            {/* Main container with 3D hover effect */}
                            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-white shadow-xl group-hover:shadow-2xl transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-rotate-1">
                                
                                {/* Background image with parallax effect */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <motion.img
                                        src={machine.image}
                                        alt={machine.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        whileHover={{ scale: 1.05 }}
                                    />
                                    {/* Dynamic gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-coffee-brown/80 via-coffee-brown/40 to-transparent group-hover:from-coffee-brown/90 transition-all duration-500`} />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${machine.color} group-hover:opacity-60 transition-opacity duration-500`} />
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

                                {/* Animated specs badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                    className="absolute top-6 left-6 bg-coffee-orange/90 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium"
                                >
                                    {machine.capacity}
                                </motion.div>

                                {/* Content area with slide-up animation */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <motion.div
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
                                        className="space-y-4"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-2 h-2 bg-coffee-orange rounded-full animate-pulse" />
                                            <span className="text-coffee-orange/90 text-sm font-medium uppercase tracking-wider">
                                                {machine.process}
                                            </span>
                                        </div>
                                        
                                        <h3 className="font-playfair text-2xl font-bold mb-3 group-hover:text-coffee-cream transition-colors">
                                            {machine.name}
                                        </h3>
                                        
                                        <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors">
                                            {machine.description}
                                        </p>

                                        {/* Interactive CTA that appears on hover */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 text-coffee-orange group-hover:text-coffee-cream cursor-pointer mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        >
                                            <span className="text-sm font-medium">Conocer más</span>
                                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Animated border effect */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-coffee-orange/50 transition-all duration-500" />
                                
                                {/* Glowing effect on hover */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 rounded-3xl shadow-[0_0_30px_rgba(255,138,76,0.3)]" />
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
