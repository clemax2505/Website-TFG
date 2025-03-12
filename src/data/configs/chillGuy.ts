import { PCConfigDetailed } from "../types";

export const chillGuy: PCConfigDetailed = {
  id: "chillguy",
  name: "Chill Guy",
  price: 3349.96,
  description: "i9-14900KF & RTX 4080 Super",
  components: [
    "CPU : Intel Core i9-14900KF",
    "Refroidissement : Corsair iCUE Link TITAN 360 RGB",
    "Carte mère : Gigabyte Z790 AORUS Master X",
    "RAM : 64 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
    "Stockage : KingStone KC3000 2 To (NVMe)",
    "GPU : RTX 4080 Super PNY Epic-X-RGB",
    "Boitier : Antec C8",
    "PSU : Corsair RM1000X",
    "Ventilation : Configurations ventilée uniquement avec des RX120 LINK"
  ],
  images: {
    cpu: "/pc-parts/cpu/i9-14900KF.png",
    gpu: "/pc-parts/gpu/4080 SUPER PNY EPIC-X RGB.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "260-280" },
      "4k": { FPS_moyen: "200-220" }
    },
    warzone: {
      fhd: { FPS_moyen: "200-220" },
      "2k": { FPS_moyen: "170-190" },
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
      fhd: { FPS_moyen: "220-240" },
      "2k": { FPS_moyen: "190-210" },
      "4k": { FPS_moyen: "150-170" }
    }
  }
};