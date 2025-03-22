import { useState } from 'react'                                                  
import './App.css'
import { motion } from 'framer-motion'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <motion.div id='box' 
        animate = {{
          x: 700,
          y:200
        }}
        transition={{
          duration: 2,
          delay: 0.2,
          ease: 'anticipate',
          pin:true,          

        }}

        >
        </motion.div>

        <motion.div drag id='dragbox'
        // dragConstraints={{ left: 0, right: 1000, top: 0, bottom: 1000}}
        whileDrag={{scale:0.8}}
        ></motion.div>
      </div>
    </>
  )
}

export default App
