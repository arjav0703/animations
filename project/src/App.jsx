import { useState } from 'react'
import './App.css'
import { Canvas } from './canvas'
import data from './data'

export default function App() {
  return(
    <>
      <div className='bg-black text-white w-full min-h-screen absolute'>
        
        {data[0].map((canasdets, index) => (
          <Canvas details={canasdets} key={index}/>
       ))}
      </div>
    </>
  )
}