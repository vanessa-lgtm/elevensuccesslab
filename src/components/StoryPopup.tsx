
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { fetchArticleContent } from '@/api/articlesApi';
import { toast } from 'sonner';

interface StoryPopupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  articleUrl: string;
}

const StoryPopup = ({ open, setOpen, title, articleUrl }: StoryPopupProps) => {
  const [content, setContent] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (open) {
      setLoading(true);
      setError(null);
      
      fetchArticleContent(articleUrl)
        .then(articleContent => {
          setContent(articleContent);
          setLoading(false);
        })
        .catch(err => {
          console.error('Failed to load article:', err);
          setError('We couldn\'t load the article preview. Please try reading the full article.');
          setLoading(false);
          toast.error('Failed to load article preview');
        });
    }
  }, [open, articleUrl]);

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
        ) : error ? (
          <div className="py-8 text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <Button asChild>
              <a href={articleUrl} target="_blank" rel="noopener noreferrer">
                Read Full Article <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
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
                  Read Full Article <ExternalLink className="ml-2 h-4 w-4" />
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
