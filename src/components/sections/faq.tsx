"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";
import Script from "next/script";
import { useTranslations } from "next-intl";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("FAQ");

  const faqs = [
    {
      question: t("items.0.question"),
      answer: t("items.0.answer"),
    },
    {
      question: t("items.1.question"),
      answer: t("items.1.answer"),
    },
    {
      question: t("items.2.question"),
      answer: t("items.2.answer"),
    },
    {
      question: t("items.3.question"),
      answer: t("items.3.answer"),
    },
    {
      question: t("items.4.question"),
      answer: t("items.4.answer"),
    },
    {
      question: t("items.5.question"),
      answer: t("items.5.answer"),
    },
  ];

  // Generate JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 px-4 bg-background">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12">
            {/* Header & Question List */}
            <div className="md:col-span-5 space-y-8">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
                    <p className="text-muted-foreground">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group",
                                activeIndex === index 
                                    ? "bg-primary/10 text-primary ring-1 ring-primary/20" 
                                    : "hover:bg-muted"
                            )}
                        >
                            <span className="font-medium pr-4">{faq.question}</span>
                            {activeIndex === index ? (
                                <Minus className="w-4 h-4 shrink-0 opacity-50" />
                            ) : (
                                <Plus className="w-4 h-4 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Answer Display - Fixed Height Container */}
            <div className="md:col-span-7 md:pl-8">
                <div className="h-full flex flex-col justify-center">
                    <div className="relative p-8 md:p-12 rounded-3xl bg-muted/30 border border-border min-h-[300px] flex flex-col justify-center items-start">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <MessageCircleQuestion className="w-12 h-12 text-primary/50" />
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                                        {faqs[activeIndex].question}
                                    </h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {faqs[activeIndex].answer}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
