
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileSpreadsheet, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactExport: React.FC = () => {
  const { toast } = useToast();
  const [isExporting, setIsExporting] = React.useState(false);
  
  const handleExport = async () => {
    setIsExporting(true);
    try {
      // Download the CSV file
      const response = await fetch('/api/contacts?format=csv');
      
      if (!response.ok) {
        throw new Error('Failed to export contacts');
      }
      
      // Get the CSV content
      const csvContent = await response.text();
      
      // Create a blob and download link
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'contacts.csv';
      document.body.appendChild(a);
      a.click();
      
      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast({
        title: "Export Successful",
        description: "Contact data has been exported to CSV",
      });
    } catch (error) {
      console.error('Error exporting contacts:', error);
      toast({
        title: "Export Failed",
        description: "There was a problem exporting your contacts",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };
  
  return (
    <div className="mt-6 flex justify-center">
      <Button 
        variant="outline" 
        onClick={handleExport}
        disabled={isExporting}
        className="flex items-center gap-2"
      >
        {isExporting ? (
          <>
            <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Exporting...
          </>
        ) : (
          <>
            <FileSpreadsheet className="h-4 w-4" />
            <span>Export to Spreadsheet</span>
            <Download className="h-3 w-3 ml-1" />
          </>
        )}
      </Button>
    </div>
  );
};

export default ContactExport;
