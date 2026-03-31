export type PartnerTier =
  | "institutional"
  | "gold"
  | "silver"
  | "bronze"
  | "software"
  | "partner";

export interface Partner {
  name: string;
  imageUrl: string;
  link?: string;
  tier: PartnerTier;
}
