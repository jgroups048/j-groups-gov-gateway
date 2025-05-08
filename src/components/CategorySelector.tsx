
import React from 'react';
import { categories } from '@/data/services';
import { cn } from '@/lib/utils';
import { 
  IdCard, 
  FileText, 
  GraduationCap, 
  Wallet, 
  Briefcase, 
  Wrench 
} from 'lucide-react';

interface CategorySelectorProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  selectedCategory,
  onCategorySelect
}) => {
  // Map category IDs to icons
  const categoryIcons: Record<string, React.ReactNode> = {
    identity: <IdCard className="h-4 w-4" />,
    certificates: <FileText className="h-4 w-4" />,
    student: <GraduationCap className="h-4 w-4" />,
    financial: <Wallet className="h-4 w-4" />,
    jobs: <Briefcase className="h-4 w-4" />,
    tools: <Wrench className="h-4 w-4" />
  };

  return (
    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center",
              selectedCategory === category.id 
                ? "bg-blue-600 text-white shadow-sm" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
            onClick={() => onCategorySelect(category.id)}
          >
            <span className="mr-2">
              {categoryIcons[category.id]}
            </span>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
