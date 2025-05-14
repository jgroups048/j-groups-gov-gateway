
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SplashScreen from "./components/SplashScreen";
import Dashboard from "./pages/Dashboard";
import ServicePage from "./pages/ServicePage";
import Admin from "./pages/Admin";
import TravelAssistant from "./pages/TravelAssistant";
import { AuthProvider } from "@/contexts/AuthContext";

// Configure the query client with error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const AppRoutes = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  // Check if the app is running in standalone mode (installed PWA)
  const isInStandaloneMode = () => {
    try {
      return (window.matchMedia('(display-mode: standalone)').matches) || 
        // @ts-ignore - webkit property exists on Safari
        (window.navigator.standalone) || 
        document.referrer.includes('android-app://');
    } catch (e) {
      console.error('Error detecting standalone mode:', e);
      return false;
    }
  };
  
  // Only show splash screen if it's the first visit or in standalone mode
  useEffect(() => {
    try {
      const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
      if (hasVisitedBefore && !isInStandaloneMode()) {
        setShowSplash(false);
      } else {
        localStorage.setItem('hasVisitedBefore', 'true');
      }
      setIsInitialized(true);
    } catch (e) {
      console.error('Error in splash screen logic:', e);
      setShowSplash(false);
      setIsInitialized(true);
    }
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  // Don't render routes until we've determined whether to show splash screen
  if (!isInitialized) return null;

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/service/:serviceId" element={<ServicePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/travel" element={<TravelAssistant />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
