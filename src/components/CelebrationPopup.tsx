
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Award, Sparkles } from "lucide-react";

interface CelebrationPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CelebrationPopup: React.FC<CelebrationPopupProps> = ({ 
  open, 
  onOpenChange 
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-primary/20">
        <DialogHeader className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            You're an ElevenLabs Pro!
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-4 py-4">
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">
              Congratulations! You've completed all the onboarding steps.
            </p>
            <p className="text-muted-foreground">
              You're now ready to take full advantage of ElevenLabs.
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mt-6">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Achievement Unlocked</span>
          </div>
        </div>
        
        <div className="flex justify-center mt-4">
          <Button 
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto"
          >
            Continue to platform
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CelebrationPopup;
