'use client';
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
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
  {
    title: "Perth Liquid Limestone",
    category: "Website Revamp & SEO Boost",
    description: "Upgraded an existing website for better usability, faster load times, and higher Google rankings. My hands-on approach means clients always have direct access to me for updates and support.",
    image: "/PerthLiquidLimestone.jpg",
    href: "https://perthliquidlimestone.com.au",
  },
  {
    title: "Jestin Auto Electrics",
    category: "Custom Website Launch",
    description: "Delivered a high-performance, SEO-optimised website that helped this business attract more clients and stand out in their industry. I provide direct communication and ongoing support for every client.",
    image: "/JestinAutoElectrics.jpg",
    href: "https://jestinautoelectrics.com",
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
        y: 20,
        duration: 0.3,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Project cards animation
      const cards = projectsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            delay: 0.1 + index * 0.1,
            scrollTrigger: {
              trigger: card,
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
    <div id="projects" className="bg-light-100 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-dark text-center mb-16 sm:mb-20"
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
                className="group relative block overflow-hidden rounded-lg aspect-[4/3] bg-light-200"
              >
                {/* Project Image */}
                <Image
                  src={project.image}
                  height={600}
                  width={800}
                  alt={`${project.title} website screenshot`}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Overlay - consistent visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 md:p-10 z-10">
                  <span className="inline-block text-xs sm:text-sm font-bold text-accent mb-2 sm:mb-3 tracking-wide uppercase" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-white mb-3 sm:mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed line-clamp-4 md:line-clamp-3 md:group-hover:line-clamp-none transition-all duration-300" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
                    {project.description}
                  </p>

                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
