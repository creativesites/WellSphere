import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { site, team } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: `${site.name} | Compliance, Technology and Supply in Lusaka` },
  description: site.description,
  alternates: { canonical: '/' },
};

const marqueeItems = [
  'PACRA & Compliance',
  'ZEMA & Environmental',
  'Software Engineering',
  'AI & Automation',
  'Building Materials',
  'Office & Cleaning Supplies',
  'Procurement & Logistics',
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="glow glow-1" aria-hidden="true" />
        <div className="glow glow-2" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">Lusaka, Zambia &middot; Multi-disciplinary enterprise</p>
            <h1 className="display hero-display">
              <span>Reliable solutions.</span>
              <span>
                <em>Quality</em> service.
              </span>
              <span>Lasting partnerships.</span>
            </h1>
            <p className="lead">
              Compliance, technology and procurement for corporate organisations, government institutions and healthcare
              providers. One accountable partner, under one roof.
            </p>
            <div className="ctas">
              <Link className="btn btn-gold" href="/contact#quote">
                Request a Quotation <span className="arrow" aria-hidden="true">&rarr;</span>
              </Link>
              <Link className="btn btn-ghost" href="/services">
                Explore Services
              </Link>
            </div>
            <div className="trust">
              <span>
                <span className="dot" aria-hidden="true" />
                <b>PACRA</b> Reg. No. {site.registrationNumber}
              </span>
              <span>
                <b>ZRA</b> Smart Invoices
              </span>
              <span>
                <b>7</b> professionals
              </span>
            </div>
          </div>

          <div className="stage" aria-hidden="true">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="photo">
              <Image
                src="/images/hero-dashboard.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 900px) 80vw, 480px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="orbit" />
            <div className="chip chip-1">
              <b>7 divisions</b>Compliance to construction
            </div>
            <div className="chip chip-2">
              <b>Healthcare ready</b>Clinical &amp; software expertise
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>
              <i>&#10022;</i>
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <Reveal className="stats">
            <div className="stat">
              <div className="big">7</div>
              <p>Service divisions under one roof</p>
            </div>
            <div className="stat">
              <div className="big">7</div>
              <p>Professionals across engineering, health, finance</p>
            </div>
            <div className="stat">
              <div className="big">PACRA</div>
              <p>Registered company</p>
            </div>
            <div className="stat">
              <div className="big">ZRA</div>
              <p>Tax compliant, Smart Invoices</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="block tight-top">
        <div className="wrap">
          <div className="head">
            <Reveal>
              <p className="kicker">What we do</p>
              <h2 className="h2 serif">
                Seven divisions.
                <br />
                <em>One</em> dependable partner.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="sub">
                Whether you need a company registered, a system built, an assessment filed or a site supplied, we deliver
                it end to end.
              </p>
            </Reveal>
          </div>

          <div className="bento">
            <Reveal as={Link} href="/services#compliance" className="tile feature">
              <div>
                <span className="no">01</span>
                <h3>Corporate Statutory, PACRA &amp; Business Compliance</h3>
                <p>
                  Registrations, annual returns, ZRA TPIN, Tax Clearance, NAPSA, WCFCB and council permits, handled
                  accurately and on time.
                </p>
              </div>
              <span className="more">
                Explore compliance <span className="arrow" aria-hidden="true">&rarr;</span>
              </span>
            </Reveal>
            <Reveal as={Link} href="/services#environmental" className="tile" delay={80}>
              <div>
                <span className="no">02</span>
                <h3>Environmental &amp; ZEMA</h3>
                <p>Project briefs, EIAs, audits and licensing.</p>
              </div>
              <span className="more">
                Learn more <span className="arrow" aria-hidden="true">&rarr;</span>
              </span>
            </Reveal>
            <Reveal as={Link} href="/services#software" className="tile" delay={120}>
              <div>
                <span className="no">03</span>
                <h3>Software Engineering</h3>
                <p>Web, mobile and desktop software built to fit.</p>
              </div>
              <span className="more">
                Learn more <span className="arrow" aria-hidden="true">&rarr;</span>
              </span>
            </Reveal>
            <Reveal as={Link} href="/services#automation" className="tile" delay={160}>
              <div>
                <span className="no">04</span>
                <h3>Systems, Operations &amp; AI</h3>
                <p>Automation, OCR, WhatsApp bots and dashboards.</p>
              </div>
              <span className="more">
                Learn more <span className="arrow" aria-hidden="true">&rarr;</span>
              </span>
            </Reveal>
            <Reveal as={Link} href="/services#building" className="tile" delay={200}>
              <div>
                <span className="no">05</span>
                <h3>Building Materials &amp; Hardware</h3>
                <p>Cement, tools, plumbing and PPE.</p>
              </div>
              <span className="more">
                Learn more <span className="arrow" aria-hidden="true">&rarr;</span>
              </span>
            </Reveal>
            <Reveal as={Link} href="/services#office" className="tile wide" delay={80}>
              <div>
                <span className="no">06</span>
                <h3>Office, School, Cleaning &amp; Merchandise</h3>
                <p>Stationery, furniture, IT equipment, sanitation and pantry essentials.</p>
              </div>
              <span className="more">
                Learn more <span className="arrow" aria-hidden="true">&rarr;</span>
              </span>
            </Reveal>
            <Reveal as={Link} href="/services#procurement" className="tile wide" delay={160}>
              <div>
                <span className="no">07</span>
                <h3>Procurement, Logistics &amp; Advisory</h3>
                <p>Sourcing, tender fulfilment, volume pricing and delivery to your door.</p>
              </div>
              <span className="more">
                Learn more <span className="arrow" aria-hidden="true">&rarr;</span>
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="block band-dark">
        <div className="wrap split">
          <Reveal className="frame">
            <Image
              src="/images/hero-dashboard.jpg"
              alt="Clinic staff member using a patient management dashboard"
              fill
              sizes="(max-width: 900px) 100vw, 560px"
              style={{ objectFit: 'cover' }}
            />
            <div className="badge">
              <b>Practice management systems</b>
              Patient records, appointments and automated billing.
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="kicker">Healthcare focus</p>
              <h2 className="h2 serif">
                Built with <em>healthcare</em> in mind.
              </h2>
              <p className="sub">
                Clinical expertise and engineering in the same team, so systems and supplies fit how clinics actually
                work.
              </p>
            </Reveal>
            <ul className="list">
              <Reveal as="li">
                <span>i.</span>
                <div>
                  <b>NMCZ-licensed registered nurse</b>
                  <p>Directs healthcare operations compliance and clinical system implementation.</p>
                </div>
              </Reveal>
              <Reveal as="li" delay={100}>
                <span>ii.</span>
                <div>
                  <b>HPCZ-licensed oral surgeon in leadership</b>
                  <p>Clinical insight in every health-related engagement.</p>
                </div>
              </Reveal>
              <Reveal as="li" delay={200}>
                <span>iii.</span>
                <div>
                  <b>Secure software for sensitive records</b>
                  <p>Plus a Zambian digital mental health platform in development.</p>
                </div>
              </Reveal>
            </ul>
          </div>
        </div>
      </section>

      <section className="block light">
        <div className="wrap">
          <div className="head">
            <Reveal>
              <p className="kicker">Our people</p>
              <h2 className="h2 serif">
                The team <em>behind</em> the work.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link className="btn btn-ghost" href="/about#team">
                Meet the full team <span className="arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </Reveal>
          </div>
          <div className="team">
            {team.slice(0, 4).map((m, i) => (
              <Reveal as={Link} href={`/about#${m.slug}`} className="person" delay={i * 90} key={m.slug}>
                <Image src={m.photo} alt={m.name} fill sizes="(max-width: 640px) 100vw, 25vw" style={{ objectFit: 'cover' }} />
                <div className="cap">
                  <b>{m.name}</b>
                  <span>{m.role}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="values">
            {[
              { h: 'Quality', p: 'Accurate work and dependable products that meet the specification.' },
              { h: 'Integrity', p: 'Honest pricing, clear communication and full compliance.' },
              { h: 'Reliability', p: 'We do what we say, when we say it, through to handover.' },
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

      <section className="block">
        <div className="wrap">
          <Reveal className="final">
            <div className="ring" aria-hidden="true" />
            <p className="kicker">Let&apos;s work together</p>
            <h2 className="h2 serif">
              Ready for a partner who <em>delivers</em>?
            </h2>
            <p>Tell us what you need. We will match it with the right team and send a quotation.</p>
            <div className="ctas">
              <Link className="btn btn-gold" href="/contact#quote">
                Request a Quotation <span className="arrow" aria-hidden="true">&rarr;</span>
              </Link>
              <a className="btn btn-ghost" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp {site.phones[0].display}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
