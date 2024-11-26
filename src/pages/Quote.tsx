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
import { openEmailClient } from "@/utils/emailUtils";

const Quote = () => {
  const { toast } = useToast();
  const [budget, setBudget] = useState([1000]);
  const [usage, setUsage] = useState("");
  const [email, setEmail] = useState("");
  const [os, setOs] = useState("windows10");
  const [customOs, setCustomOs] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [preference, setPreference] = useState("nvidia-intel");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
Nouvelle demande de devis PC Gaming Sur Mesure

Budget: ${budget[0]}€
Usage principal: ${usage}
Système d'exploitation: ${os === 'other' ? customOs : os}
Préférence GPU/CPU: ${preference}

Détails supplémentaires:
${additionalDetails}`;

      openEmailClient("Nouvelle demande de devis PC Gaming Sur Mesure", emailBody);

      toast({
        title: "Devis préparé !",
        description: "Votre client email va s'ouvrir avec les informations pré-remplies.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la préparation du devis. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">Devis PC Gaming Sur Mesure</h1>
        <Card className="glass-card max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Configurez votre projet</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-medium">Budget approximatif (€)</label>
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
                <label className="text-sm font-medium">Usage principal</label>
                <Input
                  placeholder="Ex: Gaming, Streaming, Montage vidéo..."
                  value={usage}
                  onChange={(e) => setUsage(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium">Préférence GPU/CPU</label>
                <RadioGroup value={preference} onValueChange={setPreference} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nvidia-intel" id="nvidia-intel" />
                    <Label htmlFor="nvidia-intel">Nvidia + Intel</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nvidia-amd" id="nvidia-amd" />
                    <Label htmlFor="nvidia-amd">Nvidia + AMD</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="amd-intel" id="amd-intel" />
                    <Label htmlFor="amd-intel">AMD + Intel</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="amd-amd" id="amd-amd" />
                    <Label htmlFor="amd-amd">AMD + AMD</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intel-intel" id="intel-intel" />
                    <Label htmlFor="intel-intel">Intel + Intel</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intel-amd" id="intel-amd" />
                    <Label htmlFor="intel-amd">Intel + AMD</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Pas de préférence" id="Pas de prédérence" />
                    <Label htmlFor="intel-amd">Pas de préférence</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium">Système d'exploitation</label>
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
                <label className="text-sm font-medium">Détails supplémentaires</label>
                <Textarea 
                  placeholder="Ajoutez ici toute information complémentaire concernant votre projet..."
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-forge-orange hover:bg-forge-red"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Préparation..." : "Obtenir mon devis"}
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
