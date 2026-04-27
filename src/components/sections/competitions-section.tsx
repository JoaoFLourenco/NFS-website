"use client";

import { useTranslations } from "next-intl";
import type { Competition } from "@/lib/data/competitions";
import { FadeIn } from "@/components/sections/fade-in";
import { Calendar, MapPin } from "lucide-react";

interface CompetitionsSectionProps {
  competitions: Competition[];
}

export function CompetitionsSection({ competitions }: CompetitionsSectionProps) {
  const t = useTranslations("garage");

  if (!competitions || competitions.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-10">
          <h2 className="font-heading text-2xl font-bold tracking-wide text-gradient">
            {t("competitions")}
          </h2>
        </FadeIn>

        <div className="flex flex-wrap gap-6">
          {competitions.map((competition, idx) => (
            <FadeIn key={competition.name} delay={idx * 0.08} className="flex-1 min-w-sm">
              <div className="h-full rounded-xl border border-border bg-card/50 overflow-hidden hover:border-[#19a3ff]/30 transition-colors">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#19a3ff]/10 to-transparent p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {competition.name}
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    {competition.date && competition.date !== "TBD" && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {competition.date}
                      </div>
                    )}
                    {competition.location && competition.location !== "TBD" && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {competition.location}
                      </div>
                    )}
                  </div>
                </div>

                {/* Results */}
                <div className="p-6 space-y-6">
                  {competition.categories.map((category) => (
                    <div key={category.title}>
                      <h4 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-3">
                        {category.title}
                      </h4>
                      <ul className="space-y-2">
                        {category.results.map((result) => (
                          <li
                            key={result.category}
                            className="flex justify-between items-start text-sm border-l-2 border-[#19a3ff]/20 pl-3 py-1"
                          >
                            <span className="text-foreground">{result.category}</span>
                            <span className="text-[#19a3ff] font-semibold">
                              {result.placement}
                            </span>
                          </li>
                        ))}
                      </ul>
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
