/**
 * Supabase Storage URL helpers
 * Constructs URLs for images stored in Supabase Storage
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co";

/**
 * Get team member image URL from Supabase Storage
 */
export function getTeamMemberImageUrl(
  carSlug: string,
  seasonLabel: string,
  filename: string
): string {
  return `${SUPABASE_URL}/storage/v1/object/public/team-members/${carSlug}/${seasonLabel}/${filename}`;
}

/**
 * Get car gallery image URL from Supabase Storage
 */
export function getCarGalleryImageUrl(carSlug: string, filename: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/car-galleries/${carSlug}/${filename}`;
}
