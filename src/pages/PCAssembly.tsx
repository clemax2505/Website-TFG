import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Monitor, Cog } from "lucide-react";

const PCAssembly = () => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-forge-orange" />,
      title: "Montage Basique",
      price: "35€",
      features: [
        "Montage complet du PC",
        "Mise à jour du BIOS si nécessaire",
        "Gestion des câbles soignée",
        "Rendu propre avec minimum de câbles visibles"
      ]
    },
    {
      icon: <Monitor className="w-12 h-12 text-forge-orange" />,
      title: "Montage + Windows",
      price: "45€",
      features: [
        "Installation de Windows 10/11 (sans activation)",
        "Montage complet du PC",
        "Mise à jour du BIOS",
        "Gestion des câbles"
      ]
    },
    {
      icon: <Cog className="w-12 h-12 text-forge-orange" />,
      title: "Pack Complet",
      price: "75€",
      features: [
        "Installation complète de Windows avec activation",
        "Installation des drivers essentiels",
        "Installation des logiciels de gestion",
        "Réglage du BIOS (profil XMP activé)",
        "Gestion des câbles",
        "Configuration de Windows avec vous"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
          Service de Montage PC
        </h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Des services professionnels pour le montage de votre PC gaming
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                <div className="text-3xl font-bold text-center text-forge-orange">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 flex items-start">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/quote">
            <Button className="bg-forge-orange hover:bg-forge-red text-white px-8 py-6 text-lg">
              Obtenir un devis
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PCAssembly;