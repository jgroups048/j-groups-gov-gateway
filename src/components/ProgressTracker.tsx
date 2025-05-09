
import React from 'react';
import { CheckCircle2, Circle, ArrowRight, Loader2 } from 'lucide-react';

interface Step {
  id: string;
  label: string;
  status: 'completed' | 'current' | 'pending';
}

interface ProgressTrackerProps {
  steps: Step[];
  currentStepId: string;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ steps, currentStepId }) => {
  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${step.status === 'completed' ? 'bg-green-100 text-green-600' : 
                  step.status === 'current' ? 'bg-blue-100 text-blue-600 animate-pulse' : 
                  'bg-gray-100 text-gray-400'}
              `}>
                {step.status === 'completed' ? (
                  <CheckCircle2 className="h-6 w-6" />
                ) : step.status === 'current' ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Circle className="h-5 w-5" />
                )}
              </div>
              <span className={`
                text-xs mt-2 text-center max-w-24
                ${step.status === 'completed' ? 'font-medium text-green-700' : 
                  step.status === 'current' ? 'font-medium text-blue-700' : 
                  'text-gray-500'}
              `}>
                {step.label}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div className={`
                flex-grow h-0.5 mx-1
                ${index < steps.findIndex(s => s.id === currentStepId) ? 'bg-green-500' : 'bg-gray-200'}
              `} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
