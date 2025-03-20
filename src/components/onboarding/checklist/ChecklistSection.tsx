
import React from 'react';
import { Card } from '@/components/ui/card';
import ChecklistItem, { ChecklistItemType } from './ChecklistItem';
import { cn } from '@/lib/utils';

interface ChecklistSectionProps {
  title: string;
  items: ChecklistItemType[];
  onToggleItemCompletion: (id: string) => void;
}

const ChecklistSection: React.FC<ChecklistSectionProps> = ({ title, items, onToggleItemCompletion }) => {
  if (items.length === 0) return null;
  
  console.log(`Rendering section "${title}" with ${items.length} items`);
  
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {items.map((item, index, array) => (
        <Card 
          key={item.id}
          className={cn(
            "p-4 transition-all duration-200 mb-4",
            item.completed ? "border-primary/50 bg-primary/5" : ""
          )}
        >
          <ChecklistItem 
            item={item} 
            onToggleCompletion={onToggleItemCompletion}
            isLastInSection={index === array.length - 1}
          />
        </Card>
      ))}
    </div>
  );
};

export default ChecklistSection;
