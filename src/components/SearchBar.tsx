
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for government services..."
          className="w-full py-3 pl-12 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
