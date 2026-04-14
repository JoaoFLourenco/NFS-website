import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { FadeIn } from "@/components/sections/fade-in";
import { getAllCars } from "@/lib/services/cars.service";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const t = useTranslations();
  const cars = getAllCars();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/placeholder-hero.svg"
            alt="NFS Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <p className="text-lg font-medium uppercase tracking-[0.3em] text-[#19a3ff] mb-4">
              FCT NOVA
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-wider text-gradient leading-tight">
              {t("home.hero_title")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
              {t("home.hero_subtitle")}
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/garage"
                className={cn(buttonVariants({ size: "lg" }), "bg-[#19a3ff] hover:bg-[#0077cc] text-white font-medium px-8")}
              >
                {t("home.garage_subtitle")}
              </Link>
              <Link
                href="/about"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              >
                {t("nav.about")}
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#19a3ff]">
                {t("home.about_title")}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide text-foreground">
                Nova Formula Student
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("home.about_text")}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#19a3ff] hover:text-[#4db8ff] transition-colors font-medium"
              >
                {t("nav.about")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/team/team_photo_2025.jpg"
                alt="Nova Formula Student Team"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Garage preview */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#19a3ff] mb-3">
              {t("home.garage_subtitle")}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide text-gradient">
              {t("home.garage_title")}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cars.map((car, i) => (
              <FadeIn key={car.slug} delay={i * 0.1}>
                <Link href={`/garage/${car.slug}`} className="group block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 group-hover:border-[#19a3ff]/50 group-hover:shadow-lg group-hover:shadow-[#19a3ff]/10">
                    <Image
                      src={car.heroImage}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-heading text-xs tracking-widest text-[#19a3ff]">
                        {car.year}
                      </p>
                      <h3 className="font-heading text-sm font-bold tracking-wide text-white mt-0.5">
                        {car.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12" delay={0.4}>
            <Link
              href="/garage"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              {t("garage.title")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Partners CTA */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#19a3ff]/5 via-transparent to-[#19a3ff]/5" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#19a3ff]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#19a3ff]/30 to-transparent" />
        </div>
        <FadeIn className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#19a3ff]">
            {t("home.partners_subtitle")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide text-foreground">
            {t("home.partners_title")}
          </h2>
          <Link
            href="/partners"
            className={cn(buttonVariants({ size: "lg" }), "bg-[#19a3ff] hover:bg-[#0077cc] text-white px-10")}
          >
            {t("home.partners_cta")}
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
