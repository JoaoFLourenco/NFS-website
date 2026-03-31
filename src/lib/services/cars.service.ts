import { cars } from "@/lib/data/cars";
import type { Car } from "@/lib/types/car";

export function getAllCars(): Car[] {
  return cars;
}

export function getCarBySlug(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

export function getCarSlugs(): string[] {
  return cars.map((car) => car.slug);
}
