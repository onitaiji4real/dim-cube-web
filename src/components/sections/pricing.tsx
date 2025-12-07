"use client";

import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function PricingSection() {
  const t = useTranslations("Pricing");

  const plans = [
    {
      name: t("plans.a.name"),
      id: "plan-a",
      title: t("plans.a.title"),
      price: "$15,000 - $25,000",
      period: t("period"),
      target: t("plans.a.target"),
      description: t("plans.a.description"),
      features: [
        t("plans.a.features.0"),
        t("plans.a.features.1"),
        t("plans.a.features.2"),
        t("plans.a.features.3"),
      ],
      recommended: false,
      popular: false,
    },
    {
      name: t("plans.b.name"),
      id: "plan-b",
      title: t("plans.b.title"),
      price: "$30,000 - $50,000",
      period: t("period"),
      target: t("plans.b.target"),
      description: t("plans.b.description"),
      features: [
        t("plans.b.features.0"),
        t("plans.b.features.1"),
        t("plans.b.features.2"),
        t("plans.b.features.3"),
        t("plans.b.features.4"),
      ],
      recommended: true,
      badge: t("plans.b.badge"),
      popular: true,
    },
    {
      name: t("plans.c.name"),
      id: "plan-c",
      title: t("plans.c.title"),
      price: "$60,000+",
      period: t("period"),
      target: t("plans.c.target"),
      description: t("plans.c.description"),
      features: [
        t("plans.c.features.0"),
        t("plans.c.features.1"),
        t("plans.c.features.2"),
        t("plans.c.features.3"),
        t("plans.c.features.4"),
      ],
      recommended: false,
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-muted/40">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">{t("title")}</h2>
          <p className="text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col",
                plan.popular && "z-10 md:-mt-8 md:mb-8"
              )}
            >
              <Card
                className={cn(
                  "flex-1 flex flex-col relative overflow-hidden transition-all hover:shadow-xl dark:bg-black",
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10 scale-105"
                    : "border-border"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-secondary" />
                )}
                
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant={plan.popular ? "default" : "secondary"}>
                      {plan.target}
                    </Badge>
                    {plan.popular && (
                        <div className="flex items-center gap-1 text-xs font-semibold text-primary animate-pulse">
                            <Star className="w-3 h-3 fill-current" /> {plan.badge}
                        </div>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base font-medium mt-2 text-foreground">
                    {plan.title}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3 mt-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm">
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <a href="#contact">{t("cta")}</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
