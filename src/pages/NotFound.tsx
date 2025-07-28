
import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-coffee-cream/20 to-white flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-md mx-auto"
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="text-8xl font-bold text-coffee-orange mb-4">404</div>
                    <div className="w-20 h-1 bg-coffee-brown mx-auto mb-6"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-4 mb-8"
                >
                    <h1 className="font-playfair text-3xl font-bold text-coffee-brown">
                        Página no encontrada
                    </h1>
                    <p className="text-coffee-brown/70 text-lg">
                        Lo sentimos, la página que buscas no existe o ha sido movida.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link to="/">
                        <Button
                            size="lg"
                            className="bg-coffee-orange hover:bg-coffee-orange/90 w-full sm:w-auto"
                        >
                            <Home className="w-4 h-4 mr-2" />
                            Ir al inicio
                        </Button>
                    </Link>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-white w-full sm:w-auto"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver atrás
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 text-coffee-brown/50 text-sm"
                >
                    <p>¿Necesitas ayuda? <Link to="/contacto" className="text-coffee-orange hover:underline">Contáctanos</Link></p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFound;
