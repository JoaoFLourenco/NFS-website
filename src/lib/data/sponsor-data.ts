import type { Partner } from "@/lib/types/partner";

/**
 * Sponsor data for each car project.
 *
 * IMAGE MIGRATION IN PROGRESS:
 * - Images are being migrated from Firebase Storage to Supabase Storage
 * - Once migrated, URLs will follow pattern: supabase_url/storage/v1/object/public/sponsor-logos/{path}
 * - For now, imageUrl placeholders are empty - update after uploading to Supabase
 * - See SUPABASE_SETUP.md for complete migration guide
 */

// Placeholder helper to construct Supabase image URLs
// Update SUPABASE_URL once you have your project
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co";
const getSupabaseImageUrl = (path: string) =>
  `${SUPABASE_URL}/storage/v1/object/public/sponsor-logos/${path}`;

export const ev01Sponsors: Partner[] = [
  // Institutional
  {
    name: "NOVA",
    imageUrl: getSupabaseImageUrl("ev01/institutional/nova.png"),
    link: "https://www.unl.pt/",
    tier: "institutional",
  },
  {
    name: "FCT",
    imageUrl: getSupabaseImageUrl("ev01/institutional/fct.png"),
    link: "https://www.fct.unl.pt/",
    tier: "institutional",
  },
  {
    name: "DEMI",
    imageUrl: getSupabaseImageUrl("ev01/institutional/demi.png"),
    link: "https://www.demi.fct.unl.pt/",
    tier: "institutional",
  },
  {
    name: "DEEC",
    imageUrl: getSupabaseImageUrl("ev01/institutional/deec.png"),
    link: "https://www.dee.fct.unl.pt/",
    tier: "institutional",
  },

  // Gold
  {
    name: "JDEUS",
    imageUrl: getSupabaseImageUrl("ev01/gold/jdeus.png"),
    link: "https://www.jdeus.com/AM",
    tier: "gold",
  },
  {
    name: "MCG",
    imageUrl: getSupabaseImageUrl("ev01/gold/mcg.svg"),
    link: "https://www.mcg.pt/?lang=pt-pt",
    tier: "gold",
  },
  {
    name: "MPC",
    imageUrl: getSupabaseImageUrl("ev01/gold/mpc.png"),
    link: "https://mpcdesignworks.com/",
    tier: "gold",
  },
  {
    name: "TAP",
    imageUrl: getSupabaseImageUrl("ev01/gold/tap.png"),
    link: "https://www.flytap.com/",
    tier: "gold",
  },

  // Silver
  {
    name: "Althima & Altair",
    imageUrl: getSupabaseImageUrl("ev01/silver/althima.svg"),
    link: "https://althima.com/",
    tier: "silver",
  },
  {
    name: "CADFLOW",
    imageUrl: getSupabaseImageUrl("ev01/silver/cadflow.png"),
    link: "https://www.cadflow.pt/",
    tier: "silver",
  },
  {
    name: "Lean Academy",
    imageUrl: getSupabaseImageUrl("ev01/silver/lean-academy.png"),
    link: "https://lean.org.pt/",
    tier: "silver",
  },
  {
    name: "Massivexpand",
    imageUrl: getSupabaseImageUrl("ev01/silver/massivexpand.png"),
    link: "https://pt.linkedin.com/company/massivexpand-unipessoal",
    tier: "silver",
  },
  {
    name: "Visteon",
    imageUrl: getSupabaseImageUrl("ev01/silver/visteon.png"),
    link: "https://www.visteon.com/",
    tier: "silver",
  },

  // Bronze (selected)
  {
    name: "About Energy",
    imageUrl: getSupabaseImageUrl("ev01/bronze/about-energy.png"),
    link: "https://www.aboutenergy.io/",
    tier: "bronze",
  },
  {
    name: "Alphayate",
    imageUrl: getSupabaseImageUrl("ev01/bronze/alphayate.png"),
    link: "https://www.alphayate.com/",
    tier: "bronze",
  },

  // Partner (Software)
  {
    name: "Altium",
    imageUrl: getSupabaseImageUrl("ev01/partner/altium.png"),
    link: "https://www.altium.com/",
    tier: "partner",
  },
  {
    name: "MATHWORKS",
    imageUrl: getSupabaseImageUrl("ev01/partner/mathworks.png"),
    link: "https://www.mathworks.com/",
    tier: "partner",
  },
];

export const fenixEvoSponsors: Partner[] = [
  // Institutional
  {
    name: "NOVA University",
    imageUrl: getSupabaseImageUrl("fenixevo/institutional/nova-uni.png"),
    link: "https://www.unl.pt/",
    tier: "institutional",
  },
  {
    name: "NOVA SST",
    imageUrl: getSupabaseImageUrl("fenixevo/institutional/nova-sst.png"),
    link: "https://www.fct.unl.pt/",
    tier: "institutional",
  },
  {
    name: "AEFCT",
    imageUrl: getSupabaseImageUrl("fenixevo/institutional/aefct.png"),
    link: "https://ae.fct.unl.pt/",
    tier: "institutional",
  },
  {
    name: "DEMI",
    imageUrl: getSupabaseImageUrl("fenixevo/institutional/demi.png"),
    link: "https://www.demi.fct.unl.pt/",
    tier: "institutional",
  },
  {
    name: "DEEC",
    imageUrl: getSupabaseImageUrl("fenixevo/institutional/deec.png"),
    link: "https://www.dee.fct.unl.pt/",
    tier: "institutional",
  },

  // Gold
  {
    name: "Bosch",
    imageUrl: getSupabaseImageUrl("fenixevo/gold/bosch.png"),
    link: "https://www.bosch.pt/",
    tier: "gold",
  },
  {
    name: "Ciclo Fapril",
    imageUrl: getSupabaseImageUrl("fenixevo/gold/ciclo-fapril.png"),
    link: "https://ciclofapril.pt/pt/",
    tier: "gold",
  },
  {
    name: "Cubotronic",
    imageUrl: getSupabaseImageUrl("fenixevo/gold/cubotronic.png"),
    link: "https://www.cubotonic.pt/",
    tier: "gold",
  },
  {
    name: "Galp",
    imageUrl: getSupabaseImageUrl("fenixevo/gold/galp.png"),
    link: "https://galp.com",
    tier: "gold",
  },
  {
    name: "MCG",
    imageUrl: getSupabaseImageUrl("fenixevo/gold/mcg.svg"),
    link: "https://www.mcg.pt/?lang=pt-pt",
    tier: "gold",
  },
  {
    name: "VW Autoeuropa",
    imageUrl: getSupabaseImageUrl("fenixevo/gold/vw-autoeuropa.png"),
    link: "https://www.volkswagenautoeuropa.pt/",
    tier: "gold",
  },

  // Silver
  {
    name: "Altair",
    imageUrl: getSupabaseImageUrl("fenixevo/silver/altair.png"),
    link: "https://altair.com/",
    tier: "silver",
  },
  {
    name: "Althima",
    imageUrl: getSupabaseImageUrl("fenixevo/silver/althima.svg"),
    link: "https://althima.com/",
    tier: "silver",
  },
  {
    name: "Lean Academy",
    imageUrl: getSupabaseImageUrl("fenixevo/silver/lean-academy.png"),
    link: "https://lean.org.pt/",
    tier: "silver",
  },
  {
    name: "Leomavel",
    imageUrl: getSupabaseImageUrl("fenixevo/silver/leomavel.jpg"),
    link: "https://leomavel.pt/",
    tier: "silver",
  },
  {
    name: "Rectimold",
    imageUrl: getSupabaseImageUrl("fenixevo/silver/rectimold.png"),
    link: "https://rectimold.pt/en/",
    tier: "silver",
  },
  {
    name: "TAP",
    imageUrl: getSupabaseImageUrl("fenixevo/silver/tap.png"),
    link: "https://www.flytap.com/",
    tier: "silver",
  },
  {
    name: "Visteon",
    imageUrl: getSupabaseImageUrl("fenixevo/silver/visteon.png"),
    link: "https://www.visteon.com/",
    tier: "silver",
  },
];

/** All unique sponsors across both projects */
export const allSponsors: Partner[] = Array.from(
  new Map(
    [...ev01Sponsors, ...fenixEvoSponsors].map((s) => [s.name, s])
  ).values()
).sort((a, b) => a.name.localeCompare(b.name));

export function getSponsorsForCar(carSlug: string): Partner[] {
  switch (carSlug) {
    case "fsnovaev01":
      return ev01Sponsors;
    case "fsfenixevo":
      return fenixEvoSponsors;
    default:
      return [];
  }
}
