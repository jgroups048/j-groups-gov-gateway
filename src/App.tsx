
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SplashScreen from "./components/SplashScreen";
import Dashboard from "./pages/Dashboard";
import ServicePage from "./pages/ServicePage";
import Admin from "./pages/Admin";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyEmail from "./pages/auth/VerifyEmail";
import UpdatePassword from "./pages/auth/UpdatePassword";
import { AuthProvider } from "./contexts/AuthContext";

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
          <Route path="/" element={<Dashboard />} />
          <Route path="/services" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/service/:serviceId" element={<ServicePage />} />
          
          {/* Auth Routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/verify-email" element={<VerifyEmail />} />
          <Route path="/auth/update-password" element={<UpdatePassword />} />
          
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
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
