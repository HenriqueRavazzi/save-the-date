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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 dark:from-rose-950 dark:via-pink-950 dark:to-rose-900">
      <main className="flex flex-col items-center justify-center gap-12 px-8 text-center">
        <h1 className="text-7xl md:text-9xl font-serif font-bold text-rose-900 dark:text-rose-100 tracking-tight">
          Save The Date
        </h1>
        
        <div className="flex gap-6 md:gap-12">
          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-8xl font-bold text-rose-800 dark:text-rose-200 tabular-nums">
              {timeLeft.days}
            </div>
            <div className="text-lg md:text-2xl text-rose-700 dark:text-rose-300 mt-2 uppercase tracking-wider">
              Dias
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-8xl font-bold text-rose-800 dark:text-rose-200 tabular-nums">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-lg md:text-2xl text-rose-700 dark:text-rose-300 mt-2 uppercase tracking-wider">
              Horas
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-8xl font-bold text-rose-800 dark:text-rose-200 tabular-nums">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-lg md:text-2xl text-rose-700 dark:text-rose-300 mt-2 uppercase tracking-wider">
              Minutos
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-8xl font-bold text-rose-800 dark:text-rose-200 tabular-nums">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-lg md:text-2xl text-rose-700 dark:text-rose-300 mt-2 uppercase tracking-wider">
              Segundos
            </div>
          </div>
        </div>

        <p className="text-2xl md:text-4xl font-serif text-rose-800 dark:text-rose-200 mt-8">
          29 de Agosto de 2026
        </p>
      </main>
    </div>
  );
}
