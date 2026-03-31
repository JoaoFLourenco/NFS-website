import { Car } from "@/lib/types/car";

export const cars: Car[] = [
  {
    slug: "fsnovaev01",
    name: "FS NOVA EV01",
    year: 2024,
    subtitle: "Our first electric vehicle",
    accentColor: "#19a3ff",
    heroImage: "/images/cars/placeholder-car.svg",
    specCategories: [
      {
        name: "General",
        translationKey: "general",
        specs: [
          { label: "Weight", value: "256 kg" },
          { label: "Wheelbase", value: "1550 mm" },
          { label: "Track Width", value: "1200 mm" },
          { label: "Top Speed", value: "120 km/h" },
          { label: "0-100 km/h", value: "4.2 s" },
        ],
      },
      {
        name: "Powertrain",
        translationKey: "powertrain",
        specs: [
          { label: "Motor", value: "Emrax 228 HV" },
          { label: "Power", value: "80 kW" },
          { label: "Torque", value: "230 Nm" },
          { label: "Battery", value: "6.8 kWh Li-Ion" },
          { label: "Voltage", value: "600V DC" },
        ],
      },
      {
        name: "Steering & Suspension",
        translationKey: "steering_suspension",
        specs: [
          { label: "Type", value: "Double wishbone" },
          { label: "Dampers", value: "Ohlins TTX25" },
          { label: "Steering", value: "Rack and pinion" },
        ],
      },
      {
        name: "Chassis",
        translationKey: "chassis",
        specs: [
          { label: "Type", value: "Steel tubular spaceframe" },
          { label: "Material", value: "AISI 4130" },
        ],
      },
      {
        name: "Aerodynamics",
        translationKey: "aerodynamics",
        specs: [
          { label: "Downforce", value: "600 N @ 60 km/h" },
          { label: "Front Wing", value: "Multi-element" },
          { label: "Rear Wing", value: "Multi-element" },
        ],
      },
    ],
    galleryImages: [],
  },
  {
    slug: "fsfenixevo",
    name: "FS Fenix Evo",
    year: 2023,
    subtitle: "Evolution of the Fenix platform",
    accentColor: "#1966ff",
    heroImage: "/images/cars/placeholder-car.svg",
    specCategories: [
      {
        name: "General",
        translationKey: "general",
        specs: [
          { label: "Weight", value: "249 kg" },
          { label: "Wheelbase", value: "1535 mm" },
          { label: "Top Speed", value: "115 km/h" },
        ],
      },
      {
        name: "Powertrain",
        translationKey: "powertrain",
        specs: [
          { label: "Motor", value: "Emrax 208" },
          { label: "Power", value: "52 kW" },
          { label: "Torque", value: "100 Nm" },
          { label: "Battery", value: "6.3 kWh Li-Ion" },
        ],
      },
      {
        name: "Chassis",
        translationKey: "chassis",
        specs: [{ label: "Type", value: "Steel tubular spaceframe" }],
      },
    ],
    galleryImages: [],
  },
  {
    slug: "fsfenix",
    name: "FS Fenix",
    year: 2022,
    subtitle: "Rising from the ashes",
    accentColor: "#19a3ff",
    heroImage: "/images/cars/placeholder-car.svg",
    specCategories: [
      {
        name: "General",
        translationKey: "general",
        specs: [
          { label: "Weight", value: "280 kg" },
          { label: "Wheelbase", value: "1550 mm" },
          { label: "Top Speed", value: "110 km/h" },
        ],
      },
      {
        name: "Powertrain",
        translationKey: "powertrain",
        specs: [
          { label: "Motor", value: "Emrax 208" },
          { label: "Power", value: "52 kW" },
          { label: "Torque", value: "100 Nm" },
        ],
      },
    ],
    galleryImages: [],
  },
  {
    slug: "fsdragon",
    name: "FS Dragon",
    year: 2019,
    subtitle: "Where it all began",
    accentColor: "#19ff38",
    heroImage: "/images/cars/placeholder-car.svg",
    specCategories: [
      {
        name: "General",
        translationKey: "general",
        specs: [
          { label: "Weight", value: "325 kg" },
          { label: "Wheelbase", value: "1600 mm" },
          { label: "Top Speed", value: "105 km/h" },
        ],
      },
      {
        name: "Powertrain",
        translationKey: "powertrain",
        specs: [
          { label: "Motor", value: "Emrax 208" },
          { label: "Power", value: "52 kW" },
          { label: "Torque", value: "100 Nm" },
        ],
      },
    ],
    galleryImages: [],
  },
];
