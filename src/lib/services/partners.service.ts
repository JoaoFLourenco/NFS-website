import { partners } from "@/lib/data/partners";
import type { Partner, PartnerTier } from "@/lib/types/partner";

export function getAllPartners(): Partner[] {
  return partners;
}

export function getPartnersByTier(tier: PartnerTier): Partner[] {
  return partners.filter((p) => p.tier === tier);
}

export function getPartnerTiers(): PartnerTier[] {
  const tiers: PartnerTier[] = [
    "institutional",
    "gold",
    "silver",
    "bronze",
    "software",
    "partner",
  ];
  return tiers.filter((tier) => partners.some((p) => p.tier === tier));
}
