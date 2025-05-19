
import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      
      const hideTimer = setTimeout(() => {
        setVisible(false);
        onFinish();
      }, 500);

      return () => clearTimeout(hideTimer);
    }, 4500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-800 text-white transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="text-center">
        <img
          src="/images/splash-screen.jpg"
          alt="J GROUPS Enterprises"
          className="w-64 h-auto mb-4 mx-auto animate-[fadeIn_1s_ease-in-out]"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.style.display = 'none';
          }}
        />
        <h1 className="text-3xl font-bold animate-[fadeIn_1s_ease-in-out_0.5s_forwards] opacity-0">Government Services Portal</h1>
        <p className="text-lg mt-2 animate-[fadeIn_1s_ease-in-out_0.7s_forwards] opacity-0">Powered by J GROUPS Be Professional</p>
      </div>
    </div>
  );
};

export default SplashScreen;
