
import { motion } from 'framer-motion';
import { ArrowRight, Coffee } from 'lucide-react';
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
      {/* Primary CTA con efecto más sutil */}
      <div className="relative group">
        {/* Efecto de resplandor suave */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-coffee-orange/60 to-amber-400/60 rounded-2xl blur-lg opacity-40 group-hover:opacity-70"
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Botón principal con efecto liquid glass más suave */}
        <Button
          size="lg"
          onClick={onKnowOurCoffee}
          className="relative bg-gradient-to-r from-coffee-orange to-amber-500 text-white text-lg px-10 py-5 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm overflow-hidden group"
        >
          {/* Efecto liquid glass interno más sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent rounded-2xl" />
          
          {/* Efecto de brillo que se mueve ocasionalmente */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0"
            animate={{
              x: ['-200%', '200%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 4
            }}
          />
          
          {/* Contenido del botón */}
          <div className="relative flex items-center">
            <Coffee className="mr-3 w-5 h-5" />
            Descubre Nuestro Café
            <ArrowRight className="ml-3 w-5 h-5" />
          </div>
        </Button>
      </div>

      {/* Secondary CTA con enhanced styling
      <div className="flex flex-col sm:flex-row gap-4 items-center">
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
      </div> */}

      {/* Additional micro-interaction */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-white/70 text-sm text-center max-w-md"
      >
        Cultivamos, procesamos, trillamos, tostamos y empacamos nuestro propio café
      </motion.p>
    </motion.div>
  );
};

export default HeroCTA;
