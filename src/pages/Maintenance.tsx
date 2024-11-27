import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Wrench, Shield, Settings } from "lucide-react";
import { openEmailClient } from "@/utils/emailUtils";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";

const Maintenance = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const services = ['depoussierage', 'pate-thermique', 'checkup']
      .filter(service => formData.get(service) === 'on')
      .join(', ');

    const emailBody = `
Nouvelle demande de maintenance

Email client: ${email}
Services demandés: ${services}`;

    try {
      openEmailClient("Nouvelle demande de maintenance", emailBody);

      toast({
        title: "Demande de maintenance préparée",
        description: "Votre client email va s'ouvrir avec les informations pré-remplies.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la préparation de l'email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">Maintenance PC</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="w-6 h-6 text-forge-orange" />
                Nettoyage Matériel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Nettoyage complet de votre PC pour optimiser ses performances et sa durée de vie
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-forge-orange" />
                Diagnostic Complet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Analyse approfondie de l'état de vos composants et de leurs performances
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-6 h-6 text-forge-orange" />
                Solutions Personnalisées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Recommandations et interventions adaptées aux besoins spécifiques de votre configuration
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-card max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Services de maintenance</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="depoussierage" name="depoussierage" />
                  <Label htmlFor="depoussierage">Dépoussiérage en profondeur</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pate-thermique" name="pate-thermique" />
                  <Label htmlFor="pate-thermique">Changement de la pâte thermique</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkup" name="checkup" />
                  <Label htmlFor="checkup">Check up général</Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-forge-orange hover:bg-forge-red"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Préparation..." : "Demander une maintenance"}
              </Button>
            </form>
          </CardContent>
        </Card>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Maintenance;
