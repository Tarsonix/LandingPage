import { Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/final_logo.png";

const Footer = () => {
  const LinkedinIcon = Linkedin;
  const TwitterIcon = Twitter;
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tarsonix-dark-blue py-12 border-t border-tarsonix-blue/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Tarsonix Logo" className="h-12 w-12 mr-3 drop-shadow-lg" />
              <span className="text-2xl font-display font-bold gradient-text">Tarsonix</span>
            </div>
            <p className="text-tarsonix-white/70 max-w-md mb-6">
              Supercharge your business with next-gen AI automation, intelligent agents, and seamless digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-tarsonix-white/70 hover:text-tarsonix-blue transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-tarsonix-white/70 hover:text-tarsonix-blue transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#what-we-do" className="text-tarsonix-white/70 hover:text-tarsonix-white transition-colors">Solutions</a></li>
              <li><a href="#how-it-works" className="text-tarsonix-white/70 hover:text-tarsonix-white transition-colors">Process</a></li>
              <li><a href="#why-choose-us" className="text-tarsonix-white/70 hover:text-tarsonix-white transition-colors">About</a></li>
              <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-tarsonix-white/70 hover:text-tarsonix-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-tarsonix-white/70 hover:text-tarsonix-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-tarsonix-white/70">info@tarsonix.com</li>
              <li className="text-tarsonix-white/70">+91-6369743805</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-tarsonix-blue/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tarsonix-white/50 text-sm">© {currentYear} Tarsonix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
