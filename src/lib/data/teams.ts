export type TeamRole =
  | "team-leader"
  | "technical-director"
  | "project-manager"
  | "finance"
  | "strategy-finance-director"
  | "dep-leader"
  | "member"
  | "cost";

export interface TeamMember {
  name: string;
  role: TeamRole;
  imageSrc?: string;
}

export interface TeamGroup {
  title: string;
  members: TeamMember[];
}

export interface TeamSeason {
  seasonLabel: string;
  groups: TeamGroup[];
}

/* ============================================================
   SUPABASE URL CONSTANT
   ============================================================ */
const SUPABASE_URL = "https://ylahzitzhsagxcolxita.supabase.co/storage/v1/object/public/team-members";

// Helper function to generate image path
const img = (folder: string, fileName: string) => `${SUPABASE_URL}/${folder}/${fileName}.jpg`;

/* ============================================================
   NOVA EV01 — 24/25
   ============================================================ */
const ev01_2425: TeamSeason = {
  seasonLabel: "24/25",
  groups: [
    {
      title: "board",
      members: [
        { name: "Mariana Santos",  role: "team-leader", imageSrc: img("ev01/24-25", "mariana-santos") },
        { name: "Diogo Peixe",     role: "team-leader", imageSrc: img("ev01/24-25", "diogo-peixe") },
        { name: "Afonso Dinis",    role: "technical-director", imageSrc: img("ev01/24-25", "afonso-dinis") },
        { name: "Mariana Inácio",  role: "project-manager", imageSrc: img("ev01/24-25", "mariana-inacio") },
        { name: "João Balbino",    role: "finance", imageSrc: img("ev01/24-25", "joao-balbino") },
      ],
    },
    {
      title: "aerodynamics",
      members: [
        { name: "Ângela Rodrigues",    role: "member", imageSrc: img("ev01/24-25", "angela-rodrigues") },
        { name: "Cristiano Almeida",   role: "member", imageSrc: img("ev01/24-25", "cristiano-almeida") },
        { name: "Francisco Rodrigues", role: "member", imageSrc: img("ev01/24-25", "francisco-rodrigues") },
        { name: "Mário Fonseca",       role: "member", imageSrc: img("ev01/24-25", "mario-fonseca") },
        { name: "Miguel Lourenço",     role: "member", imageSrc: img("ev01/24-25", "miguel-lourenco") },
        { name: "Tomás Pinto",         role: "member", imageSrc: img("ev01/24-25", "tomas-pinto") },
      ],
    },
    {
      title: "chassis",
      members: [
        { name: "Martim Matias",      role: "dep-leader", imageSrc: img("ev01/24-25", "martim-matias") },
        { name: "Beatriz Moniz",      role: "member", imageSrc: img("ev01/24-25", "beatriz-moniz") },
        { name: "Carlos Barbosa",     role: "member", imageSrc: img("ev01/24-25", "carlos-barbosa") },
        { name: "Joaquim Nascimento", role: "member", imageSrc: img("ev01/24-25", "joaquim-nascimento") },
        { name: "Pedro Fidalgo",      role: "member", imageSrc: img("ev01/24-25", "pedro-fidalgo") },
        { name: "Rafael Jordão",      role: "member", imageSrc: img("ev01/24-25", "rafael-jordao") },
      ],
    },
    {
      title: "vehicle-dynamics",
      members: [
        { name: "Gonçalo Ribeiro",   role: "dep-leader", imageSrc: img("ev01/24-25", "goncalo-ribeiro") },
        { name: "André Amorim",      role: "member", imageSrc: img("ev01/24-25", "andre-amorim") },
        { name: "José Paúl Marques", role: "member", imageSrc: img("ev01/24-25", "jose-paul-marques") },
        { name: "Tiago Santos",     role: "member", imageSrc: img("ev01/24-25", "tiago-santos") },
      ],
    },
    {
      title: "suspension",
      members: [
        { name: "Gonçalo Coelho",   role: "dep-leader", imageSrc: img("ev01/24-25", "goncalo-coelho") },
        { name: "Vasco Louro",      role: "dep-leader", imageSrc: img("ev01/24-25", "vasco-louro") },
        { name: "Guilherme Faria",  role: "member", imageSrc: img("ev01/24-25", "guilherme-faria") },
        { name: "Guilherme Gamito", role: "member", imageSrc: img("ev01/24-25", "guilherme-gamito") },
        { name: "João Barroso",     role: "member", imageSrc: img("ev01/24-25", "joao-barroso") },
        { name: "João Carvalho",    role: "member", imageSrc: img("ev01/24-25", "joao-carvalho") },
        { name: "Pedro Marçal",     role: "member", imageSrc: img("ev01/24-25", "pedro-marcal") },
        { name: "Pedro Marques",    role: "member", imageSrc: img("ev01/24-25", "pedro-marques") },
        { name: "Ricardo Ferreira", role: "member", imageSrc: img("ev01/24-25", "ricardo-ferreira") },
      ],
    },
    {
      title: "electronics",
      members: [
        { name: "Miguel Caldeirinha",  role: "dep-leader", imageSrc: img("ev01/24-25", "miguel-caldeirinha") },
        { name: "Frederico Henriques", role: "member", imageSrc: img("ev01/24-25", "frederico-henriques") },
        { name: "João André Rato",     role: "member", imageSrc: img("ev01/24-25", "joao-andre-rato") },
        { name: "Rafael Fortes",       role: "member", imageSrc: img("ev01/24-25", "rafael-fortes") },
      ],
    },
    {
      title: "software-control",
      members: [
        { name: "João Garcia",      role: "dep-leader", imageSrc: img("ev01/24-25", "joao-garcia") },
        { name: "André Lopes",      role: "member", imageSrc: img("ev01/24-25", "andre-lopes") },
        { name: "Jaime Ferreira",   role: "member", imageSrc: img("ev01/24-25", "jaime-ferreira") },
        { name: "Miguel Torres",    role: "member", imageSrc: img("ev01/24-25", "miguel-torres") },
        { name: "Rodrigo Bugalhão", role: "member", imageSrc: img("ev01/24-25", "rodrigo-bugalhao") },
        { name: "Tiago Mega",       role: "member", imageSrc: img("ev01/24-25", "tiago-mega") },
        { name: "Tomás Pedreira",   role: "member", imageSrc: img("ev01/24-25", "tomas-pedreira") },
      ],
    },
    {
      title: "powertrain",
      members: [
        { name: "João Cabral",         role: "dep-leader", imageSrc: img("ev01/24-25", "joao-cabral") },
        { name: "Carolina Patrão",     role: "member", imageSrc: img("ev01/24-25", "carolina-patrao") },
        { name: "David Amaral",        role: "member", imageSrc: img("ev01/24-25", "david-amaral") },
        { name: "Diogo Casaleiro",     role: "member", imageSrc: img("ev01/24-25", "diogo-casaleiro") },
        { name: "Diogo Ferreira",      role: "member", imageSrc: img("ev01/24-25", "diogo-ferreira") },
        { name: "Duarte Esguedelhado", role: "member", imageSrc: img("ev01/24-25", "duarte-esguedelhado") },
        { name: "Inês Monteiro",       role: "member", imageSrc: img("ev01/24-25", "ines-monteiro") },
        { name: "Lourenço Matias",     role: "member", imageSrc: img("ev01/24-25", "lourenco-matias") },
        { name: "Ricardo Cascais",     role: "member", imageSrc: img("ev01/24-25", "ricardo-cascais") },
        { name: "Rodrigo Mendão",      role: "member", imageSrc: img("ev01/24-25", "rodrigo-mendao") },
        { name: "Simão Narciso",       role: "member", imageSrc: img("ev01/24-25", "simao-narciso") },
      ],
    },
    {
      title: "marketing",
      members: [
        { name: "Rita Mendes",      role: "dep-leader", imageSrc: img("ev01/24-25", "rita-mendes") },
        { name: "António Oliveira", role: "member", imageSrc: img("ev01/24-25", "antonio-oliveira") },
        { name: "Daniel Nunes",     role: "member", imageSrc: img("ev01/24-25", "daniel-nunes") },
        { name: "Diogo Gouveia",    role: "member", imageSrc: img("ev01/24-25", "diogo-gouveia") },
        { name: "Mariana Neves",    role: "member", imageSrc: img("ev01/24-25", "mariana-neves") },
        { name: "Pedro Matos",      role: "member", imageSrc: img("ev01/24-25", "pedro-matos") },
        { name: "Tomás Pratas",     role: "member", imageSrc: img("ev01/24-25", "tomas-pratas") },
      ],
    },
    {
      title: "logistics",
      members: [
        { name: "Maria Borges",       role: "dep-leader", imageSrc: img("ev01/24-25", "maria-borges") },
        { name: "Diogo Algarvio",     role: "member", imageSrc: img("ev01/24-25", "diogo-algarvio") },
        { name: "Gabriela Gonçalves", role: "member", imageSrc: img("ev01/24-25", "gabriela-goncalves") },
        { name: "Lourenço Lopes",     role: "member", imageSrc: img("ev01/24-25", "lourenco-lopes") },
        { name: "Madalena Silva",     role: "member", imageSrc: img("ev01/24-25", "madalena-silva") },
        { name: "Mariana Ribeiro",    role: "member", imageSrc: img("ev01/24-25", "mariana-ribeiro") },
        { name: "Simão Antunes",      role: "member", imageSrc: img("ev01/24-25", "simao-antunes") },
        { name: "Vitor Raimundo",     role: "member", imageSrc: img("ev01/24-25", "vitor-raimundo") },
      ],
    },
    {
      title: "operations",
      members: [
        { name: "Carmo Cadilha",       role: "dep-leader", imageSrc: img("ev01/24-25", "carmo-cadilha") },
        { name: "César Martinho",      role: "member", imageSrc: img("ev01/24-25", "cesar-martinho") },
        { name: "Inês Henriques",      role: "member", imageSrc: img("ev01/24-25", "ines-henriques") },
        { name: "Maria Beatriz Romão", role: "member", imageSrc: img("ev01/24-25", "maria-beatriz-romao") },
        { name: "Simão Correia",       role: "member", imageSrc: img("ev01/24-25", "simao-correia") },
      ],
    },
    {
      title: "corporate-relations",
      members: [
        { name: "Martim Costa",        role: "dep-leader", imageSrc: img("ev01/24-25", "martim-costa") },
        { name: "Duarte Amaral",       role: "member", imageSrc: img("ev01/24-25", "duarte-amaral") },
        { name: "Enzo Moreira",        role: "member", imageSrc: img("ev01/24-25", "enzo-moreira") },
        { name: "Henrique Cid",        role: "member", imageSrc: img("ev01/24-25", "henrique-cid") },
        { name: "Maria Leonor Viegas", role: "member", imageSrc: img("ev01/24-25", "maria-leonor-viegas") },
        { name: "Sofia Cruz",          role: "member", imageSrc: img("ev01/24-25", "sofia-cruz") },
        { name: "Tomás Sousa",         role: "member", imageSrc: img("ev01/24-25", "tomas-sousa") },
        { name: "Vasco Gouveia",       role: "member", imageSrc: img("ev01/24-25", "vasco-gouveia") },
      ],
    },
  ],
};

/* ============================================================
   NOVA EV01 — 25/26
   ============================================================ */
const ev01_2526: TeamSeason = {
  seasonLabel: "25/26",
  groups: [
    {
      title: "board",
      members: [
        { name: "Martim Costa",   role: "team-leader", imageSrc: img("ev01/25-26", "martim-costa") },
        { name: "Afonso Dinis",   role: "technical-director", imageSrc: img("ev01/25-26", "afonso-dinis") },
        { name: "Martim Matias",  role: "technical-director", imageSrc: img("ev01/25-26", "martim-matias") },
        { name: "Carmo Cadilha",  role: "project-manager", imageSrc: img("ev01/25-26", "carmo-cadilha") },
        { name: "Simão Correia",  role: "strategy-finance-director", imageSrc: img("ev01/25-26", "simao-correia") },
      ],
    },
    {
      title: "aerodynamics",
      members: [
        { name: "Mário Fonseca",       role: "dep-leader", imageSrc: img("ev01/25-26", "mario-fonseca") },
        { name: "Alexandre Rusu",      role: "member", imageSrc: img("ev01/25-26", "alexandre-rusu") },
        { name: "Francisco Rodrigues", role: "member", imageSrc: img("ev01/25-26", "francisco-rodrigues") },
        { name: "José Tavares",        role: "member", imageSrc: img("ev01/25-26", "jose-tavares") },
        { name: "Miguel Lourenço",     role: "member", imageSrc: img("ev01/25-26", "miguel-lourenco") },
        { name: "Tomás Pinto",         role: "member", imageSrc: img("ev01/25-26", "tomas-pinto") },
      ],
    },
    {
      title: "chassis",
      members: [
        { name: "Martim Matias",      role: "dep-leader", imageSrc: img("ev01/25-26", "martim-matias") },
        { name: "Carlos Barbosa",     role: "member", imageSrc: img("ev01/25-26", "carlos-barbosa") },
        { name: "Joaquim Nascimento", role: "member", imageSrc: img("ev01/25-26", "joaquim-nascimento") },
        { name: "Pedro Fidalgo",      role: "member", imageSrc: img("ev01/25-26", "pedro-fidalgo") },
        { name: "Rafael Jordão",      role: "member", imageSrc: img("ev01/25-26", "rafael-jordao") },
      ],
    },
    {
      title: "vehicle-dynamics",
      members: [
        { name: "Tiago Santos",     role: "dep-leader", imageSrc: img("ev01/25-26", "tiago-santos") },
        { name: "Diogo Filipe",      role: "member", imageSrc: img("ev01/25-26", "diogo-filipe") },
        { name: "Francisco Almeida", role: "member", imageSrc: img("ev01/25-26", "francisco-almeida") },
        { name: "Tiago Alves",       role: "member", imageSrc: img("ev01/25-26", "tiago-alves") },
        { name: "Tiago Valadas",     role: "member", imageSrc: img("ev01/25-26", "tiago-valadas") },
      ],
    },
    {
      title: "suspension",
      members: [
        { name: "João Xisto",      role: "dep-leader", imageSrc: img("ev01/25-26", "joao-xisto") },
        { name: "Gonçalo Correia", role: "member", imageSrc: img("ev01/25-26", "goncalo-correia") },
        { name: "Guilherme Faria", role: "member", imageSrc: img("ev01/25-26", "guilherme-faria") },
        { name: "João Barroso",    role: "member", imageSrc: img("ev01/25-26", "joao-barroso") },
        { name: "Ricardo Ferreira",role: "member", imageSrc: img("ev01/25-26", "ricardo-ferreira") },
        { name: "Simão Cruz",      role: "member", imageSrc: img("ev01/25-26", "simao-cruz") },
      ],
    },
    {
      title: "electronics",
      members: [
        { name: "Bernardo Carmona",    role: "dep-leader", imageSrc: img("ev01/25-26", "bernardo-carmona") },
        { name: "André Dimas",         role: "member", imageSrc: img("ev01/25-26", "andre-dimas") },
        { name: "Frederico Henriques", role: "member", imageSrc: img("ev01/25-26", "frederico-henriques") },
        { name: "João Garcia",         role: "member", imageSrc: img("ev01/25-26", "joao-garcia") },
        { name: "Miguel Torres",       role: "member", imageSrc: img("ev01/25-26", "miguel-torres") },
        { name: "Rafael Fortes",       role: "member", imageSrc: img("ev01/25-26", "rafael-fortes") },
        { name: "Tiago Mega",          role: "member", imageSrc: img("ev01/25-26", "tiago-mega") },
      ],
    },
    {
      title: "driverless",
      members: [
        { name: "Jaime Ferreira",   role: "dep-leader", imageSrc: img("ev01/25-26", "jaime-ferreira") },
        { name: "Dinis Dashkevych", role: "member", imageSrc: img("ev01/25-26", "dinis-dashkevych") },
        { name: "João Barata",      role: "member", imageSrc: img("ev01/25-26", "joao-barata") },
        { name: "Tarik Tuna",       role: "member", imageSrc: img("ev01/25-26", "tarik-tuna") },
      ],
    },
    {
      title: "e-powertrain",
      members: [
        { name: "David Amaral",    role: "dep-leader", imageSrc: img("ev01/25-26", "david-amaral") },
        { name: "Lourenço Matias", role: "member", imageSrc: img("ev01/25-26", "lourenco-matias") },
        { name: "Simão Narciso",   role: "member", imageSrc: img("ev01/25-26", "simao-narciso") },
        { name: "Tomás Martinho",  role: "member", imageSrc: img("ev01/25-26", "tomas-martinho") },
        { name: "Wang Nuo",        role: "member", imageSrc: img("ev01/25-26", "wang-nuo") },
      ],
    },
    {
      title: "m-powertrain",
      members: [
        { name: "João Cabral",     role: "dep-leader", imageSrc: img("ev01/25-26", "joao-cabral") },
        { name: "Carolina Patrão", role: "member", imageSrc: img("ev01/25-26", "carolina-patrao") },
        { name: "Diogo Casaleiro", role: "member", imageSrc: img("ev01/25-26", "diogo-casaleiro") },
        { name: "Diogo Ferreira",  role: "member", imageSrc: img("ev01/25-26", "diogo-ferreira") },
        { name: "Guilherme Duarte",role: "member", imageSrc: img("ev01/25-26", "guilherme-duarte") },
      ],
    },
    {
      title: "marketing",
      members: [
        { name: "Rita Mendes",   role: "dep-leader", imageSrc: img("ev01/25-26", "rita-mendes") },
        { name: "João Lourenço", role: "member", imageSrc: img("ev01/25-26", "joao-lourenco") },
        { name: "Lucia Barbosa", role: "member", imageSrc: img("ev01/25-26", "lucia-barbosa") },
        { name: "Mariana Neves", role: "member", imageSrc: img("ev01/25-26", "mariana-neves") },
      ],
    },
    {
      title: "logistics",
      members: [
        { name: "Maria Borges",   role: "dep-leader", imageSrc: img("ev01/25-26", "maria-borges") },
        { name: "Lourenço Lopes", role: "member", imageSrc: img("ev01/25-26", "lourenco-lopes") },
        { name: "Simão Antunes",  role: "member", imageSrc: img("ev01/25-26", "simao-antunes") },
      ],
    },
    {
      title: "production",
      members: [
        { name: "Mariana Inácio",     role: "dep-leader", imageSrc: img("ev01/25-26", "mariana-inacio") },
        { name: "César Martinho",     role: "member", imageSrc: img("ev01/25-26", "cesar-martinho") },
        { name: "Francisco Antunes",  role: "member", imageSrc: img("ev01/25-26", "francisco-antunes") },
        { name: "Maria Beatriz Romão",role: "cost", imageSrc: img("ev01/25-26", "maria-beatriz-romao") },
        { name: "Sara Martins",       role: "member", imageSrc: img("ev01/25-26", "sara-martins") },
      ],
    },
    {
      title: "sponsoring",
      members: [
        { name: "Barbara Matos", role: "member", imageSrc: img("ev01/25-26", "barbara-matos") },
        { name: "Henrique Cid",  role: "member", imageSrc: img("ev01/25-26", "henrique-cid") },
        { name: "Mariana Meira", role: "member", imageSrc: img("ev01/25-26", "mariana-meira") },
      ],
    },
  ],
};

/* ============================================================
   FS FENIX EVO — 23/24
   (originally labelled 24/25 in the old codebase)
   ============================================================ */
const fenixEvo_2324: TeamSeason = {
  seasonLabel: "23/24",
  groups: [
    {
      title: "board",
      members: [
        { name: "Mariana Santos",  role: "team-leader", imageSrc: img("fenixevo/23-24", "mariana-santos") },
        { name: "Diogo Peixe",     role: "team-leader", imageSrc: img("fenixevo/23-24", "diogo-peixe") },
        { name: "Afonso Dinis",    role: "technical-director", imageSrc: img("fenixevo/23-24", "afonso-dinis") },
        { name: "Mariana Inácio",  role: "project-manager", imageSrc: img("fenixevo/23-24", "mariana-inacio") },
        { name: "João Balbino",    role: "finance", imageSrc: img("fenixevo/23-24", "joao-balbino") },
      ],
    },
    {
      title: "aerodynamics",
      members: [
        { name: "Ângela Rodrigues",    role: "member", imageSrc: img("fenixevo/23-24", "angela-rodrigues") },
        { name: "Cristiano Almeida",   role: "member", imageSrc: img("fenixevo/23-24", "cristiano-almeida") },
        { name: "Francisco Rodrigues", role: "member", imageSrc: img("fenixevo/23-24", "francisco-rodrigues") },
        { name: "Mário Fonseca",       role: "member", imageSrc: img("fenixevo/23-24", "mario-fonseca") },
        { name: "Miguel Lourenço",     role: "member", imageSrc: img("fenixevo/23-24", "miguel-lourenco") },
        { name: "Tomás Pinto",         role: "member", imageSrc: img("fenixevo/23-24", "tomas-pinto") },
      ],
    },
    {
      title: "chassis",
      members: [
        { name: "Martim Matias",      role: "dep-leader", imageSrc: img("fenixevo/23-24", "martim-matias") },
        { name: "Beatriz Moniz",      role: "member", imageSrc: img("fenixevo/23-24", "beatriz-moniz") },
        { name: "Carlos Barbosa",     role: "member", imageSrc: img("fenixevo/23-24", "carlos-barbosa") },
        { name: "Joaquim Nascimento", role: "member", imageSrc: img("fenixevo/23-24", "joaquim-nascimento") },
        { name: "Pedro Fidalgo",      role: "member", imageSrc: img("fenixevo/23-24", "pedro-fidalgo") },
        { name: "Rafael Jordão",      role: "member", imageSrc: img("fenixevo/23-24", "rafael-jordao") },
      ],
    },
    {
      title: "vehicle-dynamics",
      members: [
        { name: "Gonçalo Ribeiro",   role: "dep-leader", imageSrc: img("fenixevo/23-24", "goncalo-ribeiro") },
        { name: "André Amorim",      role: "member", imageSrc: img("fenixevo/23-24", "andre-amorim") },
        { name: "José Paúl Marques", role: "member", imageSrc: img("fenixevo/23-24", "jose-paul-marques") },
        { name: "Tiago Santos",     role: "member", imageSrc: img("fenixevo/23-24", "tiago-santos") },
      ],
    },
    {
      title: "suspension",
      members: [
        { name: "Gonçalo Coelho",   role: "dep-leader", imageSrc: img("fenixevo/23-24", "goncalo-coelho") },
        { name: "Vasco Louro",      role: "dep-leader", imageSrc: img("fenixevo/23-24", "vasco-louro") },
        { name: "Guilherme Faria",  role: "member", imageSrc: img("fenixevo/23-24", "guilherme-faria") },
        { name: "Guilherme Gamito", role: "member", imageSrc: img("fenixevo/23-24", "guilherme-gamito") },
        { name: "João Barroso",     role: "member", imageSrc: img("fenixevo/23-24", "joao-barroso") },
        { name: "João Carvalho",    role: "member", imageSrc: img("fenixevo/23-24", "joao-carvalho") },
        { name: "Pedro Marçal",     role: "member", imageSrc: img("fenixevo/23-24", "pedro-marcal") },
        { name: "Pedro Marques",    role: "member", imageSrc: img("fenixevo/23-24", "pedro-marques") },
        { name: "Ricardo Ferreira", role: "member", imageSrc: img("fenixevo/23-24", "ricardo-ferreira") },
      ],
    },
    {
      title: "electronics",
      members: [
        { name: "Miguel Caldeirinha",  role: "dep-leader", imageSrc: img("fenixevo/23-24", "miguel-caldeirinha") },
        { name: "Bernardo Carmona",    role: "member", imageSrc: img("fenixevo/23-24", "bernardo-carmona") },
        { name: "Frederico Henriques", role: "member", imageSrc: img("fenixevo/23-24", "frederico-henriques") },
        { name: "João André Rato",     role: "member", imageSrc: img("fenixevo/23-24", "joao-andre-rato") },
        { name: "Rafael Fortes",       role: "member", imageSrc: img("fenixevo/23-24", "rafael-fortes") },
      ],
    },
    {
      title: "software-control",
      members: [
        { name: "Gonçalo Correia",   role: "dep-leader", imageSrc: img("fenixevo/23-24", "goncalo-correia") },
        { name: "João Garcia",       role: "dep-leader", imageSrc: img("fenixevo/23-24", "joao-garcia") },
        { name: "André Lopes",       role: "member", imageSrc: img("fenixevo/23-24", "andre-lopes") },
        { name: "Frederico Firmino", role: "member", imageSrc: img("fenixevo/23-24", "frederico-firmino") },
        { name: "Jaime Ferreira",    role: "member", imageSrc: img("fenixevo/23-24", "jaime-ferreira") },
        { name: "Miguel Torres",     role: "member", imageSrc: img("fenixevo/23-24", "miguel-torres") },
        { name: "Rodrigo Bugalhão",  role: "member", imageSrc: img("fenixevo/23-24", "rodrigo-bugalhao") },
        { name: "Tiago Mega",        role: "member", imageSrc: img("fenixevo/23-24", "tiago-mega") },
        { name: "Tomás Pedreira",    role: "member", imageSrc: img("fenixevo/23-24", "tomas-pedreira") },
      ],
    },
    {
      title: "powertrain",
      members: [
        { name: "David Amaral",        role: "dep-leader", imageSrc: img("fenixevo/23-24", "david-amaral") },
        { name: "João Cabral",         role: "dep-leader", imageSrc: img("fenixevo/23-24", "joao-cabral") },
        { name: "Carolina Patrão",     role: "member", imageSrc: img("fenixevo/23-24", "carolina-patrao") },
        { name: "Diogo Casaleiro",     role: "member", imageSrc: img("fenixevo/23-24", "diogo-casaleiro") },
        { name: "Diogo Ferreira",      role: "member", imageSrc: img("fenixevo/23-24", "diogo-ferreira") },
        { name: "Duarte Esguedelhado", role: "member", imageSrc: img("fenixevo/23-24", "duarte-esguedelhado") },
        { name: "Guilherme Duarte",    role: "member", imageSrc: img("fenixevo/23-24", "guilherme-duarte") },
        { name: "Inês Monteiro",       role: "member", imageSrc: img("fenixevo/23-24", "ines-monteiro") },
        { name: "Lourenço Matias",     role: "member", imageSrc: img("fenixevo/23-24", "lourenco-matias") },
        { name: "Ricardo Cascais",     role: "member", imageSrc: img("fenixevo/23-24", "ricardo-cascais") },
        { name: "Rodrigo Mendão",      role: "member", imageSrc: img("fenixevo/23-24", "rodrigo-mendao") },
        { name: "Simão Narciso",       role: "member", imageSrc: img("fenixevo/23-24", "simao-narciso") },
        { name: "Tomás Martinho",      role: "member", imageSrc: img("fenixevo/23-24", "tomas-martinho") },
        { name: "Wang Nuo",            role: "member", imageSrc: img("fenixevo/23-24", "wang-nuo") },
      ],
    },
    {
      title: "marketing",
      members: [
        { name: "Rita Mendes",      role: "dep-leader", imageSrc: img("fenixevo/23-24", "rita-mendes") },
        { name: "Antonio Oliveira", role: "member", imageSrc: img("fenixevo/23-24", "antonio-oliveira") },
        { name: "Daniel Nunes",     role: "member", imageSrc: img("fenixevo/23-24", "daniel-nunes") },
        { name: "Diogo Gouveia",    role: "member", imageSrc: img("fenixevo/23-24", "diogo-gouveia") },
        { name: "Mariana Neves",    role: "member", imageSrc: img("fenixevo/23-24", "mariana-neves") },
        { name: "Pedro Matos",      role: "member", imageSrc: img("fenixevo/23-24", "pedro-matos") },
        { name: "Tomás Pratas",     role: "member", imageSrc: img("fenixevo/23-24", "tomas-pratas") },
      ],
    },
    {
      title: "logistics",
      members: [
        { name: "Maria Borges",       role: "dep-leader", imageSrc: img("fenixevo/23-24", "maria-borges") },
        { name: "Diogo Algarvio",     role: "member", imageSrc: img("fenixevo/23-24", "diogo-algarvio") },
        { name: "Gabriela Gonçalves", role: "member", imageSrc: img("fenixevo/23-24", "gabriela-goncalves") },
        { name: "Lourenço Lopes",     role: "member", imageSrc: img("fenixevo/23-24", "lourenco-lopes") },
        { name: "Madalena Silva",     role: "member", imageSrc: img("fenixevo/23-24", "madalena-silva") },
        { name: "Mariana Ribeiro",    role: "member", imageSrc: img("fenixevo/23-24", "mariana-ribeiro") },
        { name: "Simão Antunes",      role: "member", imageSrc: img("fenixevo/23-24", "simao-antunes") },
        { name: "Vitor Raimundo",     role: "member", imageSrc: img("fenixevo/23-24", "vitor-raimundo") },
      ],
    },
    {
      title: "operations",
      members: [
        { name: "Carmo Cadilha",       role: "dep-leader", imageSrc: img("fenixevo/23-24", "carmo-cadilha") },
        { name: "César Martinho",      role: "member", imageSrc: img("fenixevo/23-24", "cesar-martinho") },
        { name: "Inês Henriques",      role: "member", imageSrc: img("fenixevo/23-24", "ines-henriques") },
        { name: "Maria Beatriz Romão", role: "member", imageSrc: img("fenixevo/23-24", "maria-beatriz-romao") },
        { name: "Simão Correia",       role: "member", imageSrc: img("fenixevo/23-24", "simao-correia") },
      ],
    },
    {
      title: "corporate-relations",
      members: [
        { name: "Martim Costa",        role: "dep-leader", imageSrc: img("fenixevo/23-24", "martim-costa") },
        { name: "Duarte Amaral",       role: "member", imageSrc: img("fenixevo/23-24", "duarte-amaral") },
        { name: "Enzo Moreira",        role: "member", imageSrc: img("fenixevo/23-24", "enzo-moreira") },
        { name: "Henrique Cid",        role: "member", imageSrc: img("fenixevo/23-24", "henrique-cid") },
        { name: "Maria Leonor Viegas", role: "member", imageSrc: img("fenixevo/23-24", "maria-leonor-viegas") },
        { name: "Sofia Cruz",          role: "member", imageSrc: img("fenixevo/23-24", "sofia-cruz") },
        { name: "Tomás Sousa",         role: "member", imageSrc: img("fenixevo/23-24", "tomas-sousa") },
        { name: "Vasco Gouveia",       role: "member", imageSrc: img("fenixevo/23-24", "vasco-gouveia") },
      ],
    },
  ],
};

/* ============================================================
   FS FENIX EVO — 24/25
   (originally labelled 25/26 in the old codebase)
   ============================================================ */
const fenixEvo_2425: TeamSeason = {
  seasonLabel: "24/25",
  groups: [
    {
      title: "board",
      members: [
        { name: "Martim Costa",  role: "team-leader", imageSrc: img("fenixevo/24-25", "martim-costa") },
        { name: "Afonso Dinis",  role: "technical-director", imageSrc: img("fenixevo/24-25", "afonso-dinis") },
        { name: "Martim Matias", role: "technical-director", imageSrc: img("fenixevo/24-25", "martim-matias") },
        { name: "Carmo Cadilha", role: "project-manager", imageSrc: img("fenixevo/24-25", "carmo-cadilha") },
        { name: "Simão Correia", role: "strategy-finance-director", imageSrc: img("fenixevo/24-25", "simao-correia") },
      ],
    },
    {
      title: "aerodynamics",
      members: [
        { name: "Mário Fonseca",       role: "dep-leader", imageSrc: img("fenixevo/24-25", "mario-fonseca") },
        { name: "Alexandre Rusu",      role: "member", imageSrc: img("fenixevo/24-25", "alexandre-rusu") },
        { name: "Diogo Peixe",         role: "member", imageSrc: img("fenixevo/24-25", "diogo-peixe") },
        { name: "Francisco Rodrigues", role: "member", imageSrc: img("fenixevo/24-25", "francisco-rodrigues") },
        { name: "José Tavares",        role: "member", imageSrc: img("fenixevo/24-25", "jose-tavares") },
        { name: "Miguel Lourenço",     role: "member", imageSrc: img("fenixevo/24-25", "miguel-lourenco") },
        { name: "Tomás Pinto",         role: "member", imageSrc: img("fenixevo/24-25", "tomas-pinto") },
      ],
    },
    {
      title: "chassis",
      members: [
        { name: "Martim Matias",      role: "dep-leader", imageSrc: img("fenixevo/24-25", "martim-matias") },
        { name: "Carlos Barbosa",     role: "member", imageSrc: img("fenixevo/24-25", "carlos-barbosa") },
        { name: "Joaquim Nascimento", role: "member", imageSrc: img("fenixevo/24-25", "joaquim-nascimento") },
        { name: "Pedro Fidalgo",      role: "member", imageSrc: img("fenixevo/24-25", "pedro-fidalgo") },
        { name: "Rafael Jordão",      role: "member", imageSrc: img("fenixevo/24-25", "rafael-jordao") },
      ],
    },
    {
      title: "vehicle-dynamics",
      members: [
        { name: "Tiago Santos",     role: "dep-leader", imageSrc: img("fenixevo/24-25", "tiago-santos") },
        { name: "Diogo Filipe",      role: "member", imageSrc: img("fenixevo/24-25", "diogo-filipe") },
        { name: "Francisco Almeida", role: "member", imageSrc: img("fenixevo/24-25", "francisco-almeida") },
        { name: "Tiago Alves",       role: "member", imageSrc: img("fenixevo/24-25", "tiago-alves") },
        { name: "Tiago Valadas",     role: "member", imageSrc: img("fenixevo/24-25", "tiago-valadas") },
      ],
    },
    {
      title: "suspension",
      members: [
        { name: "Gonçalo Correia", role: "member", imageSrc: img("fenixevo/24-25", "goncalo-correia") },
        { name: "Guilherme Faria", role: "member", imageSrc: img("fenixevo/24-25", "guilherme-faria") },
        { name: "João Barroso",    role: "member", imageSrc: img("fenixevo/24-25", "joao-barroso") },
        { name: "João Xisto",      role: "member", imageSrc: img("fenixevo/24-25", "joao-xisto") },
        { name: "Ricardo Ferreira",role: "member", imageSrc: img("fenixevo/24-25", "ricardo-ferreira") },
        { name: "Simão Cruz",      role: "member", imageSrc: img("fenixevo/24-25", "simao-cruz") },
      ],
    },
    {
      title: "electronics",
      members: [
        { name: "Bernardo Carmona",    role: "dep-leader", imageSrc: img("fenixevo/24-25", "bernardo-carmona") },
        { name: "André Dimas",         role: "member", imageSrc: img("fenixevo/24-25", "andre-dimas") },
        { name: "Frederico Henriques", role: "member", imageSrc: img("fenixevo/24-25", "frederico-henriques") },
        { name: "João Garcia",         role: "member", imageSrc: img("fenixevo/24-25", "joao-garcia") },
        { name: "Miguel Torres",       role: "member", imageSrc: img("fenixevo/24-25", "miguel-torres") },
        { name: "Rafael Fortes",       role: "member", imageSrc: img("fenixevo/24-25", "rafael-fortes") },
        { name: "Tiago Mega",          role: "member", imageSrc: img("fenixevo/24-25", "tiago-mega") },
      ],
    },
    {
      title: "powertrain",
      members: [
        { name: "David Amaral",    role: "dep-leader", imageSrc: img("fenixevo/24-25", "david-amaral") },
        { name: "João Cabral",     role: "dep-leader", imageSrc: img("fenixevo/24-25", "joao-cabral") },
        { name: "Carolina Patrão", role: "member", imageSrc: img("fenixevo/24-25", "carolina-patrao") },
        { name: "Diogo Casaleiro", role: "member", imageSrc: img("fenixevo/24-25", "diogo-casaleiro") },
        { name: "Diogo Ferreira",  role: "member", imageSrc: img("fenixevo/24-25", "diogo-ferreira") },
        { name: "Guilherme Duarte",role: "member", imageSrc: img("fenixevo/24-25", "guilherme-duarte") },
        { name: "Lourenço Matias", role: "member", imageSrc: img("fenixevo/24-25", "lourenco-matias") },
        { name: "Simão Narciso",   role: "member", imageSrc: img("fenixevo/24-25", "simao-narciso") },
        { name: "Tomás Martinho",  role: "member", imageSrc: img("fenixevo/24-25", "tomas-martinho") },
        { name: "Wang Nuo",        role: "member", imageSrc: img("fenixevo/24-25", "wang-nuo") },
      ],
    },
    {
      title: "marketing",
      members: [
        { name: "Rita Mendes",   role: "dep-leader", imageSrc: img("fenixevo/24-25", "rita-mendes") },
        { name: "João Lourenço", role: "member", imageSrc: img("fenixevo/24-25", "joao-lourenco") },
        { name: "Lucia Barbosa", role: "member", imageSrc: img("fenixevo/24-25", "lucia-barbosa") },
        { name: "Mariana Neves", role: "member", imageSrc: img("fenixevo/24-25", "mariana-neves") },
      ],
    },
    {
      title: "logistics",
      members: [
        { name: "Maria Borges",   role: "dep-leader", imageSrc: img("fenixevo/24-25", "maria-borges") },
        { name: "Lourenço Lopes", role: "member", imageSrc: img("fenixevo/24-25", "lourenco-lopes") },
        { name: "Simão Antunes",  role: "member", imageSrc: img("fenixevo/24-25", "simao-antunes") },
      ],
    },
    {
      title: "production",
      members: [
        { name: "Mariana Inácio",     role: "dep-leader", imageSrc: img("fenixevo/24-25", "mariana-inacio") },
        { name: "César Martinho",     role: "member", imageSrc: img("fenixevo/24-25", "cesar-martinho") },
        { name: "Francisco Antunes",  role: "member", imageSrc: img("fenixevo/24-25", "francisco-antunes") },
        { name: "Maria Beatriz Romão",role: "cost", imageSrc: img("fenixevo/24-25", "maria-beatriz-romao") },
        { name: "Sara Martins",       role: "member", imageSrc: img("fenixevo/24-25", "sara-martins") },
      ],
    },
    {
      title: "sponsoring",
      members: [
        { name: "Ana Reis",      role: "member", imageSrc: img("fenixevo/24-25", "ana-reis") },
        { name: "Barbara Matos", role: "member", imageSrc: img("fenixevo/24-25", "barbara-matos") },
        { name: "Henrique Cid",  role: "member", imageSrc: img("fenixevo/24-25", "henrique-cid") },
        { name: "Mariana Meira", role: "member", imageSrc: img("fenixevo/24-25", "mariana-meira") },
      ],
    },
  ],
};

/* ============================================================
   FS DRAGON — 2019
   ============================================================ */
const dragon_2019: TeamSeason = {
  seasonLabel: "2019",
  groups: [
    {
      title: "board",
      members: [
        { name: "João Fernandes", role: "team-leader" },
        { name: "Guilherme Costa", role: "technical-director" },
      ],
    },
    {
      title: "aerodynamics",
      members: [
        { name: "Francisco Rodrigues", role: "dep-leader" },
        { name: "Beatriz Simões", role: "member" },
        { name: "Rafael Nunes", role: "member" },
        { name: "Ricardo Cutileiro", role: "member" },
      ],
    },
    {
      title: "chassis_dynamics",
      members: [
        { name: "João Fernandes", role: "dep-leader" },
        { name: "António Figueiredo", role: "member" },
        { name: "Hugo Grilo", role: "member" },
        { name: "João Balbino", role: "member" },
      ],
    },
    {
      title: "electronics",
      members: [
        { name: "Frederico Inácio", role: "dep-leader" },
        { name: "Sergiu Nica", role: "member" },
        { name: "Daniel Sousa", role: "member" },
        { name: "Gustavo Raio", role: "member" },
        { name: "Jorge Ferreira", role: "member" },
        { name: "Ruben Vaz", role: "member" },
        { name: "Tiago Mega", role: "member" },
      ],
    },
    {
      title: "powertrain",
      members: [
        { name: "António Ferreira", role: "dep-leader" },
        { name: "Gonçalo Correia", role: "member" },
        { name: "Fabio Santos", role: "member" },
        { name: "João Botelho", role: "member" },
      ],
    },
    {
      title: "marketing",
      members: [
        { name: "Isabel Botelho", role: "dep-leader" },
        { name: "Pedro Botelho", role: "member" },
        { name: "Tiago Soares", role: "member" },
        { name: "Mafalda Pinto", role: "member" },
        { name: "José Lima", role: "member" },
        { name: "Rodrigo Alegria", role: "member" },
        { name: "Bernardo Santos", role: "member" },
        { name: "Pedro Trindade", role: "member" },
        { name: "João Domingues", role: "member" },
      ],
    },
    {
      title: "corporate-relations",
      members: [
        { name: "Isabel Botelho", role: "dep-leader" },
        { name: "Pedro Botelho", role: "member" },
        { name: "Tiago Soares", role: "member" },
        { name: "Mafalda Pinto", role: "member" },
        { name: "José Lima", role: "member" },
        { name: "Rodrigo Alegria", role: "member" },
        { name: "Bernardo Santos", role: "member" },
        { name: "Pedro Trindade", role: "member" },
        { name: "João Domingues", role: "member" },
      ],
    },
  ],
};

export const ev01Teams: TeamSeason[] = [ev01_2425, ev01_2526];
export const fenixEvoTeams: TeamSeason[] = [fenixEvo_2324, fenixEvo_2425];
export const dragonTeams: TeamSeason[] = [dragon_2019];