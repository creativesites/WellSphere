import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { site, team } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Wellsphere General Dealers is a Zambian multi-disciplinary enterprise founded on compliance, innovation and total customer satisfaction. Meet our leadership team.',
  alternates: { canonical: '/about' },
};

const objectives = [
  'Deliver compliance and regulatory work accurately and on time.',
  'Build secure, practical technology that fits how our clients operate.',
  'Supply quality goods at competitive, transparent pricing.',
  'Give every client a single, accountable point of contact.',
  'Build lasting partnerships on integrity and consistent service.',
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="glow glow-1" aria-hidden="true" />
        <div className="wrap">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / About Us
          </p>
          <p className="kicker">About us</p>
          <h1 className="display">
            A multi-disciplinary <em>Zambian</em> enterprise.
          </h1>
          <p className="lead">
            Founded on the principles of compliance, innovation and total customer satisfaction, WellSphere serves private
            corporations, government institutions, healthcare organisations and local communities.
          </p>
        </div>
      </section>

      <section className="block tight-top">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">Company background</p>
            <h2 className="h2 serif">Reliable, efficient, quality-driven.</h2>
            <p className="sub">
              Wellsphere General Dealers is a Zambian business committed to providing reliable, efficient and quality-driven
              services. We meet the diverse needs of our customers through professional service delivery, general trading,
              supply of goods and tailored business solutions.
            </p>
            <p className="sub" style={{ marginTop: 16 }}>
              We recognise that reliability, integrity, efficiency and strong business relationships are what keep clients
              coming back. Every engagement is run with care, from the first enquiry to the final handover.
            </p>
          </Reveal>
          <Reveal delay={150} className="info-card">
            <h3>Registered and compliant</h3>
            <p>Registered with PACRA under Reg. No. {site.registrationNumber}, and issuing official ZRA Smart Invoices.</p>
            <p className="small" style={{ marginTop: 14 }}>
              Based in {site.location}, with a team of seven professionals across engineering, healthcare, finance and
              administration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="block tint">
        <div className="wrap">
          <div className="svc-grid">
            <Reveal className="svc-card">
              <p className="kicker">Our mission</p>
              <h2 className="h3">Dependable solutions, delivered well.</h2>
              <p className="sub">
                To deliver reliable, efficient and quality-driven services and supply solutions that help our clients meet
                their obligations and grow with confidence.
              </p>
            </Reveal>
            <Reveal className="svc-card" delay={120}>
              <p className="kicker">Our vision</p>
              <h2 className="h3">A trusted partner for Zambia.</h2>
              <p className="sub">
                To be the multi-disciplinary business partner of choice for corporate, government and healthcare clients
                across Zambia.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap split">
          <Reveal>
            <p className="kicker">Our objectives</p>
            <h2 className="h2 serif">What we commit to on every engagement.</h2>
          </Reveal>
          <ol className="list" style={{ margin: 0 }}>
            {objectives.map((o, i) => (
              <Reveal as="li" key={o} delay={i * 80}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <p style={{ color: '#c9d6ce', fontSize: 16, margin: 0 }}>{o}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="block light">
        <div className="wrap">
          <Reveal>
            <p className="kicker">What we stand for</p>
            <h2 className="h2 serif">
              Quality, <em>integrity</em> and reliability.
            </h2>
          </Reveal>
          <div className="values">
            {[
              { h: 'Quality', p: 'Accurate work and dependable products that meet the specification.' },
              { h: 'Integrity', p: 'Honest pricing, clear communication and compliance with every rule that applies.' },
              { h: 'Reliability', p: 'We do what we say, when we say it, and we stay with the client to the end.' },
            ].map((v, i) => (
              <Reveal key={v.h} delay={i * 120}>
                <div className="line" aria-hidden="true" />
                <h3>{v.h}</h3>
                <p>{v.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="team">
        <div className="wrap">
          <div className="head">
            <Reveal>
              <p className="kicker">Leadership and professional team</p>
              <h2 className="h2 serif">
                The people <em>behind</em> WellSphere.
              </h2>
              <p className="sub">Seven professionals across engineering, healthcare, finance and administration.</p>
            </Reveal>
          </div>
          <div className="svc-grid">
            {team.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 2) * 100} className="svc-card" id={m.slug}>
                <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: 22, alignItems: 'start' }}>
                  <div style={{ position: 'relative', width: 130, height: 160, borderRadius: 14, overflow: 'hidden' }}>
                    <Image src={m.photo} alt={m.name} fill sizes="130px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                  </div>
                  <div>
                    <span className="status">{m.role}</span>
                    <h2 className="h3" style={{ marginTop: 12 }}>
                      {m.name}
                    </h2>
                    <p style={{ color: 'var(--gold-300)', fontSize: 13, fontWeight: 600, margin: '0 0 8px' }}>{m.credentials}</p>
                    <p style={{ color: '#9db2a5', fontSize: 15, margin: 0 }}>{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="hint" style={{ marginTop: 28 }}>
            Qualification details are taken from the company profile. Please confirm before publishing.
          </p>
        </div>
      </section>
    </>
  );
}
