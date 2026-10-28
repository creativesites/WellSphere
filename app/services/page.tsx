import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Seven service divisions: PACRA and ZRA compliance, ZEMA environmental services, software engineering, AI and automation, building materials, office supplies and procurement.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="glow glow-1" aria-hidden="true" />
        <div className="wrap">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / Our Services
          </p>
          <p className="kicker">What we do</p>
          <h1 className="display">
            Seven divisions, <em>one</em> dependable partner.
          </h1>
          <p className="lead">
            From statutory registrations and environmental approvals to software, building supplies and office equipment,
            we deliver under one roof.
          </p>
        </div>
      </section>

      <section className="block tight-top">
        <div className="wrap">
          <div className="field-grid">
            <Reveal className="field-shot">
              <Image
                src="/images/field/supply-delivery.jpg"
                alt="A Wellsphere team member hands over a supply delivery note and power tools at a construction site"
                fill
                sizes="(max-width: 640px) 100vw, 60vw"
                style={{ objectFit: 'cover' }}
              />
              <span className="field-caption">Supply and delivery to client sites</span>
            </Reveal>
            <Reveal className="field-shot" delay={120}>
              <Image
                src="/images/field/building-site.jpg"
                alt="A builder laying blocks with mortar on a construction site"
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
              />
              <span className="field-caption">Building materials and construction</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="block tight-top">
        <div className="wrap">
          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal key={s.id} id={s.id} className="svc-card" delay={(i % 2) * 100}>
                <span className="no">{s.number}</span>
                <h2>{s.title}</h2>
                <p>{s.summary}</p>
                <ul>
                  {s.items.map((item) => (
                    <li key={item.label}>
                      <b>{item.label}</b>
                      {item.detail}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            <Reveal className="svc-card" style={{ borderColor: 'rgba(227,197,103,0.35)' }}>
              <p className="kicker">Healthcare focus</p>
              <h2>Built with healthcare in mind</h2>
              <ul>
                <li>
                  <b>Registered nursing</b>
                  Our NMCZ-licensed registered nurse directs healthcare operations compliance, medical supplies advisory and
                  clinical system implementation.
                </li>
                <li>
                  <b>Clinical insight</b>
                  Our HPCZ-licensed oral surgeon sits in company leadership.
                </li>
                <li>
                  <b>Secure systems</b>
                  Custom software and database architecture for sensitive patient records.
                </li>
                <li>
                  <b>Digital mental health</b>
                  A Zambian digital mental health platform for patients and registered practitioners is in development.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Tell us what you need. We will match it with the right team.</h2>
          <Link className="btn btn-green" href="/contact#quote">
            Request a Quotation
          </Link>
        </div>
      </section>
    </>
  );
}
