import { PCConfig } from "@/components/prebuilt/types";

export interface PCPerformance {
  FPS_moyen: string | number;
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
        fhd: { FPS_moyen: "130-150" },
        "2k": { FPS_moyen: "110-130" },
        "4k": { FPS_moyen: "70-80" }
      },
      warzone: {
        fhd: { FPS_moyen: "100-120" },
        "2k": { FPS_moyen: "85-100" },
        "4k": { FPS_moyen: "50-60" }
      },
      minecraft: {
        fhd: { FPS_moyen: "300+" },
        "2k": { FPS_moyen: "250+" },
        "4k": { FPS_moyen: "180-220" }
      },
      valorant: {
        fhd: { FPS_moyen: "220-270" },
        "2k": { FPS_moyen: "200-240" },
        "4k": { FPS_moyen: "140-170" }
      },
      gta: {
        fhd: { FPS_moyen: "110-130" },
        "2k": { FPS_moyen: "90-110" },
        "4k": { FPS_moyen: "55-65" }
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
      gpu: "/pc-parts/gpu/4070 SUPER TWIN EDGE ZOTAC.png"
    },
    gamePerformance: {
      fortnite: {
        fhd: { FPS_moyen: "220-240" },
        "2k": { FPS_moyen: "180-200" },
        "4k": { FPS_moyen: "120-140" }
      },
      warzone: {
        fhd: { FPS_moyen: "150-170" },
        "2k": { FPS_moyen: "130-150" },
        "4k": { FPS_moyen: "80-100" }
      },
      minecraft: {
        fhd: { FPS_moyen: "400+" },
        "2k": { FPS_moyen: "350+" },
        "4k": { FPS_moyen: "300+" }
      },
      valorant: {
        fhd: { FPS_moyen: "300+" },
        "2k": { FPS_moyen: "280+" },
        "4k": { FPS_moyen: "220+" }
      },
      gta: {
        fhd: { FPS_moyen: "170-190" },
        "2k": { FPS_moyen: "140-160" },
        "4k": { FPS_moyen: "90-110" }
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
      gpu: "/pc-parts/gpu/4070 TI SUPER TUF GAMING OC.png"
    },
    gamePerformance: {
      fortnite: {
        fhd: { FPS_moyen: "250-270" },
        "2k": { FPS_moyen: "200-220" },
        "4k": { FPS_moyen: "140-160" }
      },
      warzone: {
        fhd: { FPS_moyen: "160-180" },
        "2k": { FPS_moyen: "140-160" },
        "4k": { FPS_moyen: "100-120" }
      },
      minecraft: {
        fhd: { FPS_moyen: "450+" },
        "2k": { FPS_moyen: "400+" },
        "4k": { FPS_moyen: "350+" }
      },
      valorant: {
        fhd: { FPS_moyen: "400+" },
        "2k": { FPS_moyen: "350+" },
        "4k": { FPS_moyen: "250+" }
      },
      gta: {
        fhd: { FPS_moyen: "180-200" },
        "2k": { FPS_moyen: "150-170" },
        "4k": { FPS_moyen: "110-130" }
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
        fhd: { FPS_moyen: "300+" },
        "2k": { FPS_moyen: "240-260" },
        "4k": { FPS_moyen: "180-200" }
      },
      warzone: {
        fhd: { FPS_moyen: "180-200" },
        "2k": { FPS_moyen: "150-170" },
        "4k": { FPS_moyen: "120-140" }
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
        fhd: { FPS_moyen: "200-220" },
        "2k": { FPS_moyen: "170-190" },
        "4k": { FPS_moyen: "140-160" }
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
      gpu: "/pc-parts/gpu/7900XTX SAPPHIRE NITRO +.png"
    },
    gamePerformance: {
      fortnite: {
        fhd: { FPS_moyen: "300+" },
        "2k": { FPS_moyen: "250-270" },
        "4k": { FPS_moyen: "190-210" }
      },
      warzone: {
        fhd: { FPS_moyen: "190-210" },
        "2k": { FPS_moyen: "160-180" },
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
        fhd: { FPS_moyen: "210-230" },
        "2k": { FPS_moyen: "180-200" },
        "4k": { FPS_moyen: "150-170" }
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
  },
};
