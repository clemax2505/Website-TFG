import { PCConfigDetailed } from "../types";

export const airflowPrime: PCConfigDetailed = {
  id: "airflowprime",
  name: "Airflow Prime",
  price: 1442.18,
  description: "Ryzen 7 5800X & RX 7700 XT",
  components: [
    "AMD Ryzen 7 5800X",
    "MSI 360R V2",
    "ASUS ROG B550-F Gaming WiFi II",
    "32 Go DDR4 3600 MHz Lexar Ares RGB",
    "WD_black SN770 2 To (NVMe)",
    "RX 7700 XT Gigabyte Gaming OC",
    "Corsair 4000D Airflow",
    "ASUS Prime AP-750G",
  ],
  images: {
    cpu: "/pc-parts/cpu/R7 5800X.png",
    gpu: "/pc-parts/gpu/7700XT GIGABYTE GAMING OC.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "180-200" },
      "2k": { FPS_moyen: "140-160" },
      "4k": { FPS_moyen: "90-100" }
    },
    warzone: {
      fhd: { FPS_moyen: "120-140" },
      "2k": { FPS_moyen: "110-130" },
      "4k": { FPS_moyen: "60-70" }
    },
    minecraft: {
      fhd: { FPS_moyen: "350+" },
      "2k": { FPS_moyen: "300+" },
      "4k": { FPS_moyen: "220-250" }
    },
    valorant: {
      fhd: { FPS_moyen: "300+" },
      "2k": { FPS_moyen: "250+" },
      "4k": { FPS_moyen: "180-200" }
    },
    gta: {
      fhd: { FPS_moyen: "140-160" },
      "2k": { FPS_moyen: "120-140" },
      "4k": { FPS_moyen: "70-80" }
    }
  }
};