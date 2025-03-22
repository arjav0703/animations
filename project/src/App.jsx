import { useState } from 'react'
import './App.css'
import { Canvas } from './canvas'
import data from './data'

export default function App() {
  const pages = [0,1,2]
  return(
    <>
      <div className='bg-[#FD2C2A] text-white w-full min-h-screen relative'>
        {data[0].map((canasdets, index) => (
            <Canvas details={canasdets} key={index}/>
        ))}
      </div>
      <div className='bg-[#FD2C2A] text-white w-full min-h-screen relative'>
        {data[1].map((canasdets, index) => (
            <Canvas details={canasdets} key={index}/>
        ))}
      </div>
      <div className='bg-[#FD2C2A] text-white w-full min-h-screen relative'>
        {data[2].map((canasdets, index) => (
            <Canvas details={canasdets} key={index}/>
        ))}
      </div>
      
    </>
  )
}