export interface CarSpec {
  label: string;
  value: string;
}

export interface CarSpecCategory {
  name: string;
  translationKey: string;
  specs: CarSpec[];
}

export interface Car {
  slug: string;
  name: string;
  year: number;
  subtitle: string;
  accentColor: string;
  heroImage: string;
  specCategories: CarSpecCategory[];
  galleryImages: string[];
}
