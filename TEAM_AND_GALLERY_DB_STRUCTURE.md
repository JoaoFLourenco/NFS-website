# Team Member Pictures & Car Gallery — Database Structure & Implementation

This guide explains how to set up Supabase storage for team member photos and car gallery images, then modify the code to fetch and display them dynamically.

---

## Part 1: Supabase Storage Setup

### Create Storage Buckets

Create two public buckets in Supabase Storage:

1. **`team-members`** — for team member profile pictures
2. **`car-galleries`** — for car gallery images

#### Steps:
1. Go to Supabase Dashboard → Storage
2. Click "New Bucket"
3. Name: `team-members`, make it Public
4. Click "New Bucket"
5. Name: `car-galleries`, make it Public

---

## Part 2: Folder Structure

### Team Members Bucket

```
team-members/
├── ev01/
│   ├── 24-25/
│   │   ├── mariana-santos.jpg
│   │   ├── diogo-peixe.jpg
│   │   ├── afonso-dinis.jpg
│   │   └── ... (one file per member)
│   └── 25-26/
│       └── ... (member photos for next season)
└── fenixevo/
    ├── 23-24/
    └── 24-25/
```

**Naming convention:**
- Use lowercase with hyphens: `first-last-name.jpg`
- One file per team member
- Extensions: `.jpg`, `.png`, `.webp`

### Car Galleries Bucket

```
car-galleries/
├── fsnovaev01/
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   └── gallery-4.jpg
└── fsfenixevo/
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    └── ...
```

**Naming convention:**
- Sequential numbering: `gallery-1.jpg`, `gallery-2.jpg`, etc.
- Extensions: `.jpg`, `.png`, `.webp`
- Upload in order (they'll display in the same order)

---

## Part 3: Code Implementation

### Step 1: Update `src/lib/data/teams.ts`

The `imageSrc` field already exists but will now contain the filename instead of a path:

```typescript
export interface TeamMember {
  name: string;
  role: TeamRole;
  imageSrc?: string; // Just the filename, e.g., "mariana-santos.jpg"
}
```

Update the team data to include image filenames:

```typescript
const ev01_2425: TeamSeason = {
  seasonLabel: "24/25",
  groups: [
    {
      title: "board",
      members: [
        { name: "Mariana Santos",  role: "team-leader", imageSrc: "mariana-santos.jpg" },
        { name: "Diogo Peixe",     role: "team-leader", imageSrc: "diogo-peixe.jpg" },
        { name: "Afonso Dinis",    role: "technical-director", imageSrc: "afonso-dinis.jpg" },
        // ... more members
      ],
    },
    // ... more groups
  ],
};
```

### Step 2: Create `src/lib/services/storage.service.ts`

This service will generate image URLs from Supabase:

```typescript
/**
 * Generate URLs for images stored in Supabase Storage
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co";

export function getTeamMemberImageUrl(
  carSlug: string,
  seasonLabel: string,
  filename: string
): string {
  return `${SUPABASE_URL}/storage/v1/object/public/team-members/${carSlug}/${seasonLabel}/${filename}`;
}

export function getCarGalleryImageUrl(
  carSlug: string,
  filename: string
): string {
  return `${SUPABASE_URL}/storage/v1/object/public/car-galleries/${carSlug}/${filename}`;
}

/**
 * Fetch list of gallery images for a car
 * 
 * This is useful if you want to dynamically load gallery images
 * instead of hardcoding them. Requires a server-side function or API route.
 */
export async function fetchCarGalleryImages(carSlug: string): Promise<string[]> {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/storage/v1/object/list/car-galleries/${carSlug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
      }
    );

    if (!response.ok) return [];

    const data = await response.json();
    return data.name ? [data.name] : [];
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
}
```

### Step 3: Update `src/components/sections/team-section.tsx`

Modify the team member image URL construction:

```typescript
import Image from "next/image";
import { getTeamMemberImageUrl } from "@/lib/services/storage.service";
import type { TeamSeason } from "@/lib/data/teams";

interface TeamSectionProps {
  seasons: TeamSeason[];
  carSlug: string; // NEW: add this prop
}

export function TeamSection({ seasons, carSlug }: TeamSectionProps) {
  const t = useTranslations("garage");
  const [selectedSeason, setSelectedSeason] = useState(0);

  // ... existing code ...

  return (
    <div>
      {/* Season selector buttons */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {seasons.map((season, i) => (
          <button
            key={season.seasonLabel}
            onClick={() => setSelectedSeason(i)}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              selectedSeason === i
                ? "bg-[#19a3ff] border-[#19a3ff] text-white"
                : "border-border text-foreground hover:border-[#19a3ff]/50"
            }`}
          >
            {season.seasonLabel}
          </button>
        ))}
      </div>

      {/* Departments and members */}
      <div className="space-y-6">
        {seasons[selectedSeason].groups.map((group) => (
          <div key={group.title}>
            <h3 className="font-heading text-lg font-bold mb-4 capitalize">
              {t(`dept_${group.title}` as never)}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {group.members.slice(0, 4).map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative aspect-square mb-2 rounded-lg overflow-hidden bg-card border border-border">
                    {member.imageSrc ? (
                      <Image
                        src={getTeamMemberImageUrl(
                          carSlug,
                          seasons[selectedSeason].seasonLabel,
                          member.imageSrc
                        )}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted-foreground/10">
                        <span className="text-xs text-muted-foreground">No photo</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t(`role_${member.role}` as never)}
                  </p>
                </div>
              ))}
            </div>

            {group.members.length > 4 && (
              <p className="text-sm text-muted-foreground mt-2">
                +{group.members.length - 4} {t("more_members")}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Step 4: Update `src/app/[locale]/garage/[slug]/page.tsx`

Pass `carSlug` and `seasons` to TeamSection:

```typescript
<TeamSection seasons={teams} carSlug={slug} />
```

### Step 5: Add Car Gallery Images in `src/lib/data/cars.ts`

Add gallery image filenames to each car:

```typescript
export const cars: Car[] = [
  {
    slug: "fsnovaev01",
    name: "EV01",
    year: 2024,
    heroImage: "/images/cars/ev01-hero.jpg",
    accentColor: "#19a3ff",
    subtitleKey: "ev01_subtitle",
    galleryImages: [
      "gallery-1.jpg",
      "gallery-2.jpg",
      "gallery-3.jpg",
      "gallery-4.jpg",
    ],
    specs: {
      // ... existing specs
    },
  },
  {
    slug: "fsfenixevo",
    name: "FenixEvo",
    year: 2025,
    heroImage: "/images/cars/fenixevo-hero.jpg",
    accentColor: "#00ff00",
    subtitleKey: "fenixevo_subtitle",
    galleryImages: [
      "gallery-1.jpg",
      "gallery-2.jpg",
      "gallery-3.jpg",
    ],
    specs: {
      // ... existing specs
    },
  },
];
```

### Step 6: Update `src/app/[locale]/garage/[slug]/page.tsx` (Gallery Section)

Update the gallery section to use Supabase URLs:

```typescript
import { getCarGalleryImageUrl } from "@/lib/services/storage.service";

// In the CarDetailContent component:

{/* Gallery placeholder */}
<section className="py-16 px-4 bg-card/30">
  <div className="max-w-7xl mx-auto">
    <FadeIn className="mb-10">
      <h2 className="font-heading text-2xl font-bold tracking-wide text-gradient">
        {t("gallery")}
      </h2>
    </FadeIn>
    <FadeIn delay={0.1}>
      {car.galleryImages.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {car.galleryImages.map((filename, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border"
            >
              <Image
                src={getCarGalleryImageUrl(slug, filename)}
                alt={`${car.name} photo ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border border-dashed h-48 flex items-center justify-center">
          <p className="text-muted-foreground text-sm">{t("no_photos")}</p>
        </div>
      )}
    </FadeIn>
  </div>
</section>
```

---

## Part 4: Translation Keys

Add these keys to your translation files (`src/messages/pt.json` and `src/messages/en.json`):

### Portuguese (pt.json)
```json
{
  "garage": {
    "more_members": "mais membros"
  }
}
```

### English (en.json)
```json
{
  "garage": {
    "more_members": "more members"
  }
}
```

---

## Part 5: Uploading Files to Supabase

### Option 1: Dashboard Upload
1. Go to Supabase → Storage
2. Open `team-members` bucket
3. Create folder: `ev01/24-25`
4. Upload member photos (named: `first-last-name.jpg`)
5. Repeat for other seasons and cars

### Option 2: CLI Upload
```bash
# Login
supabase link --project-id your-project-id

# Upload team member photos
supabase storage upload team-members/ev01/24-25 ./path/to/photos/

# Upload car gallery images
supabase storage upload car-galleries/fsnovaev01 ./path/to/car/photos/
```

### Option 3: Node.js Script
Create `scripts/upload-images.js`:

```javascript
const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function uploadTeamPhotos() {
  const photoDir = "./photos/team-members/ev01/24-25";
  const files = fs.readdirSync(photoDir);

  for (const file of files) {
    const filePath = path.join(photoDir, file);
    const fileBuffer = fs.readFileSync(filePath);

    await supabase.storage
      .from("team-members")
      .upload(`ev01/24-25/${file}`, fileBuffer);

    console.log(`Uploaded: ${file}`);
  }
}

uploadTeamPhotos();
```

Run with:
```bash
node scripts/upload-images.js
```

---

## Part 6: File Size & Optimization Tips

### Recommended Sizes
- **Team member photos**: 400×500px, ~50-100KB per image
- **Car gallery images**: 1200×800px, ~150-300KB per image

### Optimization
1. Use online tools (TinyPNG, ImageOptim) to reduce file size
2. Convert to WebP format for smaller files
3. Supabase automatically serves optimized versions with query parameters:
   ```
   ?width=400&height=500&resize=contain
   ```

---

## Summary

| Item | Location | Structure |
|------|----------|-----------|
| Team photos | `Supabase Storage: team-members` | `{carSlug}/{seasonLabel}/{filename}` |
| Gallery photos | `Supabase Storage: car-galleries` | `{carSlug}/{filename}` |
| Team data | `src/lib/data/teams.ts` | `imageSrc: "filename.jpg"` |
| Car data | `src/lib/data/cars.ts` | `galleryImages: ["filename.jpg"]` |
| Helper functions | `src/lib/services/storage.service.ts` | `getTeamMemberImageUrl()`, `getCarGalleryImageUrl()` |

---

## Troubleshooting

**Images not loading?**
- Check that Supabase buckets are set to **Public**
- Verify filenames match exactly (case-sensitive on Linux servers)
- Ensure `.env.local` has correct `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**"imageSrc" not being used?**
- Rebuild the project: `npm run build`
- Clear `.next` folder: `rm -rf .next`

**Gallery images out of order?**
- Number sequentially: `gallery-01.jpg`, `gallery-02.jpg`, etc.
- This ensures correct sorting in directories
