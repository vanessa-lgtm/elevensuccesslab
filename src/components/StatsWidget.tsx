
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, Users, MessageSquare, Clock } from 'lucide-react';

const StatsWidget = () => {
  return (
    <div className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Voice AI Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-primary/10 shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <span className="flex items-center text-green-500">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  +24%
                </span>
              </div>
              <h3 className="text-3xl font-bold">2M+</h3>
              <p className="text-muted-foreground">Users empowered by voice AI</p>
            </CardContent>
          </Card>
          
          <Card className="border border-primary/10 shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <span className="flex items-center text-green-500">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  +65%
                </span>
              </div>
              <h3 className="text-3xl font-bold">15M+</h3>
              <p className="text-muted-foreground">Conversations handled daily</p>
            </CardContent>
          </Card>
          
          <Card className="border border-primary/10 shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <span className="flex items-center text-green-500">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  +42%
                </span>
              </div>
              <h3 className="text-3xl font-bold">360K+</h3>
              <p className="text-muted-foreground">Hours saved per month</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StatsWidget;
