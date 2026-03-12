"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";

const iconMap = {
  location: MapPin,
  phone: Phone,
  email: Mail,
} as const;

// TODO: Replace with your real Formspree form ID (e.g. "xabcdefg")
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

const SUBJECTS = [
  "General Inquiry",
  "Membership",
  "Events & Tickets",
  "Newcomer Support",
  "Volunteering",
  "Media & Press",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full py-3 px-3.5 rounded-md border-[1.5px] border-border text-sm text-charcoal outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/10 bg-white";

  return (
    <section id="contact" className="bg-sand py-20">
      <Container>
        <SectionHeader label="Get in Touch" />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-10 leading-tight"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Contact Form ── */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl p-9 border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)]"
          >
            <h3 className="font-display text-[20px] font-bold text-charcoal mb-6">
              Send Us a Message
            </h3>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-[22px] text-charcoal mb-2">Message Sent!</h3>
                  <p className="text-muted">We&apos;ll get back to you within 2 business days.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-xs font-semibold text-charcoal tracking-wide block mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-xs font-semibold text-charcoal tracking-wide block mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-charcoal tracking-wide block mb-1.5">
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={inputClass}
                    >
                      <option value="" disabled>Select a topic…</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-xs font-semibold text-charcoal tracking-wide block mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-y`}
                      placeholder="How can we help you?"
                    />
                  </div>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-navy text-white font-semibold text-sm py-3.5 px-7 rounded-md border-none cursor-pointer mt-1 hover:bg-deep-navy transition-colors active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending…" : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Contact Info ── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {/* Info cards */}
            {CONTACT_INFO.map((c) => {
              const Icon = iconMap[c.icon];
              return (
                <div
                  key={c.title}
                  className="bg-white rounded-[10px] p-5 flex gap-4 items-start border border-border shadow-[0_2px_12px_rgba(0,43,92,0.04)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy/[0.07] flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-navy" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-charcoal mb-1">{c.title}</div>
                    {c.lines.map((l) => (
                      <div key={l} className="text-sm text-muted leading-relaxed">{l}</div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Office hours */}
            <div className="bg-white rounded-[10px] p-5 flex gap-4 items-start border border-border shadow-[0_2px_12px_rgba(0,43,92,0.04)]">
              <div className="w-10 h-10 rounded-lg bg-navy/[0.07] flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-navy" />
              </div>
              <div>
                <div className="font-semibold text-sm text-charcoal mb-1">Office Hours</div>
                <div className="text-sm text-muted leading-relaxed">Saturday: 10:00 AM – 2:00 PM</div>
                <div className="text-sm text-muted leading-relaxed">By appointment on weekdays</div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-white rounded-[10px] p-5 border border-border shadow-[0_2px_12px_rgba(0,43,92,0.04)]">
              <div className="font-semibold text-sm text-charcoal mb-3">Follow Us</div>
              <div className="flex gap-3">
                <a
                  href={SOCIAL_LINKS.facebook}
                  className="flex items-center gap-2 bg-[#1877F2]/[0.08] text-[#1877F2] rounded-lg px-4 py-2.5 text-sm font-semibold no-underline hover:bg-[#1877F2]/[0.14] transition-colors"
                >
                  <Facebook size={16} /> Facebook
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  className="flex items-center gap-2 bg-[#E1306C]/[0.08] text-[#E1306C] rounded-lg px-4 py-2.5 text-sm font-semibold no-underline hover:bg-[#E1306C]/[0.14] transition-colors"
                >
                  <Instagram size={16} /> Instagram
                </a>
              </div>
            </div>

            {/* Response time note */}
            <div className="bg-navy/[0.04] rounded-[10px] p-4 border border-navy/[0.08]">
              <p className="text-[13px] text-slate leading-relaxed">
                <span className="font-semibold text-charcoal">Typical response time:</span> We aim
                to respond to all messages within 2 business days. For urgent matters, please
                call us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
