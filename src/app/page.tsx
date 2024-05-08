import CTA from "@/components/CTA";
import Content from "@/components/Content";
import ExampleWebsites from "@/components/ExampleWebsites";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white h-full">
      <Navbar />
      <Hero />
      <Content />
      <Services />
      <ExampleWebsites />
      <Projects />
      <Testimonial />
      <CTA />
    </main>
  );
}
