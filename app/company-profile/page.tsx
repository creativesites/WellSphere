import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Company Profile and Certificates',
  description: 'Download the Wellsphere General Dealers company profile (PDF) and review our registrations and certificates.',
  alternates: { canonical: '/company-profile' },
};

const certificates = [
  { title: 'PACRA Certificate of Registration', status: 'On record', ok: true, text: `Registered company, Reg. No. ${site.registrationNumber}.` },
  { title: 'ZRA TPIN and Tax Clearance Certificate', status: 'Upload pending', ok: false, text: 'Current Tax Clearance Certificate (TCC).' },
  { title: 'ZRA Smart Invoice registration', status: 'Upload pending', ok: false, text: 'Confirmation of official ZRA Smart Invoices.' },
  { title: 'NAPSA and WCFCB registration', status: 'Upload pending', ok: false, text: "Employer registration for pension and workers' compensation." },
  { title: 'Council trading permit', status: 'Upload pending', ok: false, text: 'Local council business permit for Lusaka.' },
  { title: 'ZEMA licences and certificates', status: 'Upload pending', ok: false, text: 'Environmental approvals and compliance certificates.' },
  { title: 'Professional registrations', status: 'Upload pending', ok: false, text: 'HPCZ, NMCZ, EIZ and ZICA registrations for our team.' },
];

export default function CompanyProfilePage() {
  return (
    <>
      <section className="page-hero">
        <div className="glow glow-1" aria-hidden="true" />
        <div className="wrap">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / Company Profile
          </p>
          <p className="kicker">Company profile and certificates</p>
          <h1 className="display">
            Download our <em>company profile</em>.
          </h1>
          <p className="lead">
            Our services, leadership, registrations and contact details in one document, ready to share with your procurement
            or management team.
          </p>
        </div>
      </section>

      <section className="block tight-top">
        <div className="wrap">
          <Reveal className="dl-card">
            <div className="cover">
              <Image src="/images/logo.jpg" alt="" width={300} height={170} style={{ width: '100%', height: 'auto' }} />
              <b>Company Profile</b>
              <span>Wellsphere General Dealers</span>
            </div>
            <div>
              <p className="kicker">PDF &middot; 7 pages</p>
              <h2>Wellsphere Company Profile</h2>
              <p>
                Seven service divisions, our professional team, healthcare focus, registrations and how to reach us, formatted
                for printing and sharing.
              </p>
              <a className="btn btn-gold" href={site.profilePdf} download>
                Download Company Profile (PDF) <span className="arrow" aria-hidden="true">&darr;</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="block band-dark">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Company at a glance</p>
            <h2 className="h2 serif">The facts procurement teams ask for first.</h2>
          </Reveal>
          <Reveal delay={120}>
            <table className="facts" style={{ marginTop: 32 }}>
              <tbody>
                <tr>
                  <th scope="row">Legal name</th>
                  <td>{site.name}</td>
                </tr>
                <tr>
                  <th scope="row">Registration</th>
                  <td>Registered with PACRA, Reg. No. {site.registrationNumber}</td>
                </tr>
                <tr>
                  <th scope="row">Tax status</th>
                  <td>ZRA tax compliant, issuing official ZRA Smart Invoices</td>
                </tr>
                <tr>
                  <th scope="row">Location</th>
                  <td>{site.location}</td>
                </tr>
                <tr>
                  <th scope="row">Team</th>
                  <td>7 professionals across engineering, healthcare, finance and administration</td>
                </tr>
                <tr>
                  <th scope="row">Service divisions</th>
                  <td>7 divisions covering compliance, environmental, technology, systems, supplies and procurement</td>
                </tr>
                <tr>
                  <th scope="row">Sectors served</th>
                  <td>Private corporations, government institutions, healthcare organisations and local communities</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Phone / WhatsApp</th>
                  <td>{site.phones.map((p) => p.display).join('  |  ')}</td>
                </tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Certificates and registrations</p>
            <h2 className="h2 serif">
              Documents on <em>record</em>.
            </h2>
            <p className="sub">Copies of each certificate will be published here as they are supplied.</p>
          </Reveal>
          <div className="cert-grid" style={{ marginTop: 48 }}>
            {certificates.map((c, i) => (
              <Reveal key={c.title} className="cert" delay={(i % 3) * 90}>
                <span className={`status${c.ok ? ' ok' : ''}`}>{c.status}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Need a copy of a specific certificate? Ask us.</h2>
          <Link className="btn btn-green" href="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
