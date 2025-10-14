
import { PCConfigDetailed } from "./types";

export const allPrebuiltConfigs: PCConfigDetailed[] = [
  {
    id: "thebeginning",
    name: "The Beginning",
    price: 849.95,
    description: "Ryzen 5 5600 & RX 7600",
    detailedDescription: "Le parfait premier pas dans le monde du gaming sérieux ! Avec un Ryzen 5 5600 et une RX 7600, tu profites de graphismes fluides en 1080p sans te ruiner. Ses 16 Go de RAM et son SSD NVMe d’1 To assurent vitesse et réactivité, pendant que le look RGB met l’ambiance. Bref, une config prête à te faire dire : “Et ce n'est que le début...”",
    components: [
      "CPU : AMD Ryzen 5 5600",
      "Refroidissement :Thermalright Assassin X Refined SE RGB",
      "Carte mère : Gigabyte B550M AORUS ELITE AX",
      "RAM : Lexar THOR 16 GB (2 x 8 GB) DDR4-3200 CL16",
      "Stockage : Kingstone NV3 1 TB (NVMe)",
      "GPU : Gigabyte GAMING OC Radeon RX 7600",
      "Boitier : Tecware Forge M2",
      "PSU : MSI MAG A650BN",
    ],
    images: {
      cpu: "/pc-parts/cpu/R5 5600.png",
      gpu: "/pc-parts/gpu/7600 GIGABYTE GAMING OC.png",
      case: "/pc-parts/case/tecware forge M2.png"
    }
  },
  {
    id: "littleguy",
    name: "Little Guy",
    price: 999.92,
    description: "Ryzen 5 7500F & RTX 5060 8GB",
    detailedDescription: "Ce “petit gars” a de la patate ! Avec un Ryzen 5 7500F et une RTX 5060, il fait tourner tous tes jeux en 1080p ultra sans broncher. Ses 32 Go de DDR5 et son SSD NVMe d’1 To assurent une fluidité royale, même avec 15 applis ouvertes. Compact, stylé, et plus rapide que ton reflexe sur Alt+F4.",
    components: [
      "CPU : AMD Ryzen 5 7500F",
      "Refroidissement : Thermalright Assassin X Refined SE RGB",
      "Carte mère : Gigabyte B650 EAGLE AX",
      "RAM : Lexar Ares RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : Kingstone NV3 1 TB(NVMe)",
      "GPU : MSI VENTUS 2X OC GeForce RTX 5060 8 GB",
      "Boitier : MSI MAG FORGE 100R",
      "PSU : MSI MAG A650BN",
    ],
    images: {
      cpu: "/pc-parts/cpu/R5 7500F.png",
      gpu: "/pc-parts/gpu/5060 8GB MSI VENTUS 2X.png",
      case: "/pc-parts/case/msi mag forge 100r noir.png"
    }
  },
  {
    id: "cheapy",
    name: "Cheapy",
    price: 1149.95,
    description: "Ryzen 5 7600X & RX 9060 XT",
    detailedDescription: "Ne te fie pas à son nom : y’a rien de “cheap” ici. Le Ryzen 5 7600X et la RX 9060 XT envoient du lourd pour un gaming 1440p ultra fluide. Avec 32 Go de DDR5 et un SSD NVMe d’1 To, tout démarre avant même que t’aies fini ton café. Bref, un PC qui prouve qu’on peut être puissant sans exploser son budget.",
    components: [
      "CPU : AMD Ryzen 5 7600X",
      "Refroidissement : Thermalright Assassin X Refined SE RGB",
      "Carte mère : Gigabyte B650 EAGLE AX",
      "RAM : Lexar Ares 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : Patriot P400 Lite 1 TB (NVMe)",
      "GPU : Gigabyte GAMING OC Radeon RX 9060 XT ",
      "Boitier : MSI MAG FORGE 112R",
      "PSU : MSI MAG A750BN",
    ],
    images: {
      cpu: "/pc-parts/cpu/R5 7600X.png",
      gpu: "/pc-parts/gpu/9060 XT GIGABYTE GAMING OC.png",
      case: "/pc-parts/case/msi mag forge 112r noir.png"
    }
  },
  {
    id: "ares",
    name: "Ares",
    price: 1475.99,
    description: "Ryzen 5 9600X & RTX 5060 Ti",
    detailedDescription: "Ares ne plaisante pas : Ryzen 5 9600X, RTX 5060 Ti et 32 Go de DDR5, c’est le combo parfait pour dominer le champ de bataille en 1440p. Son SSD NVMe de 2 To charge tes jeux à la vitesse de la lumière, et le refroidissement ARGB garde le tout au frais avec style. Un vrai guerrier du gaming, prêt à livrer la guerre sainte contre les lags.",
    components: [
      "CPU : AMD Ryzen 5 9600X",
      "Refroidissement : Thermalright Frozen Notte ARGB 240",
      "Carte mère : Gigabyte B850 EAGLE WIFI6E",
      "RAM : Lexar Ares RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : Samsung 990 EVO Plus 2 TB (NVMe)",
      "GPU : PNY EPIC-X RGB OC GeForce RTX 5060 Ti",
      "Boitier : Corsair 3000D RGB AIRFLOW",
      "PSU : MSI MAG A750GL",
      "Ventilation : 1 ventilateur AR120 en extraction",
    ],
    images: {
      cpu: "/pc-parts/cpu/R5 9600X.png",
      gpu: "/pc-parts/gpu/5060 Ti PNY.png",
      case: "/pc-parts/case/corsair 3000d rgb airflow.png"
    }
  },
  {
    id: "thelegend",
    name: "The legend",
    price: 1749.95,
    description: "Ryzen 5 7700X & RX 9070",
    detailedDescription: "Son nom dit tout : The Legend est taillé pour la gloire. Entre le Ryzen 7 7700X, la RX 9070 et 32 Go de DDR5, tu peux oublier les compromis, 1440p ou 4K, tout passe crème. Son watercooling 360 mm garde la bête au frais, pendant que le design RGB brille plus fort que ton KD. Une machine mythique, pour des performances légendaires.",
    components: [
      "CPU : AMD Ryzen 5 7700X",
      "Refroidissement : Corsair NAUTILUS 360 RS ARGB",
      "Carte mère : MSI B850 GAMING PLUS WIFI6E",
      "RAM : G.Skill Trident Z5 Neo RGB 32 GB (2 x 16 GB) DDR5-6000 CL36",
      "Stockage : Western Digital Black SN770 2 TB (NVMe)",
      "GPU : ASRock Steel Legend OC Radeon RX 9070",
      "Boitier : Phanteks XT PRO ULTRA",
      "PSU : Gigabyte P750GM",
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
    price: 2199.99,
    description: "Ryzen 7 7800X3D & RTX 5070 Ti",
    detailedDescription: "Le roi du 1440p trône ici, couronne vissée sur un Ryzen 7 7800X3D et un RTX 5070 Ti prêt à tout écraser. Avec 32 Go de DDR5 et un SSD NVMe Samsung 990 Pro de 2 To, la vitesse, c’est son royaume. Le refroidissement ARCTIC 360 garde le trône au frais, même en pleine guerre de FPS. Bref, longue vie au roi du 2K.",
    components: [
      "CPU : AMD Ryzen 7 7800X3D",
      "Refroidissement : ARCTIC Liquid Freezer III Pro A-RGB 360",
      "Carte mère : Gigabyte B850 EAGLE WIFI6E",
      "RAM : G.Skill Trident Z5 Neo RGB 32 GB (2 x 16 GB) DDR5-6000 CL30",
      "Stockage : Samsung 990 Pro 2 TB (NVMe)",
      "GPU : Zotac SOLID SFF GeForce RTX 5070 Ti",
      "Boitier : Fractal Design Pop XL Air",
      "PSU : MSI MAG A1000GLS",
    ],
    images: {
      cpu: "/pc-parts/cpu/R7 7800X3D.png",
      gpu: "/pc-parts/gpu/5070 tI ZOTAC SOLID SFF.png",
      case: "/pc-parts/case/fractal design pop xl air rgb.png"
    }
  },
  {
    id: "skillissues",
    name: "Skill Issues",
    price: 3324.49,
    description: "Ryzen 7 9800X3D & RTX 5080",
    detailedDescription: "Si tu perds avec ça, c’est clairement pas la faute du matos. Le Ryzen 7 9800X3D et la RTX 5080 forment un duo infernal taillé pour le 4K ultra (et même au-delà). 64 Go de DDR5, un SSD NVMe ultra-rapide et un refroidissement Corsair haut de gamme assurent des perfs monstrueuses et un silence royal. En clair : t’as plus d’excuse, c’est toi le problème.",
    components: [
      "CPU : AMD Ryzen 7 9800X3D",
      "Refroidissement : Corsair iCUE LINK TITAN 360 RX RGB",
      "Carte mère : Gigabyte B850 AORUS ELITE WIFI7",
      "RAM : G.Skill Trident Z5 Neo RGB 64 GB (2 x 32 GB) DDR5-6000 CL30",
      "Stockage :Western Digital WD_Black SN850X 2 TB (NVMe)",
      "GPU : Gigabyte GAMING OC GeForce RTX 5080",
      "Boitier : Corsair iCUE LINK 6500X RGB",
      "PSU : Corsair RM1000e (2025)",
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
