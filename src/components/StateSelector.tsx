
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { states } from '@/data/states';
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet';

interface StateSelectorProps {
  selectedState: string;
  onStateSelect: (state: string) => void;
}

const StateSelector: React.FC<StateSelectorProps> = ({ selectedState, onStateSelect }) => {
  // Group states and union territories
  const regularStates = states.filter(state => !state.isUT);
  const unionTerritories = states.filter(state => state.isUT);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 px-3 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
          <span className="text-gray-800 font-medium">{selectedState || "Select State/UT"}</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Select Your State/UT</h3>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">States</h4>
          <div className="space-y-1">
            {regularStates.map((state) => (
              <button
                key={state.name}
                onClick={() => {
                  onStateSelect(state.name);
                }}
                className={`w-full text-left px-3 py-2 rounded-md hover:bg-blue-50 transition-colors ${
                  selectedState === state.name ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-700"
                }`}
              >
                {state.name}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Union Territories</h4>
          <div className="space-y-1">
            {unionTerritories.map((ut) => (
              <button
                key={ut.name}
                onClick={() => {
                  onStateSelect(ut.name);
                }}
                className={`w-full text-left px-3 py-2 rounded-md hover:bg-blue-50 transition-colors ${
                  selectedState === ut.name ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-700"
                }`}
              >
                {ut.name}
              </button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default StateSelector;
