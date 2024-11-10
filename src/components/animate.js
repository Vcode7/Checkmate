import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Define animation variants
const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
};

const Animate = ({ children, animationType = "fadeIn", duration = 1.75 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const targetElement = ref.current; // Capture the current ref value at the beginning of the effect

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after the first intersection
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement); // Use the captured targetElement
      }
      observer.disconnect(); // Ensure the observer is fully cleaned up
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={animations[animationType]}
      initial="initial"
      animate={isVisible ? 'animate' : 'initial'}
      exit="exit"
      transition={{
        duration,
        ease: [0.6, 0.05, 0.01, 0.99], // Smooth cubic bezier
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
