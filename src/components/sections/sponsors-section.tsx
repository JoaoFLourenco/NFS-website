import { useTranslations } from "next-intl";
import Image from "next/image";
import type { Partner, PartnerTier } from "@/lib/types/partner";
import { FadeIn } from "@/components/sections/fade-in";

interface SponsorsSectionProps {
  sponsors: Partner[];
  title?: string;
}

const tierOrder: PartnerTier[] = [
  "institutional",
  "gold",
  "silver",
  "bronze",
  "software",
  "partner",
];

export function SponsorsSection({ sponsors, title }: SponsorsSectionProps) {
  const t = useTranslations("garage");
  const tPartners = useTranslations("partners");

  const grouped = sponsors.reduce(
    (acc, sponsor) => {
      if (!acc[sponsor.tier]) acc[sponsor.tier] = [];
      acc[sponsor.tier].push(sponsor);
      return acc;
    },
    {} as Record<PartnerTier, Partner[]>
  );

  const sortedTiers = tierOrder.filter((tier) => grouped[tier]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-10">
          <h2 className="font-heading text-2xl font-bold tracking-wide text-gradient">
            {title || t("sponsors")}
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {sortedTiers.map((tier, ti) => (
            <FadeIn key={tier} delay={ti * 0.08}>
              <div className="space-y-4">
                <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {tier}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {grouped[tier].map((sponsor) => (
                    <div
                      key={sponsor.name}
                      className="group rounded-[4px] border border-gray-200 bg-white p-3 flex items-center justify-center aspect-[3/2] hover:border-[#19a3ff]/50 hover:shadow-md transition-all"
                    >
                      {sponsor.link ? (
                        <a
                          href={sponsor.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full flex items-center justify-center"
                          title={sponsor.name}
                        >
                          <Image
                            src={sponsor.imageUrl}
                            alt={sponsor.name}
                            width={180}
                            height={120}
                            className="object-contain max-h-16 opacity-70 group-hover:opacity-100 transition-opacity"
                          />
                        </a>
                      ) : (
                        <Image
                          src={sponsor.imageUrl}
                          alt={sponsor.name}
                          width={180}
                          height={120}
                          className="object-contain max-h-16 opacity-70"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
