'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const weddingDate = new Date('2026-08-29T00:00:00');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="checkerboard flex min-h-screen items-center justify-center">
      <main className="flex flex-col items-center justify-center gap-12 px-8 text-center">
        <h1 className="text-8xl md:text-[14rem] font-bold font-[family-name:var(--font-allura)] text-green-700 tracking-wide drop-shadow-[0_0_20px_rgba(21,128,61,0.6)]">
          Save The Date
        </h1>
        
        <div className="flex gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <div className="text-7xl md:text-9xl font-bold text-green-700 tabular-nums drop-shadow-[0_0_10px_rgba(21,128,61,0.4)] font-[family-name:var(--font-orbitron)]">
              {timeLeft.days}
            </div>
            <div className="text-4xl md:text-6xl font-bold text-green-700 mt-4 uppercase tracking-wider font-[family-name:var(--font-allura)]">
              Dias
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-7xl md:text-9xl font-bold text-green-700 tabular-nums drop-shadow-[0_0_10px_rgba(21,128,61,0.4)] font-[family-name:var(--font-orbitron)]">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-4xl md:text-6xl font-bold text-green-700 mt-4 uppercase tracking-wider font-[family-name:var(--font-allura)]">
              Horas
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-7xl md:text-9xl font-bold text-green-700 tabular-nums drop-shadow-[0_0_10px_rgba(21,128,61,0.4)] font-[family-name:var(--font-orbitron)]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-4xl md:text-6xl font-bold text-green-700 mt-4 uppercase tracking-wider font-[family-name:var(--font-allura)]">
              Minutos
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-7xl md:text-9xl font-bold text-green-700 tabular-nums drop-shadow-[0_0_10px_rgba(21,128,61,0.4)] font-[family-name:var(--font-orbitron)]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-4xl md:text-6xl font-bold text-green-700 mt-4 uppercase tracking-wider font-[family-name:var(--font-allura)]">
              Segundos
            </div>
          </div>
        </div>

        <p className="text-6xl md:text-8xl font-bold text-green-700 mt-12 tracking-wide font-[family-name:var(--font-allura)]">
          29 de Agosto de 2026
        </p>
      </main>
    </div>
  );
}
