
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

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
          <a href="#" className="text-primary font-display font-bold text-2xl">
            SuccessLab
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#resources" className="text-foreground/80 hover:text-primary transition-colors">
            Resources
          </a>
          <a href="#support" className="text-foreground/80 hover:text-primary transition-colors">
            Support
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
            Success Stories
          </a>
          <Link to="/use-case-inspiration" className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1">
            <Lightbulb className="h-4 w-4" />
            Use Case Inspiration
          </Link>
          <Button asChild className="button-hover-effect ml-4">
            <a href="#contact">Get Started</a>
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
          <a 
            href="#resources" 
            className="text-foreground/80 text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Resources
          </a>
          <a 
            href="#support" 
            className="text-foreground/80 text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Support
          </a>
          <a 
            href="#testimonials" 
            className="text-foreground/80 text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Success Stories
          </a>
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
            <a href="#contact">Get Started</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
