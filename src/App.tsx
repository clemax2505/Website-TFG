import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Quote = lazy(() => import("./pages/Quote"));
const Contact = lazy(() => import("./pages/Contact"));
const CustomPC = lazy(() => import("./pages/CustomPC"));
const Upgrade = lazy(() => import("./pages/Upgrade"));
const Maintenance = lazy(() => import("./pages/Maintenance"));
const LaptopService = lazy(() => import("./pages/LaptopService"));
const Suggestions = lazy(() => import("./pages/Suggestions"));
const PCAssembly = lazy(() => import("./pages/PCAssembly"));

const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-forge-orange"></div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Index />
          </Suspense>
        } />
        <Route path="/services" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
        } />
        <Route path="/portfolio" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Portfolio />
          </Suspense>
        } />
        <Route path="/quote" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Quote />
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        } />
        <Route path="/custom-pc" element={
          <Suspense fallback={<LoadingSpinner />}>
            <CustomPC />
          </Suspense>
        } />
        <Route path="/upgrade" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Upgrade />
          </Suspense>
        } />
        <Route path="/maintenance" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Maintenance />
          </Suspense>
        } />
        <Route path="/laptop-service" element={
          <Suspense fallback={<LoadingSpinner />}>
            <LaptopService />
          </Suspense>
        } />
        <Route path="/suggestions" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Suggestions />
          </Suspense>
        } />
        <Route path="/pc-assembly" element={
          <Suspense fallback={<LoadingSpinner />}>
            <PCAssembly />
          </Suspense>
        } />
      </Routes>
    </AnimatePresence>
  );
};

// Optimized query client configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data remains fresh for 5 minutes
      gcTime: 1000 * 60 * 30, // Cache persists for 30 minutes (renamed from cacheTime)
    },
  },
});

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