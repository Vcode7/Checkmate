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
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  arriveFromLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
  arriveFromRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
  scale: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
  },
  rotate: {
    initial: { rotate: -180 },
    animate: { rotate: 0 },
    exit: { rotate: 180 },
  },
};

const Animate = ({ children, animationType, duration = 1.75 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
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
        ease: [0.6, 0.05, 0.01, 0.99], // Cubic Bezier for smooth transitions
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
