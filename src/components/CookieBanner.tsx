import * as React from "react";
import { Link } from "react-router-dom";

const COOKIE_KEY = 'tarsonix_cookie_consent';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem(COOKIE_KEY, accepted ? 'accepted' : 'declined');
    setVisible(false);
    // Optionally, trigger analytics enable/disable here
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900/90 to-violet-900/90 backdrop-blur-md border-t border-blue-700/40 shadow-lg flex flex-col md:flex-row items-center justify-between px-6 py-4 animate-fade-in"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent banner"
    >
      <div className="flex-1 text-sm text-white md:mr-4 mb-2 md:mb-0">
        We use cookies to enhance your experience. By clicking "Accept", you consent to our use of cookies. Read our{' '}
        <Link
          to="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400 hover:text-violet-300 transition-colors"
        >
          Privacy Policy
        </Link>
        .
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleConsent(true)}
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          Accept
        </button>
        <button
          onClick={() => handleConsent(false)}
          className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-800 text-white font-semibold shadow focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieBanner; 