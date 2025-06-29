
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

interface FiltersProps {
  onFilterChange: (filters: any) => void;
  filters: {
    category: string;
    priceRange: number[];
    rating: number;
  };
}

const ProductFilters: React.FC<FiltersProps> = ({ onFilterChange, filters }) => {
  const categories = ['all', 'dresses', 'tops', 'bottoms', 'accessories'];

  const handleCategoryChange = (category: string) => {
    onFilterChange({ ...filters, category });
  };

  const handlePriceChange = (value: number[]) => {
    onFilterChange({ ...filters, priceRange: value });
  };

  const handleRatingChange = (rating: number) => {
    onFilterChange({ ...filters, rating });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-fit">
      <h3 className="text-xl font-bold mb-6">Filters</h3>
      
      {/* Category Filter */}
      <div className="mb-6">
        <Label className="text-sm font-medium mb-3 block">Category</Label>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                filters.category === category 
                  ? 'bg-pink-100 text-pink-800 border border-pink-300' 
                  : 'hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <Label className="text-sm font-medium mb-3 block">
          Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
        </Label>
        <Slider
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          max={500}
          min={0}
          step={10}
          className="w-full"
        />
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <Label className="text-sm font-medium mb-3 block">Minimum Rating</Label>
        <div className="space-y-2">
          {[0, 1, 2, 3, 4].map(rating => (
            <button
              key={rating}
              onClick={() => handleRatingChange(rating)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center ${
                filters.rating === rating 
                  ? 'bg-pink-100 text-pink-800 border border-pink-300' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{rating === 0 ? 'All' : `${rating}+`}</span>
              {rating > 0 && (
                <div className="flex">
                  {[...Array(rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <Button 
        onClick={() => onFilterChange({ category: 'all', priceRange: [0, 500], rating: 0 })}
        variant="outline" 
        className="w-full"
      >
        Clear All Filters
      </Button>
    </div>
  );
};

export default ProductFilters;
