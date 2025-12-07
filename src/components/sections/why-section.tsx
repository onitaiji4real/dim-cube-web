"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { XCircle, CheckCircle2, TrendingUp, TrendingDown } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhySection() {
  const [view, setView] = useState<"old" | "new">("new");
  const t = useTranslations("Why");

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">{t("title")}</h2>
          <p className="text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        {/* Toggle Controls */}
        <div className="flex justify-center mb-12">
            <div className="bg-muted p-1 rounded-full flex relative">
                <motion.div 
                    layoutId="active-pill"
                    className={cn(
                        "absolute inset-1 w-[calc(50%-4px)] rounded-full shadow-sm",
                        view === "old" ? "bg-background" : "left-[50%] bg-primary"
                    )}
                    transition={{ type: "spring", duration: 0.5 }}
                />
                
                <button
                    onClick={() => setView("old")}
                    className={cn(
                        "relative z-10 px-8 py-3 rounded-full text-sm font-medium transition-colors",
                         view === "old" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    {t("toggle_old")}
                </button>
                <button
                    onClick={() => setView("new")}
                    className={cn(
                        "relative z-10 px-8 py-3 rounded-full text-sm font-medium transition-colors",
                        view === "new" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    {t("toggle_new")}
                </button>
            </div>
        </div>

        {/* Comparative Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Logic: We show both but highlight one based on state, or swipe them */}
            
            <motion.div
                animate={{ 
                    scale: view === "old" ? 1.05 : 0.95,
                    opacity: view === "old" ? 1 : 0.5,
                    filter: view === "old" ? "grayscale(0%)" : "grayscale(50%)"
                }}
                className="relative p-8 rounded-3xl border border-destructive/20 bg-destructive/5 overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <TrendingDown className="w-48 h-48 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-destructive mb-4 flex items-center gap-2">
                    <XCircle /> {t("old_card.title")}
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                    <li className="flex gap-2">
                        <span className="text-destructive font-bold">❌</span>
                        {t("old_card.point1")}
                    </li>
                    <li className="flex gap-2">
                        <span className="text-destructive font-bold">❌</span>
                        {t("old_card.point2")}
                    </li>
                    <li className="flex gap-2">
                        <span className="text-destructive font-bold">❌</span>
                        {t("old_card.point3")}
                    </li>
                </ul>
            </motion.div>

             <motion.div
                animate={{ 
                    scale: view === "new" ? 1.05 : 0.95,
                    opacity: view === "new" ? 1 : 0.5,
                    filter: view === "new" ? "grayscale(0%)" : "grayscale(50%)"
                }}
                className="relative p-8 rounded-3xl border border-primary/20 bg-primary/5 overflow-hidden ring-1 ring-primary/20 shadow-2xl shadow-primary/10"
            >
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <TrendingUp className="w-48 h-48 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <CheckCircle2 /> {t("new_card.title")}
                </h3>
                <ul className="space-y-4 text-foreground">
                    <li className="flex gap-2">
                        <span className="text-primary font-bold">✔</span>
                         {t("new_card.point1")}
                    </li>
                    <li className="flex gap-2">
                        <span className="text-primary font-bold">✔</span>
                        {t("new_card.point2")}
                    </li>
                    <li className="flex gap-2">
                         <span className="text-primary font-bold">✔</span>
                         {t("new_card.point3")}
                    </li>
                </ul>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
