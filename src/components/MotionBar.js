import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { motion, useAnimation } from 'framer-motion'

const MotionBar = ({ delayNumber, id, fill, height, width, x, y }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      width,
      transition: {
        delay: 1.5,
        duration: i,
      },
    }))
  }, [controls])

  const variants = {
    start: { width: 0 },
    finish: {
      width,
    },
  }

  return (
    <motion.rect
      initial="start"
      animate={controls}
      custom={delayNumber}
      variants={variants}
      id={id}
      fill={fill}
      height={height}
      width={width}
      y={y}
      x={x}
    />
  )
}

MotionBar.propTypes = {
  delayNumber: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
}

export default MotionBar
