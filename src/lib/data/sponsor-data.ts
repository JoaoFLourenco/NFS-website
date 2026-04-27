import type { Partner } from "@/lib/types/partner";

/**
 * Sponsor data for each car project.
 * Images are stored in Supabase Storage (public bucket: "sponsor-logos")
 * URLs follow the pattern: supabase_url/storage/v1/object/public/sponsor-logos/{path}
 */

export const ev01Sponsors: Partner[] = [
  // Institutional
  {
    name: "NOVA",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FInstitucional%2FnovaRouteZero.png?alt=media&token=3d68423a-233c-4172-91f6-6e4722ee23d7",
    link: "https://www.unl.pt/",
    tier: "institutional",
  },
  {
    name: "FCT",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FInstitucional%2Flogo_nova_fct_pt_v.png?alt=media&token=ed0015be-b061-4ebf-a3a8-3fd36fea20da",
    link: "https://www.fct.unl.pt/",
    tier: "institutional",
  },
  {
    name: "DEMI",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FInstitucional%2Fdemi.png?alt=media&token=7f3f7ebd-342d-4c36-9602-56450813a1df",
    link: "https://www.demi.fct.unl.pt/",
    tier: "institutional",
  },
  {
    name: "DEEC",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FInstitucional%2Fdeec.png?alt=media&token=3f67b690-e7d1-45e3-9c89-f3114e566ab0",
    link: "https://www.dee.fct.unl.pt/",
    tier: "institutional",
  },

  // Gold
  {
    name: "JDEUS",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FGold%2FJDEUS.png?alt=media&token=8d63fd1d-8f3b-414f-90a6-e3c4de286905",
    link: "https://www.jdeus.com/AM",
    tier: "gold",
  },
  {
    name: "MCG",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FGold%2FMCG.svg?alt=media&token=9f0573d3-c103-4d4e-aeb4-aaa1a08edd2f",
    link: "https://www.mcg.pt/?lang=pt-pt",
    tier: "gold",
  },
  {
    name: "MPC",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FGold%2FMPC.png?alt=media&token=6a212196-566d-444f-9a8a-6bd8d087fba4",
    link: "https://mpcdesignworks.com/",
    tier: "gold",
  },
  {
    name: "TAP",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FSilver%2FTAP.png?alt=media&token=a43d8d53-5e1a-45b7-8ec9-c775d1e27b2c",
    link: "https://www.flytap.com/",
    tier: "gold",
  },

  // Silver
  {
    name: "Althima & Altair",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FSilver%2FALTHIMA.svg?alt=media&token=0c5d6d6b-32b4-4f30-859f-aa504c60eb58",
    link: "https://althima.com/",
    tier: "silver",
  },
  {
    name: "CADFLOW",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FSilver%2FCADFLOW.png?alt=media&token=56f13e18-1f7f-463b-81dd-86c3bdff6585",
    link: "https://www.cadflow.pt/",
    tier: "silver",
  },
  {
    name: "Lean Academy",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FSilver%2FLEAN%20ACADEMY.png?alt=media&token=473d375c-c9b8-4b71-85ad-b7a4253579b2",
    link: "https://lean.org.pt/",
    tier: "silver",
  },
  {
    name: "Massivexpand",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FSilver%2FMASSIVEXPAND.png?alt=media&token=34415c44-785e-4bb1-8029-07a72fe6d473",
    link: "https://pt.linkedin.com/company/massivexpand-unipessoal",
    tier: "silver",
  },
  {
    name: "Visteon",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FSilver%2FVISTEON.png?alt=media&token=8ac090c6-c164-4e76-ba10-4f111fc3f3f7",
    link: "https://www.visteon.com/",
    tier: "silver",
  },

  // Bronze (selected)
  {
    name: "About Energy",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FBronze%2FABOUTENERGY.png?alt=media&token=cff3ac2a-13be-4076-a8ba-aa5ad2a2a4b3",
    link: "https://www.aboutenergy.io/",
    tier: "bronze",
  },
  {
    name: "Alphayate",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FBronze%2FALPHAYATE.png?alt=media&token=d2fa237a-4b1e-4e64-bba5-070047c26020",
    link: "https://www.alphayate.com/",
    tier: "bronze",
  },

  // Partner (Software)
  {
    name: "Altium",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FPartner%2FALTIUM.png?alt=media&token=141b15a8-879a-46de-92f3-cc619ee70695",
    link: "https://www.altium.com/",
    tier: "partner",
  },
  {
    name: "MATHWORKS",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FBronze%2FMATHWORKS.png?alt=media&token=f9901129-26a5-4a4f-983b-c63110396ce2",
    link: "https://www.mathworks.com/",
    tier: "partner",
  },
];

export const fenixEvoSponsors: Partner[] = [
  // Institutional
  {
    name: "NOVA University",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FInstitucional%2FNOVA%20UNI.png?alt=media&token=cbf5d98d-5d0b-4149-b79c-c2f3648dc58b",
    link: "https://www.unl.pt/",
    tier: "institutional",
  },
  {
    name: "NOVA SST",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FInstitucional%2Flogo_nova_fct_pt_v.png?alt=media&token=ed0015be-b061-4ebf-a3a8-3fd36fea20da",
    link: "https://www.fct.unl.pt/",
    tier: "institutional",
  },
  {
    name: "AEFCT",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FInstitucional%2FAE_peq.png?alt=media&token=ac1e28cb-4b32-44b6-967e-26339aa40c3a",
    link: "https://ae.fct.unl.pt/",
    tier: "institutional",
  },
  {
    name: "DEMI",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FInstitucional%2Fdemi.png?alt=media&token=7f3f7ebd-342d-4c36-9602-56450813a1df",
    link: "https://www.demi.fct.unl.pt/",
    tier: "institutional",
  },
  {
    name: "DEEC",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FInstitucional%2Fdeec.png?alt=media&token=3f67b690-e7d1-45e3-9c89-f3114e566ab0",
    link: "https://www.dee.fct.unl.pt/",
    tier: "institutional",
  },

  // Gold
  {
    name: "Bosch",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FGold%2FBOSCH.png?alt=media&token=e97ca62e-40f0-46b4-aef4-e59946d03ea9",
    link: "https://www.bosch.pt/",
    tier: "gold",
  },
  {
    name: "Ciclo Fapril",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FGold%2FCICLOFABRIL.png?alt=media&token=deb52d06-4c0f-45a1-9d61-c5883ed9fe93",
    link: "https://ciclofapril.pt/pt/",
    tier: "gold",
  },
  {
    name: "Cubotronic",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FGold%2FCUBOTRONIC.png?alt=media&token=4a0a4294-37bc-454e-bdef-7389095f5156",
    link: "https://www.cubotonic.pt/",
    tier: "gold",
  },
  {
    name: "Galp",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FGold%2FGalp%20Logo%20-%20Main.png?alt=media&token=eca39b07-ce5c-4c8b-8ee2-a4d4b86a7026",
    link: "https://galp.com",
    tier: "gold",
  },
  {
    name: "MCG",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FGold%2FMCG.svg?alt=media&token=9f0573d3-c103-4d4e-aeb4-aaa1a08edd2f",
    link: "https://www.mcg.pt/?lang=pt-pt",
    tier: "gold",
  },
  {
    name: "VW Autoeuropa",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FGold%2FVW_Autoeuropa.png?alt=media&token=3c4029b6-e21d-4450-87a9-ede9dd1324c0",
    link: "https://www.volkswagenautoeuropa.pt/",
    tier: "gold",
  },

  // Silver
  {
    name: "Altair",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FSilver%2FALTAIR.png?alt=media&token=32cb7b37-c59f-4eab-8454-bfc342eb64e5",
    link: "https://altair.com/",
    tier: "silver",
  },
  {
    name: "Althima",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FSilver%2FALTHIMA.svg?alt=media&token=0c5d6d6b-32b4-4f30-859f-aa504c60eb58",
    link: "https://althima.com/",
    tier: "silver",
  },
  {
    name: "Lean Academy",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FSilver%2FLEAN%20ACADEMY.png?alt=media&token=473d375c-c9b8-4b71-85ad-b7a4253579b2",
    link: "https://lean.org.pt/",
    tier: "silver",
  },
  {
    name: "Leomavel",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FSilver%2FLEOMAVEL.jpg?alt=media&token=3c6dc439-ab8a-4248-b44b-c55a730ac43e",
    link: "https://leomavel.pt/",
    tier: "silver",
  },
  {
    name: "Rectimold",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FSilver%2FRECTIMOLD.png?alt=media&token=bb6cb8a7-0048-4b0e-9728-996408314d0b",
    link: "https://rectimold.pt/en/",
    tier: "silver",
  },
  {
    name: "TAP",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FSilver%2FTAP.png?alt=media&token=a43d8d53-5e1a-45b7-8ec9-c775d1e27b2c",
    link: "https://www.flytap.com/",
    tier: "silver",
  },
  {
    name: "Visteon",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Sponsors%2FSilver%2FVISTEON.png?alt=media&token=8ac090c6-c164-4e76-ba10-4f111fc3f3f7",
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
