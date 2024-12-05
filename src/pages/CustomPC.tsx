import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Microchip, HardDrive, Fan, Power } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const CustomPC = () => {
  const features = [
    {
      icon: <Microchip className="w-8 h-8 text-forge-orange" />,
      title: "Processeur sur mesure",
      description: "Sélection du meilleur CPU adapté à vos besoins spécifiques"
    },
    {
      icon: <Microchip className="w-8 h-8 text-forge-orange" />,
      title: "Carte graphique optimale",
      description: "Configuration graphique puissante pour vos jeux préférés"
    },
    {
      icon: <HardDrive className="w-8 h-8 text-forge-orange" />,
      title: "Mémoire performante",
      description: "RAM haute vitesse pour un multitâche fluide"
    },
    {
      icon: <HardDrive className="w-8 h-8 text-forge-orange" />,
      title: "Stockage adapté",
      description: "SSD et HDD configurés selon vos besoins"
    },
    {
      icon: <Fan className="w-8 h-8 text-forge-orange" />,
      title: "Refroidissement optimal",
      description: "Système de refroidissement efficace pour des performances durables"
    },
    {
      icon: <Power className="w-8 h-8 text-forge-orange" />,
      title: "Alimentation fiable",
      description: "Alimentation certifiée pour une stabilité maximale"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-24">
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">PC Gaming Sur Mesure</h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Nous créons votre PC gaming idéal en fonction de vos besoins spécifiques et de votre budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/quote">
              <Button className="bg-forge-orange hover:bg-forge-red text-white px-8 py-6 text-lg">
                Obtenir un devis personnalisé
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default CustomPC;
