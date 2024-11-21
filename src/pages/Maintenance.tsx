import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Thermometer, Tool, Brush, Shield, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Maintenance = () => {
  const services = [
    {
      icon: <Wind className="w-8 h-8 text-forge-orange" />,
      title: "Nettoyage Complet",
      description: "Dépoussiérage approfondi de tous les composants"
    },
    {
      icon: <Thermometer className="w-8 h-8 text-forge-orange" />,
      title: "Pâte Thermique",
      description: "Remplacement de la pâte thermique du processeur"
    },
    {
      icon: <Tool className="w-8 h-8 text-forge-orange" />,
      title: "Vérification Matérielle",
      description: "Diagnostic complet des composants"
    },
    {
      icon: <Settings className="w-8 h-8 text-forge-orange" />,
      title: "Optimisation Système",
      description: "Configuration optimale de Windows"
    },
    {
      icon: <Shield className="w-8 h-8 text-forge-orange" />,
      title: "Sécurité",
      description: "Mise à jour des pilotes et sécurité"
    },
    {
      icon: <Brush className="w-8 h-8 text-forge-orange" />,
      title: "Entretien Préventif",
      description: "Conseils et maintenance préventive"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-8">Maintenance PC</h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Gardez votre PC gaming en parfait état avec notre service de maintenance professionnelle
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/quote">
            <Button className="bg-forge-orange hover:bg-forge-red text-white px-8 py-6 text-lg">
              Réserver une maintenance
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Maintenance;