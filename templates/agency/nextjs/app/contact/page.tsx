import { Reveal } from '@/components/shared/motion'

export default function ContactPage() {
  return (
    <main className="py-6 container">
      <div className="is-grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Reveal>
          <div>
            <h1 className="h1 mbe-3">Get in Touch</h1>
            <p className="text-large text-muted mb-5">
              Have a project in mind? We'd love to hear from you. Fill out the
              form and our team will get back to you within 24 hours.
            </p>

            <div className="mbe-4">
              <h3 className="h5 font-bold mbe-1">Office</h3>
              <p className="text-muted">
                123 Agency Street, Suite 400
                <br />
                Creative City, NY 10001
              </p>
            </div>

            <div className="mbe-4">
              <h3 className="h5 font-bold mbe-1">Contact Info</h3>
              <p>
                hello@agency.com
                <br />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-white border rounded-4 p-5 shadow-medium">
            <form
              className="is-flex flex-col gap-3"
              fa-component="form"
              noValidate
            >
              <div className="is-grid grid-cols-1 md:grid-cols-2 gap-3 mbe-1">
                <div className="group">
                  <label className="form-label text-small font-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-input is-medium"
                    placeholder="Jane"
                    data-rule="required"
                  />
                </div>

                <div className="group">
                  <label className="form-label text-small font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-input is-medium"
                    placeholder="Doe"
                    data-rule="required"
                  />
                </div>
              </div>

              <div className="group">
                <label className="form-label text-small font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-input is-medium"
                  placeholder="jane@example.com"
                  data-rule="email"
                />
              </div>

              <div className="group">
                <label className="form-label text-small font-semibold">
                  Message
                </label>
                <textarea
                  className="form-textarea is-medium"
                  rows={5}
                  placeholder="Tell us about your project..."
                  data-rule="required"
                />
              </div>

              <button
                type="submit"
                className="button is-primary is-large rounded-pill w-full mbs-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </main>
  );
}