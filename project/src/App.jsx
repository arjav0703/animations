import { useEffect, useState } from 'react'
import './App.css'
import { Canvas } from './canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll';
import MyNav from './components/MyNav';



export default function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
  }, [])

  const pages = [0,1,2]
  return(
    <>
      <script src="https://c.webfontfree.com/c.js?f=HelveticaNowDisplay-Regular" type="text/javascript"></script>
      <div data-scroll-container id='main' >

        <MyNav/>
        <div className='w-full min-h-screen relative'>
          {data[0].map((canasdets, index) => (
              <Canvas details={canasdets} key={index}/>
          ))}
        </div>

      </div>  
    </>
  )
}