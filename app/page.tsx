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
    <div className="main-background">
      {/* Camada do céu (70% superior) */}
      <div className="sky-layer"></div>
      
      {/* Sol */}
      <div className="sun"></div>
      
      {/* Nuvens individuais */}
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
      <div className="cloud cloud-4"></div>
      <div className="cloud cloud-5"></div>
      <div className="cloud cloud-6"></div>
      <div className="cloud cloud-7"></div>
      <div className="cloud cloud-8"></div>
      <div className="cloud cloud-9"></div>
      <div className="cloud cloud-10"></div>
      <div className="cloud cloud-11"></div>
      <div className="cloud cloud-12"></div>
      <div className="cloud cloud-13"></div>
      <div className="cloud cloud-14"></div>
      <div className="cloud cloud-15"></div>
      <div className="cloud cloud-16"></div>
      <div className="cloud cloud-17"></div>
      <div className="cloud cloud-18"></div>
      <div className="cloud cloud-19"></div>
      <div className="cloud cloud-20"></div>
      
      {/* Camada do xadrez (30% inferior) */}
      <div className="checker-layer"></div>
      
      {/* Gradiente de transição */}
      <div className="transition-gradient"></div>
      
      {/* Bando 1 - Formação em V (8 andorinhas) */}
      <div className="swallow flock-1 swallow-1-1">
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
          <path d="M2 8C6 6 10 4 14 6C18 8 22 10 20 12C18 10 14 8 10 6C6 8 2 10 2 8Z" 
                fill="#2c2c2c" opacity="0.8"/>
          <path d="M14 6C16 4 18 2 20 4" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.8"/>
        </svg>
      </div>
      <div className="swallow flock-1 swallow-1-2">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path d="M2 7C5 5 8 3 12 5C15 7 18 9 16 11C14 9 11 7 8 5C5 7 2 9 2 7Z" 
                fill="#2c2c2c" opacity="0.7"/>
          <path d="M12 5C14 3 16 1 18 3" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.7"/>
        </svg>
      </div>
      <div className="swallow flock-1 swallow-1-3">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <path d="M2 6C4.5 4 7 2 10.5 4C13.5 6 16 8 14.5 10C13 8 10 6 7 4C4.5 6 2 8 2 6Z" 
                fill="#2c2c2c" opacity="0.6"/>
          <path d="M10.5 4C12 2 13.5 0 15.5 2" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.6"/>
        </svg>
      </div>
      <div className="swallow flock-1 swallow-1-4">
        <svg width="22" height="15" viewBox="0 0 22 15" fill="none">
          <path d="M2 7.5C5.5 5.5 9 3.5 13 5.5C16.5 7.5 20 9.5 18 11.5C16 9.5 12.5 7.5 9 5.5C5.5 7.5 2 9.5 2 7.5Z" 
                fill="#2c2c2c" opacity="0.7"/>
          <path d="M13 5.5C15 3.5 17 1.5 19 3.5" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.7"/>
        </svg>
      </div>
      <div className="swallow flock-1 swallow-1-5">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
          <path d="M2 5.5C4 4.5 6 3.5 8.5 4.5C11 5.5 13.5 6.5 12.5 7.5C11.5 6.5 9 5.5 6.5 4.5C4 5.5 2 6.5 2 5.5Z" 
                fill="#2c2c2c" opacity="0.5"/>
          <path d="M8.5 4.5C9.5 3.5 10.5 2.5 11.5 3.5" stroke="#2c2c2c" strokeWidth="1" fill="none" opacity="0.5"/>
        </svg>
      </div>
      <div className="swallow flock-1 swallow-1-6">
        <svg width="19" height="13" viewBox="0 0 19 13" fill="none">
          <path d="M2 6.5C4.5 4.5 7 2.5 10.5 4.5C13.5 6.5 16.5 8.5 15 10.5C13.5 8.5 10.5 6.5 7.5 4.5C4.5 6.5 2 8.5 2 6.5Z" 
                fill="#2c2c2c" opacity="0.6"/>
          <path d="M10.5 4.5C12 2.5 13.5 0.5 15.5 2.5" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.6"/>
        </svg>
      </div>
      <div className="swallow flock-1 swallow-1-7">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <path d="M2 6C4 4 6 2 9 4C11.5 6 14 8 12.5 10C11 8 8.5 6 6 4C4 6 2 8 2 6Z" 
                fill="#2c2c2c" opacity="0.5"/>
          <path d="M9 4C10.5 2 12 0 14 2" stroke="#2c2c2c" strokeWidth="1" fill="none" opacity="0.5"/>
        </svg>
      </div>
      <div className="swallow flock-1 swallow-1-8">
        <svg width="21" height="14" viewBox="0 0 21 14" fill="none">
          <path d="M2 7C5 5 8 3 12 5C15 7 18 9 16.5 11C15 9 12 7 8.5 5C5 7 2 9 2 7Z" 
                fill="#2c2c2c" opacity="0.6"/>
          <path d="M12 5C14 3 16 1 18 3" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.6"/>
        </svg>
      </div>

      {/* Bando 2 - Formação em V (9 andorinhas) */}
      <div className="swallow flock-2 swallow-2-1">
        <svg width="26" height="17" viewBox="0 0 26 17" fill="none">
          <path d="M2 8.5C6.5 6.5 11 4.5 15.5 6.5C20 8.5 24 10.5 22 12.5C20 10.5 15.5 8.5 11 6.5C6.5 8.5 2 10.5 2 8.5Z" 
                fill="#2c2c2c" opacity="0.8"/>
          <path d="M15.5 6.5C17.5 4.5 19.5 2.5 21.5 4.5" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.8"/>
        </svg>
      </div>
      <div className="swallow flock-2 swallow-2-2">
        <svg width="21" height="14" viewBox="0 0 21 14" fill="none">
          <path d="M2 7C5 5 8 3 12 5C15 7 18 9 16.5 11C15 9 12 7 8.5 5C5 7 2 9 2 7Z" 
                fill="#2c2c2c" opacity="0.7"/>
          <path d="M12 5C14 3 16 1 18 3" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.7"/>
        </svg>
      </div>
      <div className="swallow flock-2 swallow-2-3">
        <svg width="19" height="13" viewBox="0 0 19 13" fill="none">
          <path d="M2 6.5C4.5 4.5 7 2.5 10.5 4.5C13.5 6.5 16.5 8.5 15 10.5C13.5 8.5 10.5 6.5 7.5 4.5C4.5 6.5 2 8.5 2 6.5Z" 
                fill="#2c2c2c" opacity="0.6"/>
          <path d="M10.5 4.5C12 2.5 13.5 0.5 15.5 2.5" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.6"/>
        </svg>
      </div>
      <div className="swallow flock-2 swallow-2-4">
        <svg width="23" height="16" viewBox="0 0 23 16" fill="none">
          <path d="M2 8C5.5 6 9 4 13.5 6C17.5 8 21 10 19.5 12C18 10 14.5 8 10.5 6C6.5 8 2 10 2 8Z" 
                fill="#2c2c2c" opacity="0.7"/>
          <path d="M13.5 6C15.5 4 17.5 2 19.5 4" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.7"/>
        </svg>
      </div>
      <div className="swallow flock-2 swallow-2-5">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <path d="M2 6C4 4 6 2 9 4C11.5 6 14 8 12.5 10C11 8 8.5 6 6 4C4 6 2 8 2 6Z" 
                fill="#2c2c2c" opacity="0.5"/>
          <path d="M9 4C10.5 2 12 0 14 2" stroke="#2c2c2c" strokeWidth="1" fill="none" opacity="0.5"/>
        </svg>
      </div>
      <div className="swallow flock-2 swallow-2-6">
        <svg width="25" height="17" viewBox="0 0 25 17" fill="none">
          <path d="M2 8.5C6 6.5 10 4.5 14.5 6.5C18.5 8.5 22 10.5 20.5 12.5C19 10.5 15.5 8.5 11.5 6.5C7.5 8.5 2 10.5 2 8.5Z" 
                fill="#2c2c2c" opacity="0.8"/>
          <path d="M14.5 6.5C16.5 4.5 18.5 2.5 20.5 4.5" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.8"/>
        </svg>
      </div>
      <div className="swallow flock-2 swallow-2-7">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path d="M2 7C5 5 8 3 12 5C15 7 18 9 16 11C14 9 11 7 8 5C5 7 2 9 2 7Z" 
                fill="#2c2c2c" opacity="0.6"/>
          <path d="M12 5C14 3 16 1 18 3" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.6"/>
        </svg>
      </div>
      <div className="swallow flock-2 swallow-2-8">
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
          <path d="M2 8C6 6 10 4 14 6C18 8 22 10 20 12C18 10 14 8 10 6C6 8 2 10 2 8Z" 
                fill="#2c2c2c" opacity="0.7"/>
          <path d="M14 6C16 4 18 2 20 4" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.7"/>
        </svg>
      </div>
      <div className="swallow flock-2 swallow-2-9">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <path d="M2 6C4.5 4 7 2 10.5 4C13.5 6 16 8 14.5 10C13 8 10 6 7 4C4.5 6 2 8 2 6Z" 
                fill="#2c2c2c" opacity="0.6"/>
          <path d="M10.5 4C12 2 13.5 0 15.5 2" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.6"/>
        </svg>
      </div>

      {/* Bando 3 - Formação em V (6 andorinhas) */}
      <div className="swallow flock-3 swallow-3-1">
        <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
          <path d="M2 9C7 7 12 5 17 7C22 9 26 11 24 13C22 11 17 9 12 7C7 9 2 11 2 9Z" 
                fill="#2c2c2c" opacity="0.9"/>
          <path d="M17 7C19 5 21 3 23 5" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.9"/>
        </svg>
      </div>
      <div className="swallow flock-3 swallow-3-2">
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
          <path d="M2 8C6 6 10 4 14 6C18 8 22 10 20 12C18 10 14 8 10 6C6 8 2 10 2 8Z" 
                fill="#2c2c2c" opacity="0.8"/>
          <path d="M14 6C16 4 18 2 20 4" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.8"/>
        </svg>
      </div>
      <div className="swallow flock-3 swallow-3-3">
        <svg width="22" height="15" viewBox="0 0 22 15" fill="none">
          <path d="M2 7.5C5.5 5.5 9 3.5 13 5.5C16.5 7.5 20 9.5 18 11.5C16 9.5 12.5 7.5 9 5.5C5.5 7.5 2 9.5 2 7.5Z" 
                fill="#2c2c2c" opacity="0.7"/>
          <path d="M13 5.5C15 3.5 17 1.5 19 3.5" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.7"/>
        </svg>
      </div>
      <div className="swallow flock-3 swallow-3-4">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path d="M2 7C5 5 8 3 12 5C15 7 18 9 16 11C14 9 11 7 8 5C5 7 2 9 2 7Z" 
                fill="#2c2c2c" opacity="0.6"/>
          <path d="M12 5C14 3 16 1 18 3" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.6"/>
        </svg>
      </div>
      <div className="swallow flock-3 swallow-3-5">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <path d="M2 6C4.5 4 7 2 10.5 4C13.5 6 16 8 14.5 10C13 8 10 6 7 4C4.5 6 2 8 2 6Z" 
                fill="#2c2c2c" opacity="0.5"/>
          <path d="M10.5 4C12 2 13.5 0 15.5 2" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.5"/>
        </svg>
      </div>
      <div className="swallow flock-3 swallow-3-6">
        <svg width="25" height="17" viewBox="0 0 25 17" fill="none">
          <path d="M2 8.5C6 6.5 10 4.5 14.5 6.5C18.5 8.5 22 10.5 20.5 12.5C19 10.5 15.5 8.5 11.5 6.5C7.5 8.5 2 10.5 2 8.5Z" 
                fill="#2c2c2c" opacity="0.7"/>
          <path d="M14.5 6.5C16.5 4.5 18.5 2.5 20.5 4.5" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.7"/>
        </svg>
      </div>

      {/* Bando 4 - Formação em V (5 andorinhas) */}
      <div className="swallow flock-4 swallow-4-1">
        <svg width="30" height="20" viewBox="0 0 30 20" fill="none">
          <path d="M2 10C7.5 8 13 6 18.5 8C24 10 28 12 26 14C24 12 18.5 10 13 8C7.5 10 2 12 2 10Z" 
                fill="#2c2c2c" opacity="0.9"/>
          <path d="M18.5 8C20.5 6 22.5 4 24.5 6" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.9"/>
        </svg>
      </div>
      <div className="swallow flock-4 swallow-4-2">
        <svg width="26" height="17" viewBox="0 0 26 17" fill="none">
          <path d="M2 8.5C6.5 6.5 11 4.5 15.5 6.5C20 8.5 24 10.5 22 12.5C20 10.5 15.5 8.5 11 6.5C6.5 8.5 2 10.5 2 8.5Z" 
                fill="#2c2c2c" opacity="0.8"/>
          <path d="M15.5 6.5C17.5 4.5 19.5 2.5 21.5 4.5" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.8"/>
        </svg>
      </div>
      <div className="swallow flock-4 swallow-4-3">
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
          <path d="M2 8C6 6 10 4 14 6C18 8 22 10 20 12C18 10 14 8 10 6C6 8 2 10 2 8Z" 
                fill="#2c2c2c" opacity="0.7"/>
          <path d="M14 6C16 4 18 2 20 4" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.7"/>
        </svg>
      </div>
      <div className="swallow flock-4 swallow-4-4">
        <svg width="22" height="15" viewBox="0 0 22 15" fill="none">
          <path d="M2 7.5C5.5 5.5 9 3.5 13 5.5C16.5 7.5 20 9.5 18 11.5C16 9.5 12.5 7.5 9 5.5C5.5 7.5 2 9.5 2 7.5Z" 
                fill="#2c2c2c" opacity="0.6"/>
          <path d="M13 5.5C15 3.5 17 1.5 19 3.5" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.6"/>
        </svg>
      </div>
      <div className="swallow flock-4 swallow-4-5">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <path d="M2 6C4.5 4 7 2 10.5 4C13.5 6 16 8 14.5 10C13 8 10 6 7 4C4.5 6 2 8 2 6Z" 
                fill="#2c2c2c" opacity="0.5"/>
          <path d="M10.5 4C12 2 13.5 0 15.5 2" stroke="#2c2c2c" strokeWidth="1.5" fill="none" opacity="0.5"/>
        </svg>
      </div>

      {/* Container principal centralizado */}
      <div className="main-container">
        <div className="content-overlay">
          {/* Save the Date seção */}
          <div className="save-date-section">
            <button className="save-date">
              Save Our Date
            </button>
          </div>

          {/* Informações principais */}
          <div className="main-info">
            <div className="couple-names">
              Giu & Ravazzi
            </div>
            
            <div className="wedding-date">
              29/08/26
            </div>
            
            <div className="location">
              Curitiba • PR
            </div>
          </div>

          {/* Contador regressivo */}
          <div className="countdown-section">
            <div className="countdown-grid">
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.days}</span>
                <span className="countdown-label">Dias</span>
              </div>
              
              <div className="countdown-item">
                <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="countdown-label">Horas</span>
              </div>
              
              <div className="countdown-item">
                <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="countdown-label">Minutos</span>
              </div>
              
              <div className="countdown-item">
                <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="countdown-label">Segundos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}