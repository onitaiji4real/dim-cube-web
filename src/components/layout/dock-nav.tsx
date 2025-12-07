"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LayoutGrid, FileText, Zap, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";

export function DockNav() {
  const t = useTranslations("Navigation");

  const NAV_ITEMS = [
    { label: t("services"), icon: LayoutGrid, href: "#services" },
    { label: t("methodology"), icon: Zap, href: "#faq" }, 
    { label: t("blog"), icon: FileText, href: "/blog" },
    { label: t("contact"), icon: Mail, href: "#contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className={cn(
          "flex items-center gap-2 p-2 rounded-2xl border bg-background/80 backdrop-blur-lg shadow-lg",
          "border-white/10 dark:border-white/10 ring-1 ring-black/5"
        )}
      >
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} className="group relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "p-3 rounded-xl transition-colors hover:bg-muted/50 text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="sr-only">{item.label}</span>
              
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </motion.div>
          </Link>
        ))}

        <div className="w-[1px] h-6 bg-border mx-1" />

        <div className="flex gap-1">
            <ModeToggle />
            <LanguageToggle />
        </div>
      </motion.div>
    </div>
  );
}
