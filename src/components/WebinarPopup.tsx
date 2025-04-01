import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Sparkle, Megaphone, Mic, ArrowRight, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Link } from 'react-router-dom';
import CourseContentDialog from './CourseContentDialog';
const POPUP_DISPLAY_LIMIT = 2;
const LOCAL_STORAGE_KEY = 'webinarPopupShownCount';
const WebinarPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [showCourseDialog, setShowCourseDialog] = useState(false);
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
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <Sparkle className="h-5 w-5 text-primary" />
              <h3 className="text-sm font-semibold">Voice AI Fundamentals</h3>
            </div>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Mic className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-medium">30-Minute Onboarding Primer</h4>
                <p className="text-xs text-muted-foreground">Learn Voice AI fundamentals</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              Get quickly up to speed with key Voice AI concepts in our focused 30-minute primer course.
            </p>
            
            <Button className="w-full" onClick={() => setShowCourseDialog(true)}>
              Access Course <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>}

      <CourseContentDialog open={showCourseDialog} onOpenChange={setShowCourseDialog} />
    </>;
};
export default WebinarPopup;