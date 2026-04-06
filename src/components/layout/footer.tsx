import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Separator } from "@/components/ui/separator";
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
    url: "https://www.linkedin.com/company/formula-student-fct/",
    Icon: LinkedinIcon,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/NovaFormulaStudent/",
    Icon: FacebookIcon,
  },
];

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/garage", key: "garage" },
  { href: "/partners", key: "partners" },
  { href: "/contacts", key: "contacts" },
] as const;

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/logoBranco.svg"
              alt="NFS Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Nova Formula Student — FCT NOVA
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ name, url, Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="p-2 rounded-md text-muted-foreground hover:text-[#19a3ff] hover:bg-[#19a3ff]/10 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Links
            </p>
            <ul className="space-y-2">
              {navLinks.map(({ href, key }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {t("contacts.title")}
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>geral@novaformulastudent.pt</p>
              <p>cr@novaformulastudent.pt</p>
              <p>FCT NOVA, Caparica</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>
            © {year} {t("footer.built_by")}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
