
import React from 'react';
import ChecklistItem from './ChecklistItem';
import { ChecklistItem as ChecklistItemType } from './types';

interface ChecklistSectionProps {
  title: string;
  items: ChecklistItemType[];
  onToggle: (id: string) => void;
}

const ChecklistSection: React.FC<ChecklistSectionProps> = ({ title, items, onToggle }) => {
  // Make sure we have items to display
  if (!items || items.length === 0) {
    return (
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground">No items available for this section.</p>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {items.map((item, index) => (
        <ChecklistItem 
          key={item.id} 
          item={item} 
          isLast={index === items.length - 1}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default ChecklistSection;
