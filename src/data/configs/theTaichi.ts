import { PCConfigDetailed } from "../types";

export const theTaichi: PCConfigDetailed = {
  id: "thetaichi",
  name: "The Taichi",
  price: 2938.45,
  description: "Ryzen 7 7800X3D & RX 7900 XTX",
  components: [
    "AMD Ryzen 7 7800X3D",
    "ARCTIC Liquid Freezer III 360 (avec AF120)",
    "MSI X670E GAMING PLUS WIFI",
    "32 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
    "KingStone KC3000 2 To (NVMe)",
    "RX 7900 XTX ASRock Taichi white",
    "Corsair 5000D RGB Airflow",
    "Corsair RM1000X",
    "Configurations ventilée uniquement avec des AF120",
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