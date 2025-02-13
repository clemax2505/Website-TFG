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
    cpu: "/pc-parts/cpu/R7 9800X3D.png",
    gpu: "/pc-parts/gpu/4080 SUPER MSI GAMING X SLIM.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "270-290" },
      "4k": { FPS_moyen: "200-220" }
    },
    warzone: {
      fhd: { FPS_moyen: "200-220" },
      "2k": { FPS_moyen: "180-200" },
      "4k": { FPS_moyen: "140-160" }
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
      "2k": { FPS_moyen: "200-220" },
      "4k": { FPS_moyen: "160-180" }
    }
  }
};
