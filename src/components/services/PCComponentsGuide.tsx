import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, HardDrive, Microchip, Power, Box, CircuitBoard, Fan } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PCComponentsGuide = () => {
  const components = [
    {
      icon: <Cpu className="w-8 h-8 text-forge-orange" />,
      title: "Processeur (CPU)",
      description: "Le cerveau de votre ordinateur, il exécute toutes les opérations",
      howTo: "Pour trouver les informations de votre CPU : Clic droit sur 'Démarrer' > 'Système' > voir sous 'Processeur'",
      healthIssues: "Un processeur vieillissant ou défectueux peut causer des ralentissements généraux, des crashs fréquents, ou des problèmes de surchauffe."
    },
    {
      icon: <Microchip className="w-8 h-8 text-forge-orange" />,
      title: "Carte Graphique (GPU)",
      description: "Gère l'affichage et les performances en jeu",
      howTo: "Clic droit sur 'Démarrer' > 'Gestionnaire de périphériques' > 'Cartes graphiques'",
      healthIssues: "Une carte graphique défectueuse peut provoquer des artefacts visuels, des crashs en jeu, ou des problèmes d'affichage."
    },
    {
      icon: <HardDrive className="w-8 h-8 text-forge-orange" />,
      title: "Mémoire RAM",
      description: "Stockage temporaire pour les applications en cours d'exécution",
      howTo: "Clic droit sur 'Démarrer' > 'Système' > voir sous 'RAM installée'",
      healthIssues: "Une RAM défectueuse peut causer des écrans bleus, des corruptions de fichiers, ou des problèmes de performances."
    },
    {
      icon: <HardDrive className="w-8 h-8 text-forge-orange" />,
      title: "Stockage",
      description: "Stockage permanent de vos fichiers et programmes (SSD/HDD)",
      howTo: "Ouvrir 'Explorateur de fichiers' > Clic droit sur 'Ce PC' > 'Gérer' > 'Gestion des disques'",
      healthIssues: "Un disque défectueux peut entraîner des pertes de données, des temps de chargement lents, ou des corruptions de fichiers."
    },
    {
      icon: <Power className="w-8 h-8 text-forge-orange" />,
      title: "Alimentation",
      description: "Fournit l'énergie nécessaire à tous les composants",
      howTo: "Ouvrir le boîtier et regarder l'étiquette sur l'alimentation, ou utiliser un logiciel comme 'Speccy'",
      healthIssues: "Une alimentation défectueuse peut causer des redémarrages inattendus, des dommages aux composants, ou des problèmes de stabilité."
    },
    {
      icon: <Box className="w-8 h-8 text-forge-orange" />,
      title: "Boîtier",
      description: "Protège et ventile les composants de votre PC",
      howTo: "Le modèle est généralement inscrit sur le boîtier lui-même ou sur son emballage d'origine",
      healthIssues: "Un boîtier mal ventilé peut causer des problèmes de surchauffe et réduire la durée de vie des composants."
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-forge-orange" />,
      title: "Carte Mère",
      description: "Connecte et fait communiquer tous les composants entre eux",
      howTo: "Appuyez simultanément sur les touche Windows + R > Entrez le code suivant : msinfo32 puis Entrée > Une fenêtre d'affichage avec les informations du système windows, consultez, dans la colonne élément, la ligne modèle ou produit de la carte de base qui indiquent le modèle de votre carte mère.",
      healthIssues: "Une carte mère défectueuse peut causer des problèmes de démarrage, des ports qui ne fonctionnent plus, ou des instabilités système."
    },
    {
      icon: <Fan className="w-8 h-8 text-forge-orange" />,
      title: "Refroidissement CPU",
      description: "Maintient la température du processeur à un niveau optimal",
      howTo: "Vérifier visuellement dans le boîtier, ou utiliser des logiciels comme 'Core Temp' pour surveiller les températures",
      healthIssues: "Un refroidissement insuffisant peut causer des baisses de performances, des arrêts de sécurité, ou endommager le processeur."
    }
  ];

  return (
    <Card className="glass-card mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Guide des Composants PC</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="guide" className="border-none">
            <AccordionTrigger className="text-lg font-semibold">
              Guide détaillé des composants
            </AccordionTrigger>
            <AccordionContent>
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
                          <p className="text-sm text-gray-400">{component.howTo}</p>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm font-semibold text-forge-orange">Problèmes potentiels :</p>
                          <p className="text-sm text-gray-400">{component.healthIssues}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default PCComponentsGuide;