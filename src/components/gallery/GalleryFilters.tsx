
import { Button } from '@/components/ui/button';

interface GalleryFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  totalItems: number;
  filteredCount: number;
}

const GalleryFilters = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  totalItems, 
  filteredCount 
}: GalleryFiltersProps) => {
  return (
    <div className="space-y-6">
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className={`capitalize transition-all duration-200 ${
              activeCategory === category
                ? 'bg-coffee-orange hover:bg-coffee-orange/90 text-white shadow-lg scale-105'
                : 'border-coffee-orange text-coffee-orange hover:bg-coffee-orange hover:text-white hover:scale-105'
            }`}
            size="sm"
          >
            {category}
            {category !== 'todos' && (
              <span className="ml-2 text-xs opacity-75">
                ({category === activeCategory ? filteredCount : 
                  // Count items for this category
                  totalItems})
              </span>
            )}
          </Button>
        ))}
      </div>

      {/* Results count */}
      <div className="text-center">
        <p className="text-muted-foreground text-sm">
          Mostrando {filteredCount} de {totalItems} elementos
          {activeCategory !== 'todos' && (
            <span className="ml-1 text-coffee-orange font-medium">
              en "{activeCategory}"
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default GalleryFilters;
