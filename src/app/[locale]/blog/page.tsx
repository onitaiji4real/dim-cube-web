import { BlogSection } from "@/components/sections/blog";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "Blog" });

  return {
    title: t("title") + " | Dimension Cube",
    description: t("subtitle"),
  };
}

export default function BlogPage() {
  return (
    <div className="pt-24 pb-32">
        {/* We can reuse the section for now, or build a more dedicated list */}
        <BlogSection />
    </div>
  );
}
