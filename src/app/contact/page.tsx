'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumbs';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

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

const contactMethods = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    value: '(08) XXXX XXXX',
    href: 'tel:+61',
    description: 'Call anytime during business hours',
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
    description: 'Response within 24 hours',
  },
  {
    icon: MapPinIcon,
    title: 'Location',
    value: 'Perth, WA',
    href: '#',
    description: 'Proudly Perth-based',
  },
  {
    icon: ClockIcon,
    title: 'Hours',
    value: '9am - 5pm AWST',
    href: '#',
    description: 'Monday to Friday',
  },
];

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
  const contactCardsRef = useRef<HTMLDivElement>(null);

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

      // Contact cards animation
      const cards = contactCardsRef.current?.querySelectorAll('.contact-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        });
      }

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
          ...formData,
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
              Whether you're ready to build, want to learn more about pricing, or just have questions—I'm here to help. Direct conversation, no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section ref={contactCardsRef} className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.title}
                  href={method.href}
                  className="contact-card group bg-light border border-dark/10 rounded-lg p-6 sm:p-8 hover:border-accent hover:bg-light-100 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-10 w-10 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-dark mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-dark mb-2">
                    {method.value}
                  </p>
                  <p className="text-xs sm:text-sm text-dark-200">
                    {method.description}
                  </p>
                </a>
              );
            })}
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

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className="w-full rounded-lg border border-dark/10 bg-light px-4 py-3 text-dark placeholder:text-dark-200 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                />
              </div>

              {/* Business Name */}
              <div>
                <label
                  htmlFor="businessName"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your Business"
                  className="w-full rounded-lg border border-dark/10 bg-light px-4 py-3 text-dark placeholder:text-dark-200 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                />
              </div>

              {/* Trade */}
              <div>
                <label
                  htmlFor="trade"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Your Trade
                </label>
                <select
                  id="trade"
                  name="trade"
                  value={formData.trade}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-dark/10 bg-light px-4 py-3 text-dark placeholder:text-dark-200 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                >
                  {trades.map((trade) => (
                    <option key={trade} value={trade === 'Select your trade' ? '' : trade}>
                      {trade}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="0412 345 678"
                  className="w-full rounded-lg border border-dark/10 bg-light px-4 py-3 text-dark placeholder:text-dark-200 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your business and what you're looking for..."
                  className="w-full rounded-lg border border-dark/10 bg-light px-4 py-3 text-dark placeholder:text-dark-200 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-accent px-6 py-4 text-base font-semibold text-white hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <p className="text-xs sm:text-sm text-dark-200 mt-6 text-center">
              I'll respond to your message within 24 business hours. You can also{' '}
              <a href="tel:+61" className="text-accent font-semibold hover:underline">
                call me directly
              </a>
              {' '}if you prefer to chat now.
            </p>
          </div>
        </div>
      </section>

      {toast && <Toast message={toast.message} type={toast.type} />}
      <Footer />
    </main>
  );
}
