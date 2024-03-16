"use client"
import { useState, useEffect } from 'react';


export default function Home() {
  const [translateX, setTranslateX] = useState(9);
  const [translateY, setTranslateY] = useState(9);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTranslateX = translateX > -15 ? translateX - 1 : 9;
      const newTranslateY = translateY > -15 ? translateY - 1 : 9;

      setTranslateX(newTranslateX);
      setTranslateY(newTranslateY);
    }, 100); 

    return () => clearInterval(intervalId);
  }, [translateX, translateY]);

  return (
    <main className="main w-screen h-screen relative overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
          <div style={{
            background: 'url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)',
            opacity: '.03',
            inset: '-200%',
            width: '400%',
            height: '400%',
            position: 'absolute',
            transform: `translate(${translateX}%, ${translateY}%)`
          }}>

          </div>
      </div>
    </main>
  );
}
