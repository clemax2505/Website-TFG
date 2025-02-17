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
