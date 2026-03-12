"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

const tiers = [
  {
    image: "/community-event.jpeg",
    imageAlt: "Community members at an SVG Association cultural event",
    label: "Virtual Member",
    price: "Free",
    desc: "Stay connected from anywhere in the world. Get our newsletter, join our online community group, and receive event updates — no cost, ever.",
    cta: "Sign Up Free",
    variant: "dark" as const,
  },
  {
    image: "/leadership-gala.jpeg",
    imageAlt: "SVG Association members at the Independence Day Gala",
    label: "Member",
    price: "$20 / year",
    desc: "Full membership with in-person event access, voting rights at our General Assembly, priority registration, and a listing in the member directory.",
    cta: "Become a Member",
    variant: "green" as const,
  },
];

export default function MembershipPreview() {
  return (
    <section className="bg-sand py-20">
      <Container>
        <SectionHeader label="Membership" />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-12 leading-tight"
        >
          Join Our Growing Community
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {tiers.map((t) => (
            <motion.div
              key={t.label}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,43,92,0.1)" }}
              className="bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,43,92,0.06)] border border-border"
            >
              <div className="h-[180px] relative overflow-hidden">
                <Image src={t.image} alt={t.imageAlt} fill className="object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="font-display text-[22px] text-charcoal">{t.label}</h3>
                  <span className="text-sm font-semibold text-muted">{t.price}</span>
                </div>
                <p className="text-[15px] text-slate leading-relaxed mb-5">{t.desc}</p>
                <Button href="/membership" variant={t.variant} arrow>
                  {t.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
