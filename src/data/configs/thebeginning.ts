import { PCConfigDetailed } from "../types";
export const thebeginning: PCConfigDetailed = {
  id: "the beginning",
  name: "The Beginning",
  price: 839.38,
  description: "Ryzen 5 5600 & RX 6650 XT",
  components: [
    "CPU : AMD Ryzen 5 5600",
    "Refroidissement :Thermalright Assassin X Refined SE RGB",
    "Carte mère : Gigabyte B550M AORUS ELITE",
    "RAM : G.Skill Aegis 16 GB (2 x 8 GB) DDR4-3200 CL16",
    "Stockage : Patriot P400 Lite 1 TB (NVMe)",
    "GPU : RX 6650 XT XFX Speedster SWFT 210",
    "Boitier : Tecware Forge M2",
    "PSU : MSI MAG A650BN",
  ],
  images: {
    cpu: "/pc-parts/cpu/R5 5600.png",
    gpu: "/pc-parts/gpu/6650XT.png",
    case: "/pc-parts/case/tecware forge M2.png"
  },
  gamePerformance: {
    warzone: {
        moyen: {
            fhd: { FPS_moyen: "115" },
            "4k": { FPS_moyen: "50" }
        },
        ultra: {
            fhd: { FPS_moyen: "--" },
            "2k": { FPS_moyen: "--" },
            "4k": { FPS_moyen: "--" }
        }
    },
    cyberpunk2077: {
        moyen: {
            fhd: { FPS_moyen: "75" },
            "4k": { FPS_moyen: "25" }
        },
        ultra: {
            fhd: { FPS_moyen: "--" },
            "2k": { FPS_moyen: "--" },
            "4k": { FPS_moyen: "--" }
        }
    },
    minecraft: {
        moyen: {
            fhd: { FPS_moyen: "335" },
            "4k": { FPS_moyen: "335" }
        },
        ultra: {
            fhd: { FPS_moyen: "--" },
            "2k": { FPS_moyen: "--" },
            "4k": { FPS_moyen: "--" }
        }
    },
    rdr2: {
        moyen: {
            fhd: { FPS_moyen: "100" },
            "4k": { FPS_moyen: "45" }
        },
        ultra: {
            fhd: { FPS_moyen: "--" },
            "2k": { FPS_moyen: "--" },
            "4k": { FPS_moyen: "--" }
        }
    },
    valorant: {
        moyen: {
            fhd: { FPS_moyen: "365" },
            "4k": { FPS_moyen: "335" }
        },
        ultra: {
            fhd: { FPS_moyen: "--" },
            "2k": { FPS_moyen: "--" },
            "4k": { FPS_moyen: "--" }
        }
    }
  }
};
