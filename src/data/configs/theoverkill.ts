import { PCConfigDetailed } from "../types";

export const theOverkill: PCConfigDetailed = {
  id: "theoverkill",
  name: "The Overkill",
  price: 4499.44,
  description: "Ryzen 7 9800X3D & RTX 4080 Super",
  components: [
    "CPU : AMD Ryzen 7 9800X3D",
    "Refroidissement : ARCTIC Liquid Freezer III 360 (avec RX120)",
    "Carte mère : Gigabyte X870E AORUS MASTER",
    "RAM : 64 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
    "Stockage : Kingston KC3000 2 To (NVMe)",
    "GPU : RX 7900 XTX Sapphire NITRO+",
    "Boitier : Corsair iCUE LINK 6500X RGB",
    "PSU : Corsair RM1200x SHIFT",
    "Ventilation : Configurations ventilée uniquement avec des RX120 LINK"
  ],
  images: {
    cpu: "/pc-parts/cpu/R7 9800X3D.png",
    gpu: "/pc-parts/gpu/4080 SUPER MSI GAMING X SLIM.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "270-290" },
      "4k": { FPS_moyen: "200-220" }
    },
    warzone: {
      fhd: { FPS_moyen: "200-220" },
      "2k": { FPS_moyen: "180-200" },
      "4k": { FPS_moyen: "140-160" }
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
      "2k": { FPS_moyen: "200-220" },
      "4k": { FPS_moyen: "160-180" }
    }
  }
};
