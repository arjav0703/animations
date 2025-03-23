import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Canvas } from './canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll';
import MyNav from './components/MyNav';
import gsap from 'gsap'
const circEase = 'circ.inOut';

export default function App() {
  const [showCanvas, setShowCanvas] = useState(false)
  const canvastoggle = useRef(null)
  const growingSpan = useRef(null)

  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    let scroll;

    const initializeScroll = () => {
      if (scroll) {
        scroll.destroy(); // Destroy any existing instance to avoid duplication
      }
      scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
      });
    };

    // Initialize LocomotiveScroll after a slight delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      initializeScroll();
    }, 100);

    // Reinitialize LocomotiveScroll whenever `showCanvas` changes
    return () => {
      clearTimeout(timeout);
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [showCanvas]);

  useEffect(() => {
    const handleClick = (cl) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: cl.clientY,
            left: cl.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: circEase,
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: circEase,
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = canvastoggle.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener
    return () => {
      headingElement.removeEventListener("click", handleClick);
    };    
  }, []);

  const pages = [0,1,2]
  return(
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      
      <div data-scroll-container id='main' >

      <section className="w-full z-[1] ">
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
            <h1 ref={canvastoggle} className="text-[12rem] tracking-tight leading-none">Thirtysixstudios</h1>
          </section>
        </div>

      </section>

        <div className='w-full min-h-screen relative'>
          {showCanvas && data[0].map((canasdets, index) => (
              <Canvas details={canasdets} key={index}/>
          ))}
        </div>

      

      </div> 
      
      <div data-scroll-container id='main' >

        <div className='w-full min-h-screen relative z[1]'>
          <section className='w-screen px-32 pt-1 '>
            <h1 className='text-7xl'>
              About the brand
            </h1>
            <p className='text-2xl mt-8 para'>
              Thirtysixstudios is a digital production studio that builds digital assets and immersive experiences for purposeful brands. We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.
            </p>
            <img
              className="w-[70%] mt-10"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fbeauty-digital-art-through-immersive-experiences_23-2151250278.jpg"
              alt="image of a person with virtual reality glasses"
            />
          </section>
          {showCanvas && data[1].map((canasdets, index) => (
              <Canvas details={canasdets} key={index}/>
          ))}
        </div>

      

      </div> 
      
    </>
  )
}
