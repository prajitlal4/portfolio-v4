export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center justify-center lg:px-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">GET IN TOUCH</h2>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you"
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don&apos;t fill this out if you&apos;re human:
                <input name="bot-field" />
              </label>
            </p>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-gray-100 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-base"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email *"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-gray-100 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-base"
            />
            <textarea
              name="message"
              rows={4}
              required
              placeholder="How can we help your business?"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-gray-100 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-base"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-800 transition-colors"
            >
              ENQUIRE NOW
            </button>
          </form>
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-400">
          &copy; 2025 PL Solutions. All rights reserved.
        </p>
      </div>
      {/* Hidden static form for Netlify detection */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>
    </footer>
  )
} 