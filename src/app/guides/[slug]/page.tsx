'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

// Sample blog data - in a real app, this would come from a CMS or database
const blogPosts: Record<string, any> = {
  'trade-websites-seo': {
    title: 'Why Trade Businesses Need SEO-First Websites',
    author: 'Prajit Lal',
    date: 'January 8, 2025',
    readTime: '8 min read',
    category: 'SEO Strategy',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    excerpt: 'A beautifully designed website means nothing if no one can find it. Learn how to dominate local search and attract qualified leads with strategic SEO.',
    content: `
      <section class="prose prose-lg max-w-none">
        <p>Let me be direct: most websites for trade businesses fail because they prioritize aesthetics over discoverability. Your website could be the most beautiful thing on the internet, but if customers can't find it when they search for your services, it's worthless.</p>

        <h2>The Real Problem</h2>
        <p>When a homeowner in Perth needs an electrician at 9 PM on a Sunday, they don't open Google and search for "beautiful electrician websites." They search for "electrician near me" or "emergency electrician Perth." If your site isn't optimized for those searches, you're invisible.</p>

        <p>SEO-first design means building your website around the keywords your customers actually search for. It's the difference between hoping people find you and making sure they do.</p>

        <h2>Three Pillars of Trade Business SEO</h2>

        <h3>1. Local Search Optimization</h3>
        <p>Your Google Business Profile is your most valuable asset. Combined with a strategically designed website, it's an unstoppable combination. Your site should reinforce everything in your profile: location, services, contact information, and customer testimonials.</p>

        <h3>2. Service Page Architecture</h3>
        <p>Don't just list your services. Create detailed, keyword-rich pages for each service in each suburb you serve. A plumber in Perth should have pages for "plumbing services Fremantle," "gas fitting Myacrobibin," etc. This is where most trade sites fail.</p>

        <h3>3. Content That Ranks AND Converts</h3>
        <p>Blog content isn't about showing off. It's about answering the questions your customers search for. "How much does a plumbing inspection cost?" "What should I look for in an electrician?" These queries drive qualified leads straight to you.</p>

        <h2>The Long-Term Play</h2>
        <p>SEO isn't fast. It takes 3-6 months to see meaningful results. But once you rank for your core keywords, you're generating leads 24/7 without paying for ads. That compounds over time.</p>

        <p>The businesses that win in 2025 aren't the ones with the flashiest websites. They're the ones with strategic websites that work hard to be found.</p>

        <h2>Next Steps</h2>
        <p>If you're a trade business owner reading this, audit your current site against these three pillars. Are you ranking for your local keywords? Do your service pages target specific suburbs? Is your content answering real customer questions?</p>

        <p>If the answer to any of these is no, you're leaving money on the table.</p>
      </section>
    `,
  },
  'gbp-vs-website': {
    title: "Google Business Profile vs Website: Which Matters More?",
    author: 'Prajit Lal',
    date: 'January 5, 2025',
    readTime: '6 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db57?w=1200&h=600&fit=crop',
    excerpt: "Both are essential, but many businesses get the strategy backwards. Here's what you need to prioritize first.",
    content: `
      <section class="prose prose-lg max-w-none">
        <p>The question I hear most from trade business owners is: "Do I really need both a website AND a Google Business Profile?"</p>

        <p>The short answer: yes. But there's a hierarchy, and most businesses get it wrong.</p>

        <h2>Google Business Profile First</h2>
        <p>Your profile is your storefront. When someone searches "plumber near me," Google shows them your profile before your website. It's where the phone number lives, where reviews appear, and where hours are displayed.</p>

        <p>A complete, optimized profile is the fastest way to generate leads. You can set it up in an afternoon and start showing up in local search results immediately.</p>

        <h2>Your Website is the Insurance Policy</h2>
        <p>But here's where most businesses make a critical mistake: they think the profile is enough. It isn't.</p>

        <p>Your profile can only tell people so much. A serious customer wants to:</p>
        <ul>
          <li>See examples of your previous work</li>
          <li>Read detailed information about specific services</li>
          <li>Learn about your process and guarantees</li>
          <li>Trust you before calling</li>
        </ul>

        <p>Your website does all of this. It's where trust gets built.</p>

        <h2>The Right Strategy</h2>
        <p>Start with your Google Business Profile. Get it complete and optimized. Then build a website that reinforces everything on your profile and goes deeper.</p>

        <p>They work together. Your profile brings them to you. Your website closes them.</p>
      </section>
    `,
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  if (!post) {
    return (
      <main className="bg-light min-h-screen">
        <Navbar />
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-4xl font-bold text-dark mb-4">Article not found</h1>
          <Link href="/blog" className="text-accent hover:text-accent">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-light min-h-screen">
      <Navbar />

      {/* Header */}
      <header ref={headerRef} className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-light via-light to-light-100 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <article className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block text-xs sm:text-sm font-bold text-accent uppercase tracking-wide">
              {post.category}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark leading-[1.1] tracking-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-dark-200 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-sm font-semibold text-accent">PL</span>
              </div>
              <div>
                <div className="font-semibold text-dark">{post.author}</div>
              </div>
            </div>
            <span className="text-sm">{post.date}</span>
            <span className="text-sm">{post.readTime}</span>
          </div>
        </article>
      </header>

      {/* Featured Image */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-glow">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Content */}
      <article ref={contentRef} className="relative max-w-3xl mx-auto px-6 lg:px-8 pb-24">
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-h2:text-3xl prose-h2:text-dark prose-h2:font-bold prose-h3:text-2xl prose-h3:text-dark prose-h3:font-semibold prose-p:text-dark-200 prose-p:leading-relaxed prose-a:text-accent prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:text-dark prose-strong:font-semibold prose-ul:text-dark-200 prose-li:text-dark-200">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Author Bio */}
        <div className="mt-20 pt-12 border-t border-dark/10">
          <div className="flex gap-6 items-start">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent via-sage to-charcoal flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
              PL
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-dark mb-2">{post.author}</h3>
              <p className="text-dark-200 leading-relaxed">
                Prajit is a Perth-based web developer specializing in high-performance websites for Australian trade businesses. He helps plumbers, electricians, and other service providers rank on Google and generate qualified leads.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 bg-dark/5 backdrop-blur-sm border border-dark/10 rounded-3xl text-center">
          <h3 className="text-2xl font-bold font-heading text-dark mb-4">
            Ready to build your lead-generating website?
          </h3>
          <p className="text-dark-200 mb-8">
            Let's discuss how to apply these insights to your business.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-sage text-white font-semibold rounded-xl shadow-glow hover:shadow-glow-lg hover:scale-[1.05] active:scale-[0.95] transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-light-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-dark mb-12">
            More from the Blog
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(blogPosts)
              .slice(0, 3)
              .map(([slug, p]: [string, any]) => (
                <Link key={slug} href={`/blog/${slug}`}>
                  <article className="group h-full flex flex-col bg-light border border-dark/10 rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-glow transition-all duration-500">
                    <div className="relative h-48 overflow-hidden bg-light-100">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    <div className="flex-1 flex flex-col p-6">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">
                        {p.category}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-dark mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-dark-200 line-clamp-2 flex-grow">{p.excerpt}</p>
                      <span className="text-xs text-dark-200 mt-4 pt-4 border-t border-dark/10">
                        {p.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
            >
              <span>View all articles</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
