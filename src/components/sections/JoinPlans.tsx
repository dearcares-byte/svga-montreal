"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, CalendarDays, Vote, BookOpen, ChevronDown } from "lucide-react";
import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { MEMBERSHIP_PLANS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const whyJoin = [
  {
    Icon: CalendarDays,
    color: "#002B5C",
    bg: "#EEF3FA",
    title: "Events All Year Long",
    desc: "From cultural festivals and galas to potluck dinners and workshops — members enjoy priority access to 30+ events per year.",
  },
  {
    Icon: Users,
    color: "#009739",
    bg: "#E8F5ED",
    title: "A Genuine Community",
    desc: "Connect with 500+ Vincentians in Montreal who share your roots, your culture, and your story. Friendships that last a lifetime.",
  },
  {
    Icon: Vote,
    color: "#D4A800",
    bg: "#FFF8E0",
    title: "A Voice in the Association",
    desc: "Full members vote at the Annual General Assembly, shaping the direction of programs, spending, and community priorities.",
  },
  {
    Icon: BookOpen,
    color: "#0052A5",
    bg: "#EEF3FA",
    title: "Resources & Support",
    desc: "Access to newcomer guides, settlement referrals, business networking, youth programs, and community advocacy.",
  },
];

const benefits = [
  {
    category: "Events & Activities",
    items: [
      { label: "In-person event access", virtual: false, member: true },
      { label: "Event updates & early registration info", virtual: true, member: true },
      { label: "Priority registration for limited-capacity events", virtual: false, member: true },
      { label: "Discounted gala & ticketed event pricing", virtual: false, member: true },
    ],
  },
  {
    category: "Community",
    items: [
      { label: "Online community group access", virtual: true, member: true },
      { label: "Member directory listing", virtual: false, member: true },
      { label: "Voting rights at General Assembly", virtual: false, member: true },
      { label: "Volunteer & leadership opportunities", virtual: false, member: true },
    ],
  },
  {
    category: "Information & Resources",
    items: [
      { label: "Monthly newsletter & announcements", virtual: true, member: true },
      { label: "Digital SVG Association resources", virtual: true, member: true },
      { label: "Newcomer settlement guides", virtual: false, member: true },
      { label: "Exclusive member programs & workshops", virtual: false, member: true },
    ],
  },
];

const faqs = [
  {
    q: "How do I sign up?",
    a: "Send us a message through the Contact page or speak to any board member at one of our events. We'll get you set up right away — no complicated forms required.",
  },
  {
    q: "Is the $20 membership per person or per household?",
    a: "The $20 annual fee covers one individual. If you'd like to register your family, reach out to us and we can make arrangements.",
  },
  {
    q: "Can I upgrade from Virtual Member to full Member?",
    a: "Absolutely. At any time, you can upgrade to a full membership for $20/year by contacting us. There's no waiting period.",
  },
  {
    q: "When does membership renew?",
    a: "Memberships run on a calendar year basis (January to December). We'll send you a renewal reminder in December each year.",
  },
  {
    q: "Is the SVG Association a registered non-profit?",
    a: "Yes. The SVG Association of Montreal is a registered non-profit organization in Quebec. Membership fees go directly toward community programming and events.",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left bg-transparent border-none cursor-pointer gap-4"
      >
        <span className="font-display font-semibold text-[17px] text-charcoal">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={18} className="text-muted flex-shrink-0" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-sm text-slate leading-relaxed pb-5">{a}</p>
      </motion.div>
    </div>
  );
}

export default function JoinPlans() {
  return (
    <div>

      {/* ── Why Join ── */}
      <section id="why-join" className="bg-sand py-20 scroll-mt-[100px]">
        <Container>
          <SectionHeader label="Why Join?" />
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-4 leading-tight"
          >
            More Than a Membership
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-slate leading-loose max-w-2xl mb-12"
          >
            When you join the SVG Association of Montreal, you become part of
            something much bigger than a club — you join a family rooted in
            shared culture, mutual support, and a love for our islands.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyJoin.map(({ Icon, color, bg, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,43,92,0.10)" }}
                className="bg-white rounded-xl p-7 border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)]"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: bg }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="font-display text-[17px] font-bold text-charcoal mb-2">{title}</h3>
                <p className="text-sm text-slate leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Plans ── */}
      <section id="plans" className="bg-white py-20 scroll-mt-[100px]">
        <Container>
          <div className="text-center mb-12">
            <SectionHeader label="Membership Plans" />
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-3"
            >
              Choose Your Membership
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-base text-muted max-w-[500px] mx-auto"
            >
              Start for free and stay connected online, or go all-in with a
              full membership for just $20 a year.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            {MEMBERSHIP_PLANS.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  boxShadow: p.featured
                    ? "0 16px 48px rgba(252,209,22,0.2)"
                    : "0 12px 40px rgba(0,43,92,0.1)",
                }}
                className="rounded-xl overflow-hidden relative bg-white"
                style={{
                  border: p.featured ? "2px solid #FCD116" : "1px solid #E8E6E1",
                  boxShadow: p.featured
                    ? "0 8px 32px rgba(252,209,22,0.15)"
                    : "0 2px 12px rgba(0,43,92,0.06)",
                }}
              >
                {p.featured && (
                  <div className="bg-gold py-1.5 text-center text-[11px] font-bold tracking-[2px] uppercase text-deep-navy">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div
                    className="text-[13px] font-semibold tracking-wider uppercase mb-1"
                    style={{ color: p.color }}
                  >
                    {p.name}
                  </div>
                  <p className="text-[13px] text-muted mb-4">{p.tagline}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-display text-[44px] font-bold text-charcoal">
                      {p.price}
                    </span>
                    {p.price !== "Free" && (
                      <span className="text-sm text-muted">/{p.period}</span>
                    )}
                  </div>
                  <div className="border-t border-border pt-5">
                    {p.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2.5 py-2 text-sm text-slate"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          className="flex-shrink-0 mt-0.5"
                        >
                          <circle cx="8" cy="8" r="8" fill={`${p.color}15`} />
                          <path
                            d="M5 8l2 2 4-4"
                            stroke={p.color}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/contact?plan=${encodeURIComponent(p.name)}`}
                    className="block w-full mt-6 py-3.5 rounded-lg text-sm font-semibold text-center no-underline transition-all duration-200 active:scale-[0.97]"
                    style={{
                      background: p.featured ? "#FCD116" : "transparent",
                      color: p.featured ? "#001631" : p.color,
                      border: p.featured ? "none" : `2px solid ${p.color}`,
                    }}
                  >
                    {p.price === "Free" ? "Sign Up Free" : `Join as ${p.name}`}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Benefits Comparison ── */}
      <section id="benefits" className="bg-sand py-20 scroll-mt-[100px]">
        <Container>
          <SectionHeader label="What's Included" />
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-12 leading-tight"
          >
            Full Benefits Breakdown
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)] overflow-hidden"
          >
            {/* Header */}
            <div className="grid grid-cols-[1fr_120px_120px] border-b border-border bg-navy/[0.03]">
              <div className="p-5 text-sm font-semibold text-charcoal">Benefit</div>
              <div className="p-5 text-center text-[13px] font-semibold text-blue">Virtual</div>
              <div className="p-5 text-center text-[13px] font-semibold text-navy">Member</div>
            </div>

            {benefits.map((group) => (
              <div key={group.category}>
                <div className="px-5 py-3 bg-sand border-b border-border">
                  <span className="text-[11px] font-bold tracking-[2px] uppercase text-muted">
                    {group.category}
                  </span>
                </div>
                {group.items.map((item, i) => (
                  <div
                    key={item.label}
                    className={`grid grid-cols-[1fr_120px_120px] border-b border-border last:border-0 ${
                      i % 2 === 0 ? "bg-white" : "bg-sand/40"
                    }`}
                  >
                    <div className="p-4 text-sm text-slate">{item.label}</div>
                    <div className="p-4 flex items-center justify-center">
                      {item.virtual ? (
                        <span className="text-green font-bold text-lg">✓</span>
                      ) : (
                        <span className="text-border font-bold text-lg">—</span>
                      )}
                    </div>
                    <div className="p-4 flex items-center justify-center">
                      {item.member ? (
                        <span className="text-green font-bold text-lg">✓</span>
                      ) : (
                        <span className="text-border font-bold text-lg">—</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20">
        <Container>
          <SectionHeader label="FAQ" />
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-10 leading-tight"
          >
            Common Questions
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl bg-white rounded-xl border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)] px-8 divide-y-0"
          >
            {faqs.map((faq) => (
              <FAQ key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </Container>
      </section>

    </div>
  );
}
