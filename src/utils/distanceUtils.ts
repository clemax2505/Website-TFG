interface ZipCodeDistance {
  zipCode: string;
  distance: number;
}

// Base de données simplifiée des codes postaux avec distances approximatives depuis Champagne-au-Mont-d'Or
const zipCodesDistances: ZipCodeDistance[] = [
  { zipCode: "69410", distance: 0 }, // Champagne-au-Mont-d'Or
  { zipCode: "69001", distance: 6 },
  { zipCode: "69002", distance: 7 },
  { zipCode: "69003", distance: 8 },
  { zipCode: "69004", distance: 7 },
  { zipCode: "69005", distance: 8 },
  { zipCode: "69006", distance: 6 },
  { zipCode: "69007", distance: 9 },
  { zipCode: "69008", distance: 10 },
  { zipCode: "69009", distance: 5 },
  // Ajout de quelques villes aux alentours
  { zipCode: "69100", distance: 12 }, // Villeurbanne
  { zipCode: "69130", distance: 16 }, // Écully
  { zipCode: "69250", distance: 18 }, // Neuville-sur-Saône
  { zipCode: "69270", distance: 20 }, // Fontaines-sur-Saône
  { zipCode: "69280", distance: 22 }, // Marcy-l'Étoile
  { zipCode: "69300", distance: 15 }, // Caluire-et-Cuire
  { zipCode: "69340", distance: 25 }, // Francheville
  { zipCode: "69370", distance: 28 }, // Saint-Didier-au-Mont-d'Or
  { zipCode: "69380", distance: 30 }, // Chazay-d'Azergues
  { zipCode: "69400", distance: 17 }, // Limas
  { zipCode: "69500", distance: 19 }, // Bron
  { zipCode: "69600", distance: 21 }, // Oullins
  { zipCode: "69700", distance: 23 }, // Givors
  { zipCode: "69800", distance: 14 }, // Saint-Priest
];

export const calculateTravelFee = (zipCode: string): number => {
  const found = zipCodesDistances.find(z => z.zipCode === zipCode);
  if (!found) return 10; // Par défaut, on considère que c'est loin
  return found.distance > 15 ? 10 : 0;
};

export const isValidZipCode = (zipCode: string): boolean => {
  return /^69\d{3}$/.test(zipCode);
};