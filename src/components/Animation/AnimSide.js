import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const AnimSide = ({ children, delay, exit, reversed }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    rootMargin: "-100px",
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
    if (exit) {
      if(!inView) {
        controls.start("exit")
      }
    }
  }, [controls, inView])
  let xPos 
  if (reversed) {
    xPos=-30
  } else {
    xPos = 30
  }
  
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: { delay:`${delay}`,duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, x: xPos },
        
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimSide