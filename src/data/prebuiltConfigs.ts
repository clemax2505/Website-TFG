import { PCConfig } from "@/components/prebuilt/types";

export interface PCPerformance {
  ultra: number;
  high: number;
  medium: number;
  low: number;
}

export interface GamePerformance {
  fhd: PCPerformance;
  "2k": PCPerformance;
  "4k": PCPerformance;
}

export interface PCConfigDetailed extends PCConfig {
  components: string[];
  images: {
    cpu: string;
    gpu: string;
  };
  gamePerformance: {
    fortnite: GamePerformance;
    warzone: GamePerformance;
    minecraft: GamePerformance;
    valorant: GamePerformance;
    gta: GamePerformance;
  };
}

export const prebuiltConfigs: { [key: string]: PCConfigDetailed } = {
  budget1: {
    id: "budget1",
    name: "The Beginning",
    price: 800,
    description: "Ryzen 5 5600 & RX 6650 XT",
    components: [
      "AMD Ryzen 5 5600",
      "Stock AMD ventirad",
      "Gigabyte B550 GAMING X V2",
      "16 Go DDR4 3200 MHz Lexar THOR ",
      "WD_black SN770 1 To (NVMe)",
      "RX 6650 XT Speedster",
      "MSI MAG 100R",
      "MSI A650BN",
    ],
    images: {
      cpu: "/R5 5600.png",
      gpu: "/6650XT.png"
    },
    gamePerformance: {
      fortnite: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      warzone: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      minecraft: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      valorant: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      gta: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      }
    }
  },
  // Ajoutez les autres configurations de la même manière
};