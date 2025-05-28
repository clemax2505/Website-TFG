
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
    warzone: {
      moyen: {
        fhd: { FPS_moyen: "200-220" },
        "4k": { FPS_moyen: "130-150" }
      },
      ultra: {
        fhd: { FPS_moyen: "170-190" },
        "2k": { FPS_moyen: "150-170" },
        "4k": { FPS_moyen: "110-130" }
      }
    },
    cyberpunk2077: {
      moyen: {
        fhd: { FPS_moyen: "180-200" },
        "4k": { FPS_moyen: "95-110" }
      },
      ultra: {
        fhd: { FPS_moyen: "150-170" },
        "2k": { FPS_moyen: "125-140" },
        "4k": { FPS_moyen: "80-95" }
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
        fhd: { FPS_moyen: "220-240" },
        "4k": { FPS_moyen: "150-170" }
      },
      ultra: {
        fhd: { FPS_moyen: "190-210" },
        "2k": { FPS_moyen: "160-180" },
        "4k": { FPS_moyen: "125-145" }
      }
    },
    valorant: {
      moyen: {
        fhd: { FPS_moyen: "400+" },
        "4k": { FPS_moyen: "300+" }
      },
      ultra: {
        fhd: { FPS_moyen: "350+" },
        "2k": { FPS_moyen: "320+" },
        "4k": { FPS_moyen: "280+" }
      }
    }
  }
};
