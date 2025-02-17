import { PCConfigDetailed } from "../types";

export const chillguy: PCConfigDetailed = {
  id: "chillguy",
  name: "Chill Guy",
  price: 3081.69,
  description: "Ryzen 7 9800X3D & RX 7900 XTX",
  components: [
    "CPU : AMD Ryzen 7 7800X3D",
    "Refroidissement : ARCTIC Liquid Freezer III 360 A-RGB (avec RX120)",
    "Carte mère : Gigabyte B850 AORUS ELITE WIFI7 ATX",
    "RAM : G.Skill Trident Z5 Neo RGB 64 GB (2 x 32 GB) DDR5-6000 CL30",
    "Stockage : Kingston KC3000 2.048 TB (NVMe)",
    "GPU : RX 7900 XTX Sapphire NITRO+",
    "Boitier : Antec C8",
    "PSU : MSI MPG A1000G",
    "Ventilation : Configurations ventilée uniquement avec des AF120"
  ],
  images: {
    cpu: "/pc-parts/cpu/R7 9800X3D.png",
    gpu: "/pc-parts/gpu/7900XTX SAPPHIRE NITRO.png",
    case: "/pc-parts/case/antec c8.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "260-280" },
      "4k": { FPS_moyen: "200-220" }
    },
    warzone: {
      fhd: { FPS_moyen: "200-220" },
      "2k": { FPS_moyen: "170-190" },
      "4k": { FPS_moyen: "130-150" }
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
      fhd: { FPS_moyen: "220-240" },
      "2k": { FPS_moyen: "190-210" },
      "4k": { FPS_moyen: "150-170" }
    }
  }
};
