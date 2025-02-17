
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
    gpu: "/pc-parts/gpu/6750XT.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "240-260" },
      "4k": { FPS_moyen: "180-200" }
    },
    warzone: {
      fhd: { FPS_moyen: "180-200" },
      "2k": { FPS_moyen: "150-170" },
      "4k": { FPS_moyen: "120-140" }
    },
    minecraft: {
      fhd: { FPS_moyen: "500+" },
      "2k": { FPS_moyen: "450+" },
      "4k": { FPS_moyen: "400+" }
    },
    valorant: {
      fhd: { FPS_moyen: "400+" },
      "2k": { FPS_moyen: "350+" },
      "4k": { FPS_moyen: "300+" }
    },
    gta: {
      fhd: { FPS_moyen: "200-220" },
      "2k": { FPS_moyen: "170-190" },
      "4k": { FPS_moyen: "140-160" }
    }
  }
};
