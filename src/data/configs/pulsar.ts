import { PCConfigDetailed } from "../types";

export const pulsar: PCConfigDetailed = {
  id: "pulsar",
  name: "Pulsar",
  price: 1355.91,
  description: "Ryzen 5 7600X & RX 7800 XT",
  components: [
    "CPU : AMD Ryzen 5 7600X",
    "Refroidissement : Thermalright Assassin X Refined SE RGB",
    "Carte mère : Gigabyte B650 EAGLE AX",
    "RAM : Lexar Ares RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
    "Stockage : Patriot P400 Lite 2 TB (NVMe)",
    "GPU : RX 7800 XT Sapphire PULSE",
    "Boitier : Phanteks XT PRO ULTRA",
    "PSU : MSI MAG A750GL",
  ],
  images: {
    cpu: "/pc-parts/cpu/R7 5800X.png",
    gpu: "/pc-parts/gpu/7700XT GIGABYTE GAMING OC.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "180-200" },
      "2k": { FPS_moyen: "140-160" },
      "4k": { FPS_moyen: "90-100" }
    },
    warzone: {
      fhd: { FPS_moyen: "120-140" },
      "2k": { FPS_moyen: "110-130" },
      "4k": { FPS_moyen: "60-70" }
    },
    minecraft: {
      fhd: { FPS_moyen: "350+" },
      "2k": { FPS_moyen: "300+" },
      "4k": { FPS_moyen: "220-250" }
    },
    valorant: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "250+" },
      "4k": { FPS_moyen: "180-200" }
    },
    gta: {
      fhd: { FPS_moyen: "140-160" },
      "2k": { FPS_moyen: "120-140" },
      "4k": { FPS_moyen: "70-80" }
    }
  }
};
