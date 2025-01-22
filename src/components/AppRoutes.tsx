import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";
import PreBuiltPCs from "@/pages/PreBuiltPCs";

// Lazy load pages
const Index = lazy(() => import("@/pages/Index"));
const Services = lazy(() => import("@/pages/Services"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const Quote = lazy(() => import("@/pages/Quote"));
const Contact = lazy(() => import("@/pages/Contact"));
const Upgrade = lazy(() => import("@/pages/Upgrade"));
const Maintenance = lazy(() => import("@/pages/Maintenance"));
const LaptopService = lazy(() => import("@/pages/LaptopService"));
const Suggestions = lazy(() => import("@/pages/Suggestions"));
const PCAssembly = lazy(() => import("@/pages/PCAssembly"));
const PCConfigDetails = lazy(() => import("@/pages/PCConfigDetails"));

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Index />
            </Suspense>
          } 
        />
        <Route 
          path="/services" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Services />
            </Suspense>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Portfolio />
            </Suspense>
          } 
        />
        <Route 
          path="/quote" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Quote />
            </Suspense>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          } 
        />
        <Route 
          path="/upgrade" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Upgrade />
            </Suspense>
          } 
        />
        <Route 
          path="/maintenance" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Maintenance />
            </Suspense>
          } 
        />
        <Route 
          path="/laptop-service" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LaptopService />
            </Suspense>
          } 
        />
        <Route 
          path="/suggestions" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Suggestions />
            </Suspense>
          } 
        />
        <Route 
          path="/pc-assembly" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PCAssembly />
            </Suspense>
          } 
        />
        <Route path="/prebuilt" element={<PreBuiltPCs />} />
        <Route 
          path="/prebuilt/:configId" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PCConfigDetails />
            </Suspense>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;