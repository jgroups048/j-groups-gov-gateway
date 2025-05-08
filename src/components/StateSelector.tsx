
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { states } from '@/data/states';
import { cn } from '@/lib/utils';

interface StateSelectorProps {
  selectedState: string;
  onStateSelect: (state: string) => void;
}

const StateSelector: React.FC<StateSelectorProps> = ({ 
  selectedState,
  onStateSelect
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const filteredStates = searchQuery.trim() === '' 
    ? states 
    : states.filter(state => 
        state.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
  useEffect(() => {
    // Close dropdown when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleStateSelect = (state: string) => {
    onStateSelect(state);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <MapPin className="mr-2 h-4 w-4 text-blue-600" />
          <span className={cn(
            "truncate",
            !selectedState && "text-gray-500"
          )}>
            {selectedState || 'Select Your State'}
          </span>
        </div>
        <ChevronDown className={cn(
          "h-4 w-4 transition-transform", 
          isOpen ? "transform rotate-180" : ""
        )} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-1 w-64 origin-top-right bg-white rounded-md shadow-lg border border-gray-200 focus:outline-none">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search states..."
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="max-h-60 overflow-y-auto py-1">
            {filteredStates.length > 0 ? (
              filteredStates.map((state) => (
                <button
                  key={state.name}
                  className={cn(
                    "flex items-center w-full text-left px-4 py-2 text-sm",
                    selectedState === state.name
                      ? "bg-blue-100 text-blue-900"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                  onClick={() => handleStateSelect(state.name)}
                >
                  <span className="flex-1">{state.name}</span>
                  {state.isUT && (
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      UT
                    </span>
                  )}
                </button>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">No states found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StateSelector;
