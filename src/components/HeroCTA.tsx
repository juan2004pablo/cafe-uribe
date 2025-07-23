
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
      {/* Primary CTA */}
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-coffee-orange/20 to-coffee-orange/10 rounded-2xl blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <Button
          size="lg"
          onClick={onKnowOurCoffee}
          className="relative bg-coffee-orange hover:bg-coffee-orange/90 text-white text-lg px-10 py-4 rounded-2xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-coffee-orange/20"
        >
          <Coffee className="mr-3 w-6 h-6" />
          Descubre Nuestro Café
          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Secondary CTA with enhanced styling */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Button
          size="lg"
          variant="outline"
          onClick={onRequestSample}
          className="border-2 border-white/80 text-white hover:bg-white/10 hover:border-white text-lg px-8 py-3 rounded-xl font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105"
        >
          <Sparkles className="mr-2 w-5 h-5" />
          Solicita una Muestra Gratuita
        </Button>
        
        {/* Trust indicators */}
        <div className="flex items-center space-x-6 text-white/80 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>100% Colombiano</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-coffee-orange rounded-full animate-pulse"></div>
            <span>Envío Gratis</span>
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
