import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { openEmailClient } from "@/utils/emailUtils";

const PCAssemblyForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [assemblyOption, setAssemblyOption] = useState("basic");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const emailBody = `
Nouvelle demande de montage PC

Email client: ${formData.get('email')}
Option de montage: ${assemblyOption}
Liste des composants:
${formData.get('components')}

Précisions supplémentaires: ${formData.get('details') || 'Aucune'}`;

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
        <Label>Option de montage</Label>
        <RadioGroup value={assemblyOption} onValueChange={setAssemblyOption} className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="basic" id="basic" />
            <Label htmlFor="basic">Montage basique (69€)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="premium" id="premium" />
            <Label htmlFor="premium">Montage premium avec gestion des câbles optimisée (89€)</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="components">Liste des composants</Label>
        <Textarea
          id="components"
          name="components"
          placeholder="Listez vos composants ici..."
          className="min-h-[100px]"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="details">Précisions supplémentaires</Label>
        <Textarea
          id="details"
          name="details"
          placeholder="Ajoutez ici toute information complémentaire..."
          className="min-h-[100px]"
        />
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

      <Button 
        type="submit" 
        className="w-full bg-forge-orange hover:bg-forge-red"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
      </Button>
      <div className="h-8"></div>
    </form>
  );
};

export default PCAssemblyForm;