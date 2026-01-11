"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { navigationLinks } from "@/lib/data/navigation";

// Map navigation links for display
const navigation = navigationLinks.map((link) => ({
  name: link.label,
  href: link.href,
}));

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if navbar should have glassmorphism
      setScrolled(currentScrollY > 50);
      
      // Hide on scroll down, show on scroll up (Apple style)
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
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
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
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-light-100 px-6 py-6 sm:max-w-sm border-l border-dark/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">PL Solutions</span>
              <Image
                className="h-10 w-auto"
                src="https://portfolio1.syd1.cdn.digitaloceanspaces.com/PL%20Solutions%20Black.png"
                alt="PL Solutions Logo"
                height={40}
                width={160}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-dark hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-dark hover:bg-dark/5 hover:text-accent transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
