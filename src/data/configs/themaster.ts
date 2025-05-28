
import { PCConfigDetailed } from "../types";

export const themaster: PCConfigDetailed = {
  id: "themaster",
  name: "The Master",
  price: 3841.15,
  description: "Ryzen 7 9800X3D & RTX 4080 SUPER",
  components: [
    "CPU : AMD Ryzen 7 9800X3D",
    "Refroidissement : ARCTIC Liquid Freezer III 360 A-RGB (avec RX120)",
    "Carte mère : Gigabyte X870E AORUS MASTER",
    "RAM : G.Skill Trident Z5 Neo RGB 64 GB (2 x 32 GB) DDR5-6000 CL30",
    "Stockage : Kingston KC3000 2.048 TB (NVMe)",
    "GPU : RTX 4080 SUPER PNY XLR8 Gaming VERTO EPIC-X RGB OC",
    "Boitier : HYTE Y70",
    "PSU : MSI MPG A1000G ",
    "Ventilation : Configurations ventilée uniquement avec des RX120"
  ],
  images: {
    cpu: "/pc-parts/cpu/R7 9800X3D.png",
    gpu: "/pc-parts/gpu/4080 SUPER PNY EPIC-X RGB.png",
    case: "/pc-parts/case/hyte y70 noir.png"
  },
  gamePerformance: {
    warzone: {
      moyen: {
        fhd: { FPS_moyen: "190-210" },
        "4k": { FPS_moyen: "130-150" }
      },
      ultra: {
        fhd: { FPS_moyen: "160-180" },
        "2k": { FPS_moyen: "140-160" },
        "4k": { FPS_moyen: "110-130" }
      }
    },
    cyberpunk2077: {
      moyen: {
        fhd: { FPS_moyen: "170-190" },
        "4k": { FPS_moyen: "90-110" }
      },
      ultra: {
        fhd: { FPS_moyen: "140-160" },
        "2k": { FPS_moyen: "115-130" },
        "4k": { FPS_moyen: "75-85" }
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
        fhd: { FPS_moyen: "210-230" },
        "4k": { FPS_moyen: "150-170" }
      },
      ultra: {
        fhd: { FPS_moyen: "180-200" },
        "2k": { FPS_moyen: "155-170" },
        "4k": { FPS_moyen: "125-140" }
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
