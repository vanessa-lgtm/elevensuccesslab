
import React from 'react';
import ChecklistItem from './ChecklistItem';
import { ChecklistItem as ChecklistItemType } from './types';

interface ChecklistSectionProps {
  title: string;
  items: ChecklistItemType[];
  onToggle: (id: string) => void;
}

const ChecklistSection: React.FC<ChecklistSectionProps> = ({ title, items, onToggle }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {items.map((item, index, filteredItems) => (
        <ChecklistItem 
          key={item.id} 
          item={item} 
          isLast={index === filteredItems.length - 1}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default ChecklistSection;
