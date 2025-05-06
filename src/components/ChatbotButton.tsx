
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const ChatbotButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const showChatButton = () => {
      // Show chat button after 5 seconds
      setTimeout(() => {
        setIsVisible(true);
      }, 5000);
    };
    
    showChatButton();
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <button 
        className="w-14 h-14 rounded-full bg-gradient-to-r from-tarsonix-blue to-tarsonix-violet flex items-center justify-center shadow-lg hover:shadow-tarsonix-blue/20 transition-all group"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:animate-pulse" />
      </button>
    </div>
  );
};

export default ChatbotButton;
