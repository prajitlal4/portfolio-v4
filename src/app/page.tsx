import CTA from "@/components/CTA";
import Content from "@/components/Content";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonials";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white h-full">
      <form name="contact" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>
      <Navbar />
      <Hero />
      <Content />
      <Services />
      <Projects />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}
