import { PCConfigDetailed } from "../types";

export const littleguy: PCConfigDetailed = {
  id: "littleguy",
  name: "Little Guy",
  price: 899.35,
  description: "Ryzen 5 7500F & RX 6650 XT",
  components: [
    "CPU : AMD Ryzen 5 7500F",
    "Refroidissement : Ventirad d'origine AMD",
    "Carte mère : Gigabyte B650 EAGLE AX",
    "RAM : Patriot Viper Venom 32 GB (2 x 16 GB) DDR5-6000 CL30",
    "Stockage : Patriot P400 Lite 1 TB(NVMe)",
    "GPU : RX 6650 XT XFX Speedster SWFT 210",
    "Boitier : MSI MAG FORGE 100R",
    "PSU : MSI MAG A650BN",
  ],
  images: {
    cpu: "/pc-parts/cpu/R5 7500F.png",
    gpu: "/pc-parts/gpu/6650XT.png",
    case: "/pc-parts/case/msi mag forge 100R noir.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "130-150" },
      "2k": { FPS_moyen: "110-130" },
      "4k": { FPS_moyen: "70-80" }
    },
    warzone: {
      fhd: { FPS_moyen: "100-120" },
      "2k": { FPS_moyen: "85-100" },
      "4k": { FPS_moyen: "50-60" }
    },
    minecraft: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "250+" },
      "4k": { FPS_moyen: "180-220" }
    },
    valorant: {
      fhd: { FPS_moyen: "220-270" },
      "2k": { FPS_moyen: "200-240" },
      "4k": { FPS_moyen: "140-170" }
    },
    gta: {
      fhd: { FPS_moyen: "110-130" },
      "2k": { FPS_moyen: "90-110" },
      "4k": { FPS_moyen: "55-65" }
    }
  }
};
