import { PCConfigDetailed } from "../types";

export const littleGuy: PCConfigDetailed = {
  id: "littleguy",
  name: "Little Guy",
  price: 1041.35,
  description: "Ryzen 5 5600 & RX 6750 XT",
  components: [
    "AMD Ryzen 5 5600",
    "Be Quiet Pure Rock 2",
    "MSI B550-A PRO",
    "16 Go DDR4 3200 MHz Kingston Fury Beast",
    "WD_black SN770 1 To (NVMe)",
    "RX 6750 XT Speedster",
    "MSI MAG 120A Airflow",
    "MSI A650BN",
  ],
  images: {
    cpu: "/pc-parts/cpu/R5 5600.png",
    gpu: "/pc-parts/gpu/6750XT.png"
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