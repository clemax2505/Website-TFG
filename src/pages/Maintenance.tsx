import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Wind, Thermometer, Wrench } from "lucide-react";
import { openEmailClient } from "@/utils/emailUtils";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { calculateTravelFee, isValidZipCode } from "@/utils/distanceUtils";

const Maintenance = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [travelFee, setTravelFee] = useState(0);

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newZipCode = e.target.value;
    setZipCode(newZipCode);
    
    if (isValidZipCode(newZipCode)) {
      const fee = calculateTravelFee(newZipCode);
      setTravelFee(fee);
    } else {
      setTravelFee(0);
    }
  };

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
Code postal: ${zipCode}
Frais de déplacement: ${travelFee}€
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
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            Maintenance PC
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="w-6 h-6 text-forge-orange" />
                  Dépoussiérage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Nettoyage complet et professionnel de votre PC pour optimiser son refroidissement
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="w-6 h-6 text-forge-orange" />
                  Pâte Thermique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Remplacement de la pâte thermique pour une meilleure dissipation de la chaleur
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-forge-orange" />
                  Check-up Général
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Vérification complète de votre configuration et de ses performances
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
                  <Label htmlFor="zipcode">Code Postal</Label>
                  <Input
                    id="zipcode"
                    type="text"
                    value={zipCode}
                    onChange={handleZipCodeChange}
                    placeholder="XXXXX"
                    pattern="\d{5}"
                    title="Code postal français (5 chiffres)"
                    required
                  />
                  {travelFee > 0 && (
                    <p className="text-forge-orange mt-2">
                      Frais de déplacement : {travelFee}€ (10€ par tranche de 15km)
                    </p>
                  )}
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
                  disabled={isSubmitting || !isValidZipCode(zipCode)}
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