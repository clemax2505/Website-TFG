
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
