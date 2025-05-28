
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
    cpu: "/pc-parts/cpu/R5 7600X.png",
    gpu: "/pc-parts/gpu/7800XT PULSE.png",
    case: "/pc-parts/case/phanteks xt pro ultra noir.png"
  },
  gamePerformance: {
    warzone: {
      moyen: {
        fhd: { FPS_moyen: "120-140" },
        "4k": { FPS_moyen: "60-70" }
      },
      ultra: {
        fhd: { FPS_moyen: "110-130" },
        "2k": { FPS_moyen: "90-110" },
        "4k": { FPS_moyen: "50-60" }
      }
    },
    cyberpunk2077: {
      moyen: {
        fhd: { FPS_moyen: "110-130" },
        "4k": { FPS_moyen: "55-65" }
      },
      ultra: {
        fhd: { FPS_moyen: "85-100" },
        "2k": { FPS_moyen: "65-75" },
        "4k": { FPS_moyen: "40-45" }
      }
    },
    minecraft: {
      moyen: {
        fhd: { FPS_moyen: "350+" },
        "4k": { FPS_moyen: "220-250" }
      },
      ultra: {
        fhd: { FPS_moyen: "300+" },
        "2k": { FPS_moyen: "250+" },
        "4k": { FPS_moyen: "180-200" }
      }
    },
    rdr2: {
      moyen: {
        fhd: { FPS_moyen: "140-160" },
        "4k": { FPS_moyen: "70-80" }
      },
      ultra: {
        fhd: { FPS_moyen: "120-140" },
        "2k": { FPS_moyen: "95-110" },
        "4k": { FPS_moyen: "55-65" }
      }
    },
    valorant: {
      moyen: {
        fhd: { FPS_moyen: "300+" },
        "4k": { FPS_moyen: "180-200" }
      },
      ultra: {
        fhd: { FPS_moyen: "250+" },
        "2k": { FPS_moyen: "200+" },
        "4k": { FPS_moyen: "150-170" }
      }
    }
  }
};
