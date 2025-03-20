
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';

interface VideoEmbedProps {
  videoId: string;
  title?: string;
  platform?: 'youtube' | 'vimeo' | 'wistia';
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ 
  videoId, 
  title = "ElevenLabs Video",
  platform = 'youtube'
}) => {
  const getEmbedUrl = () => {
    switch (platform) {
      case 'youtube':
        return `https://www.youtube.com/embed/${videoId}`;
      case 'vimeo':
        return `https://player.vimeo.com/video/${videoId}`;
      case 'wistia':
        return `https://fast.wistia.net/embed/iframe/${videoId}`;
      default:
        return `https://www.youtube.com/embed/${videoId}`;
    }
  };

  return (
    <Card className="overflow-hidden border-primary/20 shadow-sm">
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={getEmbedUrl()}
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
