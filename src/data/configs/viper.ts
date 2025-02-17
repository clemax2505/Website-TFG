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
    fortnite: {
      fhd: { FPS_moyen: "140-160" },
      "2k": { FPS_moyen: "120-140" },
      "4k": { FPS_moyen: "65-75" }
    },
    warzone: {
      fhd: { FPS_moyen: "110-130" },
      "2k": { FPS_moyen: "95-110" },
      "4k": { FPS_moyen: "45-55" }
    },
    minecraft: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "250+" },
      "4k": { FPS_moyen: "180-220" }
    },
    valorant: {
      fhd: { FPS_moyen: "250+" },
      "2k": { FPS_moyen: "200-240" },
      "4k": { FPS_moyen: "140-170" }
    },
    gta: {
      fhd: { FPS_moyen: "130-150" },
      "2k": { FPS_moyen: "100-120" },
      "4k": { FPS_moyen: "50-60" }
    }
  }
};
