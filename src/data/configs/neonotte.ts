import { PCConfigDetailed } from "../types";

export const neonotte: PCConfigDetailed = {
  id: "neonotte",
  name: "Neo Notte",
  price: 3058.44,
  description: "Ryzen 7 9800X3D & RTX 4080 SUPER",
  components: [
    "CPU : AMD Ryzen 7 7800X3D",
    "Refroidissement : Thermalright Frozen Notte ARGB",
    "Carte mère : Gigabyte X870E AORUS ELITE WIFI7",
    "RAM : G.Skill Trident Z5 Neo RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
    "Stockage : Western Digital WD_Black SN850X 2 TB (NVMe)",
    "GPU : RTX 4080 SUPER Palit GamingPro",
    "Boitier : Thermaltake View 270 Plus TG ARGB",
    "PSU : MSI MPG A1000G",
    "Ventilation : Configurations ventilée uniquement avec des CT120"
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
