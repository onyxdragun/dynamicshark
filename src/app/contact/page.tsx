"use client";

import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
        // Google Analytics event tracking
        if (typeof window !== "undefined") {
          // @ts-ignore
          window.gtag && window.gtag("event", "contact_form_submit", {
            event_category: "Contact",
            event_label: form.email,
          });
        }
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch {
      setStatus("Failed to send. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="my-2 flex flex-col items-center">
      <div className="max-w-xl w-full mx-auto">
        <div className="flex flex-col gap-6 bg-white/70 backdrop-blur-sm rounded-lg px-8 py-3 my-1 items-center justify-center">
          <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaEnvelope className="w-6 h-6 text-cyan-700" />
            Contact Me
          </h1>
          {status && (
            <div className="text-center text-sm mb-2">
              {status === "Message sent!"
                ? "Thank you for reaching out! I'll get back to you soon."
                : status}
            </div>
          )}
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-white border border-cyan-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 placeholder:text-gray-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-white border border-cyan-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 placeholder:text-gray-400"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-white border border-cyan-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 placeholder:text-gray-400"
                placeholder="Type your message here..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 rounded bg-cyan-700 text-white font-semibold hover:bg-cyan-800 transition-colors"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
