import { motion } from 'framer-motion';

const CoffeeShowcaseSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4">
          {/* Left Column - Large Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <video
                src="/images/video_4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[432px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Tarjetas grid responsivo */}
          <div className="pb-4 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:auto-rows-[minmax(150px,_1fr)] sm:aspect-[4/3]">
            {/* Tarjeta grande - Fila 1, dos columnas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-2 sm:col-span-2 bg-gradient-to-br from-gray-100 to-gray-300 text-black relative overflow-hidden flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 sm:pl-6 gap-4 sm:gap-0"
            >
              <div className="text-center sm:text-left">
                <div className="text-lg font-semibold uppercase mb-2">
                  Transformación<br /> del Café
                </div>
                <span className="text-sm text-gray-400">
                  Realizamos todo el proceso de post cosecha, asegurando calidad en cada paso.
                </span>
              </div>
              <div className="shrink-0">
                <img
                  src="/images/cafe_uribe_empaque_anterior.png"
                  alt="Taza de café"
                  className="w-60 h-60 sm:w-72 sm:h-72 object-cover rounded-lg opacity-80"
                />
              </div>
            </motion.div>

            {/* Tarjeta 3 - Fila 2, una columna */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-1 sm:col-span-1 bg-white/80 max-h-56 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-md font-semibold text-black uppercase">
                Legado de <br />aroma y sabor
              </div>
              <img
                src="/images/proceso_preparacion_cafe.png"
                alt="Café de origen"
                className="min-w-36 h-full object-cover rounded-lg opacity-80"
              />
            </motion.div>

            {/* Tarjeta 2 - Fila 2, segunda columna */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-1 sm:col-span-1 max-h-56 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden"
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

        {/* Sección inferior unificada */}
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
                src="/images/cafe_de_maquina.jpeg"
                alt="Taza de café"
                className="w-32 h-42 object-cover"
              />
            </div>

            <div className="text-center p-4 mr-10 mb-5">
              <p className="text-sm text-gray-300">Saborea el origen</p>
              <p className="text-xs text-gray-400">Café de especialidad colombiano</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Frase final destacada */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <h2 className="text-4xl lg:text-6xl xl:text-7xl text-foreground/40 leading-tight">
          Prepara, disfruta y comparte Café Uribe
        </h2>
      </motion.div>
    </section>
  );
};

export default CoffeeShowcaseSection;
