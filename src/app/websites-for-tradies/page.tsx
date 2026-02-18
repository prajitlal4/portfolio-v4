'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Register at module level — matches CaseStudyTemplate pattern
gsap.registerPlugin(ScrollTrigger);

const tradeCards = [
  {
    emoji: '🔧',
    title: 'Plumbers and Electricians',
    body: 'Emergency searches. Phone in hand. Stressed. Your site needs to load fast, show your number front and centre, and cover every suburb you work in. We make sure Google knows exactly where you operate so you show up when it counts.',
  },
  {
    emoji: '🛁',
    title: 'Bathroom Renovators and Tilers',
    body: "Your customers are spending serious money and they want to see proof you can deliver. Your site is a portfolio first, a sales page second. We make your past work look incredible and build the kind of page that earns trust before you've even picked up the phone.",
  },
  {
    emoji: '🌿',
    title: 'Landscapers and Builders',
    body: "Big projects, long decision cycles. Customers are comparing you against three other quotes. Your site needs to answer their questions, show your range of work, and make it easy to reach you. We build pages that do the selling while you're on the tools.",
  },
  {
    emoji: '🪚',
    title: 'Carpenters, Painters, and Handymen',
    body: "Word of mouth gets you started. A proper website keeps it going. When a referral Googles your name and lands on something that looks sharp and professional, that's the moment you stop losing jobs you didn't even know you were competing for.",
  },
];

const testimonials = [
  {
    quote:
      "The website has been a game changer for us. We're getting service calls from people who found us online and booked before we even opened. The emergency service section brings in our most profitable jobs.",
    author: 'Mike Thompson',
    role: 'Owner',
    company: 'Highside Plumbing',
  },
  {
    quote:
      "Our website has completely transformed how customers find us. We're getting quality leads from people who have already seen our work online and are ready to move forward.",
    author: 'John Smith',
    role: 'Owner',
    company: 'Scope Bathrooms',
  },
];

const recentProjects = [
  {
    title: 'Highside Plumbing and Gas',
    category: 'Plumber · Perth',
    description:
      'Built a website where customers can easily book plumbing and gas services. Shows their expertise and makes it simple to get in touch.',
    image: '/highside-image.png',
    href: 'https://highsideplumbing.com.au',
    caseStudy: '/case-studies/highside-plumbing',
  },
  {
    title: 'Scope Bathroom Renovations',
    category: 'Renovator · Perth',
    description:
      'Built a website that shows off their bathroom work beautifully. Brings visitors in and turns them into customers.',
    image: '/scopebathrooms-image.webp',
    href: 'https://scopebathroomrenovations.com',
    caseStudy: '/case-studies/scope-bathrooms',
  },
];

const steps = [
  {
    number: '01',
    title: 'You fill in the form',
    body: "Tell us your trade, your area, and what you're after. Takes two minutes.",
  },
  {
    number: '02',
    title: 'We put together a plan',
    body: "We'll show you what we'd build and why, based on what's actually working for tradies in your space right now.",
  },
  {
    number: '03',
    title: 'We build it, you get jobs',
    body: "We handle everything. You stay on the tools. When it's live, your site is working for you around the clock.",
  },
];

const pricingIncludes = [
  'Mobile-first design (your customers are on their phones)',
  'Suburb targeting so Google shows you in your area',
  'Click-to-call on every page',
  'Fast load times — under 3 seconds',
  'SEO foundations built in from the start',
  'No surprises, no add-ons you didn\'t ask for',
];

export default function WebsitesForTradiesPage() {
  // Hero refs
  const heroBadgeRef = useRef<HTMLParagraphElement>(null);
  const heroH1Ref = useRef<HTMLHeadingElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const heroTrustRef = useRef<HTMLParagraphElement>(null);

  // Section refs
  const hookRef = useRef<HTMLDivElement>(null);
  const tradesSectionRef = useRef<HTMLDivElement>(null);

  // Testimonial refs
  const testimonial0Ref = useRef<HTMLDivElement>(null);
  const testimonial1Ref = useRef<HTMLDivElement>(null);

  // Project refs
  const proj0Ref = useRef<HTMLDivElement>(null);
  const proj1Ref = useRef<HTMLDivElement>(null);

  // Trade card refs
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  // Step refs
  const step0Ref = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);

  // Pricing + form refs
  const pricingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    trade: '',
    suburb: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero (on mount, no scroll trigger)
      const heroEls = [
        heroBadgeRef.current,
        heroH1Ref.current,
        heroSubRef.current,
        heroCtaRef.current,
        heroTrustRef.current,
      ].filter(Boolean);

      if (heroEls.length) {
        gsap.from(heroEls, {
          opacity: 0,
          y: 28,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.1,
        });
      }

      // ── Hook section
      if (hookRef.current) {
        gsap.from(hookRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: hookRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // ── Trade section header
      if (tradesSectionRef.current) {
        gsap.from(tradesSectionRef.current.querySelectorAll('.trades-header-child'), {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tradesSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // ── Trade cards (each individually for stagger)
      const cardRefs = [card0Ref, card1Ref, card2Ref, card3Ref];
      cardRefs.forEach((ref, idx) => {
        if (ref.current) {
          gsap.from(ref.current, {
            opacity: 0,
            y: 28,
            duration: 0.5,
            delay: 0.08 * idx,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        }
      });

      // ── Steps
      const stepRefs = [step0Ref, step1Ref, step2Ref];
      stepRefs.forEach((ref, idx) => {
        if (ref.current) {
          gsap.from(ref.current, {
            opacity: 0,
            y: 24,
            duration: 0.5,
            delay: 0.1 * idx,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        }
      });

      // ── Testimonials
      [testimonial0Ref, testimonial1Ref].forEach((ref, idx) => {
        if (ref.current) {
          gsap.from(ref.current, {
            opacity: 0,
            y: 24,
            duration: 0.6,
            delay: 0.1 * idx,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        }
      });

      // ── Recent projects
      [proj0Ref, proj1Ref].forEach((ref, idx) => {
        if (ref.current) {
          gsap.from(ref.current, {
            opacity: 0,
            y: 24,
            duration: 0.6,
            delay: 0.12 * idx,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        }
      });

      // ── Pricing card
      if (pricingRef.current) {
        gsap.from(pricingRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: pricingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // ── Form section
      if (formRef.current) {
        gsap.from(formRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const data = new FormData(e.currentTarget);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Form error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const cardRefs = [card0Ref, card1Ref, card2Ref, card3Ref] as const;
  const stepRefs = [step0Ref, step1Ref, step2Ref] as const;

  return (
    <main className="bg-light min-h-screen">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 bg-light">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-accent/5 blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p
            ref={heroBadgeRef}
            className="uppercase tracking-widest text-accent font-semibold text-sm font-sans"
          >
            Perth Web Design for Tradies
          </p>
          <h1
            ref={heroH1Ref}
            className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] max-w-4xl"
          >
            Websites for Tradies.<br />
            <span className="text-accent">Built to Get You Jobs.</span>
          </h1>
          <p
            ref={heroSubRef}
            className="mt-6 text-xl sm:text-2xl text-dark-200 font-sans leading-relaxed max-w-2xl"
          >
            We build websites for Perth tradies that bring in real work — designed around how your customers actually search for you.
          </p>
          <div ref={heroCtaRef} className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-glow hover:shadow-glow-lg"
            >
              Get a Free Quote
            </a>
          </div>
          <p ref={heroTrustRef} className="mt-4 text-dark-200 font-sans text-sm">
            From $999 · No lock-in contracts · Perth-based
          </p>
        </div>
      </section>

      {/* ── HOOK ─────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={hookRef} className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark leading-tight">
              Your website is sending customers to your competitor.
            </h2>
            <p className="mt-6 text-lg text-dark-200 font-sans leading-relaxed">
              Before anyone calls you, they Google you. That&rsquo;s just how it works now. If your site looks like it
              hasn&rsquo;t been touched in five years, takes forever to load on a phone, or just doesn&rsquo;t show up
              at all — they&rsquo;re already calling someone else.
            </p>
            <p className="mt-4 text-lg text-dark-200 font-sans leading-relaxed">
              We&rsquo;ve built websites for plumbers, electricians, landscapers, tilers, builders, and bathroom
              renovators across Perth. We know what works for each trade, and it&rsquo;s not the same thing twice.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRADE CARDS ──────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-light-100">
        <div ref={tradesSectionRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="trades-header-child uppercase tracking-widest text-accent font-semibold text-sm font-sans">
              Built for your trade
            </span>
            <h2 className="trades-header-child mt-4 text-4xl sm:text-5xl font-bold font-heading text-dark leading-tight">
              Every trade is different. Your website should be too.
            </h2>
            <p className="trades-header-child mt-4 text-lg text-dark-200 font-sans leading-relaxed">
              The way someone searches for a plumber at 10pm is nothing like the way someone shops for a bathroom
              renovation. We build around that.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tradeCards.map((card, idx) => (
              <div
                key={card.title}
                ref={cardRefs[idx]}
                className="border border-dark/10 border-l-4 border-l-accent bg-light rounded-xl p-8 hover:shadow-glow transition-all duration-500 group"
              >
                <span className="text-3xl leading-none" role="img" aria-label={card.title}>
                  {card.emoji}
                </span>
                <h3 className="mt-5 text-xl font-bold font-heading text-dark group-hover:text-accent transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="mt-3 text-dark-200 font-sans leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="uppercase tracking-widest text-accent font-semibold text-sm font-sans">
              The process
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold font-heading text-dark leading-tight">
              Simple process. No tech headaches.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16">
            {steps.map((step, idx) => (
              <div key={step.number} ref={stepRefs[idx]}>
                {/* Orange circle badge */}
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mb-5">
                  <span className="text-white font-bold font-heading text-xl leading-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-heading text-dark">{step.title}</h3>
                <p className="mt-2 text-dark-200 font-sans leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="uppercase tracking-widest text-accent font-semibold text-sm font-sans">
              What Perth tradies say
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold font-heading text-dark leading-tight">
              Don&rsquo;t take our word for it.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={t.company}
                ref={idx === 0 ? testimonial0Ref : testimonial1Ref}
                className="bg-light border border-dark/10 border-l-4 border-l-accent rounded-xl p-8"
              >
                <p className="text-lg font-heading text-dark leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-dark font-sans">{t.author}</p>
                  <p className="text-dark-200 text-sm font-sans">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECTS ──────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="uppercase tracking-widest text-accent font-semibold text-sm font-sans">
              Recent work
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold font-heading text-dark leading-tight">
              Some of the sites we&rsquo;ve built.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {recentProjects.map((proj, idx) => (
              <div
                key={proj.title}
                ref={idx === 0 ? proj0Ref : proj1Ref}
                className="border border-dark/10 rounded-xl overflow-hidden group hover:border-accent/30 hover:shadow-glow transition-all duration-500"
              >
                {/* Project image */}
                <div className="relative w-full aspect-video bg-light-100 overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>

                {/* Project info */}
                <div className="p-6">
                  <p className="uppercase tracking-widest text-accent font-semibold text-xs font-sans">
                    {proj.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold font-heading text-dark">
                    {proj.title}
                  </h3>
                  <p className="mt-2 text-dark-200 font-sans text-sm leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="mt-5 flex gap-4">
                    <a
                      href={proj.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-accent hover:text-accent-dark font-sans transition-colors duration-200"
                    >
                      View live site →
                    </a>
                    <a
                      href={proj.caseStudy}
                      className="text-sm font-semibold text-dark-200 hover:text-dark font-sans transition-colors duration-200"
                    >
                      Read case study →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="uppercase tracking-widest text-accent font-semibold text-sm font-sans">
              Pricing
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold font-heading text-dark leading-tight">
              Straight up pricing.
            </h2>
          </div>

          {/* Dark featured pricing card */}
          <div ref={pricingRef} className="bg-dark rounded-2xl p-10 sm:p-14 relative overflow-hidden max-w-2xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
            />
            <p className="uppercase tracking-widest text-accent font-semibold text-sm font-sans">
              Starting from
            </p>
            <p className="mt-2 text-7xl sm:text-8xl font-bold font-heading text-white leading-none">
              $999
            </p>
            <p className="mt-5 text-white/70 font-sans leading-relaxed text-lg">
              That gets you a fast, mobile-first site built specifically for your trade and your service area.
            </p>
            <ul className="mt-7 space-y-3">
              {pricingIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80 font-sans">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-white/50 font-sans text-sm">
              We also offer ongoing support plans for updates, SEO, and performance. Ask us when you get in touch.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-glow hover:shadow-glow-lg"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────── */}
      <section id="contact" className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={formRef} className="max-w-2xl mx-auto">
            <span className="uppercase tracking-widest text-accent font-semibold text-sm font-sans">
              Get in touch
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold font-heading text-dark leading-tight">
              Ready to get more work from your website?
            </h2>
            <p className="mt-4 text-lg text-dark-200 font-sans leading-relaxed">
              Fill in the form below and we&rsquo;ll get back to you within one business day. No sales pitch, just a
              straight conversation about what your business needs.
            </p>

            {submitted ? (
              <div className="mt-10 border border-accent/30 rounded-2xl p-10 bg-light-100 text-center">
                <span className="text-5xl" role="img" aria-label="Thumbs up">
                  👍
                </span>
                <h3 className="mt-4 text-2xl font-bold font-heading text-dark">
                  We&rsquo;ve got your details.
                </h3>
                <p className="mt-2 text-dark-200 font-sans">
                  We&rsquo;ll be in touch shortly. Usually same day.
                </p>
              </div>
            ) : (
              <form
                name="websites-for-tradies"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="mt-10 space-y-6"
              >
                <input type="hidden" name="form-name" value="websites-for-tradies" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark-100 font-sans mb-2">
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-dark/10 rounded-xl px-4 py-3 text-dark bg-light-100 font-sans text-base focus:outline-none focus:border-accent transition-colors duration-200 placeholder:text-dark/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="trade" className="block text-sm font-semibold text-dark-100 font-sans mb-2">
                      Your trade
                    </label>
                    <input
                      id="trade"
                      type="text"
                      name="trade"
                      required
                      placeholder="e.g. Plumber, Electrician"
                      value={formData.trade}
                      onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                      className="w-full border border-dark/10 rounded-xl px-4 py-3 text-dark bg-light-100 font-sans text-base focus:outline-none focus:border-accent transition-colors duration-200 placeholder:text-dark/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="suburb" className="block text-sm font-semibold text-dark-100 font-sans mb-2">
                      Suburb / service area
                    </label>
                    <input
                      id="suburb"
                      type="text"
                      name="suburb"
                      required
                      placeholder="e.g. Joondalup, Swan Valley"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full border border-dark/10 rounded-xl px-4 py-3 text-dark bg-light-100 font-sans text-base focus:outline-none focus:border-accent transition-colors duration-200 placeholder:text-dark/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-dark-100 font-sans mb-2">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="04xx xxx xxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-dark/10 rounded-xl px-4 py-3 text-dark bg-light-100 font-sans text-base focus:outline-none focus:border-accent transition-colors duration-200 placeholder:text-dark/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark-100 font-sans mb-2">
                    What you&rsquo;re after{' '}
                    <span className="text-dark-200 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us a bit about your business and what you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-dark/10 rounded-xl px-4 py-3 text-dark bg-light-100 font-sans text-base focus:outline-none focus:border-accent transition-colors duration-200 resize-none placeholder:text-dark/30"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all duration-200 shadow-glow hover:shadow-glow-lg w-full sm:w-auto"
                  >
                    {submitting ? 'Sending...' : 'Send My Details'}
                  </button>
                </div>
              </form>
            )}

            <p className="mt-6 text-sm text-dark-200 font-sans">
              We&rsquo;re Perth-based and we reply fast. Usually same day.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
