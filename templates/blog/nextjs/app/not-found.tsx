import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container py-6 min-h-screen is-flex flex-col align-items-center justify-content-center text-center">
      <h1 className="font-black text-primary" style={{ fontSize: '6rem', lineHeight: 1 }}>404</h1>
      <h2 className="h2 font-bold mbe-3">Page Not Found</h2>
      <p className="text-large text-muted max-w-md mx-auto mbe-5">
        We couldn't find the page you were looking for. It might have been moved or deleted.
      </p>
      <Link href="/" className="button is-primary is-large rounded-pill px-5">
        Return Home
      </Link>
    </div>
  );
}
