import { PCConfig } from "@/components/prebuilt/types";

export interface PCPerformance {
  ultra: number;
  high: number;
  medium: number;
  low: number;
}

export interface GamePerformance {
  fhd: PCPerformance;
  "2k": PCPerformance;
  "4k": PCPerformance;
}

export interface PCConfigDetailed extends PCConfig {
  components: string[];
  images: {
    cpu: string;
    gpu: string;
  };
  gamePerformance: {
    fortnite: GamePerformance;
    warzone: GamePerformance;
    minecraft: GamePerformance;
    valorant: GamePerformance;
    gta: GamePerformance;
  };
}

export const prebuiltConfigs: { [key: string]: PCConfigDetailed } = {
 thebeginning: {
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
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      warzone: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      minecraft: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      valorant: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      gta: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      }
    }
  },
 littleguy: {
    id: "littleguy",
    name: "Little Guy",
    price: 1041.35,
    description: "Ryzen 5 5600 & RX 6750 XT",
    components: [
      "AMD Ryzen 5 5600",
    "Be Quiet Pure Rock 2",
    "MSI B550-A PRO",
    "16 Go DDR4 3200 MHz Kingston Fury Beast",
    "WD_black SN770 1 To (NVMe)",
    "RX 6750 XT Speedster",
    "MSI MAG 120A Airflow",
    "MSI A650BN",
   ],
    images: {
      cpu: "/pc-parts/cpu/R5 5600.png",
      gpu: "/pc-parts/gpu/6750XT.png"
    },
    gamePerformance: {
      fortnite: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      warzone: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      minecraft: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      valorant: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      gta: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      }
    }
  },
 viper: {
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
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      warzone: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      minecraft: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      valorant: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      gta: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      }
    }
  },
 airflowprime: {
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
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      warzone: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      minecraft: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      valorant: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      gta: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      }
    }
  },
 thehellbound: {
    id: "thehellbound",
    name: "The HellBound",
    price: 1978.89,
    description: "i5-14600KF & RX 7800 XT",
    components: [
     "Intel Core i5-14600KF",
     "arctic liquid freezer III Whtie",
     "ASUS Prime Z790-P WiFi",
     "32 Go DDR5 6000 MHz G.Skill Ripjaws M5 RGB",
     "WD_black SN770 2 To (NVMe)",
     "RX 7800 XT PowerColor HellBound Spectral",
     "Corsair 3000D RGB Airflow White",
     "ASUS Prime AP-750G",
     "Configurations ventilée uniquement avec des RX120 LINK",
  ],
    images: {
      cpu: "/pc-parts/cpu/i5-14600KF.png",
      gpu: "/pc-parts/gpu/7800XT POWERCOLOR HELLBOUND.png"
    },
    gamePerformance: {
      fortnite: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      warzone: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      minecraft: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      valorant: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      gta: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      }
    }
  },
 infinity: {
    id: "infinity",
    name: "Infinity",
    price: 2460.64,
    description: "Intel i5-14600KF & RTX 4070 Super",
    components: [
     "Intel Core i5-14600KF",
     "MSI 360R V2",
     "MSI MPG Z790 Edge TI Max WiFi",
     "32 Go DDR5 6000 MHz Lexar THOR RGB",
     "WD_black SN770 2 To (NVMe)",
     "RTX 4070 super Zotac Twin Edge",
     "Lian Li O11 Dynamic Mini",
     "Corsair SF1000",
     "Configurations ventilée uniquement avec des SL Infinity",
  ],
    images: {
      cpu: "/pc-parts/cpu/i5-14600KF.png",
      gpu: "/pc-parts/gpu/4070 TI SUPER TUF GAMING OC.png"
    },
    gamePerformance: {
      fortnite: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      warzone: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      minecraft: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      valorant: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      gta: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      }
    }
  },
 tuffy: {
    id: "tuffy",
    name: "Tuffy",
    price: 2610.98,
    description: "i7-14700KF & RTX 4070 Ti super",
    components: [
     "Intel Core i7-14700KF",
     "ASUS TUF LC II 360 ARGB",
     "Gigabyte Z790 AORUS Pro X WiFi 7",
     "32 Go DDR5 6000 MHz Lexar THOR RGB",
     "WD_black SN770 2 To (NVMe)",
     "RTX 4070 Ti super TUF GAMING OC",
     "Corsair 3000D Airflow",
     "ASUS TUF Gaming 1000G",
     "Configurations ventilée uniquement avec des TF120",
  ],
    images: {
      cpu: "/pc-parts/cpu/i7-14700KF.png",
      gpu: "/pc-parts/gpu/6650XT.png"
    },
    gamePerformance: {
      fortnite: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      warzone: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      minecraft: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      valorant: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      gta: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      }
    }
  },
 thetaichi: {
    id: "thetaichi",
    name: "The Taichi",
    price: 2938.45,
    description: "Ryzen 7 7800X3D & RX 7900 XTX",
    components: [
     "AMD Ryzen 7 7800X3D",
     "ARCTIC Liquid Freezer III 360 (avec AF120)",
     "MSI X670E GAMING PLUS WIFI",
     "32 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
     "KingStone KC3000 2 To (NVMe)",
     "RX 7900 XTX ASRock Taichi white",
     "Corsair 5000D RGB Airflow",
     "Corsair RM1000X",
     "Configurations ventilée uniquement avec des AF120",
  ],
    images: {
      cpu: "/pc-parts/cpu/R7 7800X3D.png",
      gpu: "/pc-parts/gpu/7900XTX TAICHI.png"
    },
    gamePerformance: {
      fortnite: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      warzone: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      minecraft: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      valorant: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      gta: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      }
    }
  },
 chillguy: {
    id: "chillguy",
    name: "Chill Guy",
    price: 3349.96,
    description: "i9-14900KF & RTX 4080 Super",
    components: [
     "Intel Core i9-14900KF",
     "Corsair iCUE Link TITAN 360 RGB",
     "Gigabyte Z790 AORUS Master X",
     "64 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
     "KingStone KC3000 2 To (NVMe)",
     "RTX 4080 Super PNY Epic-X-RGB",
     "Antec C8",
     "Corsair RM1000X",
     "Configurations ventilée uniquement avec des RX120 LINK",
  ],
    images: {
      cpu: "/pc-parts/cpu/i9-14900KF.png",
      gpu: "/pc-parts/gpu/4080 SUPER PNY EPIC-X RGB.png"
    },
    gamePerformance: {
      fortnite: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      warzone: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      minecraft: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      valorant: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      gta: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      }
    }
  },
 themaster: {
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
      gpu: "/pc-parts/gpu/RX 7900 XTX SAPPHIRE NITRO +.png"
    },
    gamePerformance: {
      fortnite: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      warzone: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      minecraft: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      valorant: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      gta: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      }
    }
  },
theoverkill: {
    id: "theoverkill",
    name: "The Overkill",
    price: 4499.44,
    description: "Ryzen 7 9800X3D & RTX 4080 Super",
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
      gpu: "/pc-parts/gpu/4080 SUPER MSI GAMING X SLIM.png"
    },
    gamePerformance: {
      fortnite: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      warzone: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      minecraft: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      valorant: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      },
      gta: {
        fhd: { ultra: 0, high: 0, medium: 0, low: 0 },
        "2k": { ultra: 0, high: 0, medium: 0, low: 0 },
        "4k": { ultra: 0, high: 0, medium: 0, low: 0 }
      }
    }
  },
};
