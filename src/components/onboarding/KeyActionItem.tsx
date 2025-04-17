
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { CardContent } from '@/components/ui/card';
import { Check, ChevronDown, ChevronRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface KeyActionStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  steps: string[];
  link: string;
}

interface KeyActionItemProps {
  step: KeyActionStep;
  isCompleted: boolean;
  onToggle: (id: string) => void;
}

const KeyActionItem = ({ step, isCompleted, onToggle }: KeyActionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = step.icon;
  
  return (
    <Card className={cn(
      "mb-4 border-primary/20 hover:border-primary/40 transition-all duration-200",
      isCompleted ? "border-primary/50 bg-primary/5" : ""
    )}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-start p-4">
          <div className="mr-4 bg-primary/10 p-3 rounded-full">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <Checkbox 
                id={`action-${step.id}`}
                checked={isCompleted}
                onCheckedChange={() => onToggle(step.id)}
                className={cn(isCompleted ? "text-primary" : "")}
              />
              <h3 className={cn(
                "text-xl font-medium",
                isCompleted ? "line-through text-muted-foreground" : ""
              )}>
                {step.title}
              </h3>
            </div>
            <p className={cn(
              "text-muted-foreground ml-7",
              isCompleted ? "line-through" : ""
            )}>
              {step.description}
            </p>
            
            {isCompleted && (
              <div className="ml-7 mt-2 text-sm text-primary flex items-center">
                <Check className="h-4 w-4 mr-1" />
                Completed
              </div>
            )}
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
              {isOpen ? 
                <ChevronDown className="h-5 w-5" /> : 
                <ChevronRight className="h-5 w-5" />
              }
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="animate-accordion-down">
          <CardContent className="pt-0 pb-4 bg-muted/30">
            <ol className="list-decimal pl-10 space-y-2 mb-4">
              {step.steps.map((text, index) => (
                <li key={index} className={cn(
                  "text-foreground/90",
                  isCompleted ? "line-through text-muted-foreground" : ""
                )}>
                  {text}
                </li>
              ))}
            </ol>
            <Button asChild className="mt-2">
              <a href={step.link} target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default KeyActionItem;
