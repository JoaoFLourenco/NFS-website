import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getCarBySlug, getCarSlugs } from "@/lib/services/cars.service";
import { CarSpecsSection } from "@/components/sections/car-specs-section";
import { TeamSection } from "@/components/sections/team-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { FadeIn } from "@/components/sections/fade-in";
import { Link } from "@/i18n/navigation";
import { ChevronLeft } from "lucide-react";
import { ev01Teams, fenixEvoTeams } from "@/lib/data/teams";
import { getSponsorsForCar } from "@/lib/data/sponsor-data";
import type { Car } from "@/lib/types/car";
import type { TeamSeason } from "@/lib/data/teams";

const teamsByCar: Record<string, TeamSeason[]> = {
  fsnovaev01: ev01Teams,
  fsfenixevo: fenixEvoTeams,
};

export async function generateStaticParams() {
  const locales = ["pt", "en"];
  const slugs = getCarSlugs();

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();
  const teams = teamsByCar[slug] ?? null;
  const sponsors = getSponsorsForCar(slug);
  return <CarDetailContent car={car} teams={teams} sponsors={sponsors} />;
}

function CarDetailContent({
  car,
  teams,
  sponsors,
}: {
  car: Car;
  teams: TeamSeason[] | null;
  sponsors: typeof import("@/lib/data/sponsor-data").ev01Sponsors;
}) {
  const t = useTranslations("garage");

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={car.heroImage}
            alt={car.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <FadeIn>
            <Link
              href="/garage"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ChevronLeft className="h-4 w-4" />
              {t("title")}
            </Link>
            <p
              className="text-xs font-medium uppercase tracking-[0.3em] mb-3"
              style={{ color: car.accentColor }}
            >
              {car.year}
            </p>
            <h1
              className="font-heading text-5xl sm:text-7xl font-bold tracking-wider"
              style={{ color: car.accentColor }}
            >
              {car.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">{t(car.subtitleKey as never)}</p>
          </FadeIn>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-10">
            <h2 className="font-heading text-2xl font-bold tracking-wide text-gradient">
              {t("specs")}
            </h2>
          </FadeIn>
          <CarSpecsSection car={car} />
        </div>
      </section>

      {/* Team */}
      {teams && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="mb-10">
              <h2 className="font-heading text-2xl font-bold tracking-wide text-gradient">
                {t("team")}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <TeamSection seasons={teams} />
            </FadeIn>
          </div>
        </section>
      )}

      {/* Sponsors */}
      {sponsors.length > 0 && <SponsorsSection sponsors={sponsors} />}

      {/* Gallery placeholder */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-10">
            <h2 className="font-heading text-2xl font-bold tracking-wide text-gradient">
              {t("gallery")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            {car.galleryImages.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {car.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border"
                  >
                    <Image src={img} alt={`${car.name} photo ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-border border-dashed h-48 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">{t("no_photos")}</p>
              </div>
            )}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
