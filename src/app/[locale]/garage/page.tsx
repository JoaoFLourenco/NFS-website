import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { FadeIn } from "@/components/sections/fade-in";
import { buttonVariants } from "@/lib/button-variants";
import { getAllCars } from "@/lib/services/cars.service";
import { cn } from "@/lib/utils";

export default function GaragePage() {
  const t = useTranslations("garage");
  const cars = getAllCars();

  return (
    <div>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-8">
        {cars.map((car, i) => (
          <FadeIn key={car.slug} delay={i * 0.1}>
            <div className="group relative rounded-2xl overflow-hidden border border-border bg-card">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px] overflow-hidden">
                  <Image
                    src={car.heroImage}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card lg:block hidden" />
                </div>

                {/* Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-[0.3em] mb-2"
                      style={{ color: car.accentColor }}
                    >
                      {car.year}
                    </p>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide text-foreground">
                      {car.name}
                    </h2>
                    <p className="mt-2 text-muted-foreground">{t(car.subtitleKey as never)}</p>
                  </div>

                  {/* Quick specs */}
                  {car.specCategories[0] && (
                    <div className="grid grid-cols-3 gap-4">
                      {car.specCategories[0].specs.slice(0, 3).map((spec) => (
                        <div key={spec.label} className="space-y-1">
                          <p className="text-xs text-muted-foreground">{spec.label}</p>
                          <p className="text-sm font-medium text-foreground font-mono">
                            {spec.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/garage/${car.slug}`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "self-start"
                    )}
                    style={{
                      backgroundColor: `${car.accentColor}20`,
                      color: car.accentColor,
                      borderColor: `${car.accentColor}40`,
                    }}
                  >
                    {t("learn_more")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
