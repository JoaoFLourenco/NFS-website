import { useTranslations } from "next-intl";
import Image from "next/image";
import { PageHeader } from "@/components/sections/page-header";
import { FadeIn } from "@/components/sections/fade-in";
import { Separator } from "@/components/ui/separator";
import { getAllPartners, getPartnerTiers } from "@/lib/services/partners.service";
import type { PartnerTier } from "@/lib/types/partner";
import {
  Eye,
  Megaphone,
  Users,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

const perks = [
  { icon: Eye, key: "brand_visibility" as const },
  { icon: Megaphone, key: "media_exposure" as const },
  { icon: Users, key: "networking" as const },
  { icon: Lightbulb, key: "innovation" as const },
  { icon: GraduationCap, key: "education" as const },
];

const tierOrder: PartnerTier[] = [
  "institutional",
  "gold",
  "silver",
  "bronze",
  "software",
  "partner",
];

export default function PartnersPage() {
  const t = useTranslations("partners");
  const allPartners = getAllPartners();
  const activeTiers = getPartnerTiers();

  return (
    <div>
      <PageHeader title={t("title")} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">
        {/* Why partner */}
        <section>
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-gradient">
              {t("why_title")}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            {perks.map(({ icon: Icon, key }, i) => (
              <FadeIn key={key} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-xl border border-border bg-card p-6 flex flex-col gap-3 hover:border-[#19a3ff]/30 transition-colors">
                  <div className="p-2.5 rounded-lg bg-[#19a3ff]/10 w-fit">
                    <Icon className="h-5 w-5 text-[#19a3ff]" />
                  </div>
                  <h3 className="font-medium text-sm text-foreground">{t(key)}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {t(`${key}_desc` as never)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Brands on car */}
          <FadeIn className="mt-12">
            <h3 className="font-heading text-lg font-bold tracking-wide text-foreground text-center mb-6">
              {t("brands_on_car")}
            </h3>
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-card"
                >
                  <Image
                    src={`/images/partners/car_brands_${i + 1}.jpg`}
                    alt={`Brands on car ${i + 1}`}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* CTA */}
        <FadeIn>
          <div className="rounded-2xl border border-[#19a3ff]/20 bg-[#19a3ff]/5 p-8 md:p-12 text-center space-y-4">
            <h3 className="font-heading text-xl md:text-2xl font-bold tracking-wide text-foreground">
              {t("interested")}
            </h3>
            <a
              href="mailto:geral@novaformulastudent.pt"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#19a3ff] hover:bg-[#0077cc] text-white font-medium transition-colors"
            >
              {t("contact_us")}
            </a>
          </div>
        </FadeIn>

        <Separator className="bg-border" />

        {/* Partner tiers */}
        <section className="space-y-16">
          {tierOrder
            .filter((tier) => activeTiers.includes(tier))
            .map((tier, ti) => {
              const tierPartners = allPartners.filter((p) => p.tier === tier);
              return (
                <FadeIn key={tier} delay={ti * 0.08}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <h3 className="font-heading text-lg font-bold tracking-widest text-gradient uppercase">
                        {t(tier)}
                      </h3>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {tierPartners.map((partner) => (
                        <div
                          key={partner.name}
                          className="group rounded-xl border border-border bg-card p-4 flex items-center justify-center aspect-[2/1] hover:border-border/80 transition-colors"
                        >
                          {partner.link ? (
                            <a
                              href={partner.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full h-full flex items-center justify-center"
                            >
                              <Image
                                src={partner.imageUrl}
                                alt={partner.name}
                                width={120}
                                height={60}
                                className="object-contain max-h-12 opacity-70 group-hover:opacity-100 transition-opacity"
                              />
                            </a>
                          ) : (
                            <Image
                              src={partner.imageUrl}
                              alt={partner.name}
                              width={120}
                              height={60}
                              className="object-contain max-h-12 opacity-70 group-hover:opacity-100 transition-opacity"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
        </section>
      </div>
    </div>
  );
}
