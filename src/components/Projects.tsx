'use client';
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Jestin Auto Electrics",
    category: "Custom Website Launch",
    description: "Delivered a high-performance, SEO-optimised website that helped this business attract more clients and stand out in their industry. I provide direct communication and ongoing support for every client.",
    image: "/JestinAutoElectrics.jpg",
    href: "https://jestinautoelectrics.com",
  },
  {
    title: "Perth Liquid Limestone",
    category: "Website Revamp & SEO Boost",
    description: "Upgraded an existing website for better usability, faster load times, and higher Google rankings. My hands-on approach means clients always have direct access to me for updates and support.",
    image: "/PerthLiquidLimestone.jpg",
    href: "https://perthliquidlimestone.com.au",
  },
  {
    title: "Highside Plumbing and Gas",
    category: "Professional Plumbing Website",
    description: "Created a modern, professional website for a trusted plumbing and gas service provider. Designed to showcase their expertise and make it easy for customers to get in touch for reliable service.",
    image: "/highside-image.png",
    href: "https://highsideplumbing.com.au",
  },
  {
    title: "Scope Bathroom Renovations",
    category: "Bathroom Renovation Showcase",
    description: "Built a stunning showcase website for a premium bathroom renovation company. Features their beautiful work with an elegant design that converts visitors into customers.",
    image: "/scopebathrooms-image.webp",
    href: "https://scopebathroomrenovations.com",
  },
];

function Projects() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Project card animations
      const cards = projectsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 0.7,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="projects" className="bg-dark-100 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-light text-center mb-16 sm:mb-20"
        >
          Recent Projects
        </h2>

        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="project-card"
            >
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl aspect-[4/3] bg-dark-200"
              >
                {/* Project Image */}
                <Image
                  src={project.image}
                  height={600}
                  width={800}
                  alt={`${project.title} website screenshot`}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />

                {/* Gradient Overlay - lighter on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/70 group-hover:via-black/20 transition-all duration-500" />

                {/* Blue glow on hover */}
                <div className="absolute inset-0 bg-apple-blue/0 group-hover:bg-apple-blue/10 transition-all duration-500" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 sm:p-10 z-10 group-hover:translate-y-[-8px] transition-transform duration-500">
                  <span className="inline-block text-sm font-semibold text-apple-blue-light mb-3 tracking-wide uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-light-muted leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>

                  {/* View Project Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-apple-blue-light font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Project</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Border effect on hover */}
                <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-apple-blue/50 transition-all duration-500 pointer-events-none" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
