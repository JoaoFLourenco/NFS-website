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
   NOVA EV01 — 24/25
   ============================================================ */
const ev01_2425: TeamSeason = {
  seasonLabel: "24/25",
  groups: [
    {
      title: "board",
      members: [
        { name: "Mariana Santos",  role: "team-leader" },
        { name: "Diogo Peixe",     role: "team-leader" },
        { name: "Afonso Dinis",    role: "technical-director" },
        { name: "Mariana Inácio",  role: "project-manager" },
        { name: "João Balbino",    role: "finance" },
      ],
    },
    {
      title: "aerodynamics",
      members: [
        { name: "Ângela Rodrigues",    role: "member" },
        { name: "Cristiano Almeida",   role: "member" },
        { name: "Francisco Rodrigues", role: "member" },
        { name: "Mário Fonseca",       role: "member" },
        { name: "Miguel Lourenço",     role: "member" },
        { name: "Tomás Pinto",         role: "member" },
      ],
    },
    {
      title: "chassis",
      members: [
        { name: "Martim Matias",      role: "dep-leader" },
        { name: "Beatriz Moniz",      role: "member" },
        { name: "Carlos Barbosa",     role: "member" },
        { name: "Joaquim Nascimento", role: "member" },
        { name: "Pedro Fidalgo",      role: "member" },
        { name: "Rafael Jordão",      role: "member" },
      ],
    },
    {
      title: "vehicle-dynamics",
      members: [
        { name: "Gonçalo Ribeiro",   role: "dep-leader" },
        { name: "André Amorim",      role: "member" },
        { name: "José Paúl Marques", role: "member" },
        { name: "Manuel Santos",     role: "member" },
      ],
    },
    {
      title: "suspension",
      members: [
        { name: "Gonçalo Coelho",   role: "dep-leader" },
        { name: "Vasco Louro",      role: "dep-leader" },
        { name: "Guilherme Faria",  role: "member" },
        { name: "Guilherme Gamito", role: "member" },
        { name: "João Barroso",     role: "member" },
        { name: "João Carvalho",    role: "member" },
        { name: "Pedro Marçal",     role: "member" },
        { name: "Pedro Marques",    role: "member" },
        { name: "Ricardo Ferreira", role: "member" },
      ],
    },
    {
      title: "electronics",
      members: [
        { name: "Miguel Caldeirinha",  role: "dep-leader" },
        { name: "Frederico Henriques", role: "member" },
        { name: "João André Rato",     role: "member" },
        { name: "Rafael Fortes",       role: "member" },
      ],
    },
    {
      title: "software-control",
      members: [
        { name: "João Garcia",      role: "dep-leader" },
        { name: "André Lopes",      role: "member" },
        { name: "Jaime Ferreira",   role: "member" },
        { name: "Miguel Torres",    role: "member" },
        { name: "Rodrigo Bugalhão", role: "member" },
        { name: "Tiago Mega",       role: "member" },
        { name: "Tomás Pedreira",   role: "member" },
      ],
    },
    {
      title: "powertrain",
      members: [
        { name: "João Cabral",         role: "dep-leader" },
        { name: "Carolina Patrão",     role: "member" },
        { name: "David Amaral",        role: "member" },
        { name: "Diogo Casaleiro",     role: "member" },
        { name: "Diogo Ferreira",      role: "member" },
        { name: "Duarte Esguedelhado", role: "member" },
        { name: "Inês Monteiro",       role: "member" },
        { name: "Lourenço Matias",     role: "member" },
        { name: "Ricardo Cascais",     role: "member" },
        { name: "Rodrigo Mendão",      role: "member" },
        { name: "Simão Narciso",       role: "member" },
      ],
    },
    {
      title: "marketing",
      members: [
        { name: "Rita Mendes",      role: "dep-leader" },
        { name: "Antonio Oliveira", role: "member" },
        { name: "Daniel Nunes",     role: "member" },
        { name: "Diogo Gouveia",    role: "member" },
        { name: "Mariana Neves",    role: "member" },
        { name: "Pedro Matos",      role: "member" },
        { name: "Tomás Pratas",     role: "member" },
      ],
    },
    {
      title: "logistics",
      members: [
        { name: "Maria Borges",       role: "dep-leader" },
        { name: "Diogo Algarvio",     role: "member" },
        { name: "Gabriela Gonçalves", role: "member" },
        { name: "Lourenço Lopes",     role: "member" },
        { name: "Madalena Silva",     role: "member" },
        { name: "Mariana Ribeiro",    role: "member" },
        { name: "Simão Antunes",      role: "member" },
        { name: "Vitor Raimundo",     role: "member" },
      ],
    },
    {
      title: "operations",
      members: [
        { name: "Carmo Cadilha",       role: "dep-leader" },
        { name: "César Martinho",      role: "member" },
        { name: "Inês Henriques",      role: "member" },
        { name: "Maria Beatriz Romão", role: "member" },
        { name: "Simão Correia",       role: "member" },
      ],
    },
    {
      title: "corporate-relations",
      members: [
        { name: "Martim Costa",        role: "dep-leader" },
        { name: "Duarte Amaral",       role: "member" },
        { name: "Enzo Moreira",        role: "member" },
        { name: "Henrique Cid",        role: "member" },
        { name: "Maria Leonor Viegas", role: "member" },
        { name: "Sofia Cruz",          role: "member" },
        { name: "Tomás Sousa",         role: "member" },
        { name: "Vasco Gouveia",       role: "member" },
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
        { name: "Martim Costa",   role: "team-leader" },
        { name: "Afonso Dinis",   role: "technical-director" },
        { name: "Martim Matias",  role: "technical-director" },
        { name: "Carmo Cadilha",  role: "project-manager" },
        { name: "Simão Correia",  role: "strategy-finance-director" },
      ],
    },
    {
      title: "aerodynamics",
      members: [
        { name: "Mário Fonseca",       role: "dep-leader" },
        { name: "Alexandru Rusu",      role: "member" },
        { name: "Diogo Peixe",         role: "member" },
        { name: "Francisco Rodrigues", role: "member" },
        { name: "José Tavares",        role: "member" },
        { name: "Miguel Lourenço",     role: "member" },
        { name: "Tomás Pinto",         role: "member" },
      ],
    },
    {
      title: "chassis",
      members: [
        { name: "Martim Matias",      role: "dep-leader" },
        { name: "Carlos Barbosa",     role: "member" },
        { name: "Joaquim Nascimento", role: "member" },
        { name: "Pedro Fidalgo",      role: "member" },
        { name: "Rafael Jordão",      role: "member" },
      ],
    },
    {
      title: "vehicle-dynamics",
      members: [
        { name: "Manuel Santos",     role: "dep-leader" },
        { name: "Diogo Filipe",      role: "member" },
        { name: "Francisco Almeida", role: "member" },
        { name: "Tiago Alves",       role: "member" },
        { name: "Tiago Valadas",     role: "member" },
      ],
    },
    {
      title: "suspension",
      members: [
        { name: "Gonçalo Correia", role: "member" },
        { name: "Guilherme Faria", role: "member" },
        { name: "João Barroso",    role: "member" },
        { name: "João Xisto",      role: "member" },
        { name: "Ricardo Ferreira",role: "member" },
        { name: "Simão Cruz",      role: "member" },
      ],
    },
    {
      title: "electronics",
      members: [
        { name: "Bernardo Carmona",    role: "dep-leader" },
        { name: "André Dimas",         role: "member" },
        { name: "Frederico Henriques", role: "member" },
        { name: "João Garcia",         role: "member" },
        { name: "Miguel Torres",       role: "member" },
        { name: "Rafael Fortes",       role: "member" },
        { name: "Tiago Mega",          role: "member" },
      ],
    },
    {
      title: "driverless",
      members: [
        { name: "Jaime Ferreira",   role: "dep-leader" },
        { name: "Dinis Dashkevych", role: "member" },
        { name: "João Barata",      role: "member" },
        { name: "Tarik Tuna",       role: "member" },
      ],
    },
    {
      title: "e-powertrain",
      members: [
        { name: "David Amaral",    role: "dep-leader" },
        { name: "Lourenço Matias", role: "member" },
        { name: "Simão Narciso",   role: "member" },
        { name: "Tomás Martinho",  role: "member" },
        { name: "Wang Nuo",        role: "member" },
      ],
    },
    {
      title: "m-powertrain",
      members: [
        { name: "João Cabral",     role: "dep-leader" },
        { name: "Carolina Patrão", role: "member" },
        { name: "Diogo Casaleiro", role: "member" },
        { name: "Diogo Ferreira",  role: "member" },
        { name: "Guilherme Duarte",role: "member" },
      ],
    },
    {
      title: "marketing",
      members: [
        { name: "Rita Mendes",   role: "dep-leader" },
        { name: "João Lourenço", role: "member" },
        { name: "Lucia Barbosa", role: "member" },
        { name: "Mariana Neves", role: "member" },
      ],
    },
    {
      title: "logistics",
      members: [
        { name: "Maria Borges",   role: "dep-leader" },
        { name: "Lourenço Lopes", role: "member" },
        { name: "Simão Antunes",  role: "member" },
      ],
    },
    {
      title: "production",
      members: [
        { name: "Mariana Inácio",     role: "dep-leader" },
        { name: "César Martinho",     role: "member" },
        { name: "Francisco Antunes",  role: "member" },
        { name: "Maria Beatriz Romão",role: "cost" },
        { name: "Sara Martins",       role: "member" },
      ],
    },
    {
      title: "sponsoring",
      members: [
        { name: "Ana Reis",      role: "member" },
        { name: "Barbara Matos", role: "member" },
        { name: "Henrique Cid",  role: "member" },
        { name: "Mariana Meira", role: "member" },
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
        { name: "Mariana Santos",  role: "team-leader" },
        { name: "Diogo Peixe",     role: "team-leader" },
        { name: "Afonso Dinis",    role: "technical-director" },
        { name: "Mariana Inácio",  role: "project-manager" },
        { name: "João Balbino",    role: "finance" },
      ],
    },
    {
      title: "aerodynamics",
      members: [
        { name: "Ângela Rodrigues",    role: "member" },
        { name: "Cristiano Almeida",   role: "member" },
        { name: "Francisco Rodrigues", role: "member" },
        { name: "Mário Fonseca",       role: "member" },
        { name: "Miguel Lourenço",     role: "member" },
        { name: "Tomás Pinto",         role: "member" },
      ],
    },
    {
      title: "chassis",
      members: [
        { name: "Martim Matias",      role: "dep-leader" },
        { name: "Beatriz Moniz",      role: "member" },
        { name: "Carlos Barbosa",     role: "member" },
        { name: "Joaquim Nascimento", role: "member" },
        { name: "Pedro Fidalgo",      role: "member" },
        { name: "Rafael Jordão",      role: "member" },
      ],
    },
    {
      title: "vehicle-dynamics",
      members: [
        { name: "Gonçalo Ribeiro",   role: "dep-leader" },
        { name: "André Amorim",      role: "member" },
        { name: "José Paúl Marques", role: "member" },
        { name: "Manuel Santos",     role: "member" },
      ],
    },
    {
      title: "suspension",
      members: [
        { name: "Gonçalo Coelho",   role: "dep-leader" },
        { name: "Vasco Louro",      role: "dep-leader" },
        { name: "Guilherme Faria",  role: "member" },
        { name: "Guilherme Gamito", role: "member" },
        { name: "João Barroso",     role: "member" },
        { name: "João Carvalho",    role: "member" },
        { name: "Pedro Marçal",     role: "member" },
        { name: "Pedro Marques",    role: "member" },
        { name: "Ricardo Ferreira", role: "member" },
      ],
    },
    {
      title: "electronics",
      members: [
        { name: "Miguel Caldeirinha",  role: "dep-leader" },
        { name: "Bernardo Carmona",    role: "member" },
        { name: "Frederico Henriques", role: "member" },
        { name: "João André Rato",     role: "member" },
        { name: "Rafael Fortes",       role: "member" },
      ],
    },
    {
      title: "software-control",
      members: [
        { name: "Gonçalo Correia",   role: "dep-leader" },
        { name: "João Garcia",       role: "dep-leader" },
        { name: "André Lopes",       role: "member" },
        { name: "Frederico Firmino", role: "member" },
        { name: "Jaime Ferreira",    role: "member" },
        { name: "Miguel Torres",     role: "member" },
        { name: "Rodrigo Bugalhão",  role: "member" },
        { name: "Tiago Mega",        role: "member" },
        { name: "Tomás Pedreira",    role: "member" },
      ],
    },
    {
      title: "powertrain",
      members: [
        { name: "David Amaral",        role: "dep-leader" },
        { name: "João Cabral",         role: "dep-leader" },
        { name: "Carolina Patrão",     role: "member" },
        { name: "Diogo Casaleiro",     role: "member" },
        { name: "Diogo Ferreira",      role: "member" },
        { name: "Duarte Esguedelhado", role: "member" },
        { name: "Guilherme Duarte",    role: "member" },
        { name: "Inês Monteiro",       role: "member" },
        { name: "Lourenço Matias",     role: "member" },
        { name: "Ricardo Cascais",     role: "member" },
        { name: "Rodrigo Mendão",      role: "member" },
        { name: "Simão Narciso",       role: "member" },
        { name: "Tomás Martinho",      role: "member" },
        { name: "Wang Nuo",            role: "member" },
      ],
    },
    {
      title: "marketing",
      members: [
        { name: "Rita Mendes",      role: "dep-leader" },
        { name: "Antonio Oliveira", role: "member" },
        { name: "Daniel Nunes",     role: "member" },
        { name: "Diogo Gouveia",    role: "member" },
        { name: "Mariana Neves",    role: "member" },
        { name: "Pedro Matos",      role: "member" },
        { name: "Tomás Pratas",     role: "member" },
      ],
    },
    {
      title: "logistics",
      members: [
        { name: "Maria Borges",       role: "dep-leader" },
        { name: "Diogo Algarvio",     role: "member" },
        { name: "Gabriela Gonçalves", role: "member" },
        { name: "Lourenço Lopes",     role: "member" },
        { name: "Madalena Silva",     role: "member" },
        { name: "Mariana Ribeiro",    role: "member" },
        { name: "Simão Antunes",      role: "member" },
        { name: "Vitor Raimundo",     role: "member" },
      ],
    },
    {
      title: "operations",
      members: [
        { name: "Carmo Cadilha",       role: "dep-leader" },
        { name: "César Martinho",      role: "member" },
        { name: "Inês Henriques",      role: "member" },
        { name: "Maria Beatriz Romão", role: "member" },
        { name: "Simão Correia",       role: "member" },
      ],
    },
    {
      title: "corporate-relations",
      members: [
        { name: "Martim Costa",        role: "dep-leader" },
        { name: "Duarte Amaral",       role: "member" },
        { name: "Enzo Moreira",        role: "member" },
        { name: "Henrique Cid",        role: "member" },
        { name: "Maria Leonor Viegas", role: "member" },
        { name: "Sofia Cruz",          role: "member" },
        { name: "Tomás Sousa",         role: "member" },
        { name: "Vasco Gouveia",       role: "member" },
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
        { name: "Martim Costa",  role: "team-leader" },
        { name: "Afonso Dinis",  role: "technical-director" },
        { name: "Martim Matias", role: "technical-director" },
        { name: "Carmo Cadilha", role: "project-manager" },
        { name: "Simão Correia", role: "strategy-finance-director" },
      ],
    },
    {
      title: "aerodynamics",
      members: [
        { name: "Mário Fonseca",       role: "dep-leader" },
        { name: "Alexandru Rusu",      role: "member" },
        { name: "Diogo Peixe",         role: "member" },
        { name: "Francisco Rodrigues", role: "member" },
        { name: "José Tavares",        role: "member" },
        { name: "Miguel Lourenço",     role: "member" },
        { name: "Tomás Pinto",         role: "member" },
      ],
    },
    {
      title: "chassis",
      members: [
        { name: "Martim Matias",      role: "dep-leader" },
        { name: "Carlos Barbosa",     role: "member" },
        { name: "Joaquim Nascimento", role: "member" },
        { name: "Pedro Fidalgo",      role: "member" },
        { name: "Rafael Jordão",      role: "member" },
      ],
    },
    {
      title: "vehicle-dynamics",
      members: [
        { name: "Manuel Santos",     role: "dep-leader" },
        { name: "Diogo Filipe",      role: "member" },
        { name: "Francisco Almeida", role: "member" },
        { name: "Tiago Alves",       role: "member" },
        { name: "Tiago Valadas",     role: "member" },
      ],
    },
    {
      title: "suspension",
      members: [
        { name: "Gonçalo Correia", role: "member" },
        { name: "Guilherme Faria", role: "member" },
        { name: "João Barroso",    role: "member" },
        { name: "João Xisto",      role: "member" },
        { name: "Ricardo Ferreira",role: "member" },
        { name: "Simão Cruz",      role: "member" },
      ],
    },
    {
      title: "electronics",
      members: [
        { name: "Bernardo Carmona",    role: "dep-leader" },
        { name: "André Dimas",         role: "member" },
        { name: "Frederico Henriques", role: "member" },
        { name: "João Garcia",         role: "member" },
        { name: "Miguel Torres",       role: "member" },
        { name: "Rafael Fortes",       role: "member" },
        { name: "Tiago Mega",          role: "member" },
      ],
    },
    {
      title: "powertrain",
      members: [
        { name: "David Amaral",    role: "dep-leader" },
        { name: "João Cabral",     role: "dep-leader" },
        { name: "Carolina Patrão", role: "member" },
        { name: "Diogo Casaleiro", role: "member" },
        { name: "Diogo Ferreira",  role: "member" },
        { name: "Guilherme Duarte",role: "member" },
        { name: "Lourenço Matias", role: "member" },
        { name: "Simão Narciso",   role: "member" },
        { name: "Tomás Martinho",  role: "member" },
        { name: "Wang Nuo",        role: "member" },
      ],
    },
    {
      title: "marketing",
      members: [
        { name: "Rita Mendes",   role: "dep-leader" },
        { name: "João Lourenço", role: "member" },
        { name: "Lucia Barbosa", role: "member" },
        { name: "Mariana Neves", role: "member" },
      ],
    },
    {
      title: "logistics",
      members: [
        { name: "Maria Borges",   role: "dep-leader" },
        { name: "Lourenço Lopes", role: "member" },
        { name: "Simão Antunes",  role: "member" },
      ],
    },
    {
      title: "production",
      members: [
        { name: "Mariana Inácio",     role: "dep-leader" },
        { name: "César Martinho",     role: "member" },
        { name: "Francisco Antunes",  role: "member" },
        { name: "Maria Beatriz Romão",role: "cost" },
        { name: "Sara Martins",       role: "member" },
      ],
    },
    {
      title: "sponsoring",
      members: [
        { name: "Ana Reis",      role: "member" },
        { name: "Barbara Matos", role: "member" },
        { name: "Henrique Cid",  role: "member" },
        { name: "Mariana Meira", role: "member" },
      ],
    },
  ],
};

export const ev01Teams: TeamSeason[] = [ev01_2425, ev01_2526];
export const fenixEvoTeams: TeamSeason[] = [fenixEvo_2324, fenixEvo_2425];
