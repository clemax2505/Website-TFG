
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
    cpu: "/pc-parts/cpu/R7 9800X3D.png",
    gpu: "/pc-parts/gpu/4080 SUPER PALIT GAMING OC.png",
    case: "/pc-parts/case/view 270 plus tg argb noir.png"
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
        fhd: { FPS_moyen: "160-180" },
        "4k": { FPS_moyen: "85-95" }
      },
      ultra: {
        fhd: { FPS_moyen: "130-150" },
        "2k": { FPS_moyen: "105-120" },
        "4k": { FPS_moyen: "70-80" }
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
        fhd: { FPS_moyen: "200-220" },
        "4k": { FPS_moyen: "140-160" }
      },
      ultra: {
        fhd: { FPS_moyen: "170-190" },
        "2k": { FPS_moyen: "145-160" },
        "4k": { FPS_moyen: "115-130" }
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
