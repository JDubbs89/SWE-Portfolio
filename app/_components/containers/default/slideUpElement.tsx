"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type ScrolltoValue = {
  scroll: number[];
  value: number[];
}

type SlideUpElementProps = {
  children: React.ReactNode;
  className?: string;
  opacityM?: ScrolltoValue;
  transformYM?: ScrolltoValue;
  scaleM?: ScrolltoValue;
}

export default function SlideUpElement({ 
  children, 
  className = "",
  opacityM = { scroll:[0, 0.5, 0.8, 1],value:[1, 1, 0.75, 0] },
  transformYM = { scroll:[0, 0.5, 0.8, 1],value:[0, 0, 25, 100] },
  scaleM = { scroll:[0.7, 0.9],value:[1, 0.85] },
}: SlideUpElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"] // Full viewport range
  })
  
  // Maps to CSS view() behavior: entry 20% cover
  const opacity = useTransform(
    scrollYProgress, 
    opacityM.scroll, 
    opacityM.value
  )
  const y = useTransform(
    scrollYProgress, 
    transformYM.scroll, 
    transformYM.value
  )

  const scale = useTransform(scrollYProgress,scaleM.scroll,scaleM.value);
  
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ opacity, y, scale }}
    >
      {children}
    </motion.div>
  );
}