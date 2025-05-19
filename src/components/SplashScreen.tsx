
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
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-900 text-white">
      <div className="text-center">
        <img
          src="/images/splash-screen.jpg"
          alt="J GROUPS Enterprises"
          className="w-64 h-auto mb-4 mx-auto animate-[fadeIn_1s_ease-in-out]"
        />
        <h1 className="text-2xl font-bold animate-[fadeIn_1s_ease-in-out_0.5s_forwards] opacity-0">Government Services Portal</h1>
        <p className="text-lg mt-2 animate-[fadeIn_1s_ease-in-out_0.7s_forwards] opacity-0">Powered by J GROUPS Be Professional</p>
    </div>
  );
};

export default SplashScreen;
