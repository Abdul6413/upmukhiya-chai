import Link from 'next/link';
export const metadata = { title: 'Page not found', robots: { index: false } };
export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap notfound">
        <h1 className="hi">404</h1>
        <p className="lead-dark">This page has gone cold, like forgotten chai. Let us get you back.</p>
        <div className="btn-row"><Link href="/" className="btn btn-primary">Back to home</Link><Link href="/menu" className="btn btn-outline">See our menu</Link></div>
      </div>
    </section>
  );
}
