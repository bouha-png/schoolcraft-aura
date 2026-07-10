import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Confidentialite from "./pages/Confidentialite";
import CGU from "./pages/CGU";
import SynclasseLegal from "./pages/SynclasseLegal";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="/privacy" element={<Confidentialite />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/terms" element={<CGU />} />
            <Route path="/synclasse-legal" element={<SynclasseLegal />} />
            <Route path="/synclasse/privacy" element={<SynclasseLegal />} />
            <Route path="/synclasse/terms" element={<SynclasseLegal />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
