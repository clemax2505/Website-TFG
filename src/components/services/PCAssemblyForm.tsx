import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { openEmailClient } from "@/utils/emailUtils";

const PCAssemblyForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [isRecommended, setIsRecommended] = useState(false);

  const components = [
    "CPU", "Carte mère", "RAM", "Carte graphique", 
    "Stockage", "Boîtier", "Alimentation", "Refroidissement"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    const componentsList = components
      .map(comp => `${comp}: ${data[comp.toLowerCase()]}`)
      .join('\n');

    const emailBody = `
Nouvelle demande de montage PC

Forfait choisi: ${selectedPlan}
Email client: ${data.email}
Configuration conseillée par Clément: ${isRecommended ? 'Oui' : 'Non'}

Liste des composants:
${componentsList}`;

    try {
      openEmailClient("Nouvelle demande de montage PC", emailBody);

      toast({
        title: "Demande envoyée !",
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Label>Choisissez votre forfait</Label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            type="button"
            variant={selectedPlan === "Basic" ? "default" : "outline"}
            className={`p-4 h-auto ${
              selectedPlan === "Basic" ? "bg-forge-orange" : ""
            }`}
            onClick={() => setSelectedPlan("Basic")}
          >
            <div className="text-left">
              <div className="font-bold">Basic</div>
              <div className="text-sm text-gray-400">
                <ul>
                  <li>Montage PC</li>
                  <li>Cable management</li>
                  <li>Mise à jour du bios + XMP</li>
                </ul>
              </div>
              <div className="mt-2">35€</div>
            </div>
          </Button>

          <Button
            type="button"
            variant={selectedPlan === "Standard" ? "default" : "outline"}
            className={`p-4 h-auto ${
              selectedPlan === "Standard" ? "bg-forge-orange" : ""
            }`}
            onClick={() => setSelectedPlan("Standard")}
          >
            <div className="text-left">
              <div className="font-bold">Standard</div>
              <div className="text-sm text-gray-400">
                <ul>
                  <li>Montage PC</li>
                  <li>Cable management</li>
                  <li>Mise à jour du bios + XMP</li>
                  <li>Installation de windows (sans activation)</li>
                  <li>Installation des drivers</li>
                </ul>
              </div>
              <div className="mt-2">45€</div>
            </div>
          </Button>

          <Button
            type="button"
            variant={selectedPlan === "Premium" ? "default" : "outline"}
            className={`p-4 h-auto ${
              selectedPlan === "Premium" ? "bg-forge-orange" : ""
            }`}
            onClick={() => setSelectedPlan("Premium")}
          >
            <div className="text-left">
              <div className="font-bold">Premium</div>
              <div className="text-sm text-gray-400">
                <ul>
                  <li>Montage PC</li>
                  <li>Cable management</li>
                  <li>Mise à jour du bios + XMP</li>
                  <li>Installation de windows (avec activation)<li>
                  <li>Installation des drivers</li>
                  <li>Installation des logiciels de gestion </li>
                </ul>
              </div>
              <div className="mt-2">75€</div>
            </div>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <Label>Liste des composants</Label>
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
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="votre@email.com"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="recommended"
          checked={isRecommended}
          onCheckedChange={(checked) => setIsRecommended(checked as boolean)}
        />
        <Label htmlFor="recommended" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Configuration conseillée par Clément
        </Label>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-forge-orange hover:bg-forge-red"
        disabled={isSubmitting || !selectedPlan}
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
      </Button>
    </form>
  );
};

export default PCAssemblyForm;
