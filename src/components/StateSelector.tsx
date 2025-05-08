
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { states } from '@/data/states';

interface StateSelectorProps {
  selectedState: string;
  onStateSelect: (state: string) => void;
}

const StateSelector: React.FC<StateSelectorProps> = ({ 
  selectedState,
  onStateSelect
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateSelect = (state: string) => {
    onStateSelect(state);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span>{selectedState || 'Select State'}</span>
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-64 origin-top-right bg-white rounded-md shadow-lg border border-gray-200 focus:outline-none overflow-hidden">
          <div className="max-h-60 overflow-y-auto py-1">
            {states.map((state) => (
              <button
                key={state.name}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  selectedState === state.name
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => handleStateSelect(state.name)}
              >
                {state.name}
                {state.isUT && <span className="ml-2 text-xs text-gray-500">(UT)</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StateSelector;
