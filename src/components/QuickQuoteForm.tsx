'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Toast from './Toast';

gsap.registerPlugin(ScrollTrigger);

interface QuickQuoteFormProps {
  id?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onSuccess?: () => void;
}

export default function QuickQuoteForm({
  id = 'contact-form',
  title = 'Get Started Today',
  subtitle = 'Let\'s discuss your project',
  buttonText = 'GET IN TOUCH',
  onSuccess,
}: QuickQuoteFormProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
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
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'quick-quote', ...formData }),
      });

      if (response.ok) {
        setToastType('success');
        setToastMessage("Thank you for your enquiry! I'll be in touch shortly.");
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
        onSuccess?.();
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
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div id={id} ref={formRef} className="w-full max-w-md">
      <div className="bg-light-100 border border-dark/10 rounded-lg p-8 hover:border-accent/50 transition-colors duration-200">
        <h3 className="text-2xl font-bold font-heading text-dark mb-2 text-center">
          {title}
        </h3>
        <p className="text-center text-sm text-dark-200 mb-6">
          {subtitle}
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="hidden" name="form-name" value="quick-quote" />
          <input type="hidden" name="bot-field" />

          <div>
            <label htmlFor="qqf-name" className="block text-sm font-semibold text-dark-100 font-sans mb-2">
              Your name
            </label>
            <input
              id="qqf-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              className={`w-full rounded-xl border ${
                errors.name ? 'border-red-500' : 'border-dark/10'
              } bg-light-100 px-4 py-3 text-dark placeholder:text-dark/30 focus:outline-none focus:border-accent transition-colors duration-200 text-base`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="qqf-email" className="block text-sm font-semibold text-dark-100 font-sans mb-2">
              Email address
            </label>
            <input
              id="qqf-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full rounded-xl border ${
                errors.email ? 'border-red-500' : 'border-dark/10'
              } bg-light-100 px-4 py-3 text-dark placeholder:text-dark/30 focus:outline-none focus:border-accent transition-colors duration-200 text-base`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="qqf-message" className="block text-sm font-semibold text-dark-100 font-sans mb-2">
              How can we help?
            </label>
            <textarea
              id="qqf-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us a bit about your business and what you need..."
              className={`w-full rounded-xl border ${
                errors.message ? 'border-red-500' : 'border-dark/10'
              } bg-light-100 px-4 py-3 text-dark placeholder:text-dark/30 focus:outline-none focus:border-accent transition-colors duration-200 text-base resize-none`}
            />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-accent px-6 py-4 text-base font-semibold text-white hover:bg-accent-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-glow hover:shadow-glow-lg"
          >
            {isSubmitting ? 'Sending...' : buttonText}
          </button>
        </form>
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
