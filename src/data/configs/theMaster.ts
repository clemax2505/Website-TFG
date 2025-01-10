import { PCConfigDetailed } from "../types";

export const theMaster: PCConfigDetailed = {
  id: "themaster",
  name: "The Master",
  price: 3688.08,
  description: "Ryzen 7 9800X3D & RX 7900 XTX",
  components: [
    "AMD Ryzen 7 9800X3D",
    "ARCTIC Liquid Freezer III 360 (avec RX120)",
    "Gigabyte X870E AORUS MASTER",
    "64 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
    "Kingston KC3000 2 To (NVMe)",
    "RX 7900 XTX Sapphire NITRO+",
    "Corsair iCUE LINK 6500X RGB",
    "Corsair RM1200x SHIFT",
    "Configurations ventilée uniquement avec des RX120 LINK",
  ],
  images: {
    cpu: "/pc-parts/cpu/R7 9800X3D.png",
    gpu: "/pc-parts/gpu/7900XTX SAPPHIRE NITRO +.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "250-270" },
      "4k": { FPS_moyen: "190-210" }
    },
    warzone: {
      fhd: { FPS_moyen: "190-210" },
      "2k": { FPS_moyen: "160-180" },
      "4k": { FPS_moyen: "130-150" }
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
      fhd: { FPS_moyen: "210-230" },
      "2k": { FPS_moyen: "180-200" },
      "4k": { FPS_moyen: "150-170" }
    }
  }
};