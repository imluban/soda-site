'use client';

import { useEffect, useRef } from 'react';

// Extend JSX intrinsic elements for model-viewer web component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          'camera-controls'?: boolean | '';
          'disable-zoom'?: boolean | '';
          'shadow-intensity'?: string;
          'environment-image'?: string;
          exposure?: string;
          'interaction-prompt'?: string;
          'camera-orbit'?: string;
          'field-of-view'?: string;
          ar?: boolean | '';
          autoplay?: boolean | '';
        },
        HTMLElement
      >;
    }
  }
}

interface ModelViewerProps {
  src: string;
  alt?: string;
  cameraOrbit?: string;
  fieldOfView?: string;
  exposure?: string;
  environmentImage?: string;
  interactionPrompt?: string;
  cameraControls?: boolean;
  disableZoom?: boolean;
  shadowIntensity?: string;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: (el: HTMLElement) => void;
  id?: string;
}

export default function ModelViewer({
  src,
  alt = '',
  cameraOrbit = '0deg 90deg 105%',
  fieldOfView,
  exposure = '1.0',
  environmentImage = 'neutral',
  interactionPrompt = 'none',
  cameraControls = false,
  disableZoom = false,
  shadowIntensity = '0',
  className = '',
  style,
  onLoad,
  id,
}: ModelViewerProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !onLoad) return;
    el.addEventListener('load', () => onLoad(el));
    return () => el.removeEventListener('load', () => onLoad(el));
  }, [onLoad]);

  return (
    <model-viewer
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      src={src}
      alt={alt}
      camera-orbit={cameraOrbit}
      field-of-view={fieldOfView}
      exposure={exposure}
      environment-image={environmentImage}
      interaction-prompt={interactionPrompt}
      shadow-intensity={shadowIntensity}
      {...(cameraControls ? { 'camera-controls': '' } : {})}
      {...(disableZoom ? { 'disable-zoom': '' } : {})}
      className={className}
      style={style}
    />
  );
}
