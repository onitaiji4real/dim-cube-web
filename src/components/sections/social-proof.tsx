"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const PARTNERS = [
  "Google Search", "OpenAI ChatGPT", "Bing AI", "Perplexity", 
  "Claude", "Gemini", "Meta AI", "SearchGPT"
];

export function SocialProof() {
  const t = useTranslations("SocialProof");

  return (
    <section className="w-full py-10 border-y border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden">
        <div className="container mx-auto px-4 mb-6 text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-widest">{t("label")}</p>
        </div>
      <div className="relative flex w-full">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <div
              key={i}
              className="mx-8 text-2xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors cursor-default"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
