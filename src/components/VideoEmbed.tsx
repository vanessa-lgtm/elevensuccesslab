
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';

interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ 
  videoId, 
  title = "ElevenLabs Video" 
}) => {
  return (
    <Card className="overflow-hidden border-primary/20 shadow-sm">
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </AspectRatio>
    </Card>
  );
};

export default VideoEmbed;
