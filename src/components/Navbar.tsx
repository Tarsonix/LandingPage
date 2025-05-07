import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from "@/assets/final_logo.webp";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-tarsonix-dark/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Tarsonix Logo" className="h-10 w-10 mr-3 drop-shadow-lg" />
          <span className="text-2xl font-display font-bold gradient-text">Tarsonix</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#what-we-do" className="text-tarsonix-white/80 hover:text-tarsonix-white transition-colors">Solutions</a>
          <a href="#how-it-works" className="text-tarsonix-white/80 hover:text-tarsonix-white transition-colors">Process</a>
          <a href="#why-choose-us" className="text-tarsonix-white/80 hover:text-tarsonix-white transition-colors">About</a>
          <a
            href="https://tally.so/r/mOdAdM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-tarsonix-blue text-tarsonix-white hover:bg-tarsonix-blue/10 transition-all px-6 py-2 rounded-lg font-semibold"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-tarsonix-white"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-tarsonix-blue/20 animate-fade-in">
          <div className="container mx-auto py-5 flex flex-col space-y-4">
            <a 
              href="#what-we-do" 
              className="text-tarsonix-white/80 hover:text-tarsonix-white px-4 py-2 rounded-md hover:bg-tarsonix-blue/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#how-it-works" 
              className="text-tarsonix-white/80 hover:text-tarsonix-white px-4 py-2 rounded-md hover:bg-tarsonix-blue/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#why-choose-us" 
              className="text-tarsonix-white/80 hover:text-tarsonix-white px-4 py-2 rounded-md hover:bg-tarsonix-blue/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="https://tally.so/r/mOdAdM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-tarsonix-blue text-tarsonix-white hover:bg-tarsonix-blue/10 transition-all px-6 py-2 rounded-lg font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
