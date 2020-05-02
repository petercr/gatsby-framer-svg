import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { motion, useAnimation } from 'framer-motion'

const MotionBar = ({ delayNumber }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      width: 58.84611,
      transition: {
        delay: 1.5,
        duration: i,
      },
    }))
  }, [controls])

  const variants = {
    start: { width: 0 },
    finish: {
      width: 58.84611,
    },
  }

  return (
    <motion.rect
      initial="start"
      animate={controls}
      custom={delayNumber}
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

MotionBar.propTypes = {
  delayNumber: PropTypes.number.isRequired,
}

export default MotionBar
