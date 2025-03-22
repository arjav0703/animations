import { useEffect, useRef, useState } from "react";
import images from './images'

export function Canvas() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = images[0];
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0); 
    };
  }, []);
  return (
    <>
      <canvas
        ref={canvasRef}
        className="w-[18rem] h-[18rem]"
        id="canvas"
      >
      </canvas>
    </>
  );
}
