import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Quote = () => {
  const { toast } = useToast();
  const [budget, setBudget] = useState([1000]);
  const [usage, setUsage] = useState("");
  const [email, setEmail] = useState("");
  const [os, setOs] = useState("windows10");
  const [customOs, setCustomOs] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const components = [
    "CPU", "GPU", "RAM", "Stockage", "Alimentation", "Boîtier", "Carte Mère", "Refroidissement CPU"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    // Préparer les données pour l'email
    const currentConfig = components
      .map(comp => `${comp}: ${data[comp.toLowerCase()]}`)
      .join('\n');

    const emailBody = `
      Nouvelle demande de PC sur mesure
      
      Email client: ${email}
      Budget: ${budget[0]}€
      
      Configuration actuelle:
      ${currentConfig}
      
      Système d'exploitation: ${os === 'other' ? customOs : os}
      
      Usage principal: ${usage}
      
      Détails supplémentaires:
      ${additionalDetails}
    `;

    try {
      // Ouvrir le client email par défaut avec les informations pré-remplies
      const mailtoLink = `mailto:clementmontagepc@gmail.com?subject=Nouvelle demande de PC sur mesure&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Demande préparée",
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Devis PC Gaming Sur Mesure</h1>
        <Card className="glass-card max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Configurez votre projet</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-8">
              <div className="space-y-2">
                <Label>Configuration actuelle</Label>
                {components.map((component) => (
                  <Input
                    key={component}
                    name={component.toLowerCase()}
                    placeholder={component}
                    className="mb-2"
                  />
                ))}
              </div>
              <div className="space-y-2">
                <Label>Budget approximatif (€)</Label>
                <Slider
                  value={budget}
                  onValueChange={setBudget}
                  max={5000}
                  min={500}
                  step={100}
                  className="py-4"
                />
                <p className="text-right text-forge-orange font-semibold">{budget[0]}€</p>
              </div>
              <div className="space-y-2">
                <Label>Usage principal</Label>
                <Input
                  placeholder="Ex: Gaming, Streaming, Montage vidéo..."
                  value={usage}
                  onChange={(e) => setUsage(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-4">
                <Label>Système d'exploitation</Label>
                <RadioGroup value={os} onValueChange={setOs} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="windows10" id="windows10" />
                    <Label htmlFor="windows10">Windows 10</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="windows11" id="windows11" />
                    <Label htmlFor="windows11">Windows 11</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Autre</Label>
                  </div>
                </RadioGroup>
                {os === "other" && (
                  <Input
                    placeholder="Précisez votre système d'exploitation"
                    value={customOs}
                    onChange={(e) => setCustomOs(e.target.value)}
                    className="mt-2"
                    required
                  />
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
              <div className="space-y-2">
                <Label>Détails supplémentaires</Label>
                <Textarea 
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  placeholder="Ajoutez ici toute information complémentaire concernant votre projet..."
                  className="min-h-[100px]"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-forge-orange hover:bg-forge-red"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Préparation..." : "Demander un devis"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;