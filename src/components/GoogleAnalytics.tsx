import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface GoogleAnalyticsProps {
  measurementId: string;
}

const COOKIE_KEY = 'tarsonix_cookie_consent';

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    const loadGoogleAnalytics = () => {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());

      // Check for user consent
      const consent = localStorage.getItem(COOKIE_KEY);
      const hasConsent = consent === 'accepted';

      // Configure with consent settings
      gtag('config', measurementId, {
        'consent_mode': 'advanced',
        'analytics_storage': hasConsent ? 'granted' : 'denied'
      });

      // Make gtag available globally
      window.gtag = gtag;
    };

    loadGoogleAnalytics();
  }, [measurementId]);

  // Track page views when location changes
  useEffect(() => {
    if (window.gtag) {
      const consent = localStorage.getItem(COOKIE_KEY);
      const hasConsent = consent === 'accepted';
      
      // Only track page views if user has given consent
      if (hasConsent) {
        window.gtag('event', 'page_view', {
          page_path: location.pathname + location.search,
        });
      }
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;

// Add the necessary type declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
} 