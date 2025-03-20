import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Sparkle, Megaphone, Mic, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Link } from 'react-router-dom';

const POPUP_DISPLAY_LIMIT = 2;
const LOCAL_STORAGE_KEY = 'webinarPopupShownCount';

const WebinarPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  
  useEffect(() => {
    const popupShownCount = parseInt(localStorage.getItem(LOCAL_STORAGE_KEY) || '0');
    
    if (popupShownCount < POPUP_DISPLAY_LIMIT && !hasBeenShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasBeenShown(true);
        
        localStorage.setItem(LOCAL_STORAGE_KEY, (popupShownCount + 1).toString());
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [hasBeenShown]);

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 flex gap-4 items-center z-50">
          <Button
            className="rounded-full h-14 shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4"
            onClick={() => alert("AI Voice Assistant feature will be implemented later.")}
          >
            <Mic className="mr-2 h-5 w-5" />
            Talk to our AI Voice Assistant
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl"
                onClick={() => setIsOpen(true)}
              >
                <Megaphone className="h-6 w-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" side="top" align="end">
              <div className="p-4">
                <p className="text-sm font-medium">New announcements available!</p>
                <p className="text-xs text-muted-foreground mt-1">Click to see what's new</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )}

      {isOpen && (
        <div 
          className={cn(
            "fixed bottom-6 right-6 w-80 bg-background border rounded-lg shadow-xl z-50",
            "animate-in slide-in-from-bottom-5 duration-300"
          )}
        >
          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Announcements</h3>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7" 
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="rounded-md bg-primary/5 p-3">
                <div className="flex items-start gap-2 mb-2">
                  <Megaphone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm">Upcoming Webinar</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Scaling Learning Experiences with Innovation. Join us for a deep dive into how AI is transforming education technology.
                    </p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="mt-2 w-full text-xs h-8"
                      onClick={() => window.open("https://app.livestorm.co/elevenlabs/elevenlabs-ai-in-edtech-scaling-learning-experiences-with-innovation", "_blank")}
                    >
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="rounded-md bg-primary/5 p-3">
                <div className="flex items-start gap-2">
                  <Sparkle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm">New Scribe Feature</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Transcribe Speech to Text with the world's most accurate ASR model.
                    </p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="mt-2 w-full text-xs h-8"
                      onClick={() => window.open("https://elevenlabs.io/blog/meet-scribe", "_blank")}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 pt-0">
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => alert("AI Voice Assistant feature will be implemented later.")}
            >
              <Mic className="mr-2 h-4 w-4" />
              Talk to our AI Voice Assistant
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default WebinarPopup;
