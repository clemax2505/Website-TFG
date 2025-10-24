import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
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
${componentsList}

Ventilateurs supplémentaires: ${data.fans || 'Aucun'}`;

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
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Choisissez votre forfait</h2>
          <p className="text-sm text-muted-foreground">Sélectionnez le service qui correspond à vos besoins</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            type="button"
            onClick={() => setSelectedPlan("Basic")}
            className={`glass-card p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-forge-orange/20 ${
              selectedPlan === "Basic" 
                ? "ring-2 ring-forge-orange shadow-lg shadow-forge-orange/30" 
                : ""
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">Basic</h3>
                <span className="text-2xl font-bold text-forge-orange">35€</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground text-left">
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Montage PC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Cable management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Mise à jour du bios + XMP</span>
                </li>
              </ul>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedPlan("Standard")}
            className={`glass-card p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-forge-orange/20 relative ${
              selectedPlan === "Standard" 
                ? "ring-2 ring-forge-orange shadow-lg shadow-forge-orange/30" 
                : ""
            }`}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-forge-orange to-forge-red rounded-full text-xs font-semibold">
              Populaire
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">Standard</h3>
                <span className="text-2xl font-bold text-forge-orange">45€</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground text-left">
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Montage PC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Cable management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Mise à jour du bios + XMP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Installation de windows (sans activation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Installation des drivers</span>
                </li>
              </ul>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedPlan("Premium")}
            className={`glass-card p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-forge-orange/20 ${
              selectedPlan === "Premium" 
                ? "ring-2 ring-forge-orange shadow-lg shadow-forge-orange/30" 
                : ""
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">Premium</h3>
                <span className="text-2xl font-bold text-forge-orange">75€</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground text-left">
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Montage PC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Cable management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Mise à jour du bios + XMP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Installation de windows (avec activation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Installation des drivers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forge-orange mt-1">✓</span>
                  <span>Installation des logiciels de gestion</span>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>

      <div className="glass-card p-8 rounded-lg space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Liste des composants</h2>
          <p className="text-sm text-muted-foreground">Indiquez les composants de votre configuration</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {components.map((component) => (
            <div key={component} className="space-y-2">
              <Label className="text-sm font-medium">{component}</Label>
              <Input
                name={component.toLowerCase()}
                placeholder={`Ton composant`}
                className="transition-all duration-200 focus:ring-2 focus:ring-forge-orange"
              />
            </div>
          ))}
        </div>

        <div className="space-y-2 pt-4 border-t border-border">
          <Label className="text-sm font-medium">Ventilateurs supplémentaires (optionnel)</Label>
          <Input
            name="fans"
            placeholder="Ex: 3x Arctic P12 PWM PST"
            className="transition-all duration-200 focus:ring-2 focus:ring-forge-orange"
          />
        </div>
      </div>

      <div className="glass-card p-8 rounded-lg space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Informations de contact</h2>
          <p className="text-sm text-muted-foreground">Pour finaliser votre demande</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="votre@email.com"
            required
            className="transition-all duration-200 focus:ring-2 focus:ring-forge-orange"
          />
        </div>

        <div className="flex items-center space-x-3 p-4 rounded-lg bg-background/50">
          <Checkbox
            id="recommended"
            checked={isRecommended}
            onCheckedChange={(checked) => setIsRecommended(checked as boolean)}
            className="data-[state=checked]:bg-forge-orange data-[state=checked]:border-forge-orange"
          />
          <Label htmlFor="recommended" className="text-sm font-medium leading-relaxed cursor-pointer">
            Configuration conseillée par Clément
          </Label>
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-forge-orange to-forge-red hover:opacity-90 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting || !selectedPlan}
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
        </Button>
      </div>
    </form>
  );
};

export default PCAssemblyForm;
