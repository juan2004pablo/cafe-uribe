
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  title: string;
  category: string;
}

interface GalleryGridProps {
  items: MediaItem[];
  onImageClick: (item: MediaItem, index: number) => void;
  viewMode: 'grid' | 'masonry';
}

const GalleryGrid = ({ items, onImageClick, viewMode }: GalleryGridProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  // Grid estándar para modo cuadrícula
  if (viewMode === 'grid') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-muted"
            onClick={() => onImageClick(item, index)}
          >
            <img
              src={item.src}
              alt={item.title}
              className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
                loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(item.id)}
              loading="lazy"
            />
            
            {/* Loading skeleton */}
            {!loadedImages.has(item.id) && (
              <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-2 left-2 right-2">
                <h3 className="text-white text-sm font-medium truncate">
                  {item.title}
                </h3>
                <span className="text-coffee-cream text-xs capitalize">
                  {item.category}
                </span>
              </div>
            </div>
            
            {/* Video indicator */}
            {item.type === 'video' && (
              <div className="absolute top-2 right-2 w-6 h-6 bg-coffee-orange rounded-full flex items-center justify-center">
                <Play className="w-3 h-3 text-white" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  // Vista masonry para modo mosaico
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 md:gap-4 space-y-3 md:space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="group relative cursor-pointer overflow-hidden rounded-lg bg-muted break-inside-avoid mb-3 md:mb-4"
          onClick={() => onImageClick(item, index)}
        >
          <img
            src={item.src}
            alt={item.title}
            className={`w-full object-cover transition-all duration-300 group-hover:scale-105 ${
              loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => handleImageLoad(item.id)}
            loading="lazy"
            style={{ height: 'auto' }}
          />
          
          {/* Loading skeleton */}
          {!loadedImages.has(item.id) && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-2 left-2 right-2">
              <h3 className="text-white text-sm font-medium truncate">
                {item.title}
              </h3>
              <span className="text-coffee-cream text-xs capitalize">
                {item.category}
              </span>
            </div>
          </div>
          
          {/* Video indicator */}
          {item.type === 'video' && (
            <div className="absolute top-2 right-2 w-6 h-6 bg-coffee-orange rounded-full flex items-center justify-center">
              <Play className="w-3 h-3 text-white" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
