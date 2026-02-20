'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  WrenchScrewdriverIcon,
  Squares2X2Icon,
  HomeModernIcon,
  PaintBrushIcon,
} from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';

// Register at module level — matches CaseStudyTemplate pattern
gsap.registerPlugin(ScrollTrigger);

const tradeCards = [
  {
    title: 'Plumbers and Electricians',
    body: 'Emergency searches. Phone in hand. Stressed. Your site needs to load fast, show your number front and centre, and cover every suburb you work in. We make sure Google knows exactly where you operate so you show up when it counts.',
  },
  {
    title: 'Bathroom Renovators and Tilers',
    body: "Your customers are spending serious money and they want to see proof you can deliver. Your site is a portfolio first, a sales page second. We make your past work look incredible and build the kind of page that earns trust before you've even picked up the phone.",
  },
  {
    title: 'Landscapers and Builders',
    body: "Big projects, long decision cycles. Customers are comparing you against three other quotes. Your site needs to answer their questions, show your range of work, and make it easy to reach you. We build pages that do the selling while you're on the tools.",
  },
  {
    title: 'Carpenters, Painters, and Handymen',
    body: "Word of mouth gets you started. A proper website keeps it going. When a referral Googles your name and lands on something that looks sharp and professional, that's the moment you stop losing jobs you didn't even know you were competing for.",
  },
];

const testimonials = [
  {
    quote:
      "Prajit is an exceptional talent. He solved an issue within my website in 1 day saving my business — something that had left other developers answerless for 5 months. He then went further with SEO, made the entire site more user friendly and significantly boosted my rankings. I would recommend him to anybody.",
    author: 'Chris Price',
    role: 'Owner',
    company: 'Perth Liquid Limestone',
    logo: '/PerthLiquidLimestoneLogo.png',
    logoAlt: 'Perth Liquid Limestone logo',
  },
  {
    quote:
      "Our website has completely transformed how customers find us. We're getting quality leads from people who have already seen our work online and are ready to move forward.",
    author: 'Ben Hales',
    role: 'Owner',
    company: 'Scope Bathrooms',
    logo: '/scope_bathrooms_logo.webp',
    logoAlt: 'Scope Bathroom Renovations logo',
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
    body: "We handle everything. Most sites are live within 7 days of getting started.",
  },
];

const faqs = [
  {
    q: 'How long does it take to build?',
    a: "Most sites are live within 7 days. We'll confirm the exact timeline when we quote.",
  },
  {
    q: 'Do I need to provide content or photos?',
    a: "We handle the copy after a quick call with you. If you have photos from past jobs, send them through. If not, we'll work with what we've got.",
  },
  {
    q: 'Will my site show up on Google?',
    a: "Every site gets suburb targeting, proper page structure, and fast load times built in. You won't rank overnight, but the foundations are there from day one.",
  },
  {
    q: 'Can I make changes after it goes live?',
    a: "Most clients just message us and we turn it around the same day. Minor changes are included in the monthly fee. Extra pages or bigger work gets a separate quote.",
  },
  {
    q: 'What trades do you work with?',
    a: "Plumbers, electricians, tilers, bathroom renovators, landscapers, painters, carpenters, and builders. If you're a tradie in Perth, get in touch.",
  },
  {
    q: 'Why do I need a website if I already get work through word of mouth?',
    a: "Word of mouth still works. But when someone gets your number from a mate and Googles you before calling, what do they find? A good site turns that warm lead into a confirmed job.",
  },
];

const pricingIncludes = [
  'Mobile-first design (your customers are on their phones)',
  'Suburb targeting so Google shows you in your area',
  'Click-to-call on every page',
  'Loads in under 3 seconds on mobile',
  'SEO foundations built in from the start',
  'Fixed-price quote before we start anything',
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
  const proj0Ref = useRef<HTMLAnchorElement>(null);
  const proj1Ref = useRef<HTMLAnchorElement>(null);

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
    // Skip all GSAP on mobile — gsap.from() forces a repaint on mount by
    // setting elements to opacity:0 before animating in, which causes visible
    // lag on every navigation. Content is better shown instantly on mobile.
    if (window.matchMedia('(max-width: 1023px)').matches) return;

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 bg-light">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-accent/5 blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p
                ref={heroBadgeRef}
                className="uppercase tracking-widest text-accent font-semibold text-sm font-sans"
              >
                Perth Web Design for Tradies
              </p>
              <h1
                ref={heroH1Ref}
                className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1]"
              >
                Websites for Tradies.<br />
                <span className="text-accent">Built to Get You Jobs.</span>
              </h1>
              <p
                ref={heroSubRef}
                className="mt-6 text-xl sm:text-2xl text-dark-200 font-sans leading-relaxed"
              >
                We build websites for Perth tradies that bring in real work. Designed around how your customers actually search for you.
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
                From $1,200 · Live in 7 days · Perth-based
              </p>
            </div>

            {/* Hero image */}
            <div className="relative self-center mr-4 mb-4">
              {/* Accent offset block — translates behind and below the image */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 bg-accent"
              />

              {/* Image — sharp corners, horizontally flipped */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/websites-for-tradies-header.webp"
                  alt="Perth tradie at work"
                  fill
                  className="object-cover object-center"
                  style={{ transform: 'scaleX(-1)' }}
                  sizes="50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent pointer-events-none" />
              </div>

              {/* Top-left alignment bracket */}
              <div
                aria-hidden="true"
                className="absolute -top-2.5 -left-2.5 w-5 h-5 border-t-[3px] border-l-[3px] border-dark"
              />
              {/* Bottom-right alignment bracket (sits on accent block) */}
              <div
                aria-hidden="true"
                className="absolute bottom-[-6px] right-[-6px] translate-x-4 translate-y-4 w-5 h-5 border-b-[3px] border-r-[3px] border-dark/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOOK ─────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div ref={hookRef}>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark leading-tight">
                Your website is sending customers to your competitor.
              </h2>
              <p className="mt-6 text-lg text-dark-200 font-sans leading-relaxed">
                Before anyone calls you, they Google you. That&rsquo;s just how it works now. If your site looks like it
                hasn&rsquo;t been touched in five years, takes forever to load on a phone, or just doesn&rsquo;t show up
                at all, they&rsquo;re already calling someone else.
              </p>
              <p className="mt-4 text-lg text-dark-200 font-sans leading-relaxed">
                We&rsquo;ve built websites for plumbers, electricians, landscapers, tilers, builders, and bathroom
                renovators across Perth. We know what works for each trade, and it&rsquo;s not the same thing twice.
              </p>
            </div>

            {/* Hook image */}
            <div className="relative ml-4 mt-4">
              {/* Accent offset block — top-left this time */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-4 -translate-y-4 bg-accent"
              />

              {/* Image — sharp corners */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/websites-for-tradies-second.webp"
                  alt="Tradie checking their site on a tablet"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent pointer-events-none" />
              </div>

              {/* Top-right alignment bracket */}
              <div
                aria-hidden="true"
                className="absolute -top-2.5 -right-2.5 w-5 h-5 border-t-[3px] border-r-[3px] border-dark"
              />
              {/* Bottom-left alignment bracket (on accent block) */}
              <div
                aria-hidden="true"
                className="absolute bottom-[-6px] left-[-6px] -translate-x-4 -translate-y-4 w-5 h-5 border-b-[3px] border-l-[3px] border-dark/40"
              />
            </div>
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

          {/* Publication-style grid: gap-px dividers via bg on wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-dark/[0.08]">
            {[
              {
                icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
                title: tradeCards[0].title,
                body: tradeCards[0].body,
              },
              {
                icon: <Squares2X2Icon className="w-6 h-6" />,
                title: tradeCards[1].title,
                body: tradeCards[1].body,
              },
              {
                icon: <HomeModernIcon className="w-6 h-6" />,
                title: tradeCards[2].title,
                body: tradeCards[2].body,
              },
              {
                icon: <PaintBrushIcon className="w-6 h-6" />,
                title: tradeCards[3].title,
                body: tradeCards[3].body,
              },
            ].map((card, idx) => (
              <div
                key={card.title}
                ref={cardRefs[idx]}
                className="bg-light p-8 lg:p-10"
              >
                {/* Icon: dark square → accent on hover */}
                <div className="w-11 h-11 bg-dark flex items-center justify-center text-white flex-shrink-0">
                  {card.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold font-heading text-dark leading-snug">
                  {card.title}
                </h3>
                <p className="mt-3 text-dark-200 font-sans leading-relaxed text-[15px]">
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
              Three steps and you&rsquo;re live.
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
                className="bg-light border border-dark/10 border-l-4 border-l-accent rounded-xl p-8 flex flex-col"
              >
                <p className="text-lg font-heading text-dark leading-relaxed italic flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div>
                    <p className="font-semibold text-dark font-sans">{t.author}</p>
                    <p className="text-dark-200 text-sm font-sans">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-2 shadow-sm sm:ml-auto flex-shrink-0 self-start sm:self-auto">
                    <Image
                      src={t.logo}
                      alt={t.logoAlt}
                      width={80}
                      height={24}
                      className="h-6 w-auto"
                    />
                  </div>
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
              <a
                key={proj.title}
                ref={idx === 0 ? proj0Ref : proj1Ref}
                href={proj.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-dark/10 rounded-xl overflow-hidden group hover:border-accent/30 hover:shadow-glow transition-all duration-500"
              >
                {/* Project image */}
                <div className="relative w-full aspect-video bg-light-100 overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>

                {/* Project info */}
                <div className="p-6">
                  <p className="uppercase tracking-widest text-accent font-semibold text-xs font-sans">
                    {proj.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold font-heading text-dark group-hover:text-accent transition-colors duration-200">
                    {proj.title}
                  </h3>
                  <p className="mt-2 text-dark-200 font-sans text-sm leading-relaxed">
                    {proj.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-accent font-sans">
                    View live site →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="mb-12">
            <span className="uppercase tracking-widest text-accent font-semibold text-sm font-sans">
              Pricing
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold font-heading text-dark leading-tight">
              What does a tradie website cost?
            </h2>
          </div>

          {/* Same gap-px grid language as trade cards */}
          <div ref={pricingRef} className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-dark/[0.08]">

            {/* LEFT — dark pricing panel */}
            <div className="bg-dark px-10 py-14 sm:px-14 sm:py-16 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 -right-32 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
              />

              <p className="uppercase tracking-widest text-accent/80 font-semibold text-xs font-sans">
                One-time build fee
              </p>
              <div className="mt-2 flex items-start gap-2">
                <span className="text-white/40 font-sans text-base sm:text-xl mt-3 sm:mt-4 leading-none">from</span>
                <span className="text-6xl sm:text-8xl lg:text-9xl font-bold font-heading text-white leading-none tracking-tight">
                  $1,200
                </span>
              </div>
              <p className="mt-5 text-white/60 font-sans leading-relaxed">
                We quote the price before we start and that&rsquo;s what you pay.
              </p>

              {/* $50/month — featured inset block */}
              <div className="mt-8 border border-white/10 bg-white/5 p-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold font-heading text-white">$50</span>
                  <span className="text-white/50 font-sans">/month</span>
                </div>
                <p className="mt-2 text-white/60 font-sans text-sm leading-relaxed">
                  Covers hosting, updates, and support. We handle the technical side so you don&rsquo;t have to.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-glow hover:shadow-glow-lg"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>

            {/* RIGHT — includes + extras */}
            <div className="bg-light px-10 py-14 sm:px-14 sm:py-16 flex flex-col">

              <p className="uppercase tracking-widest text-dark/40 font-semibold text-xs font-sans mb-6">
                Every build includes
              </p>
              <ul className="space-y-4">
                {pricingIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-accent flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 text-white" />
                    </span>
                    <span className="text-dark font-sans leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Extras */}
              <div className="mt-10 pt-10 border-t border-dark/10">
                <p className="uppercase tracking-widest text-dark/40 font-semibold text-xs font-sans mb-4">
                  Optional extras
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Google Ads setup', 'Extra service pages', 'Blog setup', 'Photography', 'Ongoing SEO'].map((extra) => (
                    <span
                      key={extra}
                      className="border border-dark/15 px-3 py-1.5 text-sm font-sans text-dark/70"
                    >
                      + {extra}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-dark/40 font-sans text-sm">
                  Ask us about extras when you get in touch.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="uppercase tracking-widest text-accent font-semibold text-sm font-sans">
              FAQ
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold font-heading text-dark leading-tight">
              Common questions.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-dark/[0.08]">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-light p-8 lg:p-10">
                <h3 className="text-lg font-bold font-heading text-dark leading-snug">
                  {faq.q}
                </h3>
                <p className="mt-3 text-dark-200 font-sans leading-relaxed text-[15px]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────── */}
      <section id="contact" className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={formRef} className="max-w-2xl mx-auto">
            <span className="uppercase tracking-widest text-accent font-semibold text-sm font-sans">
              Get in touch
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold font-heading text-dark leading-tight">
              Ready to get more work from your website?
            </h2>
            <p className="mt-4 text-lg text-dark-200 font-sans leading-relaxed">
              Fill in the form and we&rsquo;ll get back to you within one business day with a straight answer on what we&rsquo;d build and what it costs.
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
                      placeholder="e.g. Joondalup, Cannington"
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
