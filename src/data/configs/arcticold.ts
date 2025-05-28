
import { PCConfigDetailed } from "../types";

export const arcticold: PCConfigDetailed = {
  id: "arcticold",
  name: "Arcticold",
  price: 1942.93,
  description: "Ryzen 7 7700X & RX 7900 GRE",
  components: [
    "CPU : AMD Ryzen 7 7700X",
    "Refroidissement : ARCTIC Liquid Freezer III 360 A-RGB",
    "Carte mère : Gigabyte B650 EAGLE AX",
    "RAM : Lexar Ares RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
    "Stockage : Western Digital Black SN770 2 TB (NVMe)",
    "GPU : RX 7900 GRE XFX",
    "Boitier : Corsair 6500X",
    "PSU : MSI MPG A1000G",
    "Ventilation : Configurations ventilée uniquement avec des ARCTIC P12"
  ],
  
  images: {
    cpu: "/pc-parts/cpu/R7 7700X.png",
    gpu: "/pc-parts/gpu/7900GRE.png",
    case: "/pc-parts/case/6500x noir.png"
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
        "4k": { FPS_moyen: "90-110" }
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
        fhd: { FPS_moyen: "170-190" },
        "4k": { FPS_moyen: "90-110" }
      },
      ultra: {
        fhd: { FPS_moyen: "150-170" },
        "2k": { FPS_moyen: "120-140" },
        "4k": { FPS_moyen: "75-85" }
      }
    },
    valorant: {
      moyen: {
        fhd: { FPS_moyen: "400+" },
        "4k": { FPS_moyen: "300+" }
      },
      ultra: {
        fhd: { FPS_moyen: "350+" },
        "2k": { FPS_moyen: "300+" },
        "4k": { FPS_moyen: "250+" }
      }
    }
  }
};
