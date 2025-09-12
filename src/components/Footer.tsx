export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center justify-center lg:px-8">
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