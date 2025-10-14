
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
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>
...
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AppRoutes;
