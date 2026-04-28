import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/sections/page-header";
import { FadeIn } from "@/components/sections/fade-in";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail, MapPin } from "lucide-react";
import {
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
} from "@/components/layout/social-icons";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/novaformulastudent/",
    Icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/nova-formula-student/",
    Icon: LinkedinIcon,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/NovaFormulaStudent/",
    Icon: FacebookIcon,
  },
];

export default function ContactsPage() {
  const t = useTranslations("contacts");

  return (
    <div>
      <PageHeader title={t("title")} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <FadeIn direction="right" className="space-y-8">
            <div className="flex gap-4 p-5 rounded-[4px] border border-border bg-card">
              <div className="p-2.5 rounded-[4px] bg-[#19a3ff]/10 h-fit">
                <Mail className="h-5 w-5 text-[#19a3ff]" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                  {t("team_email")}
                </p>
                <a
                  href="mailto:geral@novaformulastudent.pt"
                  className="text-foreground hover:text-[#19a3ff] transition-colors font-medium"
                >
                  geral@novaformulastudent.pt
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-[4px] border border-border bg-card">
              <div className="p-2.5 rounded-[4px] bg-[#19a3ff]/10 h-fit">
                <Mail className="h-5 w-5 text-[#19a3ff]" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                  {t("cr_email")}
                </p>
                <a
                  href="mailto:cr@novaformulastudent.pt"
                  className="text-foreground hover:text-[#19a3ff] transition-colors font-medium"
                >
                  cr@novaformulastudent.pt
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-[4px] border border-border bg-card">
              <div className="p-2.5 rounded-[4px] bg-[#19a3ff]/10 h-fit">
                <MapPin className="h-5 w-5 text-[#19a3ff]" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                  {t("address")}
                </p>
                <p className="text-foreground font-medium text-sm">
                  {t("address_value")}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {t("social_media")}
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ name, url, Icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="p-3 rounded-[4px] border border-border bg-card text-muted-foreground hover:text-[#19a3ff] hover:border-[#19a3ff]/30 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-[4px] overflow-hidden border border-border aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.1234567890!2d-9.2070!3d38.6621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecb3c9c11b87b%3A0x5ab0f4a9b0a0c0c0!2sFCT%20NOVA!5e0!3m2!1spt!2spt!4v1700000000000!5m2!1spt!2spt"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FCT NOVA location"
              />
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn direction="left" delay={0.15}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
