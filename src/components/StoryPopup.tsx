
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface StoryPopupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  articleUrl: string;
}

const StoryPopup = ({ open, setOpen, title, articleUrl }: StoryPopupProps) => {
  const [content, setContent] = React.useState<string>('Loading article...');
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (open) {
      setLoading(true);
      // In a real implementation, you might fetch the actual article content
      // Here we're simulating a fetch with a timeout
      const timer = setTimeout(() => {
        setContent(`
          <div class="article-content">
            <p class="text-lg mb-4">This is a preview of the full article "${title}" that would typically be loaded from the server.</p>
            <p class="mb-4">In a production environment, the actual content would be fetched from the CMS or API endpoint.</p>
            <p class="mb-4">For now, we're displaying this placeholder content to demonstrate the popup functionality.</p>
            <p class="mb-4">To read the full article, you can visit the original source using the button below.</p>
          </div>
        `);
        setLoading(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [open, title]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="mt-4">
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
              <Button asChild>
                <a href={articleUrl} target="_blank" rel="noopener noreferrer">
                  Read Full Article
                </a>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StoryPopup;
