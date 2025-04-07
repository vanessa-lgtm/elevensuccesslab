
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Book, Lightbulb } from 'lucide-react';

interface ProductDocumentationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDocumentationDialog: React.FC<ProductDocumentationDialogProps> = ({ 
  open, 
  onOpenChange 
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Book className="h-5 w-5 text-primary" />
            Documentation Resources
          </DialogTitle>
          <DialogDescription>
            Choose which documentation resource you'd like to explore
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 gap-4 py-4">
          <Button 
            variant="outline" 
            className="justify-between p-6 h-auto flex items-center"
            onClick={() => window.open('https://elevenlabs.io/docs/overview', '_blank')}
          >
            <div className="flex items-center gap-3">
              <Book className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="font-medium">Product Documentation</p>
                <p className="text-sm text-muted-foreground">Complete documentation for all ElevenLabs products</p>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0" />
          </Button>
          
          <Button 
            variant="outline" 
            className="justify-between p-6 h-auto flex items-center"
            onClick={() => window.open('https://elevenlabs.io/docs/best-practices/prompting/controls', '_blank')}
          >
            <div className="flex items-center gap-3">
              <Lightbulb className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="font-medium">Best Practices</p>
                <p className="text-sm text-muted-foreground">Learn optimal ways to use voice AI technology</p>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDocumentationDialog;
