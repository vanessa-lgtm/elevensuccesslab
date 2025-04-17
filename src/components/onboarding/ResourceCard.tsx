
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

export interface Resource {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => (
  <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:border-primary/40 h-full">
    <CardContent className="p-6">
      <div className="flex items-start">
        <div className="rounded-full bg-primary/10 p-3 mr-4">
          {resource.icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
          <Button asChild variant="outline" size="sm" className="mt-2 hover:bg-primary/10">
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              View Resource
            </a>
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ResourceCard;
