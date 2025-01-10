import { PCConfigDetailed } from "../types";

export const infinity: PCConfigDetailed = {
  id: "infinity",
  name: "Infinity",
  price: 2460.64,
  description: "Intel i5-14600KF & RTX 4070 Super",
  components: [
    "CPU : Intel Core i5-14600KF",
    "Refroidissement : MSI 360R V2",
    "Carte mère : MSI MPG Z790 Edge TI Max WiFi",
    "RAM : 32 Go DDR5 6000 MHz Lexar THOR RGB",
    "Stockage : WD_black SN770 2 To (NVMe)",
    "GPU : RTX 4070 super Zotac Twin Edge",
    "Boitier : Lian Li O11 Dynamic Mini",
    "PSU : Corsair SF1000",
    "Ventilation : Configurations ventilée uniquement avec des SL Infinity"
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