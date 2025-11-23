'use client';

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Toast from "./Toast";

gsap.registerPlugin(ScrollTrigger);

function CTA() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.8,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(textRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(formRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      });

      if (response.ok) {
        setToastType('success');
        setToastMessage("Thank you for your enquiry! I'll be in touch shortly.");
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setToastType('error');
      setToastMessage('Something went wrong. Please try again or email me directly.');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div id="contact" className="relative bg-dark-100 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/10 via-transparent to-apple-blue/5 animate-gradientShift opacity-50" 
           style={{ backgroundSize: "200% 200%" }} />

      <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text */}
          <div className="flex-1 w-full max-w-2xl">
            <h2 ref={headlineRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight">
              <span className="text-light">Ready to Grow </span>
              <span className="bg-gradient-to-r from-apple-blue-light via-apple-blue to-apple-blue-dark bg-clip-text text-transparent">
                Your Business Online?
              </span>
            </h2>
            <p ref={textRef} className="mt-8 text-xl sm:text-2xl text-light-muted leading-relaxed">
              Let&apos;s build a website or app that helps your business grow. You get direct access, fast support, and a personal commitment to your success with no agencies or middlemen.
            </p>
          </div>

          {/* Right: Form */}
          <div ref={formRef} className="flex-1 w-full flex justify-center items-center">
            <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-glass p-8 hover:bg-white/[0.07] transition-all duration-500">
              <h3 className="text-2xl font-bold font-heading text-light mb-6 text-center">
                GET IN TOUCH
              </h3>
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full rounded-xl border ${errors.name ? 'border-red-500' : 'border-white/20'} bg-white/5 px-4 py-3.5 text-light placeholder:text-light-muted focus:ring-2 focus:ring-apple-blue/50 focus:border-apple-blue focus:shadow-glow transition-all duration-300 text-base backdrop-blur-sm`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className={`w-full rounded-xl border ${errors.email ? 'border-red-500' : 'border-white/20'} bg-white/5 px-4 py-3.5 text-light placeholder:text-light-muted focus:ring-2 focus:ring-apple-blue/50 focus:border-apple-blue focus:shadow-glow transition-all duration-300 text-base backdrop-blur-sm`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
                
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help your business?"
                    className={`w-full rounded-xl border ${errors.message ? 'border-red-500' : 'border-white/20'} bg-white/5 px-4 py-3.5 text-light placeholder:text-light-muted focus:ring-2 focus:ring-apple-blue/50 focus:border-apple-blue focus:shadow-glow transition-all duration-300 text-base backdrop-blur-sm resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-apple-blue to-apple-blue-dark px-6 py-4 text-base font-semibold text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'ENQUIRE NOW'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Toast 
        show={showToast} 
        message={toastMessage}
        type={toastType}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}

export default CTA;
