"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { TeamSeason, TeamRole } from "@/lib/data/teams";

interface TeamSectionProps {
  seasons: TeamSeason[];
}

const roleBadgeClass: Record<TeamRole, string> = {
  "team-leader":               "bg-[#19a3ff]/20 text-[#19a3ff] border-[#19a3ff]/30",
  "technical-director":        "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "project-manager":           "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "finance":                   "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "strategy-finance-director": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "dep-leader":                "bg-white/10 text-white/70 border-white/20",
  "member":                    "",
  "cost":                      "bg-rose-500/20 text-rose-300 border-rose-500/30",
};

export function TeamSection({ seasons }: TeamSectionProps) {
  const t = useTranslations("garage");
  const [activeSeason, setActiveSeason] = useState(seasons[seasons.length - 1].seasonLabel);

  const season = seasons.find((s) => s.seasonLabel === activeSeason) ?? seasons[seasons.length - 1];

  return (
    <div className="space-y-8">
      {/* Season selector */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mr-2">
          {t("season")}
        </span>
        {seasons.map((s) => (
          <button
            key={s.seasonLabel}
            onClick={() => setActiveSeason(s.seasonLabel)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
              activeSeason === s.seasonLabel
                ? "bg-[#19a3ff] border-[#19a3ff] text-white"
                : "border-border text-muted-foreground hover:border-[#19a3ff]/40 hover:text-foreground"
            }`}
          >
            {s.seasonLabel}
          </button>
        ))}
      </div>

      {/* Groups grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {season.groups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-border bg-card p-5 space-y-3"
          >
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#19a3ff]">
              {t(`dept_${group.title.replace(/-/g, "_")}` as never)}
            </h4>
            <ul className="space-y-2">
              {group.members.map((member) => (
                <li key={member.name} className="flex items-center justify-between gap-2">
                  <span className="text-sm text-foreground">{member.name}</span>
                  {member.role !== "member" && (
                    <span
                      className={`shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border ${roleBadgeClass[member.role]}`}
                    >
                      {t(`role_${member.role.replace(/-/g, "_")}` as never)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
