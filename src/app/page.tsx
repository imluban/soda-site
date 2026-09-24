'use client';

import { useEffect } from 'react';
import { useFlavor } from '@/lib/FlavorContext';
import BubblesContainer from '@/components/sections/BubblesContainer';
import HeroScene from '@/components/sections/HeroScene';

export default function HomePage() {
  const { activeFlavor } = useFlavor();

  useEffect(() => {
    document.body.classList.add('hero-page');
    return () => document.body.classList.remove('hero-page');
  }, []);

  useEffect(() => {
    if (activeFlavor === 'blue') {
      document.body.classList.add('blue-theme');
    } else {
      document.body.classList.remove('blue-theme');
    }
  }, [activeFlavor]);

  return (
    <>
      <BubblesContainer />
      <main className="hero">
        <HeroScene />
      </main>
      <svg style={{ position: 'absolute', width: 0, height: 0, opacity: 0, pointerEvents: 'none' }}>
        <filter id="frosted">
          <feTurbulence type="fractalNoise" baseFrequency="0.0125" numOctaves={3} result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={80} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </>
  );
}
