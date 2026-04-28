"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { TeamSeason, TeamRole, TeamGroup } from "@/lib/data/teams";

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

function MemberCard({
  member,
  t,
}: {
  member: TeamGroup["members"][number];
  t: ReturnType<typeof useTranslations<"garage">>;
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-border bg-card shrink-0">
        {member.imageSrc ? (
          <Image
            src={member.imageSrc}
            alt={member.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <svg viewBox="0 0 80 80" className="w-10 h-10 text-muted-foreground" fill="none">
              <circle cx="40" cy="30" r="14" stroke="currentColor" strokeWidth="2.5" />
              <path
                d="M10 70c0-16.569 13.431-30 30-30s30 13.431 30 30"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground leading-tight">{member.name}</p>
        {member.role !== "member" && (
          <span
            className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full border ${roleBadgeClass[member.role]}`}
          >
            {t(`role_${member.role.replace(/-/g, "_")}` as never)}
          </span>
        )}
      </div>
    </div>
  );
}

/** Returns the number of grid columns based on current window width. */
function useGridCols() {
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCols(3);
      else if (window.innerWidth >= 640) setCols(2);
      else setCols(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
}

export function TeamSection({ seasons }: TeamSectionProps) {
  const t = useTranslations("garage");
  const cols = useGridCols();
  const [activeSeason, setActiveSeason] = useState(seasons[seasons.length - 1].seasonLabel);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const season =
    seasons.find((s) => s.seasonLabel === activeSeason) ?? seasons[seasons.length - 1];

  const groups = season.groups;
  const expandedIndex = groups.findIndex((g) => g.title === expandedGroup);
  const expandedRow = expandedIndex >= 0 ? Math.floor(expandedIndex / cols) : -1;

  // Chunk groups into rows of `cols` items
  const rows: (typeof groups)[] = [];
  for (let i = 0; i < groups.length; i += cols) {
    rows.push(groups.slice(i, i + cols));
  }

  function handleGroupClick(title: string) {
    setExpandedGroup((prev) => (prev === title ? null : title));
  }

  const expanded = groups.find((g) => g.title === expandedGroup);

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
            onClick={() => {
              setActiveSeason(s.seasonLabel);
              setExpandedGroup(null);
            }}
            className={`px-4 py-1.5 rounded-[4px] text-sm font-medium border transition-colors ${
              activeSeason === s.seasonLabel
                ? "bg-[#19a3ff] border-[#19a3ff] text-white"
                : "border-border text-muted-foreground hover:border-[#19a3ff]/40 hover:text-foreground"
            }`}
          >
            {s.seasonLabel}
          </button>
        ))}
      </div>

      {/* Rows + inline expanded panel */}
      <div className="space-y-4">
        {rows.map((rowGroups, rowIndex) => (
          <div key={rowIndex} className="space-y-4">
            {/* Card row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rowGroups.map((group) => {
                const isExpanded = expandedGroup === group.title;
                return (
                  <button
                    key={group.title}
                    onClick={() => handleGroupClick(group.title)}
                    className={`text-left rounded-[4px] border p-5 space-y-3 transition-all duration-200 w-full ${
                      isExpanded
                        ? "border-[#19a3ff]/60 bg-[#19a3ff]/5"
                        : "border-border bg-card hover:border-[#19a3ff]/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#19a3ff]">
                        {t(`dept_${group.title.replace(/-/g, "_")}` as never)}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {group.members.length}{" "}
                        {group.members.length === 1 ? "member" : "members"}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {group.members.slice(0, 4).map((member) => (
                        <li
                          key={member.name}
                          className="flex items-center justify-between gap-2"
                        >
                          <span className="text-sm text-foreground truncate">
                            {member.name}
                          </span>
                          {member.role !== "member" && (
                            <span
                              className={`shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border ${roleBadgeClass[member.role]}`}
                            >
                              {t(`role_${member.role.replace(/-/g, "_")}` as never)}
                            </span>
                          )}
                        </li>
                      ))}
                      {group.members.length > 4 && (
                        <li className="text-xs text-muted-foreground">
                          +{group.members.length - 4} more
                        </li>
                      )}
                    </ul>
                  </button>
                );
              })}
            </div>

            {/* Expanded panel — only rendered after the row containing the selected card */}
            <AnimatePresence initial={false}>
              {rowIndex === expandedRow && expanded && (
                <motion.div
                  key={expanded.title}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="rounded-2xl border border-[#19a3ff]/30 bg-card overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                      <h3 className="font-heading text-lg font-bold tracking-wide text-gradient">
                        {t(`dept_${expanded.title.replace(/-/g, "_")}` as never)}
                      </h3>
                      <button
                        onClick={() => setExpandedGroup(null)}
                        className="p-1.5 rounded-[4px] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    {/* Member photo grid */}
                    <div className="p-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                      {expanded.members.map((member) => (
                        <MemberCard key={member.name} member={member} t={t} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
