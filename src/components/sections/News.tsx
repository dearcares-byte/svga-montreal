"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { NEWS_ARTICLES } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const tagColors: Record<string, string> = {
  Announcement: "#009739",
  Community:    "#0052A5",
  Events:       "#D4A800",
  Culture:      "#002B5C",
  Youth:        "#009739",
};

export default function News({ preview = false }: { preview?: boolean }) {
  const featured = NEWS_ARTICLES[0];
  const rest = preview ? NEWS_ARTICLES.slice(0, 4) : NEWS_ARTICLES.slice(1);

  return (
    <section id="news" className="bg-white py-20">
      <Container>

        <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
          <div>
            <SectionHeader label="Latest Updates" />
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal leading-tight"
            >
              News &amp; Blog
            </motion.h2>
          </div>
          {preview && (
            <Link
              href="/news"
              className="text-sm text-navy font-semibold no-underline flex items-center gap-1 hover:gap-2 transition-all"
            >
              Visit Newsroom <ArrowRight size={14} />
            </Link>
          )}
        </div>

        {/* ── Featured article (full page only) ── */}
        {!preview && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 rounded-2xl overflow-hidden border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)] grid grid-cols-1 lg:grid-cols-2"
          >
            <div className="relative h-[260px] lg:h-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-10 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-[11px] font-bold tracking-wide px-3 py-1 rounded-full"
                  style={{
                    background: `${tagColors[featured.tag] ?? "#009739"}18`,
                    color: tagColors[featured.tag] ?? "#009739",
                  }}
                >
                  {featured.tag}
                </span>
                <span className="text-[11px] text-muted">{featured.date}</span>
              </div>
              <h3 className="font-display text-[clamp(22px,3vw,28px)] font-bold text-charcoal mb-4 leading-tight">
                {featured.title}
              </h3>
              <p className="text-base text-slate leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="text-sm font-semibold text-navy flex items-center gap-1">
                Read More <ArrowRight size={14} />
              </span>
            </div>
          </motion.div>
        )}

        {/* ── Article grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {rest.map((a) => (
            <motion.div
              key={a.title}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,43,92,0.1)" }}
              className="rounded-[10px] border border-border overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,43,92,0.06)] cursor-pointer"
            >
              <div className="h-40 relative overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 pb-6">
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    className="text-[11px] font-bold tracking-wide"
                    style={{ color: tagColors[a.tag] ?? "#009739" }}
                  >
                    {a.tag}
                  </span>
                  <span className="text-[11px] text-muted">&bull;</span>
                  <span className="text-[11px] text-muted">{a.date}</span>
                </div>
                <h4 className="font-display text-[16px] font-semibold text-charcoal mb-2 leading-snug">
                  {a.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">{a.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}
