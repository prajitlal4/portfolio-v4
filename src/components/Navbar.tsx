"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/data/navigation";
import {
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
  WrenchScrewdriverIcon as WrenchScrewdriverIconSolid,
  BriefcaseIcon as BriefcaseIconSolid,
  EnvelopeIcon as EnvelopeIconSolid,
} from "@heroicons/react/24/solid";

type NavIconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const mobileNavItems: {
  name: string;
  href: string;
  OutlineIcon: NavIconComponent;
  SolidIcon: NavIconComponent;
}[] = [
  { name: "Home",    href: "/",                    OutlineIcon: HomeIcon,              SolidIcon: HomeIconSolid },
  { name: "About",   href: "/about",                OutlineIcon: UserIcon,              SolidIcon: UserIconSolid },
  { name: "Tradies", href: "/websites-for-tradies", OutlineIcon: WrenchScrewdriverIcon, SolidIcon: WrenchScrewdriverIconSolid },
  { name: "Work",    href: "/case-studies",          OutlineIcon: BriefcaseIcon,         SolidIcon: BriefcaseIconSolid },
  { name: "Contact", href: "/contact",               OutlineIcon: EnvelopeIcon,          SolidIcon: EnvelopeIconSolid },
];

const navigation = navigationLinks.map((link) => ({
  name: link.label,
  href: link.href,
}));

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Top navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-light/80 backdrop-blur-xl border-b border-dark/10"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 group">
              <span className="sr-only">PL Solutions</span>
              <Image
                className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
                src="https://portfolio1.syd1.cdn.digitaloceanspaces.com/PL%20Solutions%20White.png"
                alt="PL Solutions Logo"
                height={40}
                width={160}
                priority
              />
            </Link>
          </div>
          {/* Desktop nav links */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-dark hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile floating bottom pill nav */}
      <nav
        aria-label="Mobile navigation"
        className="lg:hidden fixed z-50 left-1/2 -translate-x-1/2"
        style={{ bottom: "max(1.5rem, calc(1rem + env(safe-area-inset-bottom)))" }}
      >
        <div className="flex items-center gap-0.5 bg-white/90 backdrop-blur-2xl rounded-full px-2 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.14),0_2px_8px_rgba(0,0,0,0.06)] border border-dark/10 ring-1 ring-white/60">
          {mobileNavItems.map(({ name, href, OutlineIcon, SolidIcon }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={name}
                href={href}
                className={`relative flex flex-col items-center justify-center gap-0.5 px-3.5 py-2.5 rounded-full transition-all duration-300 min-w-[54px] select-none ${
                  isActive ? "text-white" : "text-dark-200 hover:text-dark active:scale-95"
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full bg-accent"
                    style={{ boxShadow: "0 4px 14px rgba(255,107,53,0.45)" }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">
                  {isActive ? (
                    <SolidIcon className="h-[18px] w-[18px]" />
                  ) : (
                    <OutlineIcon className="h-[18px] w-[18px]" />
                  )}
                </span>
                <span className="relative z-10 text-[8.5px] font-bold tracking-widest uppercase leading-none">
                  {name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
