'use client';

import { useEffect, useRef, useState } from 'react';

interface MousePosition {
  x: number; // normalized -0.5 to 0.5
  y: number;
  px: number; // pixel coords
  py: number;
}

export function useMousePosition() {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0, px: 0, py: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };
      setMouse(prev => ({ ...prev, px: e.clientX, py: e.clientY }));
    };

    const smooth = () => {
      smoothRef.current.x += (targetRef.current.x - smoothRef.current.x) * 0.05;
      smoothRef.current.y += (targetRef.current.y - smoothRef.current.y) * 0.05;
      setMouse(prev => ({
        ...prev,
        x: smoothRef.current.x,
        y: smoothRef.current.y,
      }));
      rafRef.current = requestAnimationFrame(smooth);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(smooth);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return mouse;
}
