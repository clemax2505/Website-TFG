import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Thermometer, Brush, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Maintenance = () => {
  const { toast } = useToast();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande de maintenance enregistrée",
      description: "Nous vous contacterons pour planifier l'intervention.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">Maintenance PC</h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Gardez votre PC gaming en parfait état avec notre service de maintenance professionnelle
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
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

        <Card className="glass-card max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Demande de maintenance</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Description de votre configuration actuelle</Label>
                <Textarea placeholder="Décrivez votre configuration actuelle..." />
              </div>
              <div className="space-y-2">
                <Label>Problèmes rencontrés</Label>
                <Textarea placeholder="Décrivez les problèmes que vous rencontrez..." />
              </div>
              <Button type="submit" className="w-full bg-forge-orange hover:bg-forge-red">
                Demander une maintenance
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Maintenance;