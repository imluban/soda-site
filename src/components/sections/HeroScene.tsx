'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useFlavor } from '@/lib/FlavorContext';
import { ASSETS, FLAVORS } from '@/lib/constants';
import type { Flavor } from '@/types';

// Declare model-viewer types
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string; alt?: string; 'camera-controls'?: string;
          'disable-zoom'?: string; 'shadow-intensity'?: string;
          'environment-image'?: string; exposure?: string;
          'interaction-prompt'?: string; 'camera-orbit'?: string;
          'field-of-view'?: string;
        },
        HTMLElement
      >;
    }
  }
}

interface BerryData {
  rx: number; ry: number; angle: number;
  baseX: number; baseY: number;
}

const BERRY_POSITIONS = [
  { cls: 'b1', top: '25%', left: '30%', w: 220 },
  { cls: 'b2', top: '60%', left: '42%', w: 100 },
  { cls: 'b3', top: '30%', left: '62%', w: 250 },
  { cls: 'b4', top: '15%', left: '48%', w: 140 },
  { cls: 'b5', top: '75%', left: '20%', w: 120 },
  { cls: 'b6', top: '45%', left: '75%', w: 180 },
];
const BG_BERRY_POSITIONS = [
  { cls: 'b7', top: '15%', left: '40%', w: 80, opacity: 0.7 },
  { cls: 'b8', top: '50%', left: '55%', w: 70, opacity: 0.6 },
  { cls: 'b9', top: '80%', left: '35%', w: 75, opacity: 0.7 },
];

export default function HeroScene() {
  const { activeFlavor, isSwitching } = useFlavor();
  const prevFlavor = useRef<Flavor>('classic');

  const canRef = useRef<HTMLElement>(null);
  const berriesFGRef = useRef<HTMLDivElement>(null);
  const berriesBGRef = useRef<HTMLDivElement>(null);
  const leavesBGRef = useRef<HTMLDivElement>(null);
  const heroCenterRef = useRef<HTMLDivElement>(null);

  const mouseRef = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const currentMouseRef = useRef({ x: 0, y: 0 });
  const switchSpinRef = useRef(0);
  const rafRef = useRef<number>(0);
  const berryDataRef = useRef<BerryData[]>([]);
  const blueTextureRef = useRef<unknown>(null);
  const greenTextureRef = useRef<unknown>(null);

  // Init berry data
  useEffect(() => {
    const total = BERRY_POSITIONS.length + BG_BERRY_POSITIONS.length;
    berryDataRef.current = Array.from({ length: total }, () => ({
      rx: 0, ry: 0,
      angle: Math.random() * 360,
      baseX: 0, baseY: 0,
    }));
  }, []);

  // Mouse listener
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
        px: e.clientX,
        py: e.clientY,
      };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Preload textures on can load
  const handleCanLoad = useCallback(async () => {
    const can = canRef.current as HTMLElement & {
      createTexture: (url: string) => Promise<unknown>;
      model?: { materials: Array<{ pbrMetallicRoughness: { baseColorTexture: { setTexture: (t: unknown) => void } | null } }> };
    };
    if (!can) return;
    try {
      blueTextureRef.current = await can.createTexture(ASSETS.blueBaseColor);
      greenTextureRef.current = await can.createTexture(ASSETS.greenBaseColor);
      // Shader warm-up
      if (can.model) {
        const mat = can.model.materials[0];
        if (mat?.pbrMetallicRoughness.baseColorTexture) {
          mat.pbrMetallicRoughness.baseColorTexture.setTexture(blueTextureRef.current);
          await new Promise<void>(r => requestAnimationFrame(() => r()));
          mat.pbrMetallicRoughness.baseColorTexture.setTexture(greenTextureRef.current);
        }
      }
    } catch (e) { console.error('Texture preload failed', e); }
  }, []);

  // Attach load listener via DOM after handleCanLoad is defined
  useEffect(() => {
    const el = canRef.current;
    if (!el) return;
    el.addEventListener('load', handleCanLoad as EventListener);
    return () => el.removeEventListener('load', handleCanLoad as EventListener);
  }, [handleCanLoad]);

  // Flavor switch animation
  useEffect(() => {
    if (activeFlavor === prevFlavor.current) return;
    prevFlavor.current = activeFlavor;

    const can = canRef.current as HTMLElement & {
      model?: { materials: Array<{ pbrMetallicRoughness: { baseColorTexture: { setTexture: (t: unknown) => void } | null } }> };
      cameraOrbit?: string;
    };
    const heroCenter = heroCenterRef.current;
    const allBerryEls = document.querySelectorAll<HTMLElement>('.berry');

    // GSAP is loaded via CDN in _document, access via window
    const gsap = (window as Window & { gsap?: { to: Function; set: Function; timeline: Function } }).gsap;
    if (!gsap) return;

    // Background color switch handled by CSS class (see layout)
    // Can spin
    const spinObj = { val: 0, blur: 0 };
    gsap.to(spinObj, {
      val: 360, blur: 15, duration: 0.6, ease: 'power2.in',
      onUpdate: () => {
        switchSpinRef.current = spinObj.val;
        if (can) can.style.filter = `blur(${spinObj.blur}px)`;
      },
      onComplete: () => {
        // Swap texture
        if (can?.model) {
          const tex = activeFlavor === 'blue' ? blueTextureRef.current : greenTextureRef.current;
          can.model.materials.forEach(mat => {
            if (mat.pbrMetallicRoughness.baseColorTexture) {
              mat.pbrMetallicRoughness.baseColorTexture.setTexture(tex);
            }
          });
        }
        gsap.to(spinObj, {
          val: 720, blur: 0, duration: 1.5, ease: 'back.out(0.7)',
          onUpdate: () => {
            switchSpinRef.current = spinObj.val;
            if (can) can.style.filter = `blur(${spinObj.blur}px)`;
          },
          onComplete: () => {
            switchSpinRef.current = 0;
            if (can) can.style.filter = 'none';
          },
        });
      },
    });

    // Berry implode / explode
    let completed = 0;
    allBerryEls.forEach((berry, i) => {
      const data = berryDataRef.current[i] || { rx: 0, ry: 0, angle: 0, baseX: 0, baseY: 0 };
      const bW = berry.offsetWidth / 2;
      const bH = berry.offsetHeight / 2;
      const cX = window.innerWidth / 2 - berry.offsetLeft - bW;
      const cY = window.innerHeight / 2 - berry.offsetTop - bH;
      const nextBaseX = (Math.random() - 0.5) * 200;
      const nextBaseY = (Math.random() - 0.5) * 200;

      const tl = gsap.timeline();
      tl.to(berry, {
        x: cX, y: cY, rotation: data.angle + 45,
        scale: 0.1, opacity: 0, duration: 0.5, ease: 'power2.in',
        onComplete: () => {
          (berry as HTMLElement & { src?: string }).src =
            activeFlavor === 'blue' ? ASSETS.blueberryGlb : ASSETS.cherryGlb;
          if (heroCenter) heroCenter.style.zIndex = '50';
        },
      })
        .to(berry, { duration: 0.3 })
        .to(berry, {
          onStart: () => { if (heroCenter) heroCenter.style.zIndex = '1'; },
          x: nextBaseX, y: nextBaseY,
          rotation: data.angle + 90,
          scale: 1, opacity: 1,
          duration: 0.9, ease: 'back.out(1.5)',
          onComplete: () => {
            berryDataRef.current[i] = {
              ...data,
              angle: data.angle + 90,
              baseX: nextBaseX, baseY: nextBaseY,
              rx: 0, ry: 0,
            };
            completed++;
          },
        });
    });
  }, [activeFlavor]);

  // Main animation loop
  useEffect(() => {
    const loop = () => {
      const time = Date.now() * 0.001;
      const mouse = mouseRef.current;
      const cm = currentMouseRef.current;
      cm.x += (mouse.x - cm.x) * 0.05;
      cm.y += (mouse.y - cm.y) * 0.05;

      // Tilt can
      const can = canRef.current as HTMLElement & { cameraOrbit?: string };
      if (can) {
        can.setAttribute('camera-orbit', `${cm.x * 40 + switchSpinRef.current}deg ${90 + cm.y * 20}deg 380%`);
      }

      // Parallax containers
      if (berriesFGRef.current) {
        berriesFGRef.current.style.transform = `translate(${cm.x * 60}px,${cm.y * 60}px)`;
      }
      if (berriesBGRef.current) {
        berriesBGRef.current.style.transform = `translate(${cm.x * -30}px,${cm.y * -30}px)`;
      }
      if (leavesBGRef.current) {
        leavesBGRef.current.style.transform = `translate(${cm.x * -15}px,${cm.y * -15}px)`;
      }

      // Berry float + repulsion
      if (!isSwitching) {
        const allBerryEls = document.querySelectorAll<HTMLElement>('.berry');
        allBerryEls.forEach((berry, i) => {
          const data = berryDataRef.current[i];
          if (!data) return;
          const rect = berry.getBoundingClientRect();
          const bx = rect.left + rect.width / 2;
          const by = rect.top + rect.height / 2;
          const dx = mouse.px - bx;
          const dy = mouse.py - by;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let tRx = 0, tRy = 0, speedMult = 1;
          if (dist < 400 && dist > 0) {
            const force = (400 - dist) / 400;
            tRx = (dx / dist) * force * -80;
            tRy = (dy / dist) * force * -80;
            speedMult = 1 + force * 5;
          }
          data.rx += (tRx - data.rx) * 0.1;
          data.ry += (tRy - data.ry) * 0.1;
          data.angle += 0.2 * speedMult;
          const durs = [5, 7, 6, 8, 5.5, 6.5, 9, 11, 10];
          const dur = durs[i % 9];
          const phase = (time + i * 0.7) * (Math.PI * 2 / dur);
          const floatY = Math.sin(phase) * 15;
          const floatA = Math.cos(phase) * 6;
          berry.style.transform = `translate(calc(${data.rx + data.baseX}px),calc(${data.ry + data.baseY}px + ${floatY}px)) rotate(calc(${data.angle}deg + ${floatA}deg))`;
        });
      }

      // Leaf float
      document.querySelectorAll<HTMLElement>('.leaf').forEach((leaf, i) => {
        const dur = 10 + i * 2;
        const phase = (time + i * 1.2) * (Math.PI * 2 / dur);
        const fy = Math.sin(phase) * 20;
        const fx = Math.cos(phase * 0.5) * 15;
        const fa = Math.sin(phase * 0.3) * 15;
        leaf.style.transform = `translate(${fx}px,${fy}px) rotate(${fa}deg)`;
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isSwitching]);

  const flavorConfig = FLAVORS.find(f => f.id === activeFlavor)!;
  const berryGlb = activeFlavor === 'blue' ? ASSETS.blueberryGlb : ASSETS.cherryGlb;

  return (
    <div className="hero-content">
      {/* Far background leaves */}
      <div className="leaves-container" ref={leavesBGRef}>
        {['45deg 75deg 105%', '-30deg 60deg 105%', '120deg 85deg 105%', '10deg 45deg 105%'].map((orbit, i) => (
          <model-viewer
            key={i}
            className={`leaf l${i + 1}`}
            src={ASSETS.leavesGlb}
            environment-image="neutral"
            exposure="1.0"
            interaction-prompt="none"
            camera-orbit={orbit}
          />
        ))}
      </div>

      {/* Left column */}
      <div className="hero-left">
        <h1 className="main-title">
          <span className="outline">Pure</span><br />
          Zero
        </h1>
        <p className="description">
          Unleash the crisp taste of zero sugar.<br />
          Refreshment redefined in every bubble —<br />
          all in one sleek design.
        </p>
        <div className="cta-group">
          <button className="primary-btn">
            Shop Now
            <span className="plus-icon">+</span>
          </button>
        </div>
        <div className="award-badge">
          <div className="award-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 15L15 18L19 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="award-text">
            <span className="award-title">DESIGN AWARDS</span>
            <span className="award-subtitle">PREMIUM BEVERAGE 2025</span>
          </div>
        </div>
      </div>

      {/* Background berries */}
      <div className="berries-container-bg" ref={berriesBGRef}>
        {BG_BERRY_POSITIONS.map((b, i) => (
          <model-viewer
            key={b.cls}
            className={`berry ${b.cls}`}
            src={berryGlb}
            environment-image="neutral"
            exposure="1.0"
            interaction-prompt="none"
            camera-orbit={['−20deg 110deg 105%', '160deg 45deg 105%', '45deg 20deg 105%'][i]}
            style={{ top: b.top, left: b.left, width: b.w, height: b.w, opacity: b.opacity }}
          />
        ))}
      </div>

      {/* Center 3D can */}
      <div className="hero-center" ref={heroCenterRef}>
        <model-viewer
          id="product-model"
          ref={canRef as React.RefObject<HTMLElement>}
          src={ASSETS.canGlb}
          alt="Diet Soda 3D Model"
          camera-controls=""
          disable-zoom=""
          shadow-intensity="0"
          environment-image="neutral"
          exposure="1.5"
          interaction-prompt="none"
          camera-orbit="0deg 90deg 380%"
          field-of-view="30deg"
          className="main-product-3d"
        />
      </div>

      {/* Foreground berries */}
      <div className="berries-container" ref={berriesFGRef}>
        {BERRY_POSITIONS.map((b, i) => (
          <model-viewer
            key={b.cls}
            className={`berry ${b.cls}`}
            src={berryGlb}
            environment-image="neutral"
            exposure="1.2"
            interaction-prompt="none"
            camera-orbit={['45deg 120deg 105%', '-120deg 45deg 105%', '200deg 90deg 105%', '10deg 20deg 105%', '-45deg 160deg 105%', '80deg 75deg 105%'][i]}
            style={{ top: b.top, left: b.left, width: b.w, height: b.w }}
          />
        ))}
      </div>

      {/* Right column */}
      <div className="hero-right">
        <div className="product-carousel">
          <div className="carousel-cards">
            {FLAVORS.map(fl => (
              <FlavorCardInline key={fl.id} flavor={fl} />
            ))}
          </div>
          <div className="carousel-nav">
            <button className="nav-arrow" aria-label="Previous">←</button>
            <button className="nav-arrow" aria-label="Next">→</button>
          </div>
        </div>
        <h2 className="side-title">
          <span className="outline">Refreshingly</span><br />
          Clean
        </h2>
      </div>
    </div>
  );
}

// Inline flavor card to avoid circular import
function FlavorCardInline({ flavor }: { flavor: typeof FLAVORS[0] }) {
  const { activeFlavor, setFlavor, isSwitching } = useFlavor();
  const isActive = activeFlavor === flavor.id;
  return (
    <div
      className={`card${isActive ? ' active' : ''}`}
      data-flavor={flavor.id}
      onClick={() => !isSwitching && setFlavor(flavor.id)}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onKeyDown={e => e.key === 'Enter' && !isSwitching && setFlavor(flavor.id)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={flavor.imageSrc}
        alt={flavor.name}
        style={{
          width: 140,
          height: 'auto',
          marginTop: '-8rem',
          filter: flavor.id === 'blue'
            ? 'drop-shadow(0 20px 35px rgba(0,0,0,0.5)) brightness(0.7)'
            : 'drop-shadow(0 20px 35px rgba(0,0,0,0.5))',
          display: 'block',
          pointerEvents: 'none',
        }}
      />
      <div className="card-info">
        <span>{flavor.name}</span>
        <span>{flavor.price}</span>
      </div>
    </div>
  );
}
