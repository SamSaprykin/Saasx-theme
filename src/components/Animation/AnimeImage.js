import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const AnimeImage = ({ children, delay, exit, reversed }) => {
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
    xPos=-100
  } else {
    xPos = 100
  }
  
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay:`${delay}`,duration: 1.5, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: xPos },
        
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimeImage