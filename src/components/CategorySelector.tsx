
import React from 'react';
import { categories } from '@/data/services';
import { cn } from '@/lib/utils';

interface CategorySelectorProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  selectedCategory,
  onCategorySelect
}) => {
  return (
    <div className="bg-white p-2 rounded-md shadow-sm border border-gray-200 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
            selectedCategory === category.id 
              ? "bg-blue-600 text-white" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
          onClick={() => onCategorySelect(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
