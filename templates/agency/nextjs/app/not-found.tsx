import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="py-6 container text-center is-flex flex-col align-items-center justify-content-center min-h-full" style={{ minHeight: '60vh' }}>
      <h1 className="h1" style={{ fontSize: '6rem' }}>404</h1>
      <h2 className="h2 mbe-3">Page Not Found</h2>
      <p className="text-large text-muted mbe-5">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="button is-primary is-large rounded-pill">Return Home</Link>
    </main>
  );
}
