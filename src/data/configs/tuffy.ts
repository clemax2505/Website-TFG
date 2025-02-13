import { PCConfigDetailed } from "../types";

export const tuffy: PCConfigDetailed = {
  id: "tuffy",
  name: "Tuffy",
  price: 2897.95,
  description: "Ryzen 7 9800X3D & RTX 4070 Ti SUPER",
  components: [
    "CPU : AMD Ryzen 7 7800X3D",
    "Refroidissement : Asus TUF Gaming LC II ARGB",
    "Carte mère : Asus TUF GAMING B650-PLUS WIFI ATX",
    "RAM : G.Skill Ripjaws M5 RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
    "Stockage : Patriot P400 Lite 2 TB (NVMe)",
    "GPU : RTX 4070 Ti SUPER Asus TUF GAMING OC",
    "Boitier : Asus TUF Gaming GT502 Plus",
    "PSU : Asus TUF Gaming 1000G",
    "Ventilation : Configurations ventilée uniquement avec des TF120"
  ],
  images: {
    cpu: "/pc-parts/cpu/i7-14700KF.png",
    gpu: "/pc-parts/gpu/4070 TI SUPER TUF GAMING OC.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "250-270" },
      "2k": { FPS_moyen: "200-220" },
      "4k": { FPS_moyen: "140-160" }
    },
    warzone: {
      fhd: { FPS_moyen: "160-180" },
      "2k": { FPS_moyen: "140-160" },
      "4k": { FPS_moyen: "100-120" }
    },
    minecraft: {
      fhd: { FPS_moyen: "450+" },
      "2k": { FPS_moyen: "400+" },
      "4k": { FPS_moyen: "350+" }
    },
    valorant: {
      fhd: { FPS_moyen: "400+" },
      "2k": { FPS_moyen: "350+" },
      "4k": { FPS_moyen: "250+" }
    },
    gta: {
      fhd: { FPS_moyen: "180-200" },
      "2k": { FPS_moyen: "150-170" },
      "4k": { FPS_moyen: "110-130" }
    }
  }
};
