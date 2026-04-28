"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/garage", key: "garage" },
  { href: "/partners", key: "partners" },
  { href: "/contacts", key: "contacts" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    const localePath = `/${locale}${href === "/" ? "" : href}`;
    if (href === "/") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(localePath);
  };

  const otherLocale = locale === "pt" ? "en" : "pt";
  const pathnameWithoutLocale = pathname.replace(/^\/(pt|en)/, "") || "/";
  const switchHref = `/${otherLocale}${pathnameWithoutLocale}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logoBranco.svg"
            alt="NFS Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, key }) => (
            <li key={key}>
              <Link
                href={href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive(href)
                    ? "text-[#19a3ff]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: language switcher + mobile menu */}
        <div className="flex items-center gap-2">
          <a
            href={switchHref}
            className="hidden md:flex items-center px-3 py-1.5 text-xs font-medium rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors uppercase tracking-widest"
          >
            {otherLocale}
          </a>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <button
                  aria-label="Open menu"
                  className="md:hidden inline-flex items-center justify-center rounded-[4px] p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background border-border">
              <div className="flex flex-col gap-1 mt-8">
                {navLinks.map(({ href, key }) => (
                  <Link
                    key={key}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-4 py-3 text-base font-medium rounded-md transition-colors",
                      isActive(href)
                        ? "text-[#19a3ff] bg-[#19a3ff]/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {t(key)}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-border px-4">
                  <a
                    href={switchHref}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground uppercase tracking-widest"
                  >
                    {otherLocale === "pt" ? "Português" : "English"}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
