import { useEffect, useRef, useState } from "react";
import images from './images'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export function Canvas({details}) {
  const {startIndex, numImages, duration, size, top, left, zIndex} = details;
  const [index, setIndex] = useState({value: startIndex});
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      ease: 'linear',
      onUpdate: () => {
      setIndex({ value: Math.round(index.value) });
      },
      repeat: -1
    });
    
    // gsap.to(canvasRef.current, {
    //   x: 700,
    //   duration: 3,
    //   ease: 'linear',
    //   repeat: -1,
    //   yoyo: true
    // });

    gsap.from(canvasRef.current, {
      opacity: 0,
      duration: 2,
      delay: 0.2,
      ease: 'power2.inOut'
    })
  })
  
  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = images[index.value];
    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + "px";
      canvas.style.height = canvas.offsetHeight + "px";

      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight); 
    };
  }, [index]);
  return (
    <>
      <canvas
        data-scroll
        data-scroll-speed={Math.random().toFixed(1)}
        ref={canvasRef}
        style={{width: `${size * 1.4}px`, height: `${size * 1.4}px`, top: `${top}%`, left: `${left}%`, zIndex: `${zIndex}`, position:"absolute"}}
        id="canvas"
      >
      </canvas>
    </>
  );
}
