'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const featuredPost = {
  id: 'trade-websites-seo',
  title: 'Why Trade Businesses Need SEO-First Websites',
  excerpt:
    'A beautifully designed website means nothing if no one can find it. Learn how to dominate local search and attract qualified leads with strategic SEO.',
  category: 'SEO Strategy',
  date: 'January 8, 2025',
  readTime: '8 min read',
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
  slug: 'trade-websites-seo',
};

const recentPosts = [
  {
    id: 1,
    title: "Google Business Profile vs Website: Which Matters More?",
    excerpt:
      "Both are essential, but many businesses get the strategy backwards. Here's what you need to prioritize first.",
    category: 'Business',
    date: 'January 5, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db57?w=600&h=400&fit=crop',
    slug: 'gbp-vs-website',
  },
  {
    id: 2,
    title: 'The Complete Guide to Website Maintenance for Trade Businesses',
    excerpt:
      "Neglecting maintenance costs you leads, rankings, and revenue. Here's the minimal upkeep every site needs.",
    category: 'Maintenance',
    date: 'December 28, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    slug: 'website-maintenance',
  },
  {
    id: 3,
    title: 'How to Write Landing Page Copy That Converts',
    excerpt:
      "Your copy should speak to the problem your customers have, not the features you built. Here's the framework.",
    category: 'Copywriting',
    date: 'December 20, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1455849318169-8149e910e41d?w=600&h=400&fit=crop',
    slug: 'landing-page-copy',
  },
  {
    id: 4,
    title: 'Local SEO Mistakes That Kill Your Rankings',
    excerpt:
      "Common SEO errors that plumbers, electricians, and other trade pros make every day—and how to fix them.",
    category: 'SEO Strategy',
    date: 'December 15, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=600&h=400&fit=crop',
    slug: 'local-seo-mistakes',
  },
  {
    id: 5,
    title: "Why Mobile-First Design Isn't Optional Anymore",
    excerpt:
      "Over 75% of your customers search on mobile. Your website needs to perform flawlessly on phones.",
    category: 'Design',
    date: 'December 10, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    slug: 'mobile-first-design',
  },
  {
    id: 6,
    title: 'Converting Website Visitors Into Qualified Leads',
    excerpt:
      "Traffic without conversions is worthless. Learn the psychology and mechanics of converting browsers into calls.",
    category: 'Conversion',
    date: 'December 1, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    slug: 'visitor-conversion',
  },
];

export default function BlogPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
      });

      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 15,
        duration: 0.3,
        delay: 0.1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Featured post animation
      gsap.from(featuredRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        delay: 0.15,
        scrollTrigger: {
          trigger: featuredRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Grid posts animation
      const posts = postsRef.current?.querySelectorAll('.blog-card');
      if (posts) {
        posts.forEach((post, index) => {
          gsap.from(post, {
            opacity: 0,
            y: 15,
            duration: 0.3,
            delay: 0.2 + index * 0.05,
            scrollTrigger: {
              trigger: post,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-light min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-light overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              Resources & Insights
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] tracking-tight mb-6">
              Web Strategy & SEO For Trade Pros
            </h1>
            <p className="text-xl sm:text-2xl text-dark-200 leading-relaxed max-w-2xl">
              Learn how to build websites that generate leads, rank on Google, and outshine your competition.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 ref={titleRef} className="text-3xl sm:text-4xl font-bold font-heading text-dark">
              Featured Story
            </h2>
          </div>

          <Link href={`/blog/${featuredPost.slug}`}>
            <article
              ref={featuredRef}
              className="group relative bg-light border border-dark/10 rounded-lg overflow-hidden hover:border-accent hover:bg-light-100 transition-colors duration-200 cursor-pointer"
            >

              <div className="relative flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto lg:aspect-video overflow-hidden bg-light-100">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block text-xs sm:text-sm font-bold text-accent uppercase tracking-wide">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-dark-200">{featuredPost.date}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold font-heading text-dark mb-4 group-hover:text-accent transition-colors duration-300">
                    {featuredPost.title}
                  </h3>

                  <p className="text-lg text-dark-200 leading-relaxed mb-6 max-w-xl">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-dark-200">
                    <span>{featuredPost.readTime}</span>
                    <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                      <span>Read Article</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-16 sm:py-24 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-dark mb-3">
              Latest Articles
            </h2>
            <p className="text-lg text-dark-200">
              Strategies, tips, and insights for building better websites.
            </p>
          </div>

          <div ref={postsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="blog-card group h-full flex flex-col bg-light border border-dark/10 rounded-lg overflow-hidden hover:border-accent hover:bg-light-100 transition-colors duration-200">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-light-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-xs text-dark-200 whitespace-nowrap">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-dark mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-sm sm:text-base text-dark-200 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-dark/10">
                      <span className="text-xs text-dark-200">{post.date}</span>
                      <div className="text-sm font-semibold text-accent group-hover:gap-1 flex items-center gap-0 transition-all duration-300">
                        <span className="hidden group-hover:inline">→</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark mb-6">
            Ready to Transform Your Web Presence?
          </h2>
          <p className="text-lg sm:text-xl text-dark-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            These insights are just the start. Let's discuss how to apply them to your specific business.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
