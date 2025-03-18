
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReset }) => {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
      <p className="text-foreground/70 mb-6">
        Thank you for reaching out. We'll get back to you shortly.
      </p>
      <Button
        variant="outline"
        onClick={onReset}
        className="mx-auto"
      >
        Send Another Message
      </Button>
    </div>
  );
};

export default SuccessMessage;
