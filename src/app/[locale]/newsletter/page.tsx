import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/sections/page-header";
import { FadeIn } from "@/components/sections/fade-in";

export default function NewsletterPage() {
  const t = useTranslations("newsletter");

  return (
    <div>
      <PageHeader title={t("title")} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-8">
        <FadeIn>
          <div className="rounded-[4px] border border-border bg-card p-6 sm:p-8">
            <p className="text-muted-foreground mb-6">{t("description")}</p>

            <form className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="newsletter-name"
                  className="text-xs font-medium text-muted-foreground uppercase tracking-widest"
                >
                  {t("name")}
                </label>
                <input
                  id="newsletter-name"
                  name="name"
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-[4px] bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#19a3ff]/50 focus:border-[#19a3ff]/50 transition-colors text-sm"
                  placeholder={t("name_placeholder")}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="newsletter-email"
                  className="text-xs font-medium text-muted-foreground uppercase tracking-widest"
                >
                  {t("email")}
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 rounded-[4px] bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#19a3ff]/50 focus:border-[#19a3ff]/50 transition-colors text-sm"
                  placeholder={t("email_placeholder")}
                />
              </div>

              <p className="text-sm text-muted-foreground">
                {t("not_connected")}
              </p>

              <button
                type="button"
                disabled
                className="w-full px-6 py-3 rounded-[4px] bg-[#19a3ff]/50 text-white font-medium cursor-not-allowed"
              >
                {t("subscribe")}
              </button>
            </form>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="text-center">
          <p className="text-sm text-muted-foreground">
            {t("archive_prompt")}{" "}
            <span
              aria-disabled="true"
              className="text-[#19a3ff] underline underline-offset-4 cursor-not-allowed"
            >
              {t("archive_link")}
            </span>
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
