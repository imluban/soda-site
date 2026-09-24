'use client';

import Image from 'next/image';
import clsx from 'clsx';
import type { FlavorConfig } from '@/types';
import { useFlavor } from '@/lib/FlavorContext';

interface FlavorCardProps {
  flavor: FlavorConfig;
}

export default function FlavorCard({ flavor }: FlavorCardProps) {
  const { activeFlavor, setFlavor, isSwitching } = useFlavor();
  const isActive = activeFlavor === flavor.id;

  return (
    <div
      className={clsx('card', isActive && 'active')}
      data-flavor={flavor.id}
      onClick={() => !isSwitching && setFlavor(flavor.id)}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onKeyDown={(e) => e.key === 'Enter' && !isSwitching && setFlavor(flavor.id)}
    >
      <Image
        src={flavor.imageSrc}
        alt={flavor.name}
        width={140}
        height={200}
        style={{
          filter: flavor.id === 'blue' ? 'drop-shadow(0 20px 35px rgba(0,0,0,0.5)) brightness(0.7)' : 'drop-shadow(0 20px 35px rgba(0,0,0,0.5))',
        }}
        className="card-image"
        unoptimized
      />
      <div className="card-info">
        <span>{flavor.name}</span>
        <span>{flavor.price}</span>
      </div>
    </div>
  );
}
