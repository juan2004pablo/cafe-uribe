
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DiscountSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Navigation arrows */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 hover:bg-white border-0 shadow-lg"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 hover:bg-white border-0 shadow-lg"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Main content container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
            {/* Left side - Image with brick wall background */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="relative h-[500px] rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundColor: '#c2744d'
                }}
              >
                {/* Floating shelves */}
                <div className="absolute top-16 left-8 right-8">
                  <div className="bg-amber-800 h-2 rounded-full shadow-lg mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="w-12 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-64 left-8 right-8">
                  <div className="bg-amber-800 h-2 rounded-full shadow-lg mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg shadow-lg"></div>
                    <div className="w-16 h-20 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
                      <div className="w-8 h-2 bg-coffee-brown rounded-full mb-1"></div>
                      <div className="w-6 h-1 bg-coffee-brown/50 rounded-full"></div>
                    </div>
                    <div className="w-16 h-20 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
                      <div className="w-8 h-2 bg-coffee-brown rounded-full mb-1"></div>
                      <div className="w-6 h-1 bg-coffee-brown/50 rounded-full"></div>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg border-2 border-coffee-brown"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              {/* Title */}
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-12">
                DESCUENTOS Y PROMOCIONES
              </h2>

              {/* Main offer */}
              <div className="mb-8">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                  Todos Los Domingos De 12:00 A 14:00 - 30% Descuento.
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-4 text-white/90">
                <p className="text-lg leading-relaxed">
                  Tenemos una oferta especial: todas las bebidas de café 
                  en nuestra tienda física tienen un 30% de descuento.
                </p>
                <p className="text-lg leading-relaxed">
                  Esta es una gran oportunidad para disfrutar de 
                  algo nuevo o degustar tus sabores favoritos a un 
                  precio más accesible.
                </p>
              </div>

              {/* Call to action */}
              <div className="mt-8">
                <Button 
                  className="bg-coffee-orange hover:bg-coffee-orange/90 text-white px-8 py-3 text-lg font-semibold"
                >
                  Visitar Tienda
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
