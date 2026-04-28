"use client";

import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Car } from "@/lib/types/car";
import { ArrowRight } from "lucide-react";

interface CarSpecsSectionProps {
  car: Car;
}

export function CarSpecsSection({ car }: CarSpecsSectionProps) {
  const t = useTranslations("garage");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {car.specCategories.map((category) => (
        <Dialog key={category.translationKey}>
          <DialogTrigger
            render={
              <button className="group text-left rounded-xs border border-border bg-card p-6 hover:border-opacity-80 transition-all duration-200 hover:shadow-lg w-full" />
            }
          >
            <div className="flex items-center justify-between mb-4">
              <p
                className="text-xs font-medium uppercase tracking-[0.25em]"
                style={{ color: car.accentColor }}
              >
                {t(category.translationKey as never)}
              </p>
              <ArrowRight
                className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform"
                style={{ color: car.accentColor }}
              />
            </div>
            <div className="space-y-3">
              {category.specs.slice(0, 2).map((spec) => (
                <div key={spec.label} className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">{spec.label}</p>
                  <p className="text-sm font-medium font-mono text-foreground break-words">
                    {spec.value}
                  </p>
                </div>
              ))}
              {category.specs.length > 2 && (
                <p className="text-xs text-muted-foreground pt-1">
                  +{category.specs.length - 2} more
                </p>
              )}
            </div>
          </DialogTrigger>
          <DialogContent className="bg-card border-border max-w-md">
            <DialogHeader>
              <DialogTitle className="font-heading tracking-wide text-gradient">
                {t(category.translationKey as never)}
              </DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground mt-2 mb-4">
              {category.description}
            </p>
            <div className="space-y-3">
              {category.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between items-baseline border-b border-border/50 pb-2"
                >
                  <span className="text-sm text-muted-foreground">{spec.label}</span>
                  <span className="text-sm font-medium font-mono text-foreground">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
