import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, BarChart, Wrench, Cpu, Gauge, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Upgrade = () => {
  const upgrades = [
    {
      icon: <Cpu className="w-8 h-8 text-forge-orange" />,
      title: "Upgrade Processeur",
      description: "Amélioration de votre CPU pour de meilleures performances"
    },
    {
      icon: <Zap className="w-8 h-8 text-forge-orange" />,
      title: "Boost Graphique",
      description: "Mise à niveau de votre carte graphique"
    },
    {
      icon: <BarChart className="w-8 h-8 text-forge-orange" />,
      title: "Optimisation Mémoire",
      description: "Augmentation de la RAM pour plus de fluidité"
    },
    {
      icon: <Gauge className="w-8 h-8 text-forge-orange" />,
      title: "Stockage Rapide",
      description: "Installation de SSD pour des chargements éclair"
    },
    {
      icon: <Shield className="w-8 h-8 text-forge-orange" />,
      title: "Sécurité",
      description: "Mise à jour des composants critiques"
    },
    {
      icon: <Wrench className="w-8 h-8 text-forge-orange" />,
      title: "Optimisation Globale",
      description: "Amélioration générale des performances"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-8">Amélioration PC</h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Donnez une seconde vie à votre PC avec nos services d'amélioration sur mesure
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upgrades.map((upgrade, index) => (
            <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">{upgrade.icon}</div>
                <CardTitle className="text-xl text-center">{upgrade.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center">{upgrade.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/quote">
            <Button className="bg-forge-orange hover:bg-forge-red text-white px-8 py-6 text-lg">
              Demander un devis d'amélioration
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Upgrade;