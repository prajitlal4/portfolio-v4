'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuickQuoteForm from '@/components/QuickQuoteForm';
import GetStartedButton from '@/components/GetStartedButton';
import { projects } from '@/lib/data/projects';
import { CheckCircleIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const philosophies = [
  {
    title: 'Direct Access',
    description: 'You get my personal number. Not a support ticket queue. Not a chatbot. Real, direct access when you need changes or advice.',
    icon: UserGroupIcon,
  },
  {
    title: 'Trade-Focused Expertise',
    description: 'I specialize in trade businesses because I understand your challenges: seasonality, service areas, local competition, and urgent communication needs.',
    icon: SparklesIcon,
  },
  {
    title: 'Perth-Based, Perth-Focused',
    description: 'I\'m invested in Perth\'s success. I understand the local market, compete here myself, and build websites optimized for your specific suburbs and communities.',
    icon: CheckCircleIcon,
  },
];

const stats = [
  {
    number: '4+',
    label: 'Years of Web Design',
  },
  {
    number: '50+',
    label: 'Trade Businesses Served',
  },
  {
    number: '240%',
    label: 'Avg. Lead Increase',
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.5,
      });

      // Story section
      gsap.from(storyRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Philosophy cards
      const philosophyCards = philosophyRef.current?.querySelectorAll('.philosophy-card');
      if (philosophyCards) {
        philosophyCards.forEach((card, index) => {
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

      // Stats
      const statNumbers = statsRef.current?.querySelectorAll('.stat-number');
      if (statNumbers) {
        statNumbers.forEach((stat) => {
          gsap.from(stat, {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        });
      }

      // Projects section
      gsap.from(projectsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // CTA section
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

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
              About Me
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] tracking-tight mb-6">
              Web Design Built for Perth <span className="text-accent">Trade Businesses</span>
            </h1>
            <p className="text-xl sm:text-2xl text-dark-200 leading-relaxed max-w-2xl">
              I specialize in helping trade professionals—plumbers, electricians, landscapers, and renovators—get found online and convert visitors into customers. Direct access, proven results, Perth-focused.
            </p>
            <div className="mt-8">
              <GetStartedButton />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section ref={storyRef} className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image/Photo Placeholder */}
            <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden bg-light border border-dark/10 flex items-center justify-center">
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-dark/5 to-accent/5">
                <svg className="w-24 h-24 text-dark-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm text-dark-200 mt-4">[Your Photo Here]</p>
              </div>
            </div>

            {/* Story Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6 leading-tight">
                Why I Focus on Trade Businesses
              </h2>

              <div className="space-y-5 text-lg text-dark-200 leading-relaxed">
                <p>
                  I didn't start out as a web designer. I worked in the construction and trades industry, and I saw the same problem over and over: talented, hardworking trade professionals were losing business because they weren't visible online.
                </p>

                <p>
                  They'd lose jobs to competitors with basic websites. They'd get undercut by national directories like HiPages and Hipages. They'd spend thousands on ads and get nothing back. It frustrated me.
                </p>

                <p>
                  So I learned web design specifically to solve this problem. Now, I build websites for trade businesses that actually work: sites that rank on Google, convert visitors into phone calls, and give you a competitive advantage in your local market.
                </p>

                <p>
                  <span className="text-accent font-semibold">Perth is my focus.</span> I'm based here, I understand the local market, and I believe in building businesses that stay local and thrive locally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy/Approach Section */}
      <section ref={philosophyRef} className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark mb-6">
              How I Work
            </h2>
            <p className="text-xl text-dark-200 max-w-2xl mx-auto">
              Three core principles that guide everything I do for my clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((philosophy, index) => (
              <div
                key={philosophy.title}
                className="philosophy-card group relative bg-light border border-dark/10 rounded-lg p-8 hover:border-accent hover:bg-light-100 transition-all duration-300"
              >
                {/* Icon Background */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300" />

                {/* Icon */}
                <div className="relative mb-6">
                  <philosophy.icon className="h-10 w-10 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-heading text-dark mb-3">
                  {philosophy.title}
                </h3>
                <p className="text-sm sm:text-base text-dark-200 leading-relaxed">
                  {philosophy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Proof Section */}
      <section ref={statsRef} className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="stat-number">
                  <p className="text-5xl sm:text-6xl font-bold font-heading text-accent mb-3">
                    {stat.number}
                  </p>
                  <p className="text-lg text-dark-200 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section ref={projectsRef} className="py-24 sm:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark mb-6">
              Recent Work
            </h2>
            <p className="text-xl text-dark-200 max-w-2xl">
              Real trade businesses. Real results. Here's what I've built recently.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project) => (
              <Link
                key={project.title}
                href={`/case-studies/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-light-200 border border-dark/10 hover:border-accent transition-colors duration-300"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <span className="text-xs sm:text-sm font-bold text-accent mb-2 uppercase tracking-wide">
                    {project.trade}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {project.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors duration-200"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section ref={ctaRef} className="py-24 sm:py-32 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark mb-6">
                Ready to Get Found Online?
              </h2>
              <p className="text-lg sm:text-xl text-dark-200 max-w-2xl mx-auto">
                Let's discuss how a professional website can attract more customers for your trade business.
              </p>
            </div>

            <div className="flex justify-center">
              <QuickQuoteForm id="contact-form" title="Start Your Project" subtitle="Let's get your website built" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
