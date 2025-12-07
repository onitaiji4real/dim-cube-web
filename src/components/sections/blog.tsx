"use client";

import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export function BlogSection() {
  const t = useTranslations("Blog");

  const posts = [
    {
      title: t("posts.0.title"),
      category: t("posts.0.category"),
      date: t("posts.0.date"),
      excerpt: t("posts.0.excerpt"),
      image: "bg-gradient-to-br from-purple-500/20 to-blue-500/20",
    },
    {
      title: t("posts.1.title"),
      category: t("posts.1.category"),
      date: t("posts.1.date"),
      excerpt: t("posts.1.excerpt"),
      image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
      title: t("posts.2.title"),
      category: t("posts.2.category"),
      date: t("posts.2.date"),
      excerpt: t("posts.2.excerpt"),
      image: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <section id="blog" className="py-24 px-4 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
            <p className="text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary hover:underline">
            {t("more")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <div key={index} className="group cursor-pointer">
                    <div className={`aspect-video rounded-2xl mb-4 overflow-hidden ${post.image}`}>
                         {/* Placeholder for image */}
                         <div className="w-full h-full hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="flex items-center gap-1">
                            <CalendarDays className="w-3 h-3" /> {post.date}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                        {post.excerpt}
                    </p>
                </div>
            ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
             <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
            {t("more")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
