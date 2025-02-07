'use client'

import * as motion from 'framer-motion/client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface FadeInWhenVisibleProps {
  children: React.ReactNode
  delay?: number
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible
