import { PCConfigDetailed } from "../types";

export const theHellbound: PCConfigDetailed = {
  id: "thehellbound",
  name: "The HellBound",
  price: 1978.89,
  description: "i5-14600KF & RX 7800 XT",
  components: [
    "CPU : Intel Core i5-14600KF",
    "Refroidissement : arctic liquid freezer III Whtie",
    "Carte mère : ASUS Prime Z790-P WiFi",
    "RAM : 32 Go DDR5 6000 MHz G.Skill Ripjaws M5 RGB",
    "Stockage : WD_black SN770 2 To (NVMe)",
    "GPU : RX 7800 XT PowerColor HellBound Spectral",
    "Boitier : Corsair 3000D RGB Airflow White",
    "PSU : ASUS Prime AP-750G",
    "Ventilation : Configurations ventilée uniquement avec des RX120 LINK"
  ],
  images: {
    cpu: "/pc-parts/cpu/i5-14600KF.png",
    gpu: "/pc-parts/gpu/7800XT POWERCOLOR HELLBOUND.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "200-220" },
      "2k": { FPS_moyen: "160-180" },
      "4k": { FPS_moyen: "100-120" }
    },
    warzone: {
      fhd: { FPS_moyen: "140-160" },
      "2k": { FPS_moyen: "120-140" },
      "4k": { FPS_moyen: "70-85" }
    },
    minecraft: {
      fhd: { FPS_moyen: "350+" },
      "2k": { FPS_moyen: "300+" },
      "4k": { FPS_moyen: "250-300" }
    },
    valorant: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "250+" },
      "4k": { FPS_moyen: "200+" }
    },
    gta: {
      fhd: { FPS_moyen: "160-180" },
      "2k": { FPS_moyen: "130-150" },
      "4k": { FPS_moyen: "80-100" }
    }
  }
};