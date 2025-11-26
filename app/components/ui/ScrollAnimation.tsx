'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  amount?: number
}

const directionVariants = {
  up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  amount = 0.2
}: ScrollAnimationProps) {
  const variants = directionVariants[direction]

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

interface ScrollContainerProps {
  children: ReactNode
  className?: string
  stagger?: number
}

export function ScrollContainer({ 
  children, 
  className = '',
  stagger = 0.1
}: ScrollContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface ScrollItemProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function ScrollItem({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up'
}: ScrollItemProps) {
  const variants = directionVariants[direction]

  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

