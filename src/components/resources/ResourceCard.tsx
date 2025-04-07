
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  onClick?: () => void;
  comingSoon?: boolean;
}

const ResourceCard = ({
  icon: Icon,
  title,
  description,
  delay,
  onClick,
  comingSoon
}: ResourceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }, delay);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef} 
      className={cn(
        "glass-card rounded-xl p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out", 
        "transform hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300", 
        comingSoon ? "cursor-default" : "cursor-pointer"
      )} 
      onClick={comingSoon ? undefined : onClick}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
        <Icon size={20} />
      </div>
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
        {title}
        {comingSoon && <Badge variant="outline" className="text-xs font-normal bg-secondary/50">Coming Soon</Badge>}
      </h3>
      <p className="text-foreground/70 mb-5">{description}</p>
      
      {!comingSoon && (
        <Button variant="ghost" className="group p-0 h-auto font-medium text-primary">
          Learn more
          <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
        </Button>
      )}
    </div>
  );
};

export default ResourceCard;
