import { PCConfigDetailed } from "../types";

export const theBeginning: PCConfigDetailed = {
  id: "thebeginning",
  name: "The Beginning",
  price: 829.96,
  description: "Ryzen 5 5600 & RX 6650 XT",
  components: [
    "AMD Ryzen 5 5600",
    "Stock AMD ventirad",
    "Gigabyte B550 GAMING X V2",
    "16 Go DDR4 3200 MHz Lexar THOR ",
    "WD_black SN770 1 To (NVMe)",
    "RX 6650 XT Speedster",
    "MSI MAG 100R",
    "MSI A650BN",
  ],
  images: {
    cpu: "/pc-parts/cpu/R5 5600.png",
    gpu: "/pc-parts/gpu/6650XT.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "120-140" },
      "2k": { FPS_moyen: "100-120" },
      "4k": { FPS_moyen: "60-70" }
    },
    warzone: {
      fhd: { FPS_moyen: "90-110" },
      "2k": { FPS_moyen: "75-90" },
      "4k": { FPS_moyen: "45-55" }
    },
    minecraft: {
      fhd: { FPS_moyen: "250+" },
      "2k": { FPS_moyen: "200+" },
      "4k": { FPS_moyen: "150-200" }
    },
    valorant: {
      fhd: { FPS_moyen: "200-250" },
      "2k": { FPS_moyen: "180-220" },
      "4k": { FPS_moyen: "130-150" }
    },
    gta: {
      fhd: { FPS_moyen: "100-120" },
      "2k": { FPS_moyen: "80-100" },
      "4k": { FPS_moyen: "50-60" }
    }
  }
};