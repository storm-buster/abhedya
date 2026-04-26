import { motion } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = [0.25, 0.46, 0.45, 0.94],
  onAnimationComplete,
  stepDuration = 0.22
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // GPU-optimized: Use only transform + opacity (no filter: blur)
  // Simulate blur appearance with scale + opacity which are compositor-only
  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { opacity: 0, y: -50, scale: 1.04 }
        : { opacity: 0, y: 50, scale: 1.04 },
    [direction]
  );

  const defaultTo = useMemo(
    () => ({ opacity: 1, y: 0, scale: 1 }),
    []
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshot = animationTo ?? defaultTo;

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((segment, index) => {
        const spanTransition = {
          duration: stepDuration * 2,
          delay: (index * delay) / 1000,
          ease: easing,
        };

        return (
          <motion.span
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity',
            }}
            key={index}
            initial={fromSnapshot}
            animate={inView ? toSnapshot : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
