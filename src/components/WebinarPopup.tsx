import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Sparkle, Megaphone, Mic, ArrowRight, PhoneCall } from 'lucide-react';
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
  return <>
      {!isOpen && <div className="fixed bottom-6 right-6 flex gap-4 items-center z-50">
          
          
          <Popover>
            <PopoverTrigger asChild>
              <Button className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl" onClick={() => setIsOpen(true)}>
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
        </div>}

      {isOpen && <div className={cn("fixed bottom-6 right-6 w-80 bg-background border rounded-lg shadow-xl z-50", "animate-in slide-in-from-bottom-5 duration-300")}>
          
          
          
        </div>}
    </>;
};
export default WebinarPopup;