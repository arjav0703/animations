import { useState } from 'react'
import './App.css'
import { Canvas } from './canvas'

export default function App() {
  return(
    <>
      <div className='bg-black text-white w-full min-h-screen'>
        <Canvas/>
      </div>
    </>
  )
}