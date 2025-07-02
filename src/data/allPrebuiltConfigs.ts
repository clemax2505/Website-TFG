
import { PCConfigDetailed } from "./types";

export const allPrebuiltConfigs: PCConfigDetailed[] = [
  {
    id: "thebeginning",
    name: "The Beginning",
    price: 800.00,
    description: "Ryzen 5 5600 & RX 6650 XT",
    components: [
      "CPU : AMD Ryzen 5 5600",
      "Refroidissement :Thermalright Assassin X Refined SE RGB",
      "Carte mère : Gigabyte B550M AORUS ELITE AX",
      "RAM : Lexar THOR 16 GB (2 x 8 GB) DDR4-3200 CL16",
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
  },
  {
    id: "littleguy",
    name: "Little Guy",
    price: 975.00,
    description: "Ryzen 5 7500F & RX 6650 XT",
    components: [
      "CPU : AMD Ryzen 5 7500F",
      "Refroidissement : Thermalright Assassin X Refined SE RGB",
      "Carte mère : Gigabyte B650 EAGLE AX",
      "RAM : Lexar Ares RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : KIOXIA EXCERIA G2 1 TB(NVMe)",
      "GPU : RX 6650 XT XFX Speedster SWFT 210",
      "Boitier : MSI MAG FORGE 100R",
      "PSU : MSI MAG A650BN",
    ],
    images: {
      cpu: "/pc-parts/cpu/R5 7500F.png",
      gpu: "/pc-parts/gpu/6650XT.png",
      case: "/pc-parts/case/msi mag forge 100R noir.png"
    },
    gamePerformance: {
      warzone: {
        moyen: {
          fhd: { FPS_moyen: "100-120" },
          "4k": { FPS_moyen: "50-60" }
        },
        ultra: {
          fhd: { FPS_moyen: "85-100" },
          "2k": { FPS_moyen: "70-85" },
          "4k": { FPS_moyen: "40-50" }
        }
      },
      cyberpunk2077: {
        moyen: {
          fhd: { FPS_moyen: "90-110" },
          "4k": { FPS_moyen: "45-55" }
        },
        ultra: {
          fhd: { FPS_moyen: "65-80" },
          "2k": { FPS_moyen: "50-60" },
          "4k": { FPS_moyen: "30-35" }
        }
      },
      minecraft: {
        moyen: {
          fhd: { FPS_moyen: "300+" },
          "4k": { FPS_moyen: "180-220" }
        },
        ultra: {
          fhd: { FPS_moyen: "250+" },
          "2k": { FPS_moyen: "200+" },
          "4k": { FPS_moyen: "150-180" }
        }
      },
      rdr2: {
        moyen: {
          fhd: { FPS_moyen: "110-130" },
          "4k": { FPS_moyen: "55-65" }
        },
        ultra: {
          fhd: { FPS_moyen: "90-110" },
          "2k": { FPS_moyen: "70-80" },
          "4k": { FPS_moyen: "45-50" }
        }
      },
      valorant: {
        moyen: {
          fhd: { FPS_moyen: "220-270" },
          "4k": { FPS_moyen: "140-170" }
        },
        ultra: {
          fhd: { FPS_moyen: "200-240" },
          "2k": { FPS_moyen: "170-190" },
          "4k": { FPS_moyen: "120-140" }
        }
      }
    }
  },
  {
    id: "cheapy",
    name: "Cheapy",
    price: 1150.00,
    description: "Ryzen 5 7600X & RX 6750 XT",
    components: [
      "CPU : AMD Ryzen 5 7600X",
      "Refroidissement : Thermalright Assassin X Refined SE RGB",
      "Carte mère : Gigabyte B650 EAGLE AX",
      "RAM : Lexar Ares 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : Patriot P400 Lite 1 TB (NVMe)",
      "GPU : RX 6750 XT XFX Speedster QICK 319",
      "Boitier : MSI MAG FORGE 112R",
      "PSU : MSI MAG A650BN",
    ],
    images: {
      cpu: "/pc-parts/cpu/R5 7500F.png",
      gpu: "/pc-parts/gpu/6750XT.png",
      case: "/pc-parts/case/msi mag forge 112r noir.png"
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
          fhd: { FPS_moyen: "120-140" },
          "4k": { FPS_moyen: "60-70" }
        },
        ultra: {
          fhd: { FPS_moyen: "90-110" },
          "2k": { FPS_moyen: "70-85" },
          "4k": { FPS_moyen: "40-50" }
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
          fhd: { FPS_moyen: "130-150" },
          "4k": { FPS_moyen: "70-80" }
        },
        ultra: {
          fhd: { FPS_moyen: "100-120" },
          "2k": { FPS_moyen: "80-95" },
          "4k": { FPS_moyen: "45-55" }
        }
      },
      valorant: {
        moyen: {
          fhd: { FPS_moyen: "400+" },
          "4k": { FPS_moyen: "300+" }
        },
        ultra: {
          fhd: { FPS_moyen: "350+" },
          "2k": { FPS_moyen: "300+" },
          "4k": { FPS_moyen: "250+" }
        }
      }
    }
  },
  {
    id: "viper",
    name: "Viper",
    price: 1499.99,
    description: "Ryzen 5 7700 & RX 7800 XT",
    components: [
      "CPU : AMD Ryzen 5 7700",
      "Refroidissement : Thermalright Frozen Notte ARGB 240",
      "Carte mère : Gigabyte B650 EAGLE AX",
      "RAM : Lexar Ares RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : Patriot P400 Lite 2 TB (NVMe)",
      "GPU : RX 7800 XT XFX Speedster QICK 319",
      "Boitier : Corsair 3000D RGB AIRFLOW",
      "PSU : MSI MAG A650GL",
    ],
    images: {
      cpu: "/pc-parts/cpu/R7 7600X.png",
      gpu: "/pc-parts/gpu/6750XT.png",
      case: "/pc-parts/case/300D noir.png"
    },
    gamePerformance: {
      warzone: {
        moyen: {
          fhd: { FPS_moyen: "110-130" },
          "4k": { FPS_moyen: "45-55" }
        },
        ultra: {
          fhd: { FPS_moyen: "95-110" },
          "2k": { FPS_moyen: "80-95" },
          "4k": { FPS_moyen: "35-45" }
        }
      },
      cyberpunk2077: {
        moyen: {
          fhd: { FPS_moyen: "100-120" },
          "4k": { FPS_moyen: "50-60" }
        },
        ultra: {
          fhd: { FPS_moyen: "75-90" },
          "2k": { FPS_moyen: "60-70" },
          "4k": { FPS_moyen: "35-40" }
        }
      },
      minecraft: {
        moyen: {
          fhd: { FPS_moyen: "300+" },
          "4k": { FPS_moyen: "180-220" }
        },
        ultra: {
          fhd: { FPS_moyen: "250+" },
          "2k": { FPS_moyen: "200+" },
          "4k": { FPS_moyen: "150-180" }
        }
      },
      rdr2: {
        moyen: {
          fhd: { FPS_moyen: "130-150" },
          "4k": { FPS_moyen: "50-60" }
        },
        ultra: {
          fhd: { FPS_moyen: "100-120" },
          "2k": { FPS_moyen: "75-85" },
          "4k": { FPS_moyen: "40-45" }
        }
      },
      valorant: {
        moyen: {
          fhd: { FPS_moyen: "250+" },
          "4k": { FPS_moyen: "140-170" }
        },
        ultra: {
          fhd: { FPS_moyen: "200-240" },
          "2k": { FPS_moyen: "180-200" },
          "4k": { FPS_moyen: "120-140" }
        }
      }
    }
  },
  {
    id: "pulsar",
    name: "Pulsar",
    price: 1699,
    description: "Ryzen 5 7700 & RX 9070",
    components: [
      "CPU : AMD Ryzen 5 7700",
      "Refroidissement : Thermalright Frozen Notte ARGB 360",
      "Carte mère : Gigabyte B650 EAGLE AX",
      "RAM : Lexar Ares RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : KIOXIA EXCERIA G2 2 TB (NVMe)",
      "GPU : ASRock Steel Legend OC Radeon RX 9070",
      "Boitier : Phanteks XT PRO ULTRA",
      "PSU : MSI MAG A750GL",
    ],
    images: {
      cpu: "/pc-parts/cpu/R5 7600X.png",
      gpu: "/pc-parts/gpu/7800XT PULSE.png",
      case: "/pc-parts/case/phanteks xt pro ultra noir.png"
    },
    gamePerformance: {
      warzone: {
        moyen: {
          fhd: { FPS_moyen: "120-140" },
          "4k": { FPS_moyen: "60-70" }
        },
        ultra: {
          fhd: { FPS_moyen: "110-130" },
          "2k": { FPS_moyen: "90-110" },
          "4k": { FPS_moyen: "50-60" }
        }
      },
      cyberpunk2077: {
        moyen: {
          fhd: { FPS_moyen: "110-130" },
          "4k": { FPS_moyen: "55-65" }
        },
        ultra: {
          fhd: { FPS_moyen: "85-100" },
          "2k": { FPS_moyen: "65-75" },
          "4k": { FPS_moyen: "40-45" }
        }
      },
      minecraft: {
        moyen: {
          fhd: { FPS_moyen: "350+" },
          "4k": { FPS_moyen: "220-250" }
        },
        ultra: {
          fhd: { FPS_moyen: "300+" },
          "2k": { FPS_moyen: "250+" },
          "4k": { FPS_moyen: "180-200" }
        }
      },
      rdr2: {
        moyen: {
          fhd: { FPS_moyen: "140-160" },
          "4k": { FPS_moyen: "70-80" }
        },
        ultra: {
          fhd: { FPS_moyen: "120-140" },
          "2k": { FPS_moyen: "95-110" },
          "4k": { FPS_moyen: "55-65" }
        }
      },
      valorant: {
        moyen: {
          fhd: { FPS_moyen: "300+" },
          "4k": { FPS_moyen: "180-200" }
        },
        ultra: {
          fhd: { FPS_moyen: "250+" },
          "2k": { FPS_moyen: "200+" },
          "4k": { FPS_moyen: "150-170" }
        }
      }
    }
  },
  {
    id: "phantomatic",
    name: "Phantomatic",
    price: 1790.61,
    description: "Ryzen 7 7700X & RX 7800 XT",
    components: [
      "CPU : AMD Ryzen 7 7700X",
      "Refroidissement : ARCTIC Liquid Freezer III 240 A-RGB",
      "Carte mère : Gigabyte B650 EAGLE AX",
      "RAM : Kingston FURY Beast RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : Western Digital Black SN770 2 TB (NVMe)",
      "GPU : RX 7800 XT ASRock Phantom Gaming OC",
      "Boitier : MSI MAG FORGE 100R",
      "PSU : MSI MAG A850GL",
    ],
    images: {
      cpu: "/pc-parts/cpu/R7 7700X.png",
      gpu: "/pc-parts/gpu/7800XT ASROCK PHANTOM GAMING.png",
      case: "/pc-parts/case/msi mag forge 100r noir.png"
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
          "4k": { FPS_moyen: "80-100" }
        }
      },
      cyberpunk2077: {
        moyen: {
          fhd: { FPS_moyen: "130-150" },
          "4k": { FPS_moyen: "65-75" }
        },
        ultra: {
          fhd: { FPS_moyen: "100-120" },
          "2k": { FPS_moyen: "80-95" },
          "4k": { FPS_moyen: "50-60" }
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
          "4k": { FPS_moyen: "300+" }
        }
      },
      rdr2: {
        moyen: {
          fhd: { FPS_moyen: "160-180" },
          "4k": { FPS_moyen: "85-95" }
        },
        ultra: {
          fhd: { FPS_moyen: "140-160" },
          "2k": { FPS_moyen: "110-130" },
          "4k": { FPS_moyen: "70-80" }
        }
      },
      valorant: {
        moyen: {
          fhd: { FPS_moyen: "400+" },
          "4k": { FPS_moyen: "300+" }
        },
        ultra: {
          fhd: { FPS_moyen: "350+" },
          "2k": { FPS_moyen: "300+" },
          "4k": { FPS_moyen: "250+" }
        }
      }
    }
  },
  {
    id: "arcticold",
    name: "Arcticold",
    price: 2042.93,
    description: "Ryzen 7 7700X & RX 7900 GRE",
    components: [
      "CPU : AMD Ryzen 7 7700X",
      "Refroidissement : ARCTIC Liquid Freezer III 360 A-RGB",
      "Carte mère : Gigabyte B650 EAGLE AX",
      "RAM : Lexar Ares RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : Western Digital Black SN770 2 TB (NVMe)",
      "GPU : RX 7900 GRE XFX",
      "Boitier : Corsair 6500X",
      "PSU : MSI MPG A1000G",
      "Ventilation : Configurations ventilée uniquement avec des ARCTIC P12"
    ],
    images: {
      cpu: "/pc-parts/cpu/R7 7700X.png",
      gpu: "/pc-parts/gpu/7900GRE.png",
      case: "/pc-parts/case/6500x noir.png"
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
          "4k": { FPS_moyen: "90-110" }
        }
      },
      cyberpunk2077: {
        moyen: {
          fhd: { FPS_moyen: "140-160" },
          "4k": { FPS_moyen: "70-80" }
        },
        ultra: {
          fhd: { FPS_moyen: "110-130" },
          "2k": { FPS_moyen: "85-100" },
          "4k": { FPS_moyen: "55-65" }
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
          fhd: { FPS_moyen: "170-190" },
          "4k": { FPS_moyen: "90-110" }
        },
        ultra: {
          fhd: { FPS_moyen: "150-170" },
          "2k": { FPS_moyen: "120-140" },
          "4k": { FPS_moyen: "75-85" }
        }
      },
      valorant: {
        moyen: {
          fhd: { FPS_moyen: "400+" },
          "4k": { FPS_moyen: "300+" }
        },
        ultra: {
          fhd: { FPS_moyen: "350+" },
          "2k": { FPS_moyen: "300+" },
          "4k": { FPS_moyen: "250+" }
        }
      }
    }
  },
  {
    id: "infinity",
    name: "Infinity",
    price: 2397.78,
    description: "Ryzen 7 9700X & RX 7900 XTX",
    components: [
      "CPU : AMD Ryzen 7 9700X",
      "Refroidissement : ARCTIC Liquid Freezer III 240 A-RGB (avec SL-Infinity)",
      "Carte mère : Gigabyte B650 EAGLE AX",
      "RAM : G.Skill Ripjaws M5 RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : Western Digital Black SN770 2 TB (NVMe)",
      "GPU : RX 7900 XTX XFX Speedster MERC 310",
      "Boitier : Lian Li O11 Dynamic Mini ",
      "PSU : Corsair SF1000L",
      "Ventilation : Configurations ventilée uniquement avec des SL-Infinity"
    ],
    images: {
      cpu: "/pc-parts/cpu/R7 9700X.png",
      gpu: "/pc-parts/gpu/7900XTX.png",
      case: "/pc-parts/case/O11 dynamic mini.png"
    },
    gamePerformance: {
      warzone: {
        moyen: {
          fhd: { FPS_moyen: "150-170" },
          "4k": { FPS_moyen: "80-100" }
        },
        ultra: {
          fhd: { FPS_moyen: "130-150" },
          "2k": { FPS_moyen: "110-130" },
          "4k": { FPS_moyen: "65-75" }
        }
      },
      cyberpunk2077: {
        moyen: {
          fhd: { FPS_moyen: "160-180" },
          "4k": { FPS_moyen: "85-95" }
        },
        ultra: {
          fhd: { FPS_moyen: "130-150" },
          "2k": { FPS_moyen: "105-120" },
          "4k": { FPS_moyen: "70-80" }
        }
      },
      minecraft: {
        moyen: {
          fhd: { FPS_moyen: "400+" },
          "4k": { FPS_moyen: "300+" }
        },
        ultra: {
          fhd: { FPS_moyen: "350+" },
          "2k": { FPS_moyen: "300+" },
          "4k": { FPS_moyen: "250+" }
        }
      },
      rdr2: {
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
      valorant: {
        moyen: {
          fhd: { FPS_moyen: "300+" },
          "4k": { FPS_moyen: "220+" }
        },
        ultra: {
          fhd: { FPS_moyen: "280+" },
          "2k": { FPS_moyen: "240+" },
          "4k": { FPS_moyen: "180+" }
        }
      }
    }
  },
  {
    id: "thehellhound",
    name: "The Hellhound",
    price: 2459.44,
    description: "Ryzen 7 9700X & RX 7900 XT",
    components: [
      "CPU : AMD Ryzen 7 7800X3D",
      "Refroidissement : ARCTIC Liquid Freezer III 240 A-RGB Blanc",
      "Carte mère : Gigabyte B650 AORUS ELITE AX ICE",
      "RAM : G.Skill Ripjaws M5 RGB 32 GB (2 x 16 GB) DDR5-6000 CL30 Blanc",
      "Stockage : Kingston KC3000 2.048 TB(NVMe)",
      "GPU : RX 7900 XTX PowerColor Hellhound OC",
      "Boitier : Corsair 4000D Airflow",
      "PSU : MSI MAG A850GL",
      "Ventilation : Configurations ventilée uniquement avec des SP120 Blanc"
    ],
    images: {
      cpu: "/pc-parts/cpu/R7 9800X3D.png",
      gpu: "/pc-parts/gpu/7900XTX POWERCOLOR HELLBOUND.png",
      case: "/pc-parts/case/4000D white.png"
    },
    gamePerformance: {
      warzone: {
        moyen: {
          fhd: { FPS_moyen: "140-160" },
          "4k": { FPS_moyen: "70-85" }
        },
        ultra: {
          fhd: { FPS_moyen: "120-140" },
          "2k": { FPS_moyen: "100-120" },
          "4k": { FPS_moyen: "60-70" }
        }
      },
      cyberpunk2077: {
        moyen: {
          fhd: { FPS_moyen: "150-170" },
          "4k": { FPS_moyen: "75-85" }
        },
        ultra: {
          fhd: { FPS_moyen: "120-140" },
          "2k": { FPS_moyen: "95-110" },
          "4k": { FPS_moyen: "65-75" }
        }
      },
      minecraft: {
        moyen: {
          fhd: { FPS_moyen: "350+" },
          "4k": { FPS_moyen: "250-300" }
        },
        ultra: {
          fhd: { FPS_moyen: "300+" },
          "2k": { FPS_moyen: "250+" },
          "4k": { FPS_moyen: "200+" }
        }
      },
      rdr2: {
        moyen: {
          fhd: { FPS_moyen: "160-180" },
          "4k": { FPS_moyen: "80-100" }
        },
        ultra: {
          fhd: { FPS_moyen: "130-150" },
          "2k": { FPS_moyen: "110-125" },
          "4k": { FPS_moyen: "70-80" }
        }
      },
      valorant: {
        moyen: {
          fhd: { FPS_moyen: "300+" },
          "4k": { FPS_moyen: "200+" }
        },
        ultra: {
          fhd: { FPS_moyen: "250+" },
          "2k": { FPS_moyen: "220+" },
          "4k": { FPS_moyen: "170+" }
        }
      }
    }
  },
  {
    id: "nitrous",
    name: "Nitrous",
    price: 2838.09,
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
  },
  {
    id: "tuffy",
    name: "Tuffy",
    price: 2997.95,
    description: "Ryzen 7 9800X3D & RTX 4070 Ti SUPER",
    components: [
      "CPU : AMD Ryzen 7 7800X3D",
      "Refroidissement : Asus TUF Gaming LC II ARGB",
      "Carte mère : Asus TUF GAMING B650-PLUS WIFI ATX",
      "RAM : G.Skill Ripjaws M5 RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : Patriot P400 Lite 2 TB (NVMe)",
      "GPU : RTX 4070 Ti SUPER Asus TUF GAMING OC",
      "Boitier : Asus TUF Gaming GT502 Plus",
      "PSU : Asus TUF Gaming 1000G",
      "Ventilation : Configurations ventilée uniquement avec des TF120"
    ],
    images: {
      cpu: "/pc-parts/cpu/R7 9800X3D.png",
      gpu: "/pc-parts/gpu/4070 Ti SUPER TUF GAMING OC.png",
      case: "/pc-parts/case/tuf gt502 plus noir.png"
    },
    gamePerformance: {
      warzone: {
        moyen: {
          fhd: { FPS_moyen: "160-180" },
          "4k": { FPS_moyen: "100-120" }
        },
        ultra: {
          fhd: { FPS_moyen: "140-160" },
          "2k": { FPS_moyen: "120-140" },
          "4k": { FPS_moyen: "80-100" }
        }
      },
      cyberpunk2077: {
        moyen: {
          fhd: { FPS_moyen: "140-160" },
          "4k": { FPS_moyen: "70-80" }
        },
        ultra: {
          fhd: { FPS_moyen: "110-130" },
          "2k": { FPS_moyen: "85-100" },
          "4k": { FPS_moyen: "55-65" }
        }
      },
      minecraft: {
        moyen: {
          fhd: { FPS_moyen: "450+" },
          "4k": { FPS_moyen: "350+" }
        },
        ultra: {
          fhd: { FPS_moyen: "400+" },
          "2k": { FPS_moyen: "350+" },
          "4k": { FPS_moyen: "300+" }
        }
      },
      rdr2: {
        moyen: {
          fhd: { FPS_moyen: "180-200" },
          "4k": { FPS_moyen: "110-130" }
        },
        ultra: {
          fhd: { FPS_moyen: "150-170" },
          "2k": { FPS_moyen: "125-140" },
          "4k": { FPS_moyen: "90-105" }
        }
      },
      valorant: {
        moyen: {
          fhd: { FPS_moyen: "400+" },
          "4k": { FPS_moyen: "250+" }
        },
        ultra: {
          fhd: { FPS_moyen: "350+" },
          "2k": { FPS_moyen: "300+" },
          "4k": { FPS_moyen: "220+" }
        }
      }
    }
  },
  {
    id: "chillguy",
    name: "Chill Guy",
    price: 3181.69,
    description: "Ryzen 7 9800X3D & RX 7900 XTX",
    components: [
      "CPU : AMD Ryzen 7 7800X3D",
      "Refroidissement : ARCTIC Liquid Freezer III 360 A-RGB (avec RX120)",
      "Carte mère : Gigabyte B850 AORUS ELITE WIFI7 ATX",
      "RAM : G.Skill Trident Z5 Neo RGB 64 GB (2 x 32 GB) DDR5-6000 CL30",
      "Stockage : Kingston KC3000 2.048 TB (NVMe)",
      "GPU : RX 7900 XTX Sapphire NITRO+",
      "Boitier : Antec C8",
      "PSU : MSI MPG A1000G",
      "Ventilation : Configurations ventilée uniquement avec des AF120"
    ],
    images: {
      cpu: "/pc-parts/cpu/R7 9800X3D.png",
      gpu: "/pc-parts/gpu/7900XTX SAPPHIRE NITRO.png",
      case: "/pc-parts/case/antec c8.png"
    },
    gamePerformance: {
      warzone: {
        moyen: {
          fhd: { FPS_moyen: "200-220" },
          "4k": { FPS_moyen: "130-150" }
        },
        ultra: {
          fhd: { FPS_moyen: "170-190" },
          "2k": { FPS_moyen: "150-170" },
          "4k": { FPS_moyen: "110-130" }
        }
      },
      cyberpunk2077: {
        moyen: {
          fhd: { FPS_moyen: "180-200" },
          "4k": { FPS_moyen: "95-110" }
        },
        ultra: {
          fhd: { FPS_moyen: "150-170" },
          "2k": { FPS_moyen: "125-140" },
          "4k": { FPS_moyen: "80-95" }
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
          fhd: { FPS_moyen: "220-240" },
          "4k": { FPS_moyen: "150-170" }
        },
        ultra: {
          fhd: { FPS_moyen: "190-210" },
          "2k": { FPS_moyen: "160-180" },
          "4k": { FPS_moyen: "125-145" }
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
  },
  {
    id: "neonotte",
    name: "Neo Notte",
    price: 3158.44,
    description: "Ryzen 7 9800X3D & RTX 4080 SUPER",
    components: [
      "CPU : AMD Ryzen 7 7800X3D",
      "Refroidissement : Thermalright Frozen Notte ARGB",
      "Carte mère : Gigabyte X870E AORUS ELITE WIFI7",
      "RAM : G.Skill Trident Z5 Neo RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : Western Digital WD_Black SN850X 2 TB (NVMe)",
      "GPU : RTX 4080 SUPER Palit GamingPro",
      "Boitier : Thermaltake View 270 Plus TG ARGB",
      "PSU : MSI MPG A1000G",
      "Ventilation : Configurations ventilée uniquement avec des CT120"
    ],
    images: {
      cpu: "/pc-parts/cpu/R7 9800X3D.png",
      gpu: "/pc-parts/gpu/4080 SUPER PALIT GAMING OC.png",
      case: "/pc-parts/case/view 270 plus tg argb noir.png"
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
          fhd: { FPS_moyen: "160-180" },
          "4k": { FPS_moyen: "85-95" }
        },
        ultra: {
          fhd: { FPS_moyen: "130-150" },
          "2k": { FPS_moyen: "105-120" },
          "4k": { FPS_moyen: "70-80" }
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
          "2k": { FPS_moyen: "145-160" },
          "4k": { FPS_moyen: "115-130" }
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
  },
  {
    id: "themaster",
    name: "The Master",
    price: 3941.15,
    description: "Ryzen 7 9800X3D & RTX 4080 SUPER",
    components: [
      "CPU : AMD Ryzen 7 9800X3D",
      "Refroidissement : ARCTIC Liquid Freezer III 360 A-RGB (avec RX120)",
      "Carte mère : Gigabyte X870E AORUS MASTER",
      "RAM : G.Skill Trident Z5 Neo RGB 64 GB (2 x 32 GB) DDR5-6000 CL30",
      "Stockage : Kingston KC3000 2.048 TB (NVMe)",
      "GPU : RTX 4080 SUPER PNY XLR8 Gaming VERTO EPIC-X RGB OC",
      "Boitier : HYTE Y70",
      "PSU : MSI MPG A1000G ",
      "Ventilation : Configurations ventilée uniquement avec des RX120"
    ],
    images: {
      cpu: "/pc-parts/cpu/R7 9800X3D.png",
      gpu: "/pc-parts/gpu/4080 SUPER PNY EPIC-X RGB.png",
      case: "/pc-parts/case/hyte y70 noir.png"
    },
    gamePerformance: {
      warzone: {
        moyen: {
          fhd: { FPS_moyen: "190-210" },
          "4k": { FPS_moyen: "130-150" }
        },
        ultra: {
          fhd: { FPS_moyen: "160-180" },
          "2k": { FPS_moyen: "140-160" },
          "4k": { FPS_moyen: "110-130" }
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
          fhd: { FPS_moyen: "210-230" },
          "4k": { FPS_moyen: "150-170" }
        },
        ultra: {
          fhd: { FPS_moyen: "180-200" },
          "2k": { FPS_moyen: "155-170" },
          "4k": { FPS_moyen: "125-140" }
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
  },
  {
    id: "theoverkill",
    name: "The Overkill",
    price: 6323.31,
    description: "Ryzen 9 9950X & RTX 4090",
    components: [
      "CPU : AMD Ryzen 9 9950X",
      "Refroidissement : ARCTIC Liquid Freezer III 420 A-RGB (avec AF120)",
      "Carte mère : Asus ROG CROSSHAIR X870E HERO",
      "RAM : G.Skill Trident Z5 Neo RGB 64 GB (4 x 16 GB) DDR5-6000 CL30",
      "Stockage : Samsung 990 Pro 4 TB (NVMe)",
      "GPU : RTX 4090 Asus ROG STRIX GAMING OC",
      "Boitier : Corsair iCUE 7000X RGB",
      "PSU : SeaSonic VERTEX GX-1200",
      "Ventilation : Configurations ventilée uniquement avec des RX140"
    ],
    images: {
      cpu: "/pc-parts/cpu/R9 9950X.png",
      gpu: "/pc-parts/gpu/4090 ASUS ROG STRIX.png",
      case: "/pc-parts/case/7000x rgb.png"
    },
    gamePerformance: {
      warzone: {
        moyen: {
          fhd: { FPS_moyen: "200-220" },
          "4k": { FPS_moyen: "140-160" }
        },
        ultra: {
          fhd: { FPS_moyen: "180-200" },
          "2k": { FPS_moyen: "160-180" },
          "4k": { FPS_moyen: "120-140" }
        }
      },
      cyberpunk2077: {
        moyen: {
          fhd: { FPS_moyen: "190-210" },
          "4k": { FPS_moyen: "110-130" }
        },
        ultra: {
          fhd: { FPS_moyen: "160-180" },
          "2k": { FPS_moyen: "135-150" },
          "4k": { FPS_moyen: "90-105" }
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
          fhd: { FPS_moyen: "220-240" },
          "4k": { FPS_moyen: "160-180" }
        },
        ultra: {
          fhd: { FPS_moyen: "200-220" },
          "2k": { FPS_moyen: "175-195" },
          "4k": { FPS_moyen: "140-160" }
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
  }
];

// Fonction utilitaire pour obtenir une configuration par ID
export const getConfigById = (id: string): PCConfigDetailed | undefined => {
  return allPrebuiltConfigs.find(config => config.id === id);
};

// Fonction utilitaire pour obtenir toutes les configurations sous forme d'objet indexé
export const getConfigsAsObject = (): { [key: string]: PCConfigDetailed } => {
  const configsObject: { [key: string]: PCConfigDetailed } = {};
  allPrebuiltConfigs.forEach(config => {
    configsObject[config.id] = config;
  });
  return configsObject;
};
