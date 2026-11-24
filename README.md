# NOVA Formula Student Website

This repository contains the public website for the NOVA Formula Student team at FCT NOVA. It is a bilingual Next.js App Router application. Most page content is stored in TypeScript/JSON files in the repository; image files are served from `public/` or public Supabase Storage URLs.

This README is the practical guide for developing, updating, and deploying the site. The code is the source of truth: a few older setup/migration documents describe proposed or historical behavior and may not match the current implementation.

## Contents

- [Technology](#technology)
- [Local development](#local-development)
- [Commands and checks](#commands-and-checks)
- [Routes and application structure](#routes-and-application-structure)
- [Where to make common updates](#where-to-make-common-updates)
- [Images and Supabase Storage](#images-and-supabase-storage)
- [Environment variables and integrations](#environment-variables-and-integrations)
- [Deployment and domain changes](#deployment-and-domain-changes)
- [Known limitations and maintenance notes](#known-limitations-and-maintenance-notes)
- [Additional project documents](#additional-project-documents)

## Technology

- **Next.js 16.2** with the App Router and **React 19**
- **TypeScript** with strict checking and the `@/*` alias mapped to `src/*`
- **next-intl 4** for Portuguese and English routing and translations
- **Tailwind CSS 4** for styling, plus reusable components under `src/components/ui`
- **Framer Motion** for animated sections and interactions
- **EmailJS** is wired into a contact-form component, although that component is not currently displayed on the Contact page
- Static image and font assets live under `public/`; selected team, sponsor, and gallery images use Supabase Storage URLs

Next.js conventions can change between major versions. This project uses Next.js 16; before changing framework conventions, consult the installed documentation under `node_modules/next/dist/docs/` and the official docs for the installed version.

## Local development

### Requirements

- Node.js **20.9 or newer** (the minimum required by the installed Next.js version)
- npm

The committed `package-lock.json` is the dependency lockfile. Use `npm ci` for a reproducible install.

### Start the development server

From the repository root:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root route redirects to `/pt`; the English site is under `/en`.

Most pages work without local credentials. To try the EmailJS contact form component or display remote sponsor/gallery images locally, configure the corresponding variables described in [Environment variables and integrations](#environment-variables-and-integrations). `.env.local` belongs in the repository root and is ignored by Git. Never commit it or put private credentials in a `NEXT_PUBLIC_` variable.

## Commands and checks

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint across the project |
| `npx tsc --noEmit` | Run TypeScript type checking without emitting files |
| `npm run build` | Create a production build; catches many route, rendering, and type integration errors |
| `npm run start` | Serve the last successful production build locally |

There is currently no dedicated test script or test suite in `package.json`. For a code change, run at least `npm run lint` and `npm run build`; run the type check as well when changing TypeScript or shared data shapes. `npm run start` requires a successful build first.

## Routes and application structure

All user-facing pages are localized. The locale prefix is always present in the URL.

| URL | Page |
| --- | --- |
| `/` | Redirects to the default Portuguese locale (`/pt`) |
| `/pt`, `/en` | Home |
| `/{locale}/about` | Team information, organization chart, media, and Formula Student events |
| `/{locale}/garage` | Vehicle listing |
| `/{locale}/garage/{slug}` | Vehicle details: specs, competitions, team (where available), gallery, and sponsors |
| `/{locale}/partners` | Partnership information and sponsor listing |
| `/{locale}/newsletter` | Newsletter page |
| `/{locale}/contacts` | Contact details, social links, and map |

At present, car slugs are `fsnovaev01`, `fsfenixevo`, `fsfenix`, and `fsdragon`.

### Directory map

```text
src/
  app/
    layout.tsx                 Root HTML layout, global metadata, fonts, and styles
    page.tsx                   Redirects `/` to `/pt`
    sitemap.ts                 Sitemap, including manually listed car slugs
    [locale]/
      layout.tsx               Locale validation, messages, navbar, and footer
      page.tsx                  Localized home page
      about/                    About page
      contacts/                 Contact page
      garage/                   Vehicle listing and [slug] detail page
      newsletter/               Newsletter placeholder
      partners/                 Partners and sponsor page
  proxy.ts                      next-intl locale routing for requests
  components/
    layout/                     Navbar, footer, and social icons
    sections/                   Page sections and interactive components
    ui/                         Reusable UI primitives
  i18n/                         next-intl routing, request config, and navigation
  lib/
    data/                       Car, team, sponsor, competition, and navigation data
    services/                   Small read/helper functions over local data and URLs
    types/                      Shared TypeScript data shapes
  messages/
    en.json                     English translations
    pt.json                     Portuguese translations
public/
  fonts/                        Locally hosted display fonts
  images/                       Local logos, cars, team imagery, and partner visuals
```

`src/app/[locale]` is the source of the localized routes. `src/proxy.ts` applies the `next-intl` routing configuration. The locale list and default are defined in `src/i18n/routing.ts`.

## Where to make common updates

### Text and translations

1. Update the matching keys in **both** `src/messages/pt.json` and `src/messages/en.json`.
2. Keep the existing JSON nesting (for example `nav`, `home`, `about`, `garage`, `partners`, `contacts`, and `newsletter`).
3. Use `useTranslations("section")` in a page/component for that section, or `useTranslations()` for the root message object.

Some vehicle specifications and competition result labels are currently plain data strings, not translation keys. Updating a translation file alone will not translate those values.

### Navigation

The header and footer each define their own navigation-link arrays in `src/components/layout/navbar.tsx` and `src/components/layout/footer.tsx`. Their labels come from `nav` in both translation files. When adding or removing a page, update both lists and add the corresponding translation keys.

### Add or edit a car

1. Add/update the car record in `src/lib/data/cars.ts`. The `Car` type is in `src/lib/types/car.ts`.
2. Use a unique `slug`; this slug is also used in the detail URL and remote gallery path.
3. Add translations for its `subtitleKey` in both message files. Specification descriptions and values are currently literal strings in `cars.ts`.
4. If the car has team history, add its seasons in `src/lib/data/teams.ts` and add a matching entry to `teamsByCar` in `src/app/[locale]/garage/[slug]/page.tsx`. The detail page shows the team section only for slugs in that map.
5. Add its sponsors to the appropriate array and extend `getSponsorsForCar()` in `src/lib/data/sponsor-data.ts` if sponsor display is required on its detail page.
6. Add its competition history and update `getCompetitionsForCar()` data in `src/lib/data/competitions.ts`.
7. Update the manually maintained `carSlugs` list in `src/app/sitemap.ts`. Car detail static parameters are generated from `getCarSlugs()`, but the sitemap has a separate list.
8. Add local images to `public/images/...` or prepare the remote gallery images described below.
9. Verify both locales, the listing card, the car detail page, any sponsor/team sections, and the sitemap after the change.

The current detail route generates static parameters for the configured locales and car slugs. Unknown car slugs use Next.js `notFound()`.

### Update vehicle specifications

Edit the relevant car's `specCategories` in `src/lib/data/cars.ts`. Each category has a display name, translation key, description, and list of `{ label, value }` specs. The garage list takes its three quick specs from the first category, so keep that category representative. These details render as entered and should be checked in both language versions for spelling and units.

### Update team seasons and members

Edit the typed season/group/member data in `src/lib/data/teams.ts`:

- A season contains `seasonLabel` and `groups`.
- A group `title` maps to a `dept_<title>` key in both locale JSON files. Hyphens in titles are converted to underscores for lookup.
- Member `role` values use the `TeamRole` union in the same file. Non-member roles need corresponding `role_<role>` translations (with hyphens converted to underscores).
- `TeamSection` selects the **last** season in the array by default. Keep the newest season last.
- Member image URLs are currently constructed in `teams.ts` from a fixed public Storage base URL and folder/filename. The fallback photo is also on that Storage host.

The component displays member names and roles in the department cards, and opens an expanded photo grid when a department is selected. If a team has no entry in `teamsByCar`, no team section is rendered for that car.

### Update sponsors and partner content

- Sponsor records shown on the Partners page and supported car pages are in `src/lib/data/sponsor-data.ts`.
- Per-car detail pages use `getSponsorsForCar()`. The Partners page uses the combined `allSponsors` list, which is deduplicated and sorted there.
- Each record has a name, image URL, optional outbound link, and tier (`institutional`, `gold`, `silver`, `bronze`, `software`, or `partner`). `src/components/sections/sponsors-section.tsx` groups sponsors by tier.
- The generic records in `src/lib/data/partners.ts` are placeholder data and are not the source currently passed to the visible Partners page section. Use `sponsor-data.ts` for the actual sponsor listing.
- The six local “brands on car” images are `public/images/partners/car_brands_1.jpg` through `car_brands_6.jpg`.

For static partner-tier copy and other page text, update both locale message files. The email link for partnership inquiries is currently in the Partners page component.

### Update competition history

Edit the car-specific arrays in `src/lib/data/competitions.ts`. `getCompetitionsForCar(slug)` selects the matching records for the detail page. Competition names, dates, locations, categories, and placements are displayed as supplied; there is no separate translation layer for these values.

### Update the About, Contact, and Newsletter pages

- About page copy is in the `about` translation section. The organization chart, YouTube embeds, and static Formula Student event point totals are referenced/defined in `src/app/[locale]/about/page.tsx`.
- Contact emails, social links, map embed, and contact labels are maintained in `src/app/[locale]/contacts/page.tsx` and the `contacts` translation section.
- Newsletter copy is under `newsletter` in both translation files. Its current form is a disabled, non-submitting placeholder; see [Known limitations](#known-limitations-and-maintenance-notes).

### Change styles and shared components

- Global theme tokens, Tailwind imports, local display font, and base styles are in `src/app/globals.css`.
- Root metadata, the Raleway font configuration, and global stylesheet import are in `src/app/layout.tsx`.
- Shared page shell is in `src/app/[locale]/layout.tsx`; shared header/footer components are under `src/components/layout/`.
- Reusable page sections are under `src/components/sections/`; low-level UI components are under `src/components/ui/`.
- The `@/*` import alias points to `src/*` as configured in `tsconfig.json`.

## Images and Supabase Storage

### Local images

Files in `public/` are addressed from the site root, for example `public/images/cars/EV01Render.png` is referenced as `/images/cars/EV01Render.png`. Keep filename casing consistent; production hosting is typically case-sensitive. For local images used with `next/image`, preserve the layout sizing (`fill` with a positioned container, or explicit width and height) and meaningful alt text.

### Remote images

`next.config.ts` allows `next/image` URLs from `*.supabase.co` under `/storage/v1/object/public/**`. If an image host changes, update the `images.remotePatterns` allowlist as well as the data URL. Do not solve an untrusted-host error by allowing every remote hostname.

Current code uses public Storage URLs, not a Supabase database or a Supabase SDK:

| Content | Bucket/path convention | URL source |
| --- | --- | --- |
| Team member photos | `team-members/{team-folder}/{season-folder}/{filename}.jpg` | Fixed project Storage base URL and helper in `src/lib/data/teams.ts` |
| Car galleries | `car-galleries/{car-slug}/{filename}` | `getCarGalleryImageUrl()` in `src/lib/services/storage.service.ts` |
| Sponsor logos | `sponsor-logos/{car-folder}/{tier}/{filename}` | URL helper and records in `src/lib/data/sponsor-data.ts` |

Public buckets/objects must be readable without authentication for these URLs to work. Uploading is not implemented in the website; assets are managed outside the application. Gallery and sponsor URL helpers read `NEXT_PUBLIC_SUPABASE_URL`, but currently fall back to `https://your-project.supabase.co`, which is only a placeholder and will not serve real files. Team-photo URLs use a project URL hardcoded in source instead of that variable. See the limitations below and check the actual bucket/object names in the Supabase dashboard before changing them.

Do not treat the repository's older Supabase notes as a guarantee that their suggested buckets, scripts, or live data fetching are already implemented. The current component/data code is authoritative.

## Environment variables and integrations

Environment files must be in the repository root (not in `src/`). `.env*` files are ignored by Git. `NEXT_PUBLIC_` means a value can be included in client-side JavaScript; it is not suitable for secrets.

| Variable | Used for | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Sponsor-logo and car-gallery URL construction | Set to the project's base URL, e.g. `https://<project-ref>.supabase.co`. Current fallback is a nonfunctional placeholder. Team photo URLs do not currently use this variable. |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service used by `ContactForm` | Required to send the form. |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template used by `ContactForm` | The template must accept the fields `from_name`, `from_email`, `subject`, and `message`. |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS browser SDK authentication | This is explicitly a public/client-side key; never put a private/service credential here. |

The three EmailJS variable names are listed in `.env.example`. The contact form's EmailJS integration lives in `src/components/sections/contact-form.tsx`; currently, `src/app/[locale]/contacts/page.tsx` imports the component but does not render it. Configuring EmailJS alone therefore does not make a form visible on the Contact page.

Set public variables both in local `.env.local` and in the deployment platform's build environment. Next.js inlines `NEXT_PUBLIC_` values during `next build`, so changing them on a running deployment without rebuilding will not update the client bundle.

## Deployment and domain changes

The repository contains the standard Next.js `build` and `start` scripts. A production Node.js deployment can run:

```bash
npm ci
npm run build
npm run start
```

The project is configured as a Next.js app and includes Vercel-specific domain references, but deployment credentials, project settings, environment values, and branch policies are not stored in the repository. Confirm access to the hosting account and current production project before changing deployment settings.

The current canonical/live URL is hardcoded in multiple places. Before moving domains, search/update and verify at least:

- Metadata and Open Graph URLs in `src/app/layout.tsx`
- Home page structured data in `src/app/[locale]/page.tsx`
- Car detail Open Graph URLs in `src/app/[locale]/garage/[slug]/page.tsx`
- Base URL and page/car entries in `src/app/sitemap.ts`

Also verify the deployed `/robots.txt`, sitemap, locale routes, social previews, image URLs, and any host-specific environment variables after deployment.

## Known limitations and maintenance notes

These are observations about the current code, not intended behavior:

- **Newsletter is not connected.** The subscribe button is disabled, and there is no submission handler or mailing-list service.
- **Contact form is not visible.** A functional-looking EmailJS component exists, and the Contact page imports it, but the page does not include `<ContactForm />`. The currently visible page provides contact details, social links, and a map only.
- **Content is repository-managed.** Car, team, competition, and sponsor records are static TypeScript data. There is no CMS, public editing interface, Supabase database integration, or website image-upload feature.
- **Storage configuration is inconsistent.** Team images use a hardcoded Supabase project URL; sponsor/gallery URLs use `NEXT_PUBLIC_SUPABASE_URL` with a placeholder fallback. Confirm the real Storage project and buckets before rotating or migrating assets.
- **Partner data has placeholders.** `src/lib/data/partners.ts` contains example entries, while the visible sponsor block uses `allSponsors` from `src/lib/data/sponsor-data.ts`.
- **Some site URLs and metadata are hardcoded.** Update all references noted in [Deployment and domain changes](#deployment-and-domain-changes) together.
- **Sitemap car list is manual.** Keep it in sync with `src/lib/data/cars.ts`.
- **Legacy documents can be stale.** In particular, some instructions describe Firebase-era state, planned Supabase migrations, or example implementation code that does not match the current source.

## Additional project documents

- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) — background on Storage setup and image hosting. Review against current code before following; it contains historical/planned instructions.
- [SPONSOR_IMAGE_MIGRATION.md](./SPONSOR_IMAGE_MIGRATION.md) — sponsor image filenames and migration notes. Check current records in `src/lib/data/sponsor-data.ts` because the list may have changed.
- [TEAM_AND_GALLERY_DB_STRUCTURE.md](./TEAM_AND_GALLERY_DB_STRUCTURE.md) — early design notes for team and gallery storage. Some sample schemas/code are proposals, not the current implementation.
