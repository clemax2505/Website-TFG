import { PCConfigDetailed } from "../types";

export const nitrous: PCConfigDetailed = {
  id: "nitrous",
  name: "Nitrous",
  price: 2738.09,
  description: "Ryzen 7 9800X3D & RX 7900 XTX",
  components: [
    "CPU : AMD Ryzen 7 7800X3D",
    "Refroidissement : ARCTIC Liquid Freezer III 360 A-RGB",
    "Carte mère : Gigabyte X870 AORUS ELITE WIFI7",
    "RAM : G.Skill Trident Z5 Neo RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
    "Stockage : Kingston KC3000 2.048 TB (NVMe)",
    "GPU : RX 7900 XTX Sapphire NITRO+",
    "Boitier : Phanteks XT PRO ULTRA",
    "PSU : Corsair RM1000x (2024)",
  ],
  images: {
    cpu: "/pc-parts/cpu/R7 9800X3D.png",
    gpu: "/pc-parts/gpu/7900XTX SAPPHIRE NITRO.png",
    case: "/pc-parts/case/phanteks xt pro ultra noir.png"
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
