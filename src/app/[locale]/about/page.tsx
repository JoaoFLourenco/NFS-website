import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/sections/page-header";
import { FadeIn } from "@/components/sections/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";


const staticEvents = [
  { key: "business_plan", points: 75 },
  { key: "cost_manufacturing", points: 100 },
  { key: "engineering_design", points: 150 },
];

const dynamicEvents = [
  { key: "acceleration", points: 50 },
  { key: "skidpad", points: 50 },
  { key: "autocross", points: 100 },
  { key: "endurance", points: 250 },
  { key: "efficiency", points: 75 },
];

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div>
      <PageHeader title={t("title")} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">
        {/* Who are we */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-foreground">
              {t("who_title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t("who_text")}
            </p>
          </div>
        </FadeIn>

        {/* Team photo */}
        <FadeIn>
          <div className="rounded-2xl overflow-hidden border border-border">
            <Image
              src="/images/team/org_chart_2526.png"
              alt="NFS Team Organisation Chart 25/26"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
        </FadeIn>

        {/* Media */}
        <section>
          <FadeIn className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-gradient">
              {t("media_title")}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="aspect-video rounded-xl overflow-hidden border border-border">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/09gNvZ6cpTc"
                  title="Nova Formula Student video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="aspect-video rounded-xl overflow-hidden border border-border">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/iipu79myd-A"
                  title="Nova Formula Student video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* How it works */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-foreground">
              {t("how_title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t("how_text")}
            </p>
          </div>
        </FadeIn>

        {/* Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Static */}
          <FadeIn direction="right">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="font-heading text-xl font-bold tracking-wide text-foreground">
                  {t("static_events")}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {staticEvents.reduce((a, e) => a + e.points, 0)} {t("points")}
                </Badge>
              </div>
              <Accordion multiple className="space-y-2">
                {staticEvents.map(({ key, points }) => (
                  <AccordionItem
                    key={key}
                    value={key}
                    className="border border-border rounded-lg px-4 bg-card/50"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">{t(key as never)}</span>
                        <Badge className="bg-[#19a3ff]/10 text-[#19a3ff] border-[#19a3ff]/20 text-xs font-mono">
                          {points} pts
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">
                      {t(`${key}_desc` as never)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>

          {/* Dynamic */}
          <FadeIn direction="left" delay={0.15}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="font-heading text-xl font-bold tracking-wide text-foreground">
                  {t("dynamic_events")}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {dynamicEvents.reduce((a, e) => a + e.points, 0)} {t("points")}
                </Badge>
              </div>
              <Accordion multiple className="space-y-2">
                {dynamicEvents.map(({ key, points }) => (
                  <AccordionItem
                    key={key}
                    value={key}
                    className="border border-border rounded-lg px-4 bg-card/50"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">{t(key as never)}</span>
                        <Badge className="bg-[#19a3ff]/10 text-[#19a3ff] border-[#19a3ff]/20 text-xs font-mono">
                          {points} pts
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">
                      {t(`${key}_desc` as never)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
