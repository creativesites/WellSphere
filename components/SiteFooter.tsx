import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot">
          <div>
            <Image src="/images/logo.png" alt={site.name} width={640} height={417} />
            <p style={{ margin: 0, maxWidth: 300 }}>{site.tagline}</p>
          </div>
          <div>
            <h2>Company</h2>
            <Link href="/about">About Us</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/company-profile">Company Profile</Link>
          </div>
          <div>
            <h2>Services</h2>
            <Link href="/services">Compliance</Link>
            <Link href="/services">Technology</Link>
            <Link href="/services">Supplies</Link>
          </div>
          <div>
            <h2>Contact</h2>
            {site.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`}>
                {p.display}
              </a>
            ))}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
        <div className="base">
          <span>
            &copy; {new Date().getFullYear()} {site.name} &middot; PACRA Reg. No. {site.registrationNumber}
          </span>
          <span>Quality &middot; Integrity &middot; Reliability</span>
        </div>
      </div>
    </footer>
  );
}
