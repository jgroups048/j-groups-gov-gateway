
import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="animate-[float_2s_ease-in-out_infinite] mb-8">
        <h1 className="text-4xl font-bold mb-2 animate-[glow_2s_ease-in-out_infinite]">
          J GROUPS Enterprises
        </h1>
      </div>
      <p className="text-lg mt-4">Government Services Portal</p>
      <p className="text-sm mt-8">Powered by J GROUPS Be Professional</p>
    </div>
  );
};

export default SplashScreen;
