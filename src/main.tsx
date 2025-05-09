
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Register the service worker with better error handling
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error);
        // Continue without service worker, don't break the app
      });
  });
}

// Create root element with fallback for older browsers
const rootElement = document.getElementById("root");
if (!rootElement) {
  // If root element doesn't exist, create one
  const fallbackRoot = document.createElement("div");
  fallbackRoot.id = "root";
  document.body.appendChild(fallbackRoot);
  createRoot(fallbackRoot).render(<App />);
} else {
  createRoot(rootElement).render(<App />);
}
