import type {Metadata} from 'next';
import 'frontalign/css'
import '@/app/globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Next.js Agency Starter Template',
  description: 'Award-winning design and development agency.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
     <Navbar />
    {children}
    <Footer />
      </body>
    </html>
  );
}
