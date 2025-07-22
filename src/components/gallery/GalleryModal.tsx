
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Pause, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  title: string;
  category: string;
}

interface GalleryModalProps {
  isOpen: boolean;
  items: MediaItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const GalleryModal = ({ isOpen, items, currentIndex, onClose, onNavigate }: GalleryModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (currentIndex > 0) onNavigate(currentIndex - 1);
          break;
        case 'ArrowRight':
          if (currentIndex < items.length - 1) onNavigate(currentIndex + 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  useEffect(() => {
    setImageLoaded(false);
    if (currentItem?.type === 'video') {
      setIsPlaying(true);
    }
  }, [currentIndex, currentItem]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentItem.src;
    link.download = currentItem.title;
    link.click();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentItem.title,
          text: `Mira esta imagen de ${currentItem.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h3 className="font-playfair text-lg md:text-xl font-semibold">
                {currentItem.title}
              </h3>
              <p className="text-coffee-cream text-sm capitalize">
                {currentItem.category} • {currentIndex + 1} de {items.length}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload();
                }}
                className="text-white hover:bg-white/20"
              >
                <Download className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare();
                }}
                className="text-white hover:bg-white/20"
              >
                <Share2 className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        {currentIndex > 0 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 w-12 h-12"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(currentIndex - 1);
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        )}

        {currentIndex < items.length - 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 w-12 h-12"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(currentIndex + 1);
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        )}

        {/* Media content */}
        <div 
          className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {currentItem.type === 'image' ? (
            <>
              {!imageLoaded && (
                <div className="w-96 h-64 bg-muted animate-pulse rounded-lg" />
              )}
              <motion.img
                key={currentItem.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }}
                src={currentItem.src}
                alt={currentItem.title}
                className="max-w-full max-h-full object-contain rounded-lg"
                onLoad={() => setImageLoaded(true)}
              />
            </>
          ) : (
            <div className="relative">
              <video
                ref={videoRef}
                src={currentItem.src}
                className="max-w-full max-h-full object-contain rounded-lg"
                controls={false}
                autoPlay
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={togglePlay}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-16 h-16"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8" />
                )}
              </Button>
            </div>
          )}
        </div>

        {/* Thumbnail strip */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
          <div className="flex gap-2 justify-center overflow-x-auto scrollbar-hide">
            {items.slice(Math.max(0, currentIndex - 3), currentIndex + 4).map((item, idx) => {
              const actualIndex = Math.max(0, currentIndex - 3) + idx;
              return (
                <button
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate(actualIndex);
                  }}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                    actualIndex === currentIndex 
                      ? 'ring-2 ring-coffee-orange scale-110' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.type === 'video' && (
                    <div className="absolute top-1 right-1 w-3 h-3 bg-coffee-orange rounded-full flex items-center justify-center">
                      <Play className="w-2 h-2 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;
