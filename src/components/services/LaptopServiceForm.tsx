import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const LaptopServiceForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    // Préparer les données pour l'email
    const maintenanceServices = ['Changement de pâte thermique', 'Dépoussiérage']
      .filter(service => data[`service-${service}`] === 'on')
      .join(', ');
    
    const replacementParts = ['Stockage', 'RAM', 'Écran']
      .filter(part => data[`part-${part}`] === 'on')
      .join(', ');

    const emailBody = `
      Nouvelle demande de service laptop
      
      Email client: ${data.email}
      Services de maintenance demandés: ${maintenanceServices}
      Pièces à remplacer: ${replacementParts}
    `;

    try {
      // Ouvrir le client email par défaut avec les informations pré-remplies
      const mailtoLink = `mailto:clementmontagepc@gmail.com?subject=Nouvelle demande de service laptop&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Demande de service laptop préparée",
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

  const replacementParts = ["Stockage", "RAM", "Écran"];

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-4">
      <div className="space-y-2">
        <Label>Services de maintenance</Label>
        <div className="space-y-2">
          {["Changement de pâte thermique", "Dépoussiérage"].map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox id={`service-${service}`} name={`service-${service}`} />
              <Label htmlFor={`service-${service}`}>{service}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label>Pièces à changer</Label>
        <div className="space-y-2">
          {replacementParts.map((part) => (
            <div key={part} className="flex items-center space-x-2">
              <Checkbox id={`part-${part}`} name={`part-${part}`} />
              <Label htmlFor={`part-${part}`}>{part}</Label>
            </div>
          ))}
        </div>
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
      <Button 
        type="submit" 
        className="w-full bg-forge-orange hover:bg-forge-red"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Préparation..." : "Demander un devis"}
      </Button>
    </form>
  );
};

export default LaptopServiceForm;