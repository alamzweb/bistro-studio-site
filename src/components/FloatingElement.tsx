import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface FloatingElementProps {
  src: string;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
  rotateSpeed?: number;
}

export function FloatingElement({
  src,
  className = '',
  speed = 1,
  direction = 'up',
  rotateSpeed = 10,
}: FloatingElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yOffset = direction === 'up' ? -100 * speed : 100 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [0, yOffset]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-rotateSpeed, rotateSpeed]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={`absolute pointer-events-none ${className}`}
    >
      <img
        src={src}
        alt="Floating Food"
        className="w-full h-full object-contain"
        style={{ mixBlendMode: 'screen' }}
      />
    </motion.div>
  );
}
