'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/company-profile', label: 'Company Profile' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
                {i > 0 && '  |  '}
                <a href={`tel:${p.tel}`}>{p.display}</a>
              </span>
            ))}
          </span>
        </div>
      </div>
      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <div className="wrap">
          <Link className="logo" href="/" aria-label={`${site.name}, home`}>
            <Image src="/images/logo.jpg" alt="" width={300} height={170} priority />
          </Link>
          <nav className="navpill" aria-label="Main">
            {links.map((l) => {
              const current = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
              return (
                <Link key={l.href} href={l.href} aria-current={current ? 'page' : undefined}>
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <Link className="btn btn-gold" href="/contact#quote">
            Request a Quote <span className="arrow" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </header>
    </>
  );
}
