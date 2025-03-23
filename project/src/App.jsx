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
      
      <div data-scroll-container id='main' >

      <section className="w-full z-[1]">
        <MyNav />
        <div className='w-full top-[15%] absolute z-99'>
          <section className='w-[25%] mx-[20%] leading-12'>
            <h2 className='text-4xl'>
              At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.
            </h2>
            <p className='text-md leading-4 mt-10 para'>
              We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.
            </p>
          </section>

          <section className='text-center mt-18 relative bottom-0 left-0'>
            <h1 className="text-[12rem] tracking-tight leading-none">Thirtysixstudios</h1>
          </section>
        </div>

      </section>

        <div className='w-full min-h-screen relative'>
          {data[0].map((canasdets, index) => (
              <Canvas details={canasdets} key={index}/>
          ))}
        </div>

      

      </div>  
    </>
  )
}