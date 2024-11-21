import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, HardDrive, Microchip, Power, Box, CircuitBoard, Fan } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PCComponentsGuide = () => {
  const components = [
    {
      icon: <Cpu className="w-8 h-8 text-forge-orange" />,
      title: "Processeur (CPU)",
      description: "Le cerveau de votre ordinateur, il exécute toutes les opérations",
      howTo: "Pour trouver les informations de votre CPU : Clic droit sur 'Démarrer' > 'Système' > voir sous 'Processeur'"
    },
    {
      icon: <Microchip className="w-8 h-8 text-forge-orange" />,
      title: "Carte Graphique (GPU)",
      description: "Gère l'affichage et les performances en jeu",
      howTo: "Clic droit sur 'Démarrer' > 'Gestionnaire de périphériques' > 'Cartes graphiques'"
    },
    {
      icon: <HardDrive className="w-8 h-8 text-forge-orange" />,
      title: "Mémoire RAM",
      description: "Stockage temporaire pour les applications en cours d'exécution",
      howTo: "Clic droit sur 'Démarrer' > 'Système' > voir sous 'RAM installée'"
    },
    {
      icon: <HardDrive className="w-8 h-8 text-forge-orange" />,
      title: "Stockage",
      description: "Stockage permanent de vos fichiers et programmes (SSD/HDD)",
      howTo: "Ouvrir 'Explorateur de fichiers' > Clic droit sur 'Ce PC' > 'Gérer' > 'Gestion des disques'"
    },
    {
      icon: <Power className="w-8 h-8 text-forge-orange" />,
      title: "Alimentation",
      description: "Fournit l'énergie nécessaire à tous les composants",
      howTo: "Ouvrir le boîtier et regarder l'étiquette sur l'alimentation, ou utiliser un logiciel comme 'Speccy'"
    },
    {
      icon: <Box className="w-8 h-8 text-forge-orange" />,
      title: "Boîtier",
      description: "Protège et ventile les composants de votre PC",
      howTo: "Le modèle est généralement inscrit sur le boîtier lui-même ou sur son emballage d'origine"
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-forge-orange" />,
      title: "Carte Mère",
      description: "Connecte et fait communiquer tous les composants entre eux",
      howTo: "Clic droit sur 'Démarrer' > 'Système' > 'À propos' > 'Informations système' > 'Résumé système' > voir 'Fabricant de la carte de base'"
    },
    {
      icon: <Fan className="w-8 h-8 text-forge-orange" />,
      title: "Refroidissement CPU",
      description: "Maintient la température du processeur à un niveau optimal",
      howTo: "Vérifier visuellement dans le boîtier, ou utiliser des logiciels comme 'Core Temp' pour surveiller les températures"
    }
  ];

  return (
    <Card className="glass-card mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Guide des Composants PC</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {components.map((component, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                  {component.icon}
                  <span>{component.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4 space-y-4">
                  <p className="text-sm text-gray-400">{component.description}</p>
                  <div className="mt-2">
                    <p className="text-sm font-semibold text-forge-orange">Comment trouver l'information :</p>
                    <p className="text-sm text-gray-400">Appuyez simultanément sur les touche Windows + R, Entrez le code suivant : msinfo32 puis Entrée,Une fenêtre d'affichage avec les informations du système windows, consultez les éléments fabricant, produit, version de la carte de base.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default PCComponentsGuide;