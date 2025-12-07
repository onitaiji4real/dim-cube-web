"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  industry: z.string().min(2),
  url: z.string().url().optional().or(z.literal("")),
  painPoint: z.string().min(5),
});

export function ContactSection() {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("Contact");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      industry: "",
      url: "",
      painPoint: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      // Logic for Server Action will go here
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form Values:", values);
      
      toast.success(t("toast.success"), {
        description: t("toast.description"),
      });
      
      form.reset();
    });
  }

  return (
    <section id="contact" className="py-24 px-4 bg-muted/40 border-t border-border">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
            <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="bg-background p-8 md:p-12 rounded-3xl border border-border shadow-sm">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t("form.name")}</FormLabel>
                        <FormControl>
                            <Input placeholder={t("form.name_placeholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t("form.email")}</FormLabel>
                        <FormControl>
                            <Input placeholder={t("form.email_placeholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                     <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t("form.industry")}</FormLabel>
                        <FormControl>
                            <Input placeholder={t("form.industry_placeholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t("form.url")}</FormLabel>
                        <FormControl>
                            <Input placeholder={t("form.url_placeholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                <FormField
                control={form.control}
                name="painPoint"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{t("form.painPoint")}</FormLabel>
                    <FormControl>
                        <Textarea 
                            placeholder={t("form.painPoint_placeholder")}
                            className="min-h-[120px]"
                            {...field} 
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                {isPending ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("form.submitting")}
                    </>
                ) : (
                    t("form.submit")
                )}
                </Button>
            </form>
            </Form>
        </div>
      </div>
    </section>
  );
}
