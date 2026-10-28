import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="glow glow-1" aria-hidden="true" />
      <div className="wrap">
        <p className="kicker">Error 404</p>
        <h1 className="display">
          We could not find <em>that page</em>.
        </h1>
        <p className="lead">The address may have changed. Start again from the home page, or contact us directly.</p>
        <div className="ctas">
          <Link className="btn btn-gold" href="/">
            Back to home <span className="arrow" aria-hidden="true">&rarr;</span>
          </Link>
          <Link className="btn btn-ghost" href="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
