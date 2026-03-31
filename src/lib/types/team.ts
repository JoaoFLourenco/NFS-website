export interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
}

export interface Department {
  name: string;
  translationKey: string;
  members: TeamMember[];
}
