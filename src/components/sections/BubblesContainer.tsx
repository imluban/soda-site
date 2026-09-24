'use client';

import { useEffect, useRef } from 'react';
import { ASSETS } from '@/lib/constants';

export default function BubblesContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createBubble = () => {
      const bubble = document.createElement('img');
      bubble.src = ASSETS.bubblePng;
      bubble.className = 'bubble-img';
      const size = Math.random() * 20 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = 'auto';
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.bottom = '-50px';
      bubble.style.opacity = String(Math.random() * 0.4 + 0.2);
      const duration = Math.random() * 6 + 4;
      bubble.style.animation = `floatUpImg ${duration}s linear forwards`;
      container.appendChild(bubble);
      setTimeout(() => bubble.remove(), duration * 1000);
    };

    const interval = setInterval(createBubble, 400);
    return () => clearInterval(interval);
  }, []);

  return <div id="bubbles-container" ref={containerRef} />;
}
