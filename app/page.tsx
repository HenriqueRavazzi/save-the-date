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
    <div className="billboard-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Efeito de textura */}
      <div className="absolute inset-0 noise-texture opacity-20"></div>
      
      {/* Billboard frame */}
      <div className="billboard-frame relative z-10 bg-[#1a1a1a] p-8 md:p-16 shadow-2xl max-w-6xl mx-4">
        {/* Borda interna */}
        <div className="border-4 border-[#e8dcc4] p-8 md:p-12">
          <main className="flex flex-col items-center justify-center gap-8 text-center">
            {/* Título principal com estilo editorial */}
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-bold text-[#e8dcc4] tracking-[0.2em] uppercase leading-none">
                SAVE THE
              </h1>
              <h2 className="text-6xl md:text-8xl font-bold text-[#e8dcc4] tracking-[0.2em] uppercase leading-none">
                DATE
              </h2>
            </div>
            
            {/* Data destacada */}
            <div className="date-badge bg-[#e8dcc4] text-[#1a1a1a] px-8 py-4 -rotate-2 shadow-lg">
              <span className="text-5xl md:text-7xl font-bold tracking-wider">29.08.26</span>
            </div>

            {/* Contador */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-8 w-full">
              <div className="counter-box">
                <div className="text-5xl md:text-7xl font-bold text-[#e8dcc4] tabular-nums">
                  {timeLeft.days}
                </div>
                <div className="text-lg md:text-xl text-[#e8dcc4] mt-2 uppercase tracking-widest opacity-80">
                  Dias
                </div>
              </div>
              
              <div className="counter-box">
                <div className="text-5xl md:text-7xl font-bold text-[#e8dcc4] tabular-nums">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-lg md:text-xl text-[#e8dcc4] mt-2 uppercase tracking-widest opacity-80">
                  Horas
                </div>
              </div>
              
              <div className="counter-box">
                <div className="text-5xl md:text-7xl font-bold text-[#e8dcc4] tabular-nums">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-lg md:text-xl text-[#e8dcc4] mt-2 uppercase tracking-widest opacity-80">
                  Minutos
                </div>
              </div>
              
              <div className="counter-box">
                <div className="text-5xl md:text-7xl font-bold text-[#e8dcc4] tabular-nums">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-lg md:text-xl text-[#e8dcc4] mt-2 uppercase tracking-widest opacity-80">
                  Segundos
                </div>
              </div>
            </div>

            {/* Assinatura */}
            <div className="mt-8 text-2xl md:text-3xl text-[#e8dcc4] tracking-[0.3em] uppercase opacity-70">
              Giuvazzi Day
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
