
import { PCConfigDetailed } from "../types";

export const viper: PCConfigDetailed = {
  id: "viper",
  name: "Viper",
  price: 1186.56,
  description: "Ryzen 5 7600X & RX 6750 XT",
  components: [
    "CPU : AMD Ryzen 5 7600X",
    "Refroidissement : Thermalright Assassin X Refined SE RGB",
    "Carte mère : Gigabyte B650 EAGLE AX",
    "RAM : Patriot Viper Venom 32 GB (2 x 16 GB) DDR5-6000 CL30",
    "Stockage : Western Digital Black SN770 1 TB (NVMe)",
    "GPU : RX 6750 XT XFX Speedster QICK 319",
    "Boitier : Corsair 3000D AIRFLOW",
    "PSU : MSI MAG A650GL",
  ],
  images: {
    cpu: "/pc-parts/cpu/R7 7600X.png",
    gpu: "/pc-parts/gpu/6750XT.png",
    case: "/pc-parts/case/300D noir.png"
  },
  gamePerformance: {
    warzone: {
      moyen: {
        fhd: { FPS_moyen: "110-130" },
        "4k": { FPS_moyen: "45-55" }
      },
      ultra: {
        fhd: { FPS_moyen: "95-110" },
        "2k": { FPS_moyen: "80-95" },
        "4k": { FPS_moyen: "35-45" }
      }
    },
    cyberpunk2077: {
      moyen: {
        fhd: { FPS_moyen: "100-120" },
        "4k": { FPS_moyen: "50-60" }
      },
      ultra: {
        fhd: { FPS_moyen: "75-90" },
        "2k": { FPS_moyen: "60-70" },
        "4k": { FPS_moyen: "35-40" }
      }
    },
    minecraft: {
      moyen: {
        fhd: { FPS_moyen: "300+" },
        "4k": { FPS_moyen: "180-220" }
      },
      ultra: {
        fhd: { FPS_moyen: "250+" },
        "2k": { FPS_moyen: "200+" },
        "4k": { FPS_moyen: "150-180" }
      }
    },
    rdr2: {
      moyen: {
        fhd: { FPS_moyen: "130-150" },
        "4k": { FPS_moyen: "50-60" }
      },
      ultra: {
        fhd: { FPS_moyen: "100-120" },
        "2k": { FPS_moyen: "75-85" },
        "4k": { FPS_moyen: "40-45" }
      }
    },
    valorant: {
      moyen: {
        fhd: { FPS_moyen: "250+" },
        "4k": { FPS_moyen: "140-170" }
      },
      ultra: {
        fhd: { FPS_moyen: "200-240" },
        "2k": { FPS_moyen: "180-200" },
        "4k": { FPS_moyen: "120-140" }
      }
    }
  }
};
