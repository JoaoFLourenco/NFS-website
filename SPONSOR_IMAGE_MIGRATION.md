# Sponsor Image Migration Guide

This document lists all sponsor logo filenames needed for your Supabase storage bucket. The old Firebase URLs have been replaced with Supabase paths in the code.

## Supabase Bucket Structure

Create a bucket named `sponsor-logos` and organize images in this structure:

```
sponsor-logos/
├── ev01/
│   ├── institutional/
│   ├── gold/
│   ├── silver/
│   ├── bronze/
│   └── partner/
└── fenixevo/
    ├── institutional/
    ├── gold/
    ├── silver/
    ├── bronze/
    └── partner/
```

## EV01 Images Needed

### Institutional (4 images)
- `nova.png`
- `fct.png`
- `demi.png`
- `deec.png`

### Gold (4 images)
- `jdeus.png`
- `mcg.svg`
- `mpc.png`
- `tap.png`

### Silver (5 images)
- `althima.svg`
- `cadflow.png`
- `lean-academy.png`
- `massivexpand.png`
- `visteon.png`

### Bronze (14 images)
- `about-energy.png`
- `alphayate.png`
- `blocks.png`
- `coficab.png`
- `fibran.png`
- `kip.png`
- `loctite.png`
- `mauser.png`
- `maxiarte.png`
- `norelem.png`
- `te.png`
- `telles.png`
- `vector.png`
- `wurth.png`

### Partner (8 images)
- `altium.png`
- `ipg.svg`
- `mathworks.png`
- `rapid-harness.png`
- `solidworks.svg`
- `tesla.png`
- `trigenius.svg`
- `vi-grade.jpg`

## FenixEvo Images Needed

### Institutional (5 images)
- `nova-uni.png`
- `nova-sst.png`
- `aefct.png`
- `demi.png`
- `deec.png`

### Gold (6 images)
- `bosch.png`
- `ciclo-fapril.png`
- `cubotronic.png`
- `galp.png`
- `mcg.svg`
- `vw-autoeuropa.png`

### Silver (7 images)
- `altair.png`
- `althima.svg`
- `lean-academy.png`
- `leomavel.jpg`
- `rectimold.png`
- `tap.png`
- `visteon.png`

### Bronze (25 images)
- `3diso.png`
- `alphayate.png`
- `altium.png`
- `amtita.jpg`
- `blocks.png`
- `coficab.png`
- `corte-pratico.png`
- `dfc-turbo.png`
- `exide.svg`
- `fibran.png`
- `fresatudo.jpg`
- `kfrio.png`
- `kip.png`
- `m3t.jpg`
- `mathworks.png`
- `maxiarte.png`
- `mcoutinho.jpg`
- `ndtuned.png`
- `ngk.svg`
- `niterra.png`
- `norelem.png`
- `proseat.png`
- `ramada-acos.png`
- `teixeira-duarte.png`
- `zdk.svg`

### Partner (2 images)
- `ipg.svg`
- `solidworks.svg`

## How to Upload Images

### Option 1: Using Supabase Dashboard
1. Go to your Supabase project → Storage
2. Click the `sponsor-logos` bucket (create if it doesn't exist)
3. Create folders for each tier: `ev01/institutional`, `ev01/gold`, etc.
4. Upload images to the corresponding folders

### Option 2: Using Supabase CLI
```bash
# Login to Supabase
supabase link --project-id your-project-id

# Upload images from local folder
supabase storage upload sponsor-logos/ev01/institutional ./path/to/ev01/institutional/
```

### Option 3: Download from Firebase then Upload
The old Firebase URLs are still available. You can:
1. Download the images from the Firebase links
2. Rename them to match the expected filenames in the list above
3. Upload to Supabase in the correct folder structure

## Verification

After uploading, visit your website and check:
- Car detail pages (garage/fsnovaev01, garage/fsfenixevo) - should show sponsors
- Partners page - should show all sponsor logos

All images should load without the Firebase watermark/token parameters.

## Notes

- File extensions matter: `.png`, `.svg`, `.jpg`
- Use lowercase with hyphens for multi-word filenames (e.g., `about-energy.png`)
- SVG files will remain as `.svg` (these are vector logos)
- The code will automatically construct the full Supabase URLs from these filenames
