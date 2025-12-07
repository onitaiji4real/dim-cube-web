import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations("Footer");
    return (
        <footer className="w-full border-t border-white/10 bg-black py-8 pb-32 text-center text-sm text-muted-foreground">
            <div className="container mx-auto px-4">
                <p className="mb-2">{t("copyright")}</p>
                <div className="flex justify-center gap-4">
                    <Link href="#" className="hover:text-foreground transition-colors">{t("privacy")}</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">{t("terms")}</Link>
                </div>
            </div>
        </footer>
    );
}
