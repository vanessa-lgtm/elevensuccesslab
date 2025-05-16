
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Lightbulb, Megaphone, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Function to handle support link navigation
  const handleSupportClick = (e: React.MouseEvent) => {
    // If we're not on the home page, navigate to home page with support section hash
    if (location.pathname !== '/') {
      // Let the Link component handle the navigation
    } else {
      // If we're already on the home page, just scroll to the section
      e.preventDefault();
      document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-primary font-display font-bold">
            <img 
              src="/lovable-uploads/b0cec8f7-a12d-4769-80ff-963e4efb119c.png" 
              alt="SuccessLab" 
              className="h-8"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/upcoming-events" 
            className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1"
          >
            <Calendar className="h-4 w-4" />
            Upcoming Events
          </Link>
          <Link 
            to="/#support" 
            onClick={handleSupportClick}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Support
          </Link>
          <Link 
            to="/product-updates" 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Product Updates
          </Link>
          <Link to="/use-case-inspiration" className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1">
            <Lightbulb className="h-4 w-4" />
            Use Case Inspiration
          </Link>
          <Button asChild className="button-hover-effect ml-4">
            <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer">Go To ElevenLabs</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          <Link 
            to="/upcoming-events" 
            className="text-foreground/80 text-lg font-medium flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Calendar className="h-4 w-4" />
            Upcoming Events
          </Link>
          <Link 
            to="/#support" 
            className="text-foreground/80 text-lg font-medium"
            onClick={(e) => {
              setMobileMenuOpen(false);
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Support
          </Link>
          <Link 
            to="/product-updates" 
            className="text-foreground/80 text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Product Updates
          </Link>
          <Link 
            to="/use-case-inspiration" 
            className="text-foreground/80 text-lg font-medium flex items-center gap-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Lightbulb className="h-4 w-4" />
            Use Case Inspiration
          </Link>
          <Button 
            asChild 
            className="w-full mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer">Go To ElevenLabs</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
