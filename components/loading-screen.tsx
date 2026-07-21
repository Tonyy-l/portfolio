'use client';

import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 600);
    };

    if (document.readyState === 'complete') {
      const timer = setTimeout(handleLoad, 1400);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-bg transition-opacity duration-600 ease-out ${
        fadeOut ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <svg width="220" height="120" viewBox="0 0 220 120" style={{ overflow: 'visible' }}>
        <text
          x="40"
          y="80"
          fontSize="72"
          fontWeight="500"
          fill="none"
          stroke="#7DD3FC"
          strokeWidth="1.5"
          className="loader-letter"
        >
          Т
        </text>
        <text
          x="130"
          y="80"
          fontSize="72"
          fontWeight="500"
          fill="none"
          stroke="#A78BFA"
          strokeWidth="1.5"
          className="loader-letter loader-letter-delay"
        >
          Л
        </text>
      </svg>

      <div className="h-0.5 w-40 overflow-hidden rounded-full bg-line">
        <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-accent to-accent2 animate-loadbar" />
      </div>
    </div>
  );
}
