
import { PCConfigDetailed } from "../types";

export const cheapy: PCConfigDetailed = {
  id: "cheapy",
  name: "Cheapy",
  price: 978.77,
  description: "Ryzen 5 7500F & RX 6750 XT",
  components: [
    "CPU : AMD Ryzen 5 7500F",
    "Refroidissement : Thermalright Assassin X Refined SE RGB",
    "Carte mère : Gigabyte B650 EAGLE AX",
    "RAM : Patriot Viper Venom 32 GB (2 x 16 GB) DDR5-6000 CL30",
    "Stockage : Patriot P400 Lite 1 TB (NVMe)",
    "GPU : RX 6750 XT XFX Speedster QICK 319",
    "Boitier : MSI MAG FORGE 112R",
    "PSU : MSI MAG A650BN",
  ],
  images: {
    cpu: "/pc-parts/cpu/R5 7500F.png",
    gpu: "/pc-parts/gpu/6750XT.png",
    case: "/pc-parts/case/msi mag forge 112r noir.png"
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
        "4k": { FPS_moyen: "100-120" }
      }
    },
    cyberpunk2077: {
      moyen: {
        fhd: { FPS_moyen: "120-140" },
        "4k": { FPS_moyen: "60-70" }
      },
      ultra: {
        fhd: { FPS_moyen: "90-110" },
        "2k": { FPS_moyen: "70-85" },
        "4k": { FPS_moyen: "40-50" }
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
        "4k": { FPS_moyen: "350+" }
      }
    },
    rdr2: {
      moyen: {
        fhd: { FPS_moyen: "130-150" },
        "4k": { FPS_moyen: "70-80" }
      },
      ultra: {
        fhd: { FPS_moyen: "100-120" },
        "2k": { FPS_moyen: "80-95" },
        "4k": { FPS_moyen: "45-55" }
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
