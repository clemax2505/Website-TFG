import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -10,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3,
    willChange: "transform, opacity",
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      style={{ 
        width: '100%',
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'antialiased',
        WebkitTransform: 'translateZ(0)',
        WebkitPerspective: '1000',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;