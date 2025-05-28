
import { PCConfigDetailed } from "../types";

export const infinity: PCConfigDetailed = {
  id: "infinity",
  name: "Infinity",
  price: 2297.79,
  description: "Ryzen 7 9700X & RX 7900 XTX",
  components: [
    "CPU : AMD Ryzen 7 9700X",
    "Refroidissement : ARCTIC Liquid Freezer III 240 A-RGB (avec SL-Infinity)",
    "Carte mère : Gigabyte B650 EAGLE AX",
    "RAM : G.Skill Ripjaws M5 RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
    "Stockage : Western Digital Black SN770 2 TB (NVMe)",
    "GPU : RX 7900 XTX XFX Speedster MERC 310",
    "Boitier : Lian Li O11 Dynamic Mini ",
    "PSU : Corsair SF1000L",
    "Ventilation : Configurations ventilée uniquement avec des SL-Infinity"
  ],
  images: {
    cpu: "/pc-parts/cpu/R7 9700X.png",
    gpu: "/pc-parts/gpu/7900XTX.png",
    case: "/pc-parts/case/O11 dynamic mini.png"
  },
  gamePerformance: {
    warzone: {
      moyen: {
        fhd: { FPS_moyen: "150-170" },
        "4k": { FPS_moyen: "80-100" }
      },
      ultra: {
        fhd: { FPS_moyen: "130-150" },
        "2k": { FPS_moyen: "110-130" },
        "4k": { FPS_moyen: "65-75" }
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
        fhd: { FPS_moyen: "400+" },
        "4k": { FPS_moyen: "300+" }
      },
      ultra: {
        fhd: { FPS_moyen: "350+" },
        "2k": { FPS_moyen: "300+" },
        "4k": { FPS_moyen: "250+" }
      }
    },
    rdr2: {
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
    valorant: {
      moyen: {
        fhd: { FPS_moyen: "300+" },
        "4k": { FPS_moyen: "220+" }
      },
      ultra: {
        fhd: { FPS_moyen: "280+" },
        "2k": { FPS_moyen: "240+" },
        "4k": { FPS_moyen: "180+" }
      }
    }
  }
};
