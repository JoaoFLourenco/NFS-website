export interface CompetitionResult {
  category: string;
  placement: string;
}

export interface CompetitionCategory {
  title: string;
  results: CompetitionResult[];
}

export interface Competition {
  name: string;
  date: string;
  location: string;
  categories: CompetitionCategory[];
}

export interface CarCompetitions {
  carSlug: string;
  competitions: Competition[];
}

const ev01Competitions: CarCompetitions = {
  carSlug: "fsnovaev01",
  competitions: [
    {
      name: "FSPT",
      date: "27 July - 1 August 2025",
      location: "Castelo Branco Kart Track",
      categories: [
        {
          title: "Static Events",
          results: [
            { category: "Engineering Design", placement: "1st Place" },
            { category: "Cost & Manufacturing", placement: "3rd Place" },
            { category: "Business Plan Presentation", placement: "1st Place" },
          ],
        },
      ],
    },
  ],
};

const fenixEvoCompetitions: CarCompetitions = {
  carSlug: "fsfenixevo",
  competitions: [
    {
      name: "FSA",
      date: "21 July - 1 July 2024",
      location: "RedBull Ring, Austria",
      categories: [
        {
          title: "Static Events",
          results: [
            { category: "Engineering Design", placement: "18th Place" },
            { category: "Cost & Manufacturing", placement: "17th Place" },
            { category: "Business Plan Presentation", placement: "Did not compete" },
          ],
        },
        {
          title: "Dynamic Events",
          results: [
            { category: "Status", placement: "Did not complete scrutineering" },
          ],
        },
      ],
    },
    {
      name: "FSPT",
      date: "3 September - 7 September 2024",
      location: "Castelo Branco Kart Track",
      categories: [
        {
          title: "Static Events",
          results: [
            { category: "Engineering Design", placement: "2nd Place" },
            { category: "Cost & Manufacturing", placement: "2nd Place" },
            { category: "Business Plan Presentation", placement: "1st Place" },
          ],
        },
        {
          title: "Dynamic Events",
          results: [
            { category: "Acceleration", placement: "DNS" },
            { category: "Skidpad", placement: "DNS" },
            { category: "Autocross", placement: "DNS" },
            { category: "Endurance", placement: "DNF (10 laps completed)" },
          ],
        },
        {
          title: "Other",
          results: [
            { category: "Special Awards", placement: "Best social media presence" },
          ],
        },
      ],
    },
    {
      name: "FSS",
      date: "4 August - 10 August 2025",
      location: "Circuit de Barcelona-Catalunya, Spain",
      categories: [
        {
          title: "Static Events",
          results: [
            { category: "Engineering Design", placement: "5th Place" },
            { category: "Cost & Manufacturing", placement: "5th Place" },
            { category: "Business Plan Presentation", placement: "2nd Place" },
          ],
        },
        {
          title: "Dynamic Events",
          results: [
            { category: "Acceleration", placement: "6th Place" },
            { category: "Skidpad", placement: "DNS" },
            { category: "Autocross", placement: "8th Place" },
            { category: "Endurance", placement: "DNF" },
          ],
        },
      ],
    },
  ],
};

const fenixCompetitions: CarCompetitions = {
  carSlug: "fsfenix",
  competitions: [
    {
      name: "FSPT",
      date: "1 August - 5 August 2023",
      location: "Castelo Branco Kart Track",
      categories: [
        {
          title: "Static Events",
          results: [
            { category: "Engineering Design", placement: "4th Place" },
            { category: "Cost & Manufacturing", placement: "4th Place" },
            { category: "Business Plan Presentation", placement: "6th Place" },
          ],
        },
      ],
    },
  ],
};

export function getCompetitionsForCar(carSlug: string): Competition[] {
  const carData = [ev01Competitions, fenixEvoCompetitions, fenixCompetitions].find(
    (c) => c.carSlug === carSlug
  );
  return carData?.competitions ?? [];
}
