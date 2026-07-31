import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - FrontPress',
  description: 'Get in touch with the FrontPress team.',
};

export default function ContactPage() {
  return (
    <div className="container max-w-3xl py-6 min-h-screen">
      <header className="mbe-6 text-center border-bottom pbe-5">
        <h1 className="h1 font-black mbe-4">Contact Us</h1>
        <p className="text-large text-muted m-0">Have a question or want to write for us? Drop a message below.</p>
      </header>

      <form className="is-flex flex-col gap-4">
        <div className="is-grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group m-0">
            <label htmlFor="name" className="form-label mbe-2">Name</label>
            <input type="text" id="name" className="form-input is-large" placeholder="Your name" required />
          </div>
          <div className="group m-0">
            <label htmlFor="email" className="form-label mbe-2">Email</label>
            <input type="email" id="email" className="form-input is-large" placeholder="your@email.com" required />
          </div>
        </div>
        <div className="group m-0">
          <label htmlFor="subject" className="form-label mbe-2">Subject</label>
          <input type="text" id="subject" className="form-input is-large" placeholder="How can we help?" required />
        </div>
        <div className="group m-0">
          <label htmlFor="message" className="form-label mbe-2">Message</label>
          <textarea id="message" className="form-textarea is-large" rows={6} placeholder="Your message..." required></textarea>
        </div>
        <div className="mbs-3">
          <button type="submit" className="button is-primary is-large is-block font-semibold">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
