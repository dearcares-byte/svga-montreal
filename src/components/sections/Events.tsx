"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Clock, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { EVENTS, SIGNATURE_EVENTS, TAG_COLORS } from "@/lib/constants";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";

export default function Events({ limit }: { limit?: number }) {
  const events = limit ? EVENTS.slice(0, limit) : EVENTS;

  return (
    <section id="events" className="bg-sand py-20">
      <Container>

        {/* ── Signature Annual Events (full page, shown first) ── */}
        {!limit && (
          <>
            <SectionHeader label="Every Year, Without Fail" />
            <div className="flex justify-between items-end flex-wrap gap-4 mb-4">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal leading-tight"
              >
                Signature Annual Events
              </motion.h2>
              <a
                href="#upcoming"
                className="text-sm text-navy font-semibold no-underline flex items-center gap-1 hover:gap-2 transition-all"
              >
                See Upcoming Dates <ArrowRight size={14} />
              </a>
            </div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-base text-slate leading-loose max-w-2xl mb-12"
            >
              These are the events our community looks forward to every single year —
              moments that define who we are and what we celebrate together.
            </motion.p>

            <div className="flex flex-col gap-12 mb-[80px]">
              {SIGNATURE_EVENTS.map((e, i) => {
                const tc = TAG_COLORS[e.tag];
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={e.title}
                    variants={isEven ? slideInLeft : slideInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                      !isEven ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="rounded-xl overflow-hidden">
                      <Image
                        src={e.image}
                        alt={e.title}
                        width={700}
                        height={420}
                        className="object-cover w-full h-[280px] lg:h-[320px] rounded-xl"
                      />
                    </div>
                    <div>
                      <span
                        className="text-[11px] font-bold py-1.5 px-3.5 rounded-full tracking-wide inline-block mb-4"
                        style={{ background: tc.bg, color: tc.text }}
                      >
                        {e.tag}
                      </span>
                      <div className="text-[12px] font-bold tracking-[2px] uppercase text-gold mb-2">
                        Every {e.month}
                      </div>
                      <h3 className="font-display text-[clamp(22px,3vw,30px)] font-bold text-charcoal mb-4 leading-tight">
                        {e.title}
                      </h3>
                      <p className="text-base text-slate leading-loose mb-4">{e.desc}</p>
                      <p className="text-[13px] text-muted font-medium">{e.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="border-t border-border" />
          </>
        )}

        {/* ── Upcoming Events ── */}
        <div id="upcoming" className="scroll-mt-[100px]">
        <SectionHeader label="What's Happening" />
        <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal leading-tight"
          >
            Upcoming Events
          </motion.h2>
          {limit && (
            <Link
              href="/events"
              className="text-sm text-navy font-semibold no-underline flex items-center gap-1 hover:gap-2 transition-all"
            >
              View Full Calendar <ArrowRight size={14} />
            </Link>
          )}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4"
        >
          {events.map((e) => {
            const tc = TAG_COLORS[e.tag];
            return (
              <motion.div
                key={e.title}
                variants={fadeUp}
                whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(0,43,92,0.1)" }}
                className="bg-white rounded-[10px] p-6 sm:p-7 grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] gap-5 sm:gap-6 items-center border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)]"
              >
                {/* Date Block */}
                <div className="w-[68px] h-[68px] rounded-[10px] bg-navy flex flex-col items-center justify-center flex-shrink-0">
                  <div className="text-[10px] font-bold tracking-[2px] text-gold uppercase">
                    {e.month}
                  </div>
                  <div className="font-display text-[26px] font-bold text-white leading-none">
                    {e.day}
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h4 className="font-display text-lg font-semibold text-charcoal mb-1">
                    {e.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-1.5">
                    <p className="text-[13px] text-muted flex items-center gap-1">
                      <MapPin size={12} /> {e.location}
                    </p>
                    {!limit && (
                      <>
                        <p className="text-[13px] text-muted flex items-center gap-1">
                          <Clock size={12} /> {e.time}
                        </p>
                        <p className="text-[13px] text-muted flex items-center gap-1">
                          <Ticket size={12} /> {e.price}
                        </p>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-slate leading-relaxed hidden sm:block">
                    {e.desc}
                  </p>
                </div>

                {/* Tag */}
                <span
                  className="text-[11px] font-bold py-1.5 px-3.5 rounded-full tracking-wide self-start hidden sm:inline-block"
                  style={{ background: tc.bg, color: tc.text }}
                >
                  {e.tag}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        </div>{/* end #upcoming */}

        {/* ── Full-page only sections ── */}
        {!limit && (
          <>
            {/* ── Past Highlights ── */}
            <div className="mt-[80px] border-t border-border pt-16">
              <SectionHeader label="Past Events" />
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-4 leading-tight"
              >
                Community Highlights
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-base text-slate leading-loose max-w-2xl mb-10"
              >
                A glimpse into the warmth, energy, and joy that fills every
                SVG Association gathering.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {[
                  { src: "/community-event.jpeg", caption: "Vincy Unity Picnic 2025", sub: "Montreal · Summer 2025" },
                  { src: "/leadership-gala.jpeg", caption: "Independence Dinner 2025", sub: "Montreal · October 2025" },
                  { src: "/community-speaker.jpeg", caption: "Member Meeting 2025", sub: "Montreal · Fall 2025" },
                ].map((photo) => (
                  <motion.div
                    key={photo.src}
                    variants={fadeUp}
                    whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,43,92,0.12)" }}
                    className="rounded-xl overflow-hidden border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)] bg-white"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      width={500}
                      height={300}
                      className="object-cover w-full h-[220px]"
                    />
                    <div className="p-4">
                      <div className="font-display font-semibold text-[15px] text-charcoal mb-0.5">
                        {photo.caption}
                      </div>
                      <div className="text-[12px] text-muted">{photo.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </>
        )}

      </Container>
    </section>
  );
}
