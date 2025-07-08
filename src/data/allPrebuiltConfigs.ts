
import { PCConfigDetailed } from "./types";

export const allPrebuiltConfigs: PCConfigDetailed[] = [
  {
    id: "thebeginning",
    name: "The Beginning",
    price: 799.99,
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
    price: 974.99,
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
      case: "/pc-parts/case/msi mag forge 100r noir.png"
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
    price: 1149.99,
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
    id: "ares",
    name: "Ares",
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
      cpu: "/pc-parts/cpu/R7 7700.png",
      gpu: "/pc-parts/gpu/6750XT.png",
      case: "/pc-parts/case/corsair 3000d rgb airflow.png"
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
    id: "thelegend",
    name: "The legend",
    price: 1699.99,
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
      gpu: "/pc-parts/gpu/9070 OC ASROCK STEEL LEGEND.png",
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
    id: "2kking",
    name: "2K King",
    price: 1999.99,
    description: "Ryzen 7 7800X3D & RX 7900 XT",
    components: [
      "CPU : AMD Ryzen 7 7800X3D",
      "Refroidissement : Thermalright Frozen Notte ARGB 360",
      "Carte mère : Gigabyte B650 EAGLE AX",
      "RAM : G.Skill Trident Z5 Neo RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : Western Digital Black SN770 2 TB (NVMe)",
      "GPU : RX 7900 XT XFX Speedster MERC 310",
      "Boitier : Phanteks XT PRO ULTRA",
      "PSU : Gigabyte P1000GM",
    ],
    images: {
      cpu: "/pc-parts/cpu/R7 7800X3D.png",
      gpu: "/pc-parts/gpu/7900XT.png",
      case: "/pc-parts/case/fractal design pop xl air rgb.png"
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
    id: "skillissues",
    name: "Skill Issues",
    price: 2999.99,
    description: "Ryzen 7 9800X3D & RTX 5080",
    components: [
      "CPU : AMD Ryzen 7 9800X3D",
      "Refroidissement : ARCTIC Liquid Freezer III 360 A-RGB",
      "Carte mère : Gigabyte B850 AORUS ELITE WIFI7",
      "RAM : G.Skill Trident Z5 Neo RGB 64 GB (2 x 32 GB) DDR5-6000 CL30",
      "Stockage : Western Digital Black SN850X 2 TB (NVMe)",
      "GPU : Gigabyte GAMING OC GeForce RTX 5080",
      "Boitier : Corsair 6500X",
      "PSU : Corsair RM1000e",
      "Ventilation : Configurations ventilée uniquement avec des Corsair RS120 ARGB"
    ],
    images: {
      cpu: "/pc-parts/cpu/R7 9800X3D.png",
      gpu: "/pc-parts/gpu/5080 GIGABYTE GAMING OC.png",
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
