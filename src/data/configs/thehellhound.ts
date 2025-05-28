
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
    cpu: "/pc-parts/cpu/R7 9800X3D.png",
    gpu: "/pc-parts/gpu/7900XTX POWERCOLOR HELLBOUND.png",
    case: "/pc-parts/case/4000D white.png"
  },
  gamePerformance: {
    warzone: {
      moyen: {
        fhd: { FPS_moyen: "140-160" },
        "4k": { FPS_moyen: "70-85" }
      },
      ultra: {
        fhd: { FPS_moyen: "120-140" },
        "2k": { FPS_moyen: "100-120" },
        "4k": { FPS_moyen: "60-70" }
      }
    },
    cyberpunk2077: {
      moyen: {
        fhd: { FPS_moyen: "150-170" },
        "4k": { FPS_moyen: "75-85" }
      },
      ultra: {
        fhd: { FPS_moyen: "120-140" },
        "2k": { FPS_moyen: "95-110" },
        "4k": { FPS_moyen: "65-75" }
      }
    },
    minecraft: {
      moyen: {
        fhd: { FPS_moyen: "350+" },
        "4k": { FPS_moyen: "250-300" }
      },
      ultra: {
        fhd: { FPS_moyen: "300+" },
        "2k": { FPS_moyen: "250+" },
        "4k": { FPS_moyen: "200+" }
      }
    },
    rdr2: {
      moyen: {
        fhd: { FPS_moyen: "160-180" },
        "4k": { FPS_moyen: "80-100" }
      },
      ultra: {
        fhd: { FPS_moyen: "130-150" },
        "2k": { FPS_moyen: "110-125" },
        "4k": { FPS_moyen: "70-80" }
      }
    },
    valorant: {
      moyen: {
        fhd: { FPS_moyen: "300+" },
        "4k": { FPS_moyen: "200+" }
      },
      ultra: {
        fhd: { FPS_moyen: "250+" },
        "2k": { FPS_moyen: "220+" },
        "4k": { FPS_moyen: "170+" }
      }
    }
  }
};
