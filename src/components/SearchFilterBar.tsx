
import React from 'react';
import SearchBar from './SearchBar';
import StateSelector from './StateSelector';

interface SearchFilterBarProps {
  onSearch: (query: string) => void;
  selectedState: string;
  onStateSelect: (state: string) => void;
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({ 
  onSearch, 
  selectedState, 
  onStateSelect 
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
      <div className="w-full md:w-2/3">
        <SearchBar onSearch={onSearch} />
      </div>
      
      <div className="w-full md:w-auto">
        <StateSelector 
          selectedState={selectedState}
          onStateSelect={onStateSelect}
        />
      </div>
    </div>
  );
};

export default SearchFilterBar;
