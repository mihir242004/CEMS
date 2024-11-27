import React from 'react';
import { Filter } from 'lucide-react';

interface EventFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function EventFilters({ selectedCategory, onCategoryChange }: EventFiltersProps) {
  const categories = ['all', 'workshop', 'cultural', 'sports', 'seminar'];

  return (
    <div className="mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-medium text-gray-900">Filter Events</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}