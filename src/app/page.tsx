import CTA from "@/components/CTA";
import Content from "@/components/Content";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Content />
      <Services />
      <Projects />
      <Testimonial />
      <CTA />
    </main>
  );
}
