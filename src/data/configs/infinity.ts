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
    cpu: "/pc-parts/cpu/i5-14600KF.png",
    gpu: "/pc-parts/gpu/4070 SUPER TWIN EDGE ZOTAC.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "220-240" },
      "2k": { FPS_moyen: "180-200" },
      "4k": { FPS_moyen: "120-140" }
    },
    warzone: {
      fhd: { FPS_moyen: "150-170" },
      "2k": { FPS_moyen: "130-150" },
      "4k": { FPS_moyen: "80-100" }
    },
    minecraft: {
      fhd: { FPS_moyen: "400+" },
      "2k": { FPS_moyen: "350+" },
      "4k": { FPS_moyen: "300+" }
    },
    valorant: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "280+" },
      "4k": { FPS_moyen: "220+" }
    },
    gta: {
      fhd: { FPS_moyen: "170-190" },
      "2k": { FPS_moyen: "140-160" },
      "4k": { FPS_moyen: "90-110" }
    }
  }
};
