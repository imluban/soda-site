'use client';

import { create } from 'zustand';
import type { Flavor } from '@/types';
import { FLAVORS } from '@/lib/constants';

interface FlavorStore {
  activeFlavor: Flavor;
  isSwitching: boolean;
  setFlavor: (flavor: Flavor) => void;
  setIsSwitching: (val: boolean) => void;
}

// Lightweight store — no extra dep needed, use a simple module-level approach
// We'll use React context + useReducer instead to avoid zustand dep
export {};

export type { FlavorStore };
