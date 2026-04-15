"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Globe, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { BOARD_MEMBERS } from "@/lib/constants";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const values = [
  { icon: "🎭", label: "Cultural Events" },
  { icon: "🤝", label: "Community Aid" },
  { icon: "📢", label: "Advocacy" },
  { icon: "🎓", label: "Youth Programs" },
];

const pillars = [
  {
    Icon: Users,
    color: "#002B5C",
    bg: "#EEF3FA",
    title: "Connect",
    desc: "We bring Vincentians together through meaningful gatherings, shared meals, and celebrations that strengthen bonds across generations and neighbourhoods.",
  },
  {
    Icon: Globe,
    color: "#009739",
    bg: "#E8F5ED",
    title: "Celebrate",
    desc: "We honour our heritage — the music, cuisine, folklore, and traditions of St. Vincent and the Grenadines — keeping our cultural identity alive in the diaspora.",
  },
  {
    Icon: Heart,
    color: "#D4A800",
    bg: "#FFF8E0",
    title: "Support",
    desc: "We provide practical resources, advocacy, and a safety net for community members navigating newcomer services, healthcare, education, and beyond.",
  },
];

const timeline = [
  {
    year: "2003",
    title: "The Association is Founded",
    desc: "A small group of Vincentian immigrants gather in NDG to formally establish the SVG Association of Montreal, with a founding membership of 28 families.",
  },
  {
    year: "2007",
    title: "First Independence Day Gala",
    desc: "We host our inaugural Independence Day Gala at Place des Arts, drawing over 300 attendees and marking a turning point in the association's public presence.",
  },
  {
    year: "2010",
    title: "Newcomer Support Program Launched",
    desc: "Recognizing a growing need, we launch a structured newcomer program offering settlement guidance, French-language referrals, and mentorship for newly arrived Vincentians.",
  },
  {
    year: "2015",
    title: "200-Member Milestone",
    desc: "Membership crosses 200 registered households, prompting a full restructuring of the board and the introduction of annual membership dues to sustain programming.",
  },
  {
    year: "2018",
    title: "City of Montreal Partnership",
    desc: "A formal partnership with the City of Montreal's Bureau interculturel enables expanded outreach, grant funding, and co-hosted cultural programming.",
  },
  {
    year: "2023",
    title: "20th Anniversary — 500+ Members",
    desc: "We celebrate two decades of service with a landmark gala and community picnic, welcoming our 500th registered member and launching a youth scholarship fund.",
  },
];

export default function About({ preview = false }: { preview?: boolean }) {
  return (
    <section id="story" className="bg-white py-20 scroll-mt-[100px]">
      <Container>

        {/* ── Our Story ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionHeader label="About Us" />
            <h2 className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-5 leading-tight">
              Dedicated to Our Community
            </h2>
            <p className="text-base text-slate leading-loose mb-4">
              The St. Vincent &amp; the Grenadines Association of Montreal is a
              community organization representing and supporting Vincentians
              across the greater Montreal area. Founded by diaspora members who
              made Quebec their home, we&apos;ve grown into a vibrant hub for
              cultural preservation, advocacy, and mutual support.
            </p>
            <p id="mission" className="text-base text-slate leading-loose mb-4 scroll-mt-[100px]">
              Through events, outreach, and collaboration with local
              organizations, we work to enrich the lives of Vincentians and
              share our culture with the broader Montreal community.
            </p>
            {!preview && (
              <p className="text-base text-slate leading-loose mb-7">
                From potluck dinners and cultural festivals to immigration
                workshops and youth mentorship, everything we do is rooted in a
                simple belief: that community is the greatest resource any of us
                has.
              </p>
            )}
            {preview && (
              <Button href="/about" variant="outline" arrow>
                Learn More About Us
              </Button>
            )}
          </motion.div>

          {/* Right: Image + value cards */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="rounded-xl overflow-hidden min-h-[240px] mb-5 relative">
              <Image
                src="/independence2025/581815781_17925328986170702_6362384645454550099_n.jpg"
                alt="SVGAM community members at the 60th Anniversary Diamond Celebration"
                width={600}
                height={400}
                className="object-cover w-full h-[280px] rounded-xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {values.map((v) => (
                <motion.div
                  key={v.label}
                  whileHover={{ scale: 1.03 }}
                  className="bg-sand rounded-lg px-3.5 py-4 flex items-center gap-2.5"
                >
                  <span className="text-xl">{v.icon}</span>
                  <span className="text-[13px] font-semibold text-charcoal">
                    {v.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Full-page only sections ── */}
        {!preview && (
          <>
            {/* ── Mission & Values ── */}
            <div className="mt-[80px] border-t border-border pt-16">
              <SectionHeader label="Mission & Vision" />
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-4 leading-tight"
              >
                What We Stand For
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-base text-slate leading-loose max-w-2xl mb-12"
              >
                Our mission is to connect, celebrate, and support the Vincentian
                community in Montreal — creating a home away from home for every
                person who traces their roots to St. Vincent and the Grenadines.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {pillars.map(({ Icon, color, bg, title, desc }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,43,92,0.10)" }}
                    className="rounded-xl p-8 border border-border bg-white shadow-[0_2px_12px_rgba(0,43,92,0.06)]"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: bg }}
                    >
                      <Icon size={22} style={{ color }} />
                    </div>
                    <h3 className="font-display text-[22px] font-bold text-charcoal mb-3">
                      {title}
                    </h3>
                    <p className="text-sm text-slate leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ── Leadership ── */}
            <div id="leadership" className="mt-[80px] border-t border-border pt-16 scroll-mt-[100px]">
              <SectionHeader label="Leadership" />
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-4 leading-tight"
              >
                Meet the Board
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-base text-slate leading-loose max-w-2xl mb-10"
              >
                Our volunteer board brings together professionals, long-time
                community members, and passionate advocates — all dedicated to
                serving the Vincentian community in Montreal.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden mb-12"
              >
                <Image
                  src="/leadership-gala.jpeg"
                  alt="SVG Association board members at a formal gala dinner"
                  width={1200}
                  height={500}
                  className="object-cover w-full h-[340px] rounded-xl"
                />
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {BOARD_MEMBERS.map((m) => (
                  <motion.div
                    key={m.role}
                    variants={fadeUp}
                    whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,43,92,0.10)" }}
                    className="bg-white rounded-xl p-6 border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)] flex gap-4 items-start"
                  >
                    <Image
                      src={m.photo}
                      alt={`Photo of ${m.name}`}
                      width={72}
                      height={72}
                      className="rounded-full object-cover flex-shrink-0 w-[72px] h-[72px]"
                    />
                    <div>
                      <div className="font-display font-bold text-[17px] text-charcoal leading-tight">
                        {m.name}
                      </div>
                      <div className="text-xs font-semibold text-green uppercase tracking-wide mb-2">
                        {m.role}
                      </div>
                      <p className="text-sm text-slate leading-relaxed">
                        {m.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ── History Timeline ── */}
            <div className="mt-[80px] border-t border-border pt-16">
              <SectionHeader label="Our History" />
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-12 leading-tight"
              >
                Two Decades of Service
              </motion.h2>

              <div className="relative">
                <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-10"
                >
                  {timeline.map((item, i) => {
                    const isRight = i % 2 === 0;
                    return (
                      <motion.div
                        key={item.year}
                        variants={fadeUp}
                        className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-10 ${
                          isRight ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                      >
                        <div className="absolute left-[10px] md:left-1/2 md:-translate-x-[9px] top-1 w-[18px] h-[18px] rounded-full bg-navy border-[3px] border-white shadow-md z-10 flex-shrink-0" />
                        <div
                          className={`hidden md:flex w-1/2 ${
                            isRight ? "justify-end pr-10" : "justify-start pl-10"
                          } items-start pt-0.5`}
                        >
                          <span className="text-[13px] font-bold tracking-[2px] text-gold uppercase bg-navy/[0.06] px-4 py-1.5 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <div
                          className={`pl-10 md:pl-0 w-full md:w-1/2 ${
                            isRight ? "md:pl-10" : "md:pr-10"
                          }`}
                        >
                          <span className="md:hidden text-[11px] font-bold tracking-[2px] text-gold uppercase bg-navy/[0.06] px-3 py-1 rounded-full inline-block mb-2">
                            {item.year}
                          </span>
                          <div className="bg-white rounded-xl p-6 border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)]">
                            <h4 className="font-display text-[17px] font-bold text-charcoal mb-2">
                              {item.title}
                            </h4>
                            <p className="text-sm text-slate leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </>
        )}

      </Container>
    </section>
  );
}
