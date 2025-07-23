
import { motion } from 'framer-motion';
import { ArrowRight, Coffee, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroCTAProps {
  onKnowOurCoffee: () => void;
  onRequestSample: () => void;
}

const HeroCTA = ({ onKnowOurCoffee, onRequestSample }: HeroCTAProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col items-center space-y-8 mt-8"
    >
      {/* Primary CTA con efecto liquid glass mejorado */}
      <div className="relative group">
        {/* Efecto de resplandor animado */}
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-coffee-orange via-amber-400 to-coffee-orange rounded-3xl blur-xl opacity-60"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Ondas de energía */}
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-coffee-orange/30 via-amber-300/30 to-coffee-orange/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Botón principal con efecto liquid glass */}
        <Button
          size="lg"
          onClick={onKnowOurCoffee}
          className="relative bg-gradient-to-r from-coffee-orange via-amber-500 to-coffee-orange text-white text-lg px-12 py-6 rounded-3xl font-bold shadow-2xl transform hover:scale-110 transition-all duration-500 border-2 border-white/20 backdrop-blur-sm overflow-hidden group"
        >
          {/* Efecto liquid glass interno */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-3xl" />
          
          {/* Efecto de brillo que se mueve */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
            animate={{
              x: ['-200%', '200%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
          
          {/* Contenido del botón */}
          <div className="relative flex items-center">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Coffee className="mr-3 w-6 h-6" />
            </motion.div>
            Descubre Nuestro Café
            <motion.div
              className="ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
          
          {/* Partículas flotantes */}
          <motion.div
            className="absolute top-2 right-4"
            animate={{ 
              y: [-2, -8, -2],
              opacity: [0.7, 1, 0.7] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-white/80" />
          </motion.div>
        </Button>
      </div>

      {/* Secondary CTA con enhanced styling */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* Trust indicators */}
        <div className="flex items-center space-x-6 text-white/80 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Registro Invima</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-coffee-orange rounded-full animate-pulse"></div>
            <span>Envío Seguro</span>
          </div>
        </div>
      </div>

      {/* Additional micro-interaction */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-white/70 text-sm text-center max-w-md"
      >
        Más de 50 años perfeccionando el arte del café colombiano
      </motion.p>
    </motion.div>
  );
};

export default HeroCTA;
