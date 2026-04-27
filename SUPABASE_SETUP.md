# Supabase Storage Setup for Sponsor & Team Images

This guide explains how to set up Supabase for storing and serving images in the NFS website.

## Overview

**Current Setup:** Images are hosted on Firebase Storage (legacy URLs)
**Future Setup:** Migrate to Supabase Storage for better integration with Next.js

**Storage Limits:**
- Supabase Free Tier: 500 MB total storage
- Supabase Pro Tier: 100 GB + $5/GB overage

## Quick Start

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project for free"
3. Sign in with GitHub or email
4. Create a new organization (or use existing)
5. Create a new project:
   - **Project name:** `nova-formula-student`
   - **Database password:** Generate a strong password
   - **Region:** `eu-west-1` (Ireland, closest to Portugal)
6. Copy your **Project URL** and **Anon Key** — you'll need these

### 2. Get Credentials

In your Supabase project:
1. Go to **Settings** → **API**
2. Copy these values to your `.env.local`:

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Create Storage Bucket

In Supabase Dashboard:
1. Go to **Storage** (left sidebar)
2. Click **Create new bucket**
3. **Bucket name:** `sponsor-logos`
4. **Make it public:** Toggle ON (so images are publicly accessible)
5. Click **Create bucket**

Repeat for other buckets:
- `team-photos` — for team member images
- `car-gallery` — for car gallery images

### 4. Set Bucket Policies (Public Read)

By default, public buckets allow anyone to read. To allow uploads via the app:

1. Click the bucket name
2. Go to **Policies** tab
3. Click **New policy** → **For queries**
4. Select **SELECT** (for public read access)
5. Under "Target roles," choose **public**
6. Click **Save**

For write access (uploads from app), you'd need to set up RLS (Row Level Security), but for now, upload manually via the dashboard.

## Image Organization Structure

Organize images in folders by category:

```
sponsor-logos/
├── ev01/
│   ├── institutional/
│   │   └── nova.png
│   ├── gold/
│   │   └── jdeus.png
│   ├── silver/
│   │   └── althima.svg
│   └── bronze/
│       └── blocks.png
├── fenixevo/
│   ├── institutional/
│   ├── gold/
│   └── silver/
└── all/  (shared sponsors)
    ├── gold/
    └── partner/

team-photos/
├── ev01-2425/
│   └── {member-name}.jpg
├── ev01-2526/
└── fenixevo-2324/

car-gallery/
├── ev01/
├── fenixevo/
├── fenix/
└── dragon/
```

## Upload Images to Supabase

### Option A: Via Dashboard (Simple)

1. In **Storage**, click the bucket
2. Click **Upload file** (or drag & drop)
3. Navigate to the folder path
4. Upload the image
5. **Important:** Get the public URL after upload

### Option B: Via CLI (Bulk Upload)

Install Supabase CLI:

```bash
npm install -g supabase
```

Authenticate:

```bash
supabase login
```

Upload folder:

```bash
supabase storage upload sponsor-logos/ev01/institutional ./local/path/to/images --recursive
```

### Option C: Via Node.js Script

Create `scripts/upload-images.js`:

```javascript
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Use service role for uploads
);

async function uploadImages(localDir, storagePath) {
  const files = fs.readdirSync(localDir);

  for (const file of files) {
    const filePath = path.join(localDir, file);
    const fileBuffer = fs.readFileSync(filePath);

    const { data, error } = await supabase.storage
      .from("sponsor-logos")
      .upload(`${storagePath}/${file}`, fileBuffer, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) console.error(`Error uploading ${file}:`, error);
    else console.log(`✓ Uploaded ${file}`);
  }
}

// Example: upload EV01 sponsors
uploadImages("./public/images/sponsors/ev01/gold", "ev01/gold");
```

Run it:

```bash
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key node scripts/upload-images.js
```

## Update Image URLs in Code

Once images are in Supabase, update your data files:

**Old Firebase URL:**
```javascript
imageUrl: "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FGold%2FJDEUS.png?alt=media&token=8d63fd1d-8f3b-414f-90a6-e3c4de286905"
```

**New Supabase URL:**
```javascript
imageUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/sponsor-logos/ev01/gold/jdeus.png`
```

Or use the Supabase client:

```javascript
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const { data } = supabase.storage
  .from("sponsor-logos")
  .getPublicUrl("ev01/gold/jdeus.png");

console.log(data.publicUrl); // Full public URL
```

## Image Caching & Performance

For better performance, configure caching:

```javascript
const { data, error } = await supabase.storage
  .from("sponsor-logos")
  .upload("ev01/gold/jdeus.png", fileBuffer, {
    cacheControl: "3600", // 1 hour
    upsert: true,
  });
```

Or set Cache-Control in Vercel Edge Config for CDN caching.

## Estimated Storage Usage

- **100 sponsor logos** (100 KB avg): ~10 MB
- **200 team member photos** (150 KB avg): ~30 MB  
- **100 car gallery images** (300 KB avg): ~30 MB
- **Total:** ~70 MB (plenty of room in 500 MB free tier)

## Security Best Practices

1. **Keep Anon Key public** (it's in `.env.local` and bundled in frontend)
2. **Keep Service Role Key secret** (`.env.local` only, never in frontend)
3. **Use public buckets** for logos/galleries (readable by anyone)
4. **Use RLS policies** if you add user authentication later
5. **Monitor storage** in Supabase dashboard (Storage → Usage)

## Troubleshooting

**Images not loading?**
- Check bucket is set to **public**
- Verify file path in URL matches actual upload path
- Test URL in browser to see actual error

**Upload permission denied?**
- Make sure you're using the correct API key
- Service Role Key needed for server-side uploads
- Anon Key for public read access

**Storage quota exceeded?**
- Delete unused images from Supabase dashboard
- Upgrade to Pro tier ($10/month)
- Move old assets to external CDN (Cloudinary, ImageKit)

## Next Steps

1. Create Supabase project and bucket
2. Copy `.env` credentials
3. Upload sponsor logos (start with Firebase URLs as backup)
4. Update `src/lib/data/sponsor-data.ts` with Supabase URLs
5. Test images load correctly
6. Repeat for team photos and car gallery

## Resources

- [Supabase Storage Docs](https://supabase.com/docs/guides/storage)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/storage-createbucket)
- [Image Optimization with Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/images)

---

**Questions?** Check the [Supabase Discord](https://discord.com/invite/postgres) or open an issue!
