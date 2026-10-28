import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Projects and Experience',
  description: 'Selected projects across compliance, environmental, technology, systems and supply work for WellSphere clients.',
  alternates: { canonical: '/projects' },
};

// TODO: replace these placeholders with real completed projects supplied by the client.
// Each needs a title, a sector, a year, a short outcome and a photo.
const projects = [
  { tag: 'Software', title: '[Project title: e.g. Client portal or practice management system]' },
  { tag: 'Environmental', title: '[Project title: e.g. Environmental Impact Assessment]' },
  { tag: 'Compliance', title: '[Project title: e.g. Company registration and annual filings]' },
  { tag: 'Systems', title: '[Project title: e.g. Dashboard and system integration]' },
  { tag: 'Supply', title: '[Project title: e.g. Institutional supply and delivery contract]' },
  { tag: 'Healthcare', title: '[Project title: e.g. Clinic operations and billing system]' },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="glow glow-1" aria-hidden="true" />
        <div className="wrap">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / Projects
          </p>
          <p className="kicker">Projects and experience</p>
          <h1 className="display">
            Work we have <em>delivered</em>.
          </h1>
          <p className="lead">A selection of completed projects across compliance, environmental, technology and supply work.</p>
        </div>
      </section>

      <section className="block tight-top">
        <div className="wrap">
          <div className="cert-grid" style={{ marginBottom: 56 }}>
            <div className="cert">
              <h3>7 divisions</h3>
              <p>Compliance, environment, tech, systems, supplies, procurement.</p>
            </div>
            <div className="cert">
              <h3>PACRA</h3>
              <p>Registered company, Reg. No. {site.registrationNumber}.</p>
            </div>
            <div className="cert">
              <h3>ZRA Smart Invoices</h3>
              <p>Tax compliant trading.</p>
            </div>
          </div>

          <div className="proj-grid">
            {projects.map((p, i) => (
              <Reveal key={p.title} className="proj" delay={(i % 3) * 100}>
                <div className="shot">Project photo
                  <br />
                  (add image)
                </div>
                <div className="body">
                  <span className="tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>[Short description of the outcome delivered.]</p>
                  <p className="muted" style={{ fontSize: 13, fontWeight: 700, color: 'var(--gold-300)' }}>
                    [Client sector] &middot; [Year]
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Have a similar project in mind?</h2>
          <Link className="btn btn-green" href="/contact#quote">
            Request a Quotation
          </Link>
        </div>
      </section>
    </>
  );
}
