
import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-primary font-display font-bold text-2xl inline-block mb-4">
              SuccessLab
            </a>
            <p className="text-foreground/70 mb-6">
              Providing the resources and support you need to scale your customer success strategy effectively.
            </p>
            <div className="flex space-x-4">
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
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Guides</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Webinars</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#support" className="text-foreground/70 hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="https://status.elevenlabs.io/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} SuccessLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
