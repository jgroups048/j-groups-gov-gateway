
import React from 'react';

interface StateNotificationProps {
  selectedState: string;
}

const StateNotification: React.FC<StateNotificationProps> = ({ selectedState }) => {
  if (!selectedState) return null;
  
  return (
    <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
      <p className="text-sm text-blue-800 flex items-center">
        <span className="font-medium mr-2">📍 {selectedState}</span> 
        services are active. State-specific portals will use your state's official website.
      </p>
    </div>
  );
};

export default StateNotification;
