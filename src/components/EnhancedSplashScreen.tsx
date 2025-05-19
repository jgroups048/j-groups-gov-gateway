import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const EnhancedSplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Set a 5-second timer for the splash screen
    const timer = setTimeout(() => {
      // Start fade out animation
      setFadeOut(true);
      
      // After animation completes, hide the splash screen
      const hideTimer = setTimeout(() => {
        setVisible(false);
        onFinish();
      }, 500); // 500ms for fade out animation
      
      return () => clearTimeout(hideTimer);
    }, 5000); // 5 seconds display time

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center text-white transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{
        backgroundImage: 'url(/images/splash-screen.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* If the background image doesn't load properly, show a solid color background */}
      <div className="absolute inset-0 bg-blue-900 opacity-90 z-[-1]"></div>
      
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

export default EnhancedSplashScreen;