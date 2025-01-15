import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { openEmailClient } from "@/utils/emailUtils";
import { Link } from "react-router-dom";

const MaintenanceForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const services = ['depoussierage', 'pate-thermique', 'checkup']
      .filter(service => formData.get(service) === 'on')
      .join(', ');

    const emailBody = `
Nouvelle demande de maintenance

Email client: ${formData.get('email')}
Services demandés: ${services}
Précisions supplémentaires: ${formData.get('details') || 'Aucune'}`;

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
    <form onSubmit={handleSubmit} className="space-y-6 p-6">
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
        <div className="flex justify-between items-center">
          <Label htmlFor="details">Précisions supplémentaires</Label>
          <Link to="/services?openGuide=true" className="text-sm text-forge-orange hover:text-forge-red">
            Je ne sais pas, comment savoir ?
          </Link>
        </div>
        <Textarea
          id="details"
          name="details"
          placeholder="Ajoutez ici toute information complémentaire concernant votre demande..."
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
        {isSubmitting ? "Préparation..." : "Demander une maintenance"}
      </Button>
    </form>
  );
};

export default MaintenanceForm;