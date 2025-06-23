
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm fixed w-full z-50 animate-slide-in-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-in-left">
            <img 
              src="/lovable-uploads/17519bb8-3f16-4e9b-a142-0f986e803701.png" 
              alt="DBuck Logo" 
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">Buck</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 animate-fade-in">
            <a href="#features" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">How It Works</a>
            <a href="#about" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">About</a>
            <a href="#founders" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">Founders</a>
            <a href="#contact" className="text-gray-600 hover:text-dbuck-primary transition-all duration-300 hover:scale-105">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <Button 
              onClick={scrollToContact}
              className="hidden sm:flex bg-gradient-to-r from-dbuck-primary to-dbuck-secondary hover:from-dbuck-dark hover:to-dbuck-primary text-white animate-fade-in-right transform hover:scale-105 transition-all duration-300"
            >
              Book a Demo
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-dbuck-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#features" className="text-gray-600 hover:text-dbuck-primary transition-colors px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-dbuck-primary transition-colors px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
              <a href="#about" className="text-gray-600 hover:text-dbuck-primary transition-colors px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#founders" className="text-gray-600 hover:text-dbuck-primary transition-colors px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>Founders</a>
              <a href="#contact" className="text-gray-600 hover:text-dbuck-primary transition-colors px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <Button 
                onClick={scrollToContact}
                className="sm:hidden bg-gradient-to-r from-dbuck-primary to-dbuck-secondary hover:from-dbuck-dark hover:to-dbuck-primary text-white w-full mt-2"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
