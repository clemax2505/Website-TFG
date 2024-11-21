import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, HardDrive, Microchip, Power, Box, CircuitBoard, Fan } from "lucide-react";

const PCComponentsGuide = () => {
  const components = [
    {
      icon: <Cpu className="w-8 h-8 text-forge-orange" />,
      title: "Processeur (CPU)",
      description: "Le cerveau de votre ordinateur, il exécute toutes les opérations"
    },
    {
      icon: <Microchip className="w-8 h-8 text-forge-orange" />,
      title: "Carte Graphique (GPU)",
      description: "Gère l'affichage et les performances en jeu"
    },
    {
      icon: <HardDrive className="w-8 h-8 text-forge-orange" />,
      title: "Mémoire RAM",
      description: "Stockage temporaire pour les applications en cours d'exécution"
    },
    {
      icon: <HardDrive className="w-8 h-8 text-forge-orange" />,
      title: "Stockage",
      description: "Stockage permanent de vos fichiers et programmes (SSD/HDD)"
    },
    {
      icon: <Power className="w-8 h-8 text-forge-orange" />,
      title: "Alimentation",
      description: "Fournit l'énergie nécessaire à tous les composants"
    },
    {
      icon: <Box className="w-8 h-8 text-forge-orange" />,
      title: "Boîtier",
      description: "Protège et ventile les composants de votre PC"
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-forge-orange" />,
      title: "Carte Mère",
      description: "Connecte et fait communiquer tous les composants entre eux"
    },
    {
      icon: <Fan className="w-8 h-8 text-forge-orange" />,
      title: "Refroidissement CPU",
      description: "Maintient la température du processeur à un niveau optimal"
    }
  ];

  return (
    <Card className="glass-card mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Guide des Composants PC</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {components.map((component, index) => (
            <div key={index} className="p-4 rounded-lg bg-secondary/50">
              <div className="flex justify-center mb-2">{component.icon}</div>
              <h3 className="text-lg font-semibold text-center mb-2">{component.title}</h3>
              <p className="text-sm text-gray-400 text-center">{component.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PCComponentsGuide;