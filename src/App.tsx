import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import CustomPC from "./pages/CustomPC";
import Upgrade from "./pages/Upgrade";
import Maintenance from "./pages/Maintenance";
import LaptopService from "./pages/LaptopService";
import Suggestions from "./pages/Suggestions";
import PCAssembly from "./pages/PCAssembly";

const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-pc" element={<CustomPC />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/laptop-service" element={<LaptopService />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/pc-assembly" element={<PCAssembly />} />
      </Routes>
    </AnimatePresence>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;