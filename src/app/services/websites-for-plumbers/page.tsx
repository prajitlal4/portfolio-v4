'use client';

import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  StarIcon, 
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";

gsap.registerPlugin(ScrollTrigger);

const customerNeeds = [
  {
    icon: PhoneIcon,
    title: "Can I call right now?",
    description: "Your number should be visible and tappable the moment the page loads."
  },
  {
    icon: MapPinIcon,
    title: "Do you service my area?",
    description: "Customers want confirmation you cover their suburb before they call."
  },
  {
    icon: ClockIcon,
    title: "Are you available for emergencies?",
    description: "If you offer after-hours or 24/7 service, make it obvious."
  },
  {
    icon: ShieldCheckIcon,
    title: "Are you licensed?",
    description: "Displaying your license number builds instant trust."
  },
  {
    icon: StarIcon,
    title: "What do other customers say?",
    description: "Reviews answer this question without you having to say anything."
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Do you handle my problem?",
    description: "Blocked drains, hot water, gas fitting — your services need to be clear."
  }
];

const features = [
  {
    title: "Mobile-first design",
    description: "Over 70% of your visitors are on their phone. We design for mobile first, not as an afterthought."
  },
  {
    title: "Click-to-call everywhere",
    description: "One tap and the phone rings. No hunting for contact details."
  },
  {
    title: "Service pages",
    description: "Individual pages for blocked drains, hot water systems, gas fitting, leak detection — each targeting the searches your customers make."
  },
  {
    title: "Suburb pages",
    description: "Pages targeting \"plumber + suburb\" searches. This is how you rank locally without paying for ads."
  },
  {
    title: "Google reviews displayed",
    description: "Your reviews shown directly on your site. Social proof without the customer leaving."
  },
  {
    title: "Trust signals",
    description: "License number, insurance, ABN displayed prominently. Customers notice when these are missing."
  },
  {
    title: "Fast loading",
    description: "Under 3 seconds. Slow sites lose visitors and rank worse on Google."
  },
  {
    title: "SEO foundations",
    description: "Proper page titles, descriptions, headings, and site structure from day one."
  }
];

const faqs = [
  {
    question: "Do I need a website if I'm on HiPages?",
    answer: "HiPages is lead generation — you're paying for access to customers you don't own. When someone hears your name through a referral and searches for you, they expect to find a proper website. If you're not there, you look less established than competitors who are."
  },
  {
    question: "How long does it take?",
    answer: "Most sites are done in 1–2 weeks. We'll give you a clear timeline before we start."
  },
  {
    question: "What do I need to provide?",
    answer: "Your business details, logo if you have one, photos of your work (phone photos are fine), and your services and service areas. We handle the content writing."
  },
  {
    question: "Can you help with Google Business Profile?",
    answer: "Yes. We can set up or optimise your Google Business Profile as part of the project or separately."
  },
  {
    question: "What are the ongoing costs?",
    answer: "Hosting runs $49 per month, which covers security updates, backups, and support. No other required costs."
  }
];

export default function PlumberWebsitesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      });

      if (response.ok) {
        setToastType('success');
        setToastMessage("Thank you for your enquiry! I'll be in touch shortly.");
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setToastType('error');
      setToastMessage('Something went wrong. Please try again or email me directly.');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Websites for Plumbers | Get More Calls From Google</title>
        <meta 
          name="description" 
          content="Professional websites for plumbing businesses. Mobile-first, fast, built to convert local searches into phone calls. From $1,500." 
        />
        <meta property="og:title" content="Websites for Plumbers | Get More Calls From Google" />
        <meta 
          property="og:description" 
          content="Professional websites for plumbing businesses. Mobile-first, fast, built to convert local searches into phone calls. From $1,500." 
        />
        <meta property="og:type" content="website" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="bg-light min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-light via-light to-light-100 pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/3 animate-gradientShift opacity-50"
               style={{ backgroundSize: "200% 200%" }} />

          {/* Decorative orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-32 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] tracking-tight max-w-5xl mx-auto">
              Websites for{" "}
              <span className="text-accent">
                Plumbers
              </span>
            </h1>
            <p className="mt-8 text-xl sm:text-2xl text-dark-200 leading-relaxed max-w-3xl mx-auto">
              Turn local Google searches into phone calls. Fast, mobile-first websites built for plumbing businesses.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-accent to-sage px-8 py-4 text-lg font-semibold text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* Section 1: The Problem */}
        <section className="relative bg-light py-24 overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark mb-8 leading-tight">
              Your Website Has <span className="text-accent">One Job</span>
            </h2>
            <div className="space-y-6 text-lg text-dark-200 leading-relaxed">
              <p>
                When a pipe bursts at 10pm, the homeowner grabs their phone and searches "emergency plumber near me." They're stressed, they're in a hurry, and they're going to call the first plumber who looks legitimate.
              </p>
              <p>
                If your website is slow, outdated, or doesn't exist — they scroll past and call someone else.
              </p>
              <p>
                Your website's only job is to make that person pick up the phone and call you. Everything else is noise.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: What Customers Look For */}
        <section className="relative bg-light-100 py-24 overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-32 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="mb-16 sm:mb-20">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Critical Elements
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark leading-tight">
                What Customers <span className="text-accent">Need to See</span> Immediately
              </h2>
            </div>
            <p className="text-xl text-dark-200 text-center max-w-3xl mx-auto mb-16">
              When someone lands on your website, they're looking for specific information. If they can't find it within a few seconds, they leave.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {customerNeeds.map((need, idx) => (
                <div
                  key={idx}
                  className="group bg-dark/5 backdrop-blur-sm border border-dark/10 rounded-3xl p-8 hover:bg-dark/[0.07] hover:border-accent/30 hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/40 transition-all duration-500" />
                    <need.icon className="relative h-12 w-12 text-accent group-hover:text-accent transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-3">
                    {need.title}
                  </h3>
                  <p className="text-base text-dark-200">
                    {need.description}
                  </p>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-dark-200 text-center max-w-3xl mx-auto mt-12">
              Most plumber websites bury this information or leave it out entirely. That's why they don't convert.
            </p>
          </div>
        </section>

        {/* Section 3: What We Build */}
        <section className="relative bg-light py-24 overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-6">
            <div className="mb-16 sm:mb-20 text-center">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Our Approach
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark leading-tight mb-6">
                Websites That <span className="text-accent">Actually Work</span> for Plumbers
              </h2>
              <p className="text-lg sm:text-xl text-dark-200 max-w-3xl mx-auto leading-relaxed">
                We don't use generic templates. Every site is built around how your customers search and what information they need to see.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="group bg-light border border-dark/10 rounded-3xl p-8 hover:border-accent/30 hover:shadow-glow transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-accent via-sage to-charcoal flex items-center justify-center text-white font-bold flex-none mt-1">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-heading text-dark mb-2 group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-base text-dark-200 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Why It Matters */}
        <section className="relative bg-light-100 py-24 overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-6">
            <div className="mb-12 text-center">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Strategy
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark leading-tight mb-6">
                <span className="text-accent">Own</span> Your Leads
              </h2>
            </div>
            <div className="bg-light border border-dark/10 rounded-3xl p-8 sm:p-12 hover:border-accent/30 hover:shadow-glow transition-all duration-500">
              <div className="space-y-6 text-lg text-dark-200 leading-relaxed">
                <p>
                  Platforms like HiPages charge $15–40 per lead. That lead gets sent to multiple plumbers. You're competing on price before you've even answered the phone.
                </p>
                <p>
                  A website that ranks for local searches brings customers directly to you. No middleman. No shared leads. No bidding.
                </p>
                <p>
                  It takes time to build rankings, but once you're there, those leads come in every month for the cost of hosting.
                </p>
                <p className="font-semibold text-dark">
                  Your website and Google Business Profile together are how you stop renting leads and start owning them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Pricing */}
        <section className="relative bg-light py-24 overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-6">
            <div className="mb-16 sm:mb-20 text-center">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Investment
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark leading-tight">
                Simple, Transparent <span className="text-accent">Pricing</span>
              </h2>
            </div>
            <div className="bg-gradient-to-br from-accent/10 via-transparent to-accent/5 border border-accent/20 rounded-3xl p-8 sm:p-12 hover:border-accent/40 hover:shadow-glow transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="text-center">
                  <p className="text-lg text-dark-200 mb-2">Upfront</p>
                  <p className="text-4xl sm:text-5xl font-bold font-heading text-dark">
                    From{" "}
                    <span className="text-accent">
                      $1,500
                    </span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-lg text-dark-200 mb-2">Monthly</p>
                  <p className="text-4xl sm:text-5xl font-bold font-heading text-dark">
                    From{" "}
                    <span className="text-accent">
                      $49/mo
                    </span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-4">The build includes:</h3>
                  <ul className="space-y-3 text-base text-dark-200">
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>Custom design for your business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>Mobile-first, fast-loading site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>Service pages and suburb pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>Google reviews integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>Contact forms and click-to-call</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>SEO setup</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-4">Monthly covers:</h3>
                  <ul className="space-y-3 text-base text-dark-200">
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>Hosting and SSL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>Security updates and backups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>Minor content updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>Support when you need it</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-center text-base text-dark-200 mb-6">
                No lock-in contracts. Cancel anytime.
              </p>

              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-block rounded-xl bg-gradient-to-r from-accent to-sage px-8 py-4 text-lg font-semibold text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-light-100 py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-dark mb-12 text-center">
              Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-dark/5 backdrop-blur-sm border border-dark/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/30"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-bold font-heading text-dark pr-4">
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`h-6 w-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 pb-6">
                      <p className="text-base text-dark-200 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Final CTA */}
        <section id="contact" className="relative bg-light overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/3 animate-gradientShift opacity-50" 
               style={{ backgroundSize: "200% 200%" }} />

          <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
              {/* Left: Text */}
              <div className="flex-1 w-full max-w-2xl">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight">
                  <span className="text-dark">Get More Calls </span>
                  <span className="text-accent">
                    From Google
                  </span>
                </h2>
                <p className="mt-8 text-xl sm:text-2xl text-dark-200 leading-relaxed">
                  Stop losing work to competitors with better websites.
                </p>
                <div className="mt-8">
                  <a 
                    href="tel:+61412345678" 
                    className="inline-flex items-center gap-2 text-xl font-semibold text-accent hover:text-accent-dark transition-colors"
                  >
                    <PhoneIcon className="h-6 w-6" />
                    <span>Or call now: 0412 345 678</span>
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div className="flex-1 w-full flex justify-center items-center">
                <div className="w-full max-w-md bg-dark/5 backdrop-blur-xl border border-dark/10 rounded-3xl shadow-glass p-8 hover:bg-dark/[0.07] transition-all duration-500">
                  <h3 className="text-2xl font-bold font-heading text-dark mb-6 text-center">
                    GET A FREE QUOTE
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />
                    
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`w-full rounded-xl border ${errors.name ? 'border-red-500' : 'border-dark/20'} bg-dark/5 px-4 py-3.5 text-dark placeholder:text-dark-200 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 text-base backdrop-blur-sm`}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email *"
                        className={`w-full rounded-xl border ${errors.email ? 'border-red-500' : 'border-dark/20'} bg-dark/5 px-4 py-3.5 text-dark placeholder:text-dark-200 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 text-base backdrop-blur-sm`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your plumbing business"
                        className={`w-full rounded-xl border ${errors.message ? 'border-red-500' : 'border-dark/20'} bg-dark/5 px-4 py-3.5 text-dark placeholder:text-dark-200 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 text-base backdrop-blur-sm resize-none`}
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-gradient-to-r from-accent to-sage px-6 py-4 text-base font-semibold text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'SENDING...' : 'GET MY FREE QUOTE'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <Toast 
            show={showToast} 
            message={toastMessage}
            type={toastType}
            onClose={() => setShowToast(false)}
          />
        </section>

        <Footer />
      </main>
    </>
  );
}
