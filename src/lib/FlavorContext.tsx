'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { Flavor } from '@/types';

interface FlavorContextValue {
  activeFlavor: Flavor;
  isSwitching: boolean;
  setFlavor: (flavor: Flavor) => void;
}

const FlavorContext = createContext<FlavorContextValue>({
  activeFlavor: 'classic',
  isSwitching: false,
  setFlavor: () => {},
});

export function FlavorProvider({ children }: { children: ReactNode }) {
  const [activeFlavor, setActiveFlavor] = useState<Flavor>('classic');
  const [isSwitching, setIsSwitching] = useState(false);

  const setFlavor = useCallback((flavor: Flavor) => {
    if (isSwitching || flavor === activeFlavor) return;
    setIsSwitching(true);
    setActiveFlavor(flavor);
    setTimeout(() => setIsSwitching(false), 2000);
  }, [isSwitching, activeFlavor]);

  return (
    <FlavorContext.Provider value={{ activeFlavor, isSwitching, setFlavor }}>
      {children}
    </FlavorContext.Provider>
  );
}

export function useFlavor() {
  return useContext(FlavorContext);
}
