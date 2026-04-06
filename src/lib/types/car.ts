export interface CarSpec {
  label: string;
  value: string;
}

export interface CarSpecCategory {
  name: string;
  translationKey: string;
  description: string;
  specs: CarSpec[];
}

export interface Car {
  slug: string;
  name: string;
  year: number;
  subtitleKey: string;
  accentColor: string;
  heroImage: string;
  specCategories: CarSpecCategory[];
  galleryImages: string[];
}
