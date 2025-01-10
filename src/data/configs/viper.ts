import { PCConfigDetailed } from "../types";

export const viper: PCConfigDetailed = {
  id: "viper",
  name: "Viper",
  price: 1233.89,
  description: "Ryzen 7 5700X & RTX 4060",
  components: [
    "AMD Ryzen 7 5700X",
    "MSI 360R V2",
    "ASUS ROG B550-F Gaming WiFi II",
    "16 Go DDR4 3200 MHz Patriot Viper Steel",
    "WD_black SN770 2 To (NVMe)",
    "RTX 4060 EAGLE OC",
    "Corsair 3000D Airflow",
    "ASUS Prime AP-750G",
  ],
  images: {
    cpu: "/pc-parts/cpu/R7 5700X.png",
    gpu: "/pc-parts/gpu/4060 EAGLE OC.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "140-160" },
      "2k": { FPS_moyen: "120-140" },
      "4k": { FPS_moyen: "65-75" }
    },
    warzone: {
      fhd: { FPS_moyen: "110-130" },
      "2k": { FPS_moyen: "95-110" },
      "4k": { FPS_moyen: "45-55" }
    },
    minecraft: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "250+" },
      "4k": { FPS_moyen: "180-220" }
    },
    valorant: {
      fhd: { FPS_moyen: "250+" },
      "2k": { FPS_moyen: "200-240" },
      "4k": { FPS_moyen: "140-170" }
    },
    gta: {
      fhd: { FPS_moyen: "130-150" },
      "2k": { FPS_moyen: "100-120" },
      "4k": { FPS_moyen: "50-60" }
    }
  }
};