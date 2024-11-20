import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Wrench, Wind, Laptop } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-forge-orange" />,
      title: "PC Gaming Sur Mesure",
      description: "Configuration personnalisée selon vos besoins et votre budget. Nous sélectionnons les meilleurs composants pour une expérience de jeu optimale.",
      features: ["Conseil personnalisé", "Montage professionnel", "Test et validation", "Garantie complète"]
    },
    {
      icon: <Wrench className="w-12 h-12 text-forge-orange" />,
      title: "Amélioration PC",
      description: "Optimisation de votre configuration existante pour améliorer ses performances et prolonger sa durée de vie.",
      features: ["Diagnostic complet", "Upgrade composants", "Optimisation système", "Test de performances"]
    },
    {
      icon: <Wind className="w-12 h-12 text-forge-orange" />,
      title: "Maintenance",
      description: "Nettoyage complet et maintenance préventive de votre PC pour des performances optimales.",
      features: ["Nettoyage approfondi", "Changement pâte thermique", "Vérification ventilation", "Optimisation logicielle"]
    },
    {
      icon: <Laptop className="w-12 h-12 text-forge-orange" />,
      title: "PC Portable Gaming",
      description: "Solutions sur mesure pour les joueurs nomades avec des configurations adaptées à vos besoins de mobilité.",
      features: ["Sélection personnalisée", "Performance optimale", "Mobilité assurée", "Support technique"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                <CardDescription className="text-gray-400 text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-forge-orange" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;