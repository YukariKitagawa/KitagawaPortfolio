'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'framer-motion'

interface AnimatedFootprintsProps {
  animatedSrc: string
  alt: string
  className?: string
}

const AnimatedFootprints: React.FC<AnimatedFootprintsProps> = ({ animatedSrc, alt, className = "" }) => {
  const [isAnimated, setIsAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      setIsAnimated(true)
    }
  }, [isInView])

  return (
    <div ref={ref} className={className}>
      {isAnimated && (
        <Image
          src={animatedSrc}
          alt={alt}
          width={183}
          height={196}
          style={{ objectFit: 'cover' }}
          className="md:max-w-full max-w-[120px]"
        />
      )}
    </div>
  )
}

export default AnimatedFootprints
