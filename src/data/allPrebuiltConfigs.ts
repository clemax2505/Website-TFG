
import { PCConfigDetailed } from "./types";

export const allPrebuiltConfigs: PCConfigDetailed[] = [
  {
    id: "thebeginning",
    name: "The Beginning",
    price: 799.99,
    description: "Ryzen 5 5600 & RX 6650 XT",
    detailedDescription: "Un PC qui envoie du lourd dès le départ : Ryzen 5 5600, 16 Go de RAM et une RX 6650 XT prête à faire tourner tes jeux en 1080p ultra sans broncher. Avec son SSD NVMe d’1 To, tes chargements fileront plus vite que ton pote qui ragequit. Bref, une machine fiable, puissante et qui ne vide pas ton compte en banque.",
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
    detailedDescription: "Ne te fie pas à son nom, ce “petit gars” cache un Ryzen 5 7500F et 32 Go de RAM DDR5 ultra rapides. Couplé à une RX 6650 XT, il te balance du gaming 1080p/1440p sans transpirer. Avec son SSD NVMe de 1 To, tes jeux se lancent avant même que tu aies le temps d’attraper ta boisson. Bref, un PC gamer compact, costaud et prêt à t’accompagner longtemps.",
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
    detailedDescription: "Ne te laisse pas berner par son nom : ce PC a tout sauf l’air “cheap”. Avec un Ryzen 5 7600X et une RX 6750 XT, tu joues en 1440p ultra smooth, et ses 32 Go de DDR5 assurent que rien ne rame (sauf toi le lundi matin). Ajoute un SSD NVMe d’1 To et un boîtier MSI stylé, et tu obtiens une machine taillée pour le gaming costaud sans exploser ton portefeuille.",
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
    detailedDescription: "Avec son Ryzen 7 7700 et sa RX 7800 XT, Ares est un vrai dieu de la guerre vidéoludique : 1440p ultra fluide, 4K sans sourciller, et 32 Go de DDR5 qui font tourner tes applis comme des papillons. Son SSD NVMe de 2 To avale tes jeux aussi vite qu’un grec une pita. Bref, un PC gamer puissant, stylé et prêt à dominer le champ de bataille numérique.",
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
    detailedDescription: "Avec un Ryzen 7 7700, une RX 9070 et un watercooling 360 mm, ce PC porte bien son nom : une vraie légende du gaming. 1440p ultra ? Trop facile. 4K ? Il te dit “même pas peur”. Avec 32 Go de DDR5 et 2 To de SSD NVMe, tu installes toute ta bibliothèque Steam sans réfléchir. Bref, une machine qui transforme chaque partie en épopée.",
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
    detailedDescription: "Ce roi du 1440p trône avec un Ryzen 7 7800X3D et une RX 7900 XT prête à écraser tout ce qui bouge. Avec 32 Go de DDR5 et 2 To de SSD NVMe ultra rapide, tu as de la place pour ton royaume entier (oui, même les 200 Go de Warzone). Et grâce au watercooling 360 mm, Sa Majesté reste au frais, même en pleine bataille.",
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
    detailedDescription: "Si tu rates tes headshots avec un Ryzen 7 9800X3D et une RTX 5080, c’est clairement pas la faute du PC. Avec 64 Go de DDR5, un SSD NVMe 2 To ultra rapide et un refroidissement liquide de compétition, cette bête est faite pour le 4K ultra, le streaming et même la conquête spatiale. Bref, la seule “skill issue” ici… c’est toi.",
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
