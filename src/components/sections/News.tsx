"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, BookOpen, Images } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { NEWS_ARTICLES, NEWS_EXTENDED_CONTENT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const tagColors: Record<string, string> = {
  Announcement: "#009739",
  Community:    "#0052A5",
  Events:       "#D4A800",
  Culture:      "#002B5C",
  Youth:        "#009739",
};

function PressReleaseContent({ content }: { content: Extract<typeof NEWS_EXTENDED_CONTENT[string], { type: "press-release" }> }) {
  return (
    <div className="max-w-3xl mx-auto">
      <Image
        src={content.inlineImage}
        alt="Press release image"
        width={900}
        height={420}
        className="w-full h-[280px] object-cover rounded-xl mb-8"
      />
      <div className="flex flex-col gap-5">
        {content.body.map((para, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "text-[12px] font-bold tracking-[2px] uppercase text-gold"
                : i === content.body.length - 1
                ? "text-sm text-muted leading-relaxed border-t border-border pt-5 mt-2"
                : para.startsWith('"')
                ? "text-base text-charcoal leading-loose italic border-l-4 border-gold pl-5"
                : "text-base text-slate leading-loose"
            }
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

function GalleryContent({ content }: { content: Extract<typeof NEWS_EXTENDED_CONTENT[string], { type: "gallery" }> }) {
  return (
    <div>
      <p className="text-base text-slate leading-loose max-w-3xl mx-auto mb-10 text-center">
        {content.intro}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {content.images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className={`relative overflow-hidden rounded-lg ${
              i === 0 ? "col-span-2 row-span-2" : ""
            }`}
            style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
          >
            <Image
              src={src}
              alt={`Event photo ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function News({ preview = false }: { preview?: boolean }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const featured = NEWS_ARTICLES[0];
  const rest = preview ? NEWS_ARTICLES.slice(0, 4) : NEWS_ARTICLES.slice(1);

  const expandedArticle = rest.find((a) => a.title === expanded) ?? null;
  const expandedContent = expanded ? NEWS_EXTENDED_CONTENT[expanded] : null;

  const handleExpand = (title: string) => {
    if (expanded === title) {
      setExpanded(null);
    } else {
      setExpanded(title);
    }
  };

  useEffect(() => {
    if (expanded && panelRef.current) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [expanded]);

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
              <Image src={featured.image} alt={featured.title} fill className="object-cover" />
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
          {rest.map((a) => {
            const hasExtended = !!NEWS_EXTENDED_CONTENT[a.title];
            const extContent = NEWS_EXTENDED_CONTENT[a.title];
            const isExpanded = expanded === a.title;

            return (
              <motion.div
                key={a.title}
                variants={fadeUp}
                whileHover={!isExpanded ? { y: -4, boxShadow: "0 12px 40px rgba(0,43,92,0.1)" } : {}}
                className={`rounded-[10px] border overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,43,92,0.06)] transition-all duration-200 ${
                  isExpanded ? "border-navy/30 ring-2 ring-navy/10" : "border-border"
                }`}
              >
                <div className="h-40 relative overflow-hidden">
                  <Image src={a.image} alt={a.title} fill className="object-cover" />
                  {/* Content type badge */}
                  {hasExtended && !preview && (
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-sm">
                      {extContent?.type === "gallery"
                        ? <Images size={13} className="text-navy" />
                        : <BookOpen size={13} className="text-navy" />
                      }
                    </div>
                  )}
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
                  <p className="text-sm text-muted leading-relaxed mb-4">{a.excerpt}</p>

                  {hasExtended && !preview && (
                    <button
                      onClick={() => handleExpand(a.title)}
                      className="flex items-center gap-1.5 text-[13px] font-semibold text-navy border-none bg-transparent cursor-pointer p-0 hover:gap-2.5 transition-all"
                    >
                      {isExpanded ? (
                        <><X size={13} /> Close</>
                      ) : extContent?.type === "gallery" ? (
                        <><Images size={13} /> View Gallery</>
                      ) : (
                        <><BookOpen size={13} /> Read Full Article</>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Expanded content panel ── */}
        <AnimatePresence>
          {expandedArticle && expandedContent && (
            <motion.div
              ref={panelRef}
              key={expandedArticle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="mt-8 bg-sand rounded-2xl border border-border p-8 md:p-12 relative"
            >
              {/* Close */}
              <button
                onClick={() => setExpanded(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center cursor-pointer hover:bg-charcoal hover:text-white transition-colors"
              >
                <X size={16} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[11px] font-bold tracking-wide px-3 py-1 rounded-full"
                  style={{
                    background: `${tagColors[expandedArticle.tag] ?? "#009739"}18`,
                    color: tagColors[expandedArticle.tag] ?? "#009739",
                  }}
                >
                  {expandedArticle.tag}
                </span>
                <span className="text-[11px] text-muted">{expandedArticle.date}</span>
                <span className="text-[11px] text-muted">&bull;</span>
                <span className="text-[11px] font-medium text-muted capitalize">
                  {expandedContent.type === "gallery" ? "Photo Gallery" : "Press Release"}
                </span>
              </div>
              <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-charcoal mb-8 leading-tight max-w-3xl">
                {expandedArticle.title}
              </h2>

              {/* Content */}
              {expandedContent.type === "press-release" ? (
                <PressReleaseContent content={expandedContent} />
              ) : (
                <GalleryContent content={expandedContent} />
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </Container>
    </section>
  );
}
