'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { site } from '@/lib/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/company-profile', label: 'Company Profile' },
  { href: '/contact', label: 'Contact' },
];

function isCurrent(href: string, pathname: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the overlay whenever the route changes (a link was tapped).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock page scroll while the overlay is open; Escape closes it.
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const previous = html.style.overflow;
    const toggle = toggleRef.current;
    html.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      html.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
      toggle?.focus();
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="topstrip">
        <div className="wrap">
          <span>
            {site.location} &nbsp;|&nbsp; {site.hours}
          </span>
          <span>
            Call or WhatsApp:{' '}
            {site.phones.map((p, i) => (
              <span key={p.tel}>
                {i > 0 && '  |  '}
                <a href={`tel:${p.tel}`}>{p.display}</a>
              </span>
            ))}
          </span>
        </div>
      </div>

      <header className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-menu-open' : ''}`}>
        <div className="wrap nav-row">
          <Link className="logo" href="/" aria-label={`${site.name}, home`}>
            <Image src="/images/logo.png" alt="" width={640} height={417} priority />
          </Link>

          <nav className="navpill" aria-label="Main">
            {links.map((l) => (
              <Link key={l.href} href={l.href} aria-current={isCurrent(l.href, pathname) ? 'page' : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>

          <Link className="btn btn-gold nav-cta" href="/contact#quote">
            Request a Quote <span className="arrow" aria-hidden="true">&rarr;</span>
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-toggle-label">{open ? 'Close' : 'Menu'}</span>
            <span className="menu-toggle-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div id={menuId} className="menu-overlay" role="dialog" aria-modal="true" aria-label="Site menu" inert={!open}>
        <div className="menu-glow" aria-hidden="true" />

        <div className="menu-top wrap">
          <Link className="logo" href="/" aria-label={`${site.name}, home`}>
            <Image src="/images/logo.png" alt="" width={640} height={417} />
          </Link>
          <button ref={closeRef} type="button" className="menu-close" onClick={() => setOpen(false)}>
            <span className="menu-toggle-label">Close</span>
            <span className="menu-toggle-icon is-open" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>

        <nav className="menu-links wrap" aria-label="Mobile">
          {links.map((l, i) => {
            const current = isCurrent(l.href, pathname);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`menu-link${current ? ' is-current' : ''}`}
                style={{ ['--i' as string]: i }}
                aria-current={current ? 'page' : undefined}
              >
                <span className="menu-link-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="menu-link-label">{l.label}</span>
                <span className="menu-link-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="menu-foot wrap" style={{ ['--i' as string]: links.length }}>
          <Link className="btn btn-gold menu-cta" href="/contact#quote">
            Request a Quotation <span className="arrow" aria-hidden="true">&rarr;</span>
          </Link>

          <ul className="menu-phones">
            {site.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`}>
                  <span>{p.display}</span>
                  <small>{p.label}</small>
                </a>
              </li>
            ))}
          </ul>

          <div className="menu-meta">
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
