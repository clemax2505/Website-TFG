import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { openEmailClient } from "@/utils/emailUtils";
import { calculateTravelFee, isValidZipCode } from "@/utils/distanceUtils";

const PCAssemblyForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [isRecommended, setIsRecommended] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [travelFee, setTravelFee] = useState(0);

  const components = [
    "CPU", "Carte mère", "RAM", "Carte graphique", 
    "Stockage", "Boîtier", "Alimentation", "Refroidissement"
  ];

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
Code postal: ${zipCode}
Frais de déplacement: ${travelFee}€
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
    <form onSubmit={handleSubmit} className="space-y-6 p-6">
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
              <div className="text-sm text-gray-400">Montage simple</div>
              <div className="mt-2">30€</div>
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
              <div className="text-sm text-gray-400">Montage + Installation Windows</div>
              <div className="mt-2">50€</div>
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
              <div className="text-sm text-gray-400">Montage + Windows + Optimisation</div>
              <div className="mt-2">70€</div>
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
        <Label htmlFor="zipcode">Code Postal</Label>
        <Input
          id="zipcode"
          type="text"
          value={zipCode}
          onChange={handleZipCodeChange}
          placeholder="69XXX"
          pattern="69\d{3}"
          title="Code postal du Rhône (69XXX)"
          required
        />
        {travelFee > 0 && (
          <p className="text-forge-orange mt-2">
            Frais de déplacement : {travelFee}€ (distance {'>'}15km)
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
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
        disabled={isSubmitting || !selectedPlan || !isValidZipCode(zipCode)}
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
      </Button>
    </form>
  );
};

export default PCAssemblyForm;