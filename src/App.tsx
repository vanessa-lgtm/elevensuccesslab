
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EventDetails from "./pages/EventDetails";
import UseCaseInspiration from "./pages/UseCaseInspiration";
import Onboarding from "./pages/Onboarding";
import Conversation from "./pages/Conversation";
import ProductUpdates from "./pages/ProductUpdates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/use-case-inspiration" element={<UseCaseInspiration />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/product-updates" element={<ProductUpdates />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
