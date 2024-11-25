import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const PCAssemblyForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [isRecommended, setIsRecommended] = useState(false);

  const components = [
    "CPU", "Carte mère", "RAM", "Carte graphique", 
    "Stockage", "Alimentation", "Boîtier", "Ventilateurs"
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
      ${componentsList}
    `;

    try {
      const mailtoLink = `mailto:clementmontagepc@gmail.com?subject=Nouvelle demande de montage PC&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Demande de montage préparée",
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          className={`glass-card p-6 rounded-lg cursor-pointer transition-all ${
            selectedPlan === "Basique (35€)" ? "ring-2 ring-forge-orange" : ""
          }`}
          onClick={() => setSelectedPlan("Basique (35€)")}
        >
          <h3 className="text-xl font-bold mb-2">Montage Basique - 35€</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Montage complet du PC</li>
            <li>Mise à jour du BIOS</li>
            <li>Gestion des câbles soignée</li>
          </ul>
        </div>

        <div 
          className={`glass-card p-6 rounded-lg cursor-pointer transition-all ${
            selectedPlan === "Standard (45€)" ? "ring-2 ring-forge-orange" : ""
          }`}
          onClick={() => setSelectedPlan("Standard (45€)")}
        >
          <h3 className="text-xl font-bold mb-2">Montage Standard - 45€</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Installation Windows (sans activation)</li>
            <li>Montage complet du PC</li>
            <li>Mise à jour du BIOS</li>
            <li>Gestion des câbles</li>
          </ul>
        </div>

        <div 
          className={`glass-card p-6 rounded-lg cursor-pointer transition-all ${
            selectedPlan === "Premium (75€)" ? "ring-2 ring-forge-orange" : ""
          }`}
          onClick={() => setSelectedPlan("Premium (75€)")}
        >
          <h3 className="text-xl font-bold mb-2">Montage Premium - 75€</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Windows avec activation</li>
            <li>Installation drivers & logiciels</li>
            <li>Réglage BIOS (XMP)</li>
            <li>Configuration complète</li>
          </ul>
        </div>
      </div>

      <input type="hidden" name="plan" value={selectedPlan} />

      <div className="space-y-4">
        <Label>Liste des composants</Label>
        {components.map((component) => (
          <Input
            key={component}
            name={component.toLowerCase()}
            placeholder={component}
            required
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
        {isSubmitting ? "Préparation..." : "Demander un devis"}
      </Button>
    </form>
  );
};

export default PCAssemblyForm;