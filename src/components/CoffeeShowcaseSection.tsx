
import { motion } from 'framer-motion';

const CoffeeShowcaseSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <img
                src="/images/foto_45.jpeg"
                alt="Coffee tasting professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Overlay Text */}
              <div className="absolute top-8 left-8 text-white">
                <h3 className="text-xl lg:text-2xl font-bold mb-2">DISCOVER OUR</h3>
                <h3 className="text-xl lg:text-2xl font-bold">NEW BLENDS</h3>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Premium Roasted Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-xs font-semibold">
                PREMIUM<br />ROASTED
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-2">FABRIKA</h3>
                <h3 className="text-xl font-bold mb-2">COFFEE</h3>
                <p className="text-sm text-gray-300 mb-4">TAKE, BREW AND DRINK</p>
                <div className="bg-primary/20 rounded-lg p-4">
                  <h4 className="font-bold text-lg">KENYA MOUNT</h4>
                  <p className="text-xs text-gray-400 mt-1">Premium quality coffee beans</p>
                </div>
              </div>
            </motion.div>

            {/* Coffee Knowledge Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-xs font-semibold text-gray-600">
                BARISTA'S<br />CHOICE
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800 mb-4">WE KNOW COFFEE</h3>
                <h3 className="text-lg font-bold text-gray-800 mb-4">INSIDE AND OUT</h3>
                
                {/* Coffee beans illustration */}
                <div className="flex justify-center mb-4">
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full shadow-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Capsules Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">CAPSULES FOR NESPRESSO®</h3>
                <h3 className="text-2xl lg:text-3xl font-bold">AND DOLCE GUSTO® MACHINES</h3>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/images/foto_38.jpeg"
                  alt="Coffee cup"
                  className="w-32 h-32 object-cover rounded-lg opacity-80"
                />
              </div>
            </div>
          </motion.div>

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white relative overflow-hidden"
          >
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">FABRIKA</h3>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">COFFEE</h3>
              <p className="text-sm text-gray-300 mb-2">TAKE, BREW AND DRINK</p>
              <p className="text-xs text-gray-400">ROASTING COFFEE SINCE 2007</p>
            </div>
          </motion.div>
        </div>

        {/* Large Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground/20 leading-tight">
            TAKE, BREW AND DRINK - TAKE, BREW AN
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default CoffeeShowcaseSection;
