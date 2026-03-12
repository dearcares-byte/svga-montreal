"use client";

import { motion } from "framer-motion";
import { Home, HeartPulse, GraduationCap, Briefcase, Palmtree, Scale, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { RESOURCES } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const iconMap = {
  newcomer: Home,
  health: HeartPulse,
  education: GraduationCap,
  business: Briefcase,
  heritage: Palmtree,
  legal: Scale,
} as const;

const iconColors: Record<string, { color: string; bg: string }> = {
  newcomer:  { color: "#002B5C", bg: "#EEF3FA" },
  health:    { color: "#009739", bg: "#E8F5ED" },
  education: { color: "#D4A800", bg: "#FFF8E0" },
  business:  { color: "#0052A5", bg: "#EEF3FA" },
  heritage:  { color: "#009739", bg: "#E8F5ED" },
  legal:     { color: "#002B5C", bg: "#EEF3FA" },
};

export default function Resources({ limit }: { limit?: number }) {
  const resources = limit ? RESOURCES.slice(0, limit) : RESOURCES;

  return (
    <section id="resources" className="bg-sand py-20">
      <Container>

        {/* ── Newcomer spotlight (full page only) ── */}
        {!limit && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl mb-16 p-10 md:p-14 flex flex-col md:flex-row gap-8 items-start md:items-center"
            style={{ background: "linear-gradient(135deg, #002B5C 0%, #0052A5 100%)" }}
          >
            <div className="flex-1">
              <div className="text-[11px] font-bold tracking-[3px] uppercase text-gold mb-3">
                Most Requested
              </div>
              <h2 className="font-display text-[clamp(24px,3.5vw,34px)] font-bold text-white mb-3 leading-tight">
                New to Montreal?
              </h2>
              <p className="text-[15px] text-white/70 leading-relaxed max-w-xl">
                We know how overwhelming the first months in a new city can be. Our newcomer
                support team can connect you with settlement services, French classes, housing
                help, and the warm welcome of a community that understands exactly what you&apos;re
                going through.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button href="/contact?subject=Newcomer+Support" variant="primary" arrow>
                Get Newcomer Support
              </Button>
            </div>
          </motion.div>
        )}

        {/* ── Resource Cards ── */}
        <SectionHeader label="Resources" />
        <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal leading-tight"
          >
            Community Resources
          </motion.h2>
          {limit && (
            <Link
              href="/resources"
              className="text-sm text-navy font-semibold no-underline flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All Resources <ArrowRight size={14} />
            </Link>
          )}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {resources.map((r) => {
            const Icon = iconMap[r.icon];
            const { color, bg } = iconColors[r.icon];
            return (
              <motion.div
                key={r.title}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,43,92,0.1)" }}
                className="bg-white rounded-[10px] p-7 border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)] flex flex-col gap-4"
              >
                <div className="flex gap-4 items-start">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: bg }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <h4 className="font-display text-[17px] font-semibold text-charcoal mb-1">
                      {r.title}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">{r.desc}</p>
                  </div>
                </div>

                {/* Detail bullets — full page only */}
                {!limit && (
                  <ul className="border-t border-border pt-4 flex flex-col gap-2">
                    {r.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-slate">
                        <Check size={13} className="mt-0.5 flex-shrink-0" style={{ color }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Can't find it? CTA (full page only) ── */}
        {!limit && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 text-center bg-white rounded-2xl border border-border p-10 shadow-[0_2px_12px_rgba(0,43,92,0.06)]"
          >
            <h3 className="font-display text-[22px] font-bold text-charcoal mb-2">
              Can&apos;t find what you&apos;re looking for?
            </h3>
            <p className="text-base text-slate leading-relaxed mb-6 max-w-lg mx-auto">
              Our team is happy to help point you in the right direction. Send us a message
              and we&apos;ll connect you with the right resource or person.
            </p>
            <Button href="/contact" variant="dark" arrow>
              Contact Us
            </Button>
          </motion.div>
        )}

      </Container>
    </section>
  );
}
