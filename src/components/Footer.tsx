
import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4">
          <a href="https://x.com/elevenlabsio?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:bg-primary hover:text-white transition-colors">
            <Twitter size={18} />
          </a>
          <a href="https://www.linkedin.com/company/elevenlabsio/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:bg-primary hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://www.instagram.com/elevenlabsio/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:bg-primary hover:text-white transition-colors">
            <Instagram size={18} />
          </a>
        </div>
        
        <div className="text-center text-foreground/60 text-sm mt-4">
          <p>&copy; {new Date().getFullYear()} SuccessLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
