
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define authentication types
interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  // Add missing methods
  signUp: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  error: null,
  signIn: async () => {},
  signOut: () => {},
  signUp: async () => {},
  resetPassword: async () => {},
});

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    // Simulate checking for a stored session
    const checkExistingSession = () => {
      try {
        const storedUser = localStorage.getItem('jgroups_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error("Error checking authentication:", err);
      } finally {
        setLoading(false);
      }
    };
    
    checkExistingSession();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate authentication - in a real app this would call an API
      // This is just for demonstration purposes
      if (email && password) {
        // Simple validation for demo
        const mockUser = {
          id: 'user-123',
          email: email,
          name: email.split('@')[0],
        };
        
        // Store in localStorage for persistence
        localStorage.setItem('jgroups_user', JSON.stringify(mockUser));
        setUser(mockUser);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate sign-up - in a real app this would call an API
      if (email && password) {
        // Simple validation for demo
        const mockUser = {
          id: 'user-' + Math.random().toString(36).substring(2, 11),
          email: email,
          name: email.split('@')[0],
        };
        
        // Store in localStorage for persistence
        localStorage.setItem('jgroups_user', JSON.stringify(mockUser));
        setUser(mockUser);
      } else {
        throw new Error('Invalid sign-up information');
      }
    } catch (err: any) {
      setError(err.message || 'Sign-up failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate password reset - in a real app this would call an API
      if (!email) {
        throw new Error('Email is required');
      }
      
      // Just simulate a delay for the mock implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, this would send an email
      console.log(`Password reset email sent to ${email}`);
      
    } catch (err: any) {
      setError(err.message || 'Password reset failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem('jgroups_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      error, 
      signIn, 
      signOut,
      signUp,
      resetPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};
