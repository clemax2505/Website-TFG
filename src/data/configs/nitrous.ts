
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
    warzone: {
      moyen: {
        fhd: { FPS_moyen: "180-200" },
        "4k": { FPS_moyen: "120-140" }
      },
      ultra: {
        fhd: { FPS_moyen: "150-170" },
        "2k": { FPS_moyen: "130-150" },
        "4k": { FPS_moyen: "100-120" }
      }
    },
    cyberpunk2077: {
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
        fhd: { FPS_moyen: "200-220" },
        "4k": { FPS_moyen: "140-160" }
      },
      ultra: {
        fhd: { FPS_moyen: "170-190" },
        "2k": { FPS_moyen: "140-160" },
        "4k": { FPS_moyen: "110-130" }
      }
    },
    valorant: {
      moyen: {
        fhd: { FPS_moyen: "400+" },
        "4k": { FPS_moyen: "300+" }
      },
      ultra: {
        fhd: { FPS_moyen: "350+" },
        "2k": { FPS_moyen: "320+" },
        "4k": { FPS_moyen: "280+" }
      }
    }
  }
};
