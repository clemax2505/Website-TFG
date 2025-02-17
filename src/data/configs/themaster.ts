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
    fortnite: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "250-270" },
      "4k": { FPS_moyen: "190-210" }
    },
    warzone: {
      fhd: { FPS_moyen: "190-210" },
      "2k": { FPS_moyen: "160-180" },
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
      fhd: { FPS_moyen: "210-230" },
      "2k": { FPS_moyen: "180-200" },
      "4k": { FPS_moyen: "150-170" }
    }
  }
};
