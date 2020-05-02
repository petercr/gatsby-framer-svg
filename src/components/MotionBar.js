import React from 'react'
import { motion } from 'framer-motion'

const MotionBar = () => {
  const variants = {
    start: { width: 0 },
    finish: {
      width: 58.84611,
      transition: {
        delay: 1.5,
        duration: 1,
      },
    },
  }

  return (
    <motion.rect
      initial="start"
      animate="finish"
      variants={variants}
      id="rect66"
      fill="#f9a826"
      height="5.46471"
      width="58.84611"
      y="110.16081"
      x="428.6814"
    />
  )
}

export default MotionBar
