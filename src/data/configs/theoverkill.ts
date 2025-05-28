
import { PCConfigDetailed } from "../types";

export const theoverkill: PCConfigDetailed = {
  id: "theoverkill",
  name: "The Overkill",
  price: 6323.31,
  description: "Ryzen 9 9950X & RTX 4090",
  components: [
    "CPU : AMD Ryzen 9 9950X",
    "Refroidissement : ARCTIC Liquid Freezer III 420 A-RGB (avec AF120)",
    "Carte mère : Asus ROG CROSSHAIR X870E HERO",
    "RAM : G.Skill Trident Z5 Neo RGB 64 GB (4 x 16 GB) DDR5-6000 CL30",
    "Stockage : Samsung 990 Pro 4 TB (NVMe)",
    "GPU : RTX 4090 Asus ROG STRIX GAMING OC",
    "Boitier : Corsair iCUE 7000X RGB",
    "PSU : SeaSonic VERTEX GX-1200",
    "Ventilation : Configurations ventilée uniquement avec des RX140"
  ],
  images: {
    cpu: "/pc-parts/cpu/R9 9950X.png",
    gpu: "/pc-parts/gpu/4090 ASUS ROG STRIX.png",
    case: "/pc-parts/case/7000x rgb.png"
  },
  gamePerformance: {
    warzone: {
      moyen: {
        fhd: { FPS_moyen: "200-220" },
        "4k": { FPS_moyen: "140-160" }
      },
      ultra: {
        fhd: { FPS_moyen: "180-200" },
        "2k": { FPS_moyen: "160-180" },
        "4k": { FPS_moyen: "120-140" }
      }
    },
    cyberpunk2077: {
      moyen: {
        fhd: { FPS_moyen: "190-210" },
        "4k": { FPS_moyen: "110-130" }
      },
      ultra: {
        fhd: { FPS_moyen: "160-180" },
        "2k": { FPS_moyen: "135-150" },
        "4k": { FPS_moyen: "90-105" }
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
        "4k": { FPS_moyen: "160-180" }
      },
      ultra: {
        fhd: { FPS_moyen: "200-220" },
        "2k": { FPS_moyen: "175-195" },
        "4k": { FPS_moyen: "140-160" }
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
