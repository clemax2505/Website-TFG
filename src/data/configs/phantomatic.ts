
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
    cpu: "/pc-parts/cpu/R7 7800X3D.png",
    gpu: "/pc-parts/gpu/7900XTX TAICHI.png"
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
