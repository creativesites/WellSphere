'use client';

import { type CSSProperties, type ElementType, type HTMLAttributes, type ReactNode, useEffect, useRef, useState } from 'react';

type Props = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  as?: ElementType;
  delay?: number; // milliseconds, used to stagger siblings
  href?: string;
};

/**
 * Fades and lifts an element in once it scrolls into view. Animates once, never reverses.
 * Without JavaScript, or with reduced motion, CSS keeps the content visible.
 */
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0, style, ...rest }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const merged = { '--reveal-delay': `${delay}ms`, ...style } as CSSProperties;

  return (
    <Tag
      ref={ref}
      style={merged}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
