import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CoffeeShowcaseSection = () => {
  const navigate = useNavigate();

  const handleQuoteRedirect = () => {
    navigate('/contacto');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl font-bold text-coffee-brown mb-4">
              Nuestro Producto Principal
            </h2>
            <p className="text-lg text-coffee-brown/70 max-w-2xl mx-auto">
              Café de alta calidad cultivado en las montañas de Norte de Santander
            </p>
          </motion.div>

          <div className="pb-4 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:auto-rows-[minmax(150px,_1fr)] sm:aspect-[4/3]">
            {/* Tarjeta grande - Fila 1, dos columnas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-2 sm:col-span-2 bg-gradient-to-br from-gray-100 to-gray-300 text-black relative overflow-hidden flex justify-between items-center py-6 pl-6"
            >
              <div>
                <div className="text-lg font-semibold uppercase mb-2">
                  Transformación<br /> del Café
                </div>
                <span className='text-sm text-gray-400'>Realizamos todo el proceso de post cosecha, asegurando calidad en cada paso.</span>
              </div>
              <div className="shrink-0">
                <img
                  src="/images/foto_71.png"
                  alt="Transformación del café"
                  className="w-24 h-24 object-cover"
                />
              </div>
            </motion.div>

            {/* Tarjeta 3 - Fila 2, una columna */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-1 sm:col-span-1 bg-white/80 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-md font-semibold text-black uppercase">
                Legado de <br />aroma y sabor
              </div>
              <img
                src="/images/foto_72.png"
                alt="Café de calidad"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Tarjeta 2 - Fila 2, segunda columna */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-1 sm:col-span-1 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden"
            >
              <video
                src="/images/video_3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-84 object-cover"
              />
            </motion.div>

            {/* Aquí puedes agregar una cuarta tarjeta si la tienes (fila 3) */}
          </div>
        </div>

        {/* Banner inferior */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-h-36 bg-[#000003] text-white relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center text-gray-200">
              <h3 className="text-xl lg:text-2xl mb-2">Avalada por el registro Invima®</h3>
              <h3 className="text-xl lg:text-2xl">y logo de denominación de origen®</h3>
            </div>

            <div className="hidden lg:block mr-20">
              <img
                src="/images/foto_74.jpeg"
                alt="Certificaciones"
                className="h-20 w-auto"
              />
            </div>

            <div className="text-center p-4 mr-10 mb-5">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">Café Uribe</h3>
              <p className="text-sm text-gray-300">Saborea el origen</p>
            </div>
          </div>
        </motion.div>

        {/* Botón de cotización */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button
            size="lg"
            className="bg-coffee-orange hover:bg-coffee-orange/90 text-white px-8 py-3"
            onClick={handleQuoteRedirect}
          >
            Solicitar Cotización
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoffeeShowcaseSection;
