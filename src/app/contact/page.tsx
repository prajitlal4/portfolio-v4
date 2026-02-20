'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumbs';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  businessName: string;
  trade: string;
  phone: string;
  message: string;
}

interface ToastMessage {
  type: 'success' | 'error';
  message: string;
}


const trades = [
  'Select your trade',
  'Plumber',
  'Electrician',
  'Landscaper',
  'Renovator',
  'Builder',
  'Other',
];

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    trade: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.5,
      });

      // Form animation
      gsap.from(formRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ]);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = breadcrumbSchema;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...(formData as unknown as Record<string, string>),
        }).toString(),
      });

      if (response.ok) {
        setToast({
          type: 'success',
          message:
            "Message sent! I'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          businessName: '',
          trade: '',
          phone: '',
          message: '',
        });
        setTimeout(() => setToast(null), 5000);
      } else {
        setToast({
          type: 'error',
          message:
            'Something went wrong. Please try again or call directly.',
        });
      }
    } catch (error) {
      setToast({
        type: 'error',
        message: 'Something went wrong. Please try again or call directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-light min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-light overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              Get in Touch
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] tracking-tight mb-6">
              Let's Talk About Your <span className="text-accent">Website</span>
            </h1>
            <p className="text-xl sm:text-2xl text-dark-200 leading-relaxed max-w-2xl">
              Ready to build? Want pricing info? Just have questions? Let's chat. Direct conversation, no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 sm:py-32 bg-light">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div ref={formRef} className="bg-light-100 border border-dark/10 rounded-lg p-8 sm:p-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-2">
              Send Me a Message
            </h2>
            <p className="text-lg text-dark-200 mb-10">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>

            <form
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              {/* Name + Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-100 font-sans mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full rounded-xl border border-dark/10 bg-light-100 px-4 py-3 text-dark placeholder:text-dark/30 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="businessName" className="block text-sm font-semibold text-dark-100 font-sans mb-2">
                    Business name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Smith Plumbing"
                    className="w-full rounded-xl border border-dark/10 bg-light-100 px-4 py-3 text-dark placeholder:text-dark/30 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Trade + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="trade" className="block text-sm font-semibold text-dark-100 font-sans mb-2">
                    Your trade
                  </label>
                  <select
                    id="trade"
                    name="trade"
                    value={formData.trade}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-dark/10 bg-light-100 px-4 py-3 text-dark focus:outline-none focus:border-accent transition-colors duration-200"
                  >
                    {trades.map((trade) => (
                      <option key={trade} value={trade === 'Select your trade' ? '' : trade}>
                        {trade}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark-100 font-sans mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="04xx xxx xxx"
                    className="w-full rounded-xl border border-dark/10 bg-light-100 px-4 py-3 text-dark placeholder:text-dark/30 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-dark-100 font-sans mb-2">
                  What you&rsquo;re after{' '}
                  <span className="text-dark-200 font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us a bit about your business and what you need..."
                  className="w-full rounded-xl border border-dark/10 bg-light-100 px-4 py-3 text-dark placeholder:text-dark/30 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all duration-200 shadow-glow hover:shadow-glow-lg w-full sm:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Send My Details'}
              </button>
            </form>

            <p className="text-xs sm:text-sm text-dark-200 mt-6 text-center">
              I'll respond within 24 business hours. Prefer to call?{' '}
              <a href="tel:+61434128554" className="text-accent font-semibold hover:underline">
                0434 128 554
              </a>
              {' '}or email{' '}
              <a href="mailto:info@lalsolutions.com.au" className="text-accent font-semibold hover:underline">
                info@lalsolutions.com.au
              </a>
            </p>
          </div>
        </div>
      </section>

      {toast && <Toast show={true} message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <Footer />
    </main>
  );
}
