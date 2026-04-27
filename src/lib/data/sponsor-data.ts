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
    name: "Althima",
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

  // Bronze
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
  {
    name: "BLOCKS",
    imageUrl: getSupabaseImageUrl("ev01/bronze/blocks.png"),
    link: "https://blockstec.com/",
    tier: "bronze",
  },
  {
    name: "Coficab",
    imageUrl: getSupabaseImageUrl("ev01/bronze/coficab.png"),
    link: "https://www.coficab.pt/",
    tier: "bronze",
  },
  {
    name: "Fibran",
    imageUrl: getSupabaseImageUrl("ev01/bronze/fibran.png"),
    link: "https://fibran.pt/",
    tier: "bronze",
  },
  {
    name: "KIP",
    imageUrl: getSupabaseImageUrl("ev01/bronze/kip.png"),
    link: "https://kip.pt/",
    tier: "bronze",
  },
  {
    name: "Loctite",
    imageUrl: getSupabaseImageUrl("ev01/bronze/loctite.png"),
    link: "https://www.loctiteproducts.com/",
    tier: "bronze",
  },
  {
    name: "Mauser",
    imageUrl: getSupabaseImageUrl("ev01/bronze/mauser.png"),
    link: "https://mauser.pt/",
    tier: "bronze",
  },
  {
    name: "Maxiarte",
    imageUrl: getSupabaseImageUrl("ev01/bronze/maxiarte.png"),
    link: "https://www.maxiarte.pt/",
    tier: "bronze",
  },
  {
    name: "Norelem",
    imageUrl: getSupabaseImageUrl("ev01/bronze/norelem.png"),
    link: "https://norelem.es/pt",
    tier: "bronze",
  },
  {
    name: "TE",
    imageUrl: getSupabaseImageUrl("ev01/bronze/te.png"),
    link: "https://www.te.com/pt/home.html",
    tier: "bronze",
  },
  {
    name: "TELLES",
    imageUrl: getSupabaseImageUrl("ev01/bronze/telles.png"),
    link: "https://www.telles.pt/pt/",
    tier: "bronze",
  },
  {
    name: "Vector",
    imageUrl: getSupabaseImageUrl("ev01/bronze/vector.png"),
    link: "https://www.vector.com/int/en/",
    tier: "bronze",
  },
  {
    name: "Würth",
    imageUrl: getSupabaseImageUrl("ev01/bronze/wurth.png"),
    link: "https://eshop.wurth.pt/pt/PT/EUR/",
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
    name: "IPG Software",
    imageUrl: getSupabaseImageUrl("ev01/partner/ipg.svg"),
    link: "https://www.ipg-automotive.com/",
    tier: "partner",
  },
  {
    name: "MATHWORKS",
    imageUrl: getSupabaseImageUrl("ev01/partner/mathworks.png"),
    link: "https://www.mathworks.com/",
    tier: "partner",
  },
  {
    name: "Rapid Harness",
    imageUrl: getSupabaseImageUrl("ev01/partner/rapid-harness.png"),
    link: "https://rapidharness.com/",
    tier: "partner",
  },
  {
    name: "SolidWorks",
    imageUrl: getSupabaseImageUrl("ev01/partner/solidworks.svg"),
    link: "https://www.solidworks.com/",
    tier: "partner",
  },
  {
    name: "TESLA",
    imageUrl: getSupabaseImageUrl("ev01/partner/tesla.png"),
    link: "https://www.tesla.com/",
    tier: "partner",
  },
  {
    name: "Trigenius",
    imageUrl: getSupabaseImageUrl("ev01/partner/trigenius.svg"),
    link: "https://trigenius.pt/",
    tier: "partner",
  },
  {
    name: "VI-Grade",
    imageUrl: getSupabaseImageUrl("ev01/partner/vi-grade.jpg"),
    link: "https://www.vi-grade.com",
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
    name: "FCT",
    imageUrl: getSupabaseImageUrl("fenixevo/institutional/nova-sst.png"),
    link: "https://www.fct.unl.pt/",
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
  {
    name: "AEFCT",
    imageUrl: getSupabaseImageUrl("fenixevo/institutional/aefct.png"),
    link: "https://ae.fct.unl.pt/",
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
    imageUrl: getSupabaseImageUrl("fenixevo/silver/leomavel.png"),
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

  // Bronze
  {
    name: "3DISO",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/3diso.png"),
    link: "https://www.3d-iso.pt/",
    tier: "bronze",
  },
  {
    name: "Alphayate",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/alphayate.png"),
    link: "https://www.alphayate.com/",
    tier: "bronze",
  },
  {
    name: "Altium",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/altium.png"),
    link: "https://www.altium.com/altium-designer",
    tier: "bronze",
  },
  {
    name: "AMtita",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/amtita.jpg"),
    link: "https://www.amtita.pt/",
    tier: "bronze",
  },
  {
    name: "BLOCKS",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/blocks.png"),
    link: "https://blockstec.com/",
    tier: "bronze",
  },
  {
    name: "Coficab",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/coficab.png"),
    link: "https://www.coficab.pt/",
    tier: "bronze",
  },
  {
    name: "CortePratico",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/corte-pratico.png"),
    link: "https://cortepratico.pt/site/",
    tier: "bronze",
  },
  {
    name: "DFC Turbo",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/dfc-turbo.png"),
    link: "https://dfcturbo.com/",
    tier: "bronze",
  },
  {
    name: "EXIDE",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/exide.svg"),
    link: "https://www.exidegroup.com/eu/pt",
    tier: "bronze",
  },
  {
    name: "Fibran",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/fibran.png"),
    link: "https://fibran.pt/",
    tier: "bronze",
  },
  {
    name: "Fresatudo",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/fresatudo.jpg"),
    link: "https://www.fresatudo.pt/",
    tier: "bronze",
  },
  {
    name: "KFRIO",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/kfrio.png"),
    link: "https://kfrio.pt/",
    tier: "bronze",
  },
  {
    name: "KIP",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/kip.png"),
    link: "https://kip.pt/",
    tier: "bronze",
  },
  {
    name: "M3T",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/m3t.jpg"),
    link: "https://m3t.pt/",
    tier: "bronze",
  },
  {
    name: "MATHWORKS",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/mathworks.png"),
    link: "https://www.mathworks.com/",
    tier: "bronze",
  },
  {
    name: "Maxiarte",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/maxiarte.png"),
    link: "https://www.maxiarte.pt/",
    tier: "bronze",
  },
  {
    name: "MCoutinho",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/mcoutinho.jpg"),
    link: "https://www.mcoutinho.pt/",
    tier: "bronze",
  },
  {
    name: "NDTuned",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/ndtuned.png"),
    link: "https://www.ndtuned.com/",
    tier: "bronze",
  },
  {
    name: "NGK",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/ngk.svg"),
    link: "https://ngksparkplugs.com/en/",
    tier: "bronze",
  },
  {
    name: "NITERRA",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/niterra.png"),
    link: "https://www.ngkntk.com/pt/",
    tier: "bronze",
  },
  {
    name: "Norelem",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/norelem.png"),
    link: "https://norelem.es/pt",
    tier: "bronze",
  },
  {
    name: "PROSeat",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/proseat.png"),
    link: "https://proseat.eu/",
    tier: "bronze",
  },
  {
    name: "RamadaAcos",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/ramada-acos.png"),
    link: "https://www.ramada.pt/",
    tier: "bronze",
  },
  {
    name: "TeixeiraDuarte",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/teixeira-duarte.png"),
    link: "https://www.tdgiworld.com/",
    tier: "bronze",
  },
  {
    name: "ZDK",
    imageUrl: getSupabaseImageUrl("fenixevo/bronze/zdk.svg"),
    link: "https://www.zdkmotorsport.com/",
    tier: "bronze",
  },

  // Partner (Software)
  {
    name: "IPG Software",
    imageUrl: getSupabaseImageUrl("fenixevo/partner/ipg.svg"),
    link: "https://www.ipg-automotive.com/",
    tier: "partner",
  },
  {
    name: "SolidWorks",
    imageUrl: getSupabaseImageUrl("fenixevo/partner/solidworks.svg"),
    link: "https://www.solidworks.com/",
    tier: "partner",
  },
];

/** All unique sponsors across both projects (deduplicated by name) */
export const allSponsors: Partner[] = (() => {
  const institutional_order = [
    "NOVA University",
    "FCT",
    "NOVA",
    "DEMI",
    "DEEC",
    "AEFCT",
  ];

  const unique = Array.from(
    new Map(
      [...ev01Sponsors, ...fenixEvoSponsors].map((s) => [s.name, s])
    ).values()
  );

  return unique.sort((a, b) => {
    // Institutional sponsors use custom order
    if (a.tier === "institutional" && b.tier === "institutional") {
      const aIndex = institutional_order.indexOf(a.name);
      const bIndex = institutional_order.indexOf(b.name);
      return aIndex - bIndex;
    }
    // Other tiers sort alphabetically
    if (a.tier === b.tier) {
      return a.name.localeCompare(b.name);
    }
    // Different tiers sort by tier order
    const tierOrder = ["institutional", "gold", "silver", "bronze", "partner"];
    return tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier);
  });
})();

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
