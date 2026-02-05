import React, { useEffect, useRef } from 'react';

export default function GridBackground() {
  const posRef = useRef({ mx: (typeof window !== 'undefined' ? window.innerWidth / 2 : 0), my: (typeof window !== 'undefined' ? window.innerHeight / 2 : 0), fx: (typeof window !== 'undefined' ? window.innerWidth / 2 : 0), fy: (typeof window !== 'undefined' ? window.innerHeight / 2 : 0), raf: null });

  useEffect(() => {
    const grid = document.querySelector('.grid');
    if (!grid) return undefined;

    const ref = posRef.current;
    let mouseX = ref.mx;
    let mouseY = ref.my;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      grid.style.setProperty('--mx', mouseX + 'px');
      grid.style.setProperty('--my', mouseY + 'px');
    };

    const tick = () => {
      ref.fx += (mouseX - ref.fx) * 0.12;
      ref.fy += (mouseY - ref.fy) * 0.12;
      grid.style.setProperty('--fx', ref.fx + 'px');
      grid.style.setProperty('--fy', ref.fy + 'px');
      ref.raf = requestAnimationFrame(tick);
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    ref.raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(ref.raf);
    };
  }, []);

  return <div className="grid" />;
}
