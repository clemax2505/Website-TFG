
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
    cpu: "/pc-parts/cpu/R7 9800X3D.png",
    gpu: "/pc-parts/gpu/4070 Ti SUPER TUF GAMING OC.png",
    case: "/pc-parts/case/tuf gt502 plus noir.png"
  },
  gamePerformance: {
    warzone: {
      moyen: {
        fhd: { FPS_moyen: "160-180" },
        "4k": { FPS_moyen: "100-120" }
      },
      ultra: {
        fhd: { FPS_moyen: "140-160" },
        "2k": { FPS_moyen: "120-140" },
        "4k": { FPS_moyen: "80-100" }
      }
    },
    cyberpunk2077: {
      moyen: {
        fhd: { FPS_moyen: "140-160" },
        "4k": { FPS_moyen: "70-80" }
      },
      ultra: {
        fhd: { FPS_moyen: "110-130" },
        "2k": { FPS_moyen: "85-100" },
        "4k": { FPS_moyen: "55-65" }
      }
    },
    minecraft: {
      moyen: {
        fhd: { FPS_moyen: "450+" },
        "4k": { FPS_moyen: "350+" }
      },
      ultra: {
        fhd: { FPS_moyen: "400+" },
        "2k": { FPS_moyen: "350+" },
        "4k": { FPS_moyen: "300+" }
      }
    },
    rdr2: {
      moyen: {
        fhd: { FPS_moyen: "180-200" },
        "4k": { FPS_moyen: "110-130" }
      },
      ultra: {
        fhd: { FPS_moyen: "150-170" },
        "2k": { FPS_moyen: "125-140" },
        "4k": { FPS_moyen: "90-105" }
      }
    },
    valorant: {
      moyen: {
        fhd: { FPS_moyen: "400+" },
        "4k": { FPS_moyen: "250+" }
      },
      ultra: {
        fhd: { FPS_moyen: "350+" },
        "2k": { FPS_moyen: "300+" },
        "4k": { FPS_moyen: "220+" }
      }
    }
  }
};
