
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  title: string;
  category: string;
}

interface LayeredCarouselViewProps {
  items: MediaItem[];
  onImageClick: (item: MediaItem, index: number) => void;
}

const LayeredCarouselView = ({ items, onImageClick }: LayeredCarouselViewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  
  // Group items into layers of 5
  const layers = [];
  for (let i = 0; i < items.length; i += 5) {
    layers.push(items.slice(i, i + 5));
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-coffee-brown/10 via-coffee-cream/20 to-coffee-orange/10"
        style={{
          x: useTransform(scrollXProgress, [0, 1], [0, -100])
        }}
      />

      {/* Main carousel container */}
      <div
        ref={containerRef}
        className="flex space-x-8 h-full overflow-x-auto overflow-y-hidden p-8 scrollbar-hide"
        onWheel={handleWheel}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {layers.map((layer, layerIndex) => (
          <motion.div
            key={layerIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: layerIndex * 0.1 }}
            className="flex-shrink-0 w-96 relative"
          >
            {/* Layer container with stacked effect */}
            <div className="relative h-full">
              {layer.map((item, itemIndex) => {
                const zIndex = 5 - itemIndex;
                const rotation = (itemIndex - 2) * 3;
                const scale = 1 - itemIndex * 0.05;
                const yOffset = itemIndex * 20;

                return (
                  <motion.div
                    key={item.id}
                    className="absolute inset-0 cursor-pointer group"
                    style={{
                      zIndex,
                      transform: `translateY(${yOffset}px) rotate(${rotation}deg) scale(${scale})`
                    }}
                    whileHover={{ 
                      scale: scale + 0.05,
                      rotate: rotation * 0.5,
                      zIndex: 10
                    }}
                    onClick={() => onImageClick(item, items.findIndex(i => i.id === item.id))}
                  >
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="font-semibold mb-1 truncate">{item.title}</h3>
                          <span className="text-xs opacity-80 capitalize">{item.category}</span>
                        </div>
                      </div>

                      {/* Video indicator */}
                      {item.type === 'video' && (
                        <div className="absolute top-4 right-4 w-8 h-8 bg-coffee-orange rounded-full flex items-center justify-center">
                          <Play className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation hints */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
        <div className="flex space-x-2">
          {layers.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-coffee-brown/30"
            />
          ))}
        </div>
        <span className="text-sm text-coffee-brown">Desliza para explorar</span>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute top-8 right-8 w-1 h-32 bg-coffee-brown/20 rounded-full overflow-hidden"
      >
        <motion.div
          className="w-full bg-coffee-orange rounded-full"
          style={{
            height: useTransform(scrollXProgress, [0, 1], ['0%', '100%'])
          }}
        />
      </motion.div>
    </div>
  );
};

export default LayeredCarouselView;
