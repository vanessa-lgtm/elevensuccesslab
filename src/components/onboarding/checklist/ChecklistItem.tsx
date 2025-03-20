
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export interface ChecklistItemType {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  completed: boolean;
  section: string;
  link?: string;
}

interface ChecklistItemProps {
  item: ChecklistItemType;
  onToggleCompletion: (id: string) => void;
  isLastInSection: boolean;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, onToggleCompletion, isLastInSection }) => {
  return (
    <>
      <div className="flex items-start gap-4">
        <div className="pt-1">
          <Checkbox 
            id={`checklist-item-${item.id}`} 
            checked={item.completed}
            onCheckedChange={() => onToggleCompletion(item.id)}
            className={cn(item.completed ? "text-primary" : "")}
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <label 
              htmlFor={`checklist-item-${item.id}`}
              className={cn(
                "font-medium text-lg cursor-pointer",
                item.completed ? "line-through text-muted-foreground" : ""
              )}
            >
              {item.title}
            </label>
            <div className="flex items-center text-muted-foreground text-sm">
              <Clock className="h-3.5 w-3.5 mr-1" />
              {item.timeEstimate}
            </div>
          </div>
          <p className={cn(
            "text-muted-foreground mt-1",
            item.completed ? "line-through" : ""
          )}>
            {item.description}
          </p>
          
          {item.link && (
            <div className="mt-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1 text-xs"
                onClick={() => window.open(item.link, '_blank')}
              >
                Documentation
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          )}
          
          {item.completed && (
            <div className="mt-3 text-sm text-primary flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              Completed
            </div>
          )}
        </div>
      </div>
      
      {!isLastInSection && <Separator className="mt-4" />}
    </>
  );
};

export default ChecklistItem;
