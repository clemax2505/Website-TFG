
import { PCConfigDetailed } from "../types";

export const phantomatic: PCConfigDetailed = {
  id: "phantomatic",
  name: "Phantomatic",
  price: 1690.61,
  description: "Ryzen 7 7700X & RX 7800 XT",
  components: [
    "CPU : AMD Ryzen 7 7700X",
    "Refroidissement : ARCTIC Liquid Freezer III 240 A-RGB",
    "Carte mère : Gigabyte B650 EAGLE AX",
    "RAM : Kingston FURY Beast RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
    "Stockage : Western Digital Black SN770 2 TB (NVMe)",
    "GPU : RX 7800 XT ASRock Phantom Gaming OC",
    "Boitier : MSI MAG FORGE 100R",
    "PSU : MSI MAG A850GL",
  ],
  images: {
    cpu: "/pc-parts/cpu/R7 7700X.png",
    gpu: "/pc-parts/gpu/7800XT ASROCK PHANTOM GAMING.png",
    case: "/pc-parts/case/msi mag forge 100r noir.png"
  },
  gamePerformance: {
    warzone: {
      moyen: {
        fhd: { FPS_moyen: "180-200" },
        "4k": { FPS_moyen: "120-140" }
      },
      ultra: {
        fhd: { FPS_moyen: "150-170" },
        "2k": { FPS_moyen: "130-150" },
        "4k": { FPS_moyen: "80-100" }
      }
    },
    cyberpunk2077: {
      moyen: {
        fhd: { FPS_moyen: "130-150" },
        "4k": { FPS_moyen: "65-75" }
      },
      ultra: {
        fhd: { FPS_moyen: "100-120" },
        "2k": { FPS_moyen: "80-95" },
        "4k": { FPS_moyen: "50-60" }
      }
    },
    minecraft: {
      moyen: {
        fhd: { FPS_moyen: "500+" },
        "4k": { FPS_moyen: "400+" }
      },
      ultra: {
        fhd: { FPS_moyen: "450+" },
        "2k": { FPS_moyen: "400+" },
        "4k": { FPS_moyen: "300+" }
      }
    },
    rdr2: {
      moyen: {
        fhd: { FPS_moyen: "160-180" },
        "4k": { FPS_moyen: "85-95" }
      },
      ultra: {
        fhd: { FPS_moyen: "140-160" },
        "2k": { FPS_moyen: "110-130" },
        "4k": { FPS_moyen: "70-80" }
      }
    },
    valorant: {
      moyen: {
        fhd: { FPS_moyen: "400+" },
        "4k": { FPS_moyen: "300+" }
      },
      ultra: {
        fhd: { FPS_moyen: "350+" },
        "2k": { FPS_moyen: "300+" },
        "4k": { FPS_moyen: "250+" }
      }
    }
  }
};
