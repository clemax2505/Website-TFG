import { PCConfigDetailed } from "../types";

export const thehellhound: PCConfigDetailed = {
  id: "thehellhound",
  name: "The Hellhound",
  price: 2359.44,
  description: "Ryzen 7 9800X3D & RX 7900 XTX",
  components: [
    "CPU : AMD Ryzen 7 7800X3D",
    "Refroidissement : ARCTIC Liquid Freezer III 240 A-RGB Blanc",
    "Carte mère : Gigabyte B650 AORUS ELITE AX ICE",
    "RAM : G.Skill Ripjaws M5 RGB 32 GB (2 x 16 GB) DDR5-6000 CL30 Blanc",
    "Stockage : Kingston KC3000 2.048 TB(NVMe)",
    "GPU : RX 7900 XTX PowerColor Hellhound OC",
    "Boitier : Corsair 4000D Airflow",
    "PSU : MSI MAG A850GL",
    "Ventilation : Configurations ventilée uniquement avec des SP120 Blanc"
  ],
  images: {
    cpu: "/pc-parts/cpu/i5-14600KF.png",
    gpu: "/pc-parts/gpu/7800XT POWERCOLOR HELLBOUND.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "200-220" },
      "2k": { FPS_moyen: "160-180" },
      "4k": { FPS_moyen: "100-120" }
    },
    warzone: {
      fhd: { FPS_moyen: "140-160" },
      "2k": { FPS_moyen: "120-140" },
      "4k": { FPS_moyen: "70-85" }
    },
    minecraft: {
      fhd: { FPS_moyen: "350+" },
      "2k": { FPS_moyen: "300+" },
      "4k": { FPS_moyen: "250-300" }
    },
    valorant: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "250+" },
      "4k": { FPS_moyen: "200+" }
    },
    gta: {
      fhd: { FPS_moyen: "160-180" },
      "2k": { FPS_moyen: "130-150" },
      "4k": { FPS_moyen: "80-100" }
    }
  }
};
