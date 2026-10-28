import type { Metadata } from 'next';
import Link from 'next/link';
import { QuoteForm } from '@/components/QuoteForm';
import { Reveal } from '@/components/Reveal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us and Request a Quotation',
  description: `Call, WhatsApp or email Wellsphere General Dealers in Lusaka, or request a quotation online.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const [primary, ...others] = site.phones;

  return (
    <>
      <section className="page-hero">
        <div className="glow glow-1" aria-hidden="true" />
        <div className="wrap">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / Contact
          </p>
          <p className="kicker">Get in touch</p>
          <h1 className="display">
            Let&apos;s <em>work</em> together.
          </h1>
          <p className="lead">
            Tell us what you need. We will match it with the right team, and keep it compliant, dependable and on time.
          </p>
        </div>
      </section>

      <section className="block tight-top">
        <div className="wrap contact-grid">
          <div className="info">
            <Reveal className="info-card">
              <h3>Call or WhatsApp</h3>
              <p>
                <a href={`tel:${primary.tel}`}>{primary.display}</a> &nbsp;(call and WhatsApp)
              </p>
              <p className="small">
                {others.map((p, i) => (
                  <span key={p.tel}>
                    {i > 0 && '  |  '}
                    <a href={`tel:${p.tel}`}>{p.display}</a>
                  </span>
                ))}
              </p>
              <div className="wa-row">
                <a className="btn btn-gold" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
                <a className="btn btn-ghost" href={`tel:${primary.tel}`}>
                  Call now
                </a>
              </div>
            </Reveal>
            <Reveal className="info-card" delay={100}>
              <h3>Email</h3>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p className="small">Quotation requests are answered as soon as possible.</p>
            </Reveal>
            <Reveal className="info-card" delay={200}>
              <h3>Business location</h3>
              <p>{site.name}, {site.location}</p>
              <p className="small">Registered with PACRA, Reg. No. {site.registrationNumber}</p>
              <p className="small">{site.hours}</p>
            </Reveal>
            <div className="map">Map: insert the office address once confirmed.</div>
          </div>

          <Reveal className="form-card" delay={120} id="quote">
            <p className="kicker">Request a quotation</p>
            <h2>Tell us what you need.</h2>
            <p>The more detail you give, the faster we can quote.</p>
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Prefer to talk first? Message us on WhatsApp.</h2>
          <a className="btn btn-green" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp {primary.display}
          </a>
        </div>
      </section>
    </>
  );
}
